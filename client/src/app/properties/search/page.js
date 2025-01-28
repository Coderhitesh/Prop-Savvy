"use client";
import SearchProperty from "@/components/SearchProperty";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const type = searchParams.get("type");
  const [properties, setProperties] = useState([]);
  const handleFetchLocation = async () => {
    try {
      const { data } = await axios.get(
        `https://api.propsavvyrealtors.com/api/v1/get_property_by_location?location=${location}&type=${type}`
      );
      setProperties(data.data);
    } catch (error) {
      console.log("Internal server error", error);
    }
  };

  useEffect(() => {
    handleFetchLocation();
  }, []);

  console.log(type);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>} >
        <SearchProperty properties={properties} />
      </Suspense>
    </>
  );
};

export default page;
