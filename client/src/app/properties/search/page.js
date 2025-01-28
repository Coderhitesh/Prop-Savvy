"use client";
import SearchProperty from "@/components/SearchProperty";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const page = () => {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>} >
        <SearchProperty />
      </Suspense>
    </>
  );
};

export default page;
