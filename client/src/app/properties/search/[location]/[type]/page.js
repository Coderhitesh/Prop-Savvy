'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchProperty from '@/components/SearchProperty';

export default async function Page({ params }) {
  const { location, type } =  params;

console.log("location",location)

  const [data, setData] = useState({
    location: '',
    type: ''
  });
  

  useEffect(() => {
    if (location && type) {
      // Decode the URL-encoded values
      const decodedLocation = decodeURIComponent(location);
      const decodedType = decodeURIComponent(type);
      
      const handleFetchLocation = async () => {
        try {
          const { data } = await axios.get('http://localhost:8000/api/v1/get_locations');
          const filterData = data.data.filter(item => item.name === decodedLocation);
          setData(prevData => ({ ...prevData, location: filterData[0]?._id }));
        } catch (error) {
          console.log("Internal server error", error);
        }
      };

      const handleFetchType = async () => {
        try {
          const { data } = await axios.get('http://localhost:8000/api/v1/get_propertyTypes');
          const filterData = data.data.filter(item => item.name === decodedType);
          setData(prevData => ({ ...prevData, type: filterData[0]?._id }));
        } catch (error) {
          console.log("Internal server error", error);
        }
      };

      handleFetchLocation();
      handleFetchType();
    }
  }, []); 

  return (
    <div>
      <SearchProperty data={data} />
    </div>
  );
}
