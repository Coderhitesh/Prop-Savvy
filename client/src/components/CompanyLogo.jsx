'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const CompanyLogo = () => {
  const [allCompanyImage, setAllCompanyImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompanyLogo();
  }, []);

  const fetchCompanyLogo = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://www.api.propsavvyrealtors.com/api/v1/get_all_company_images');
      setAllCompanyImage(data.data || []);
    } catch (error) {
      console.error("Failed to fetch company logos:", error);
      setError("Failed to load company logos");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading companies to deliver exceptional services and solutions
          </p>
        </div>

        <Splide
          options={{
            type: 'loop',
            perPage: 5,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            gap: '2rem',
            breakpoints: {
              1024: {
                perPage: 4,
              },
              768: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
          }}
        >
          {allCompanyImage.map((company, index) => (
            <SplideSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={company.image.url}
                    alt={`Company Logo ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CompanyLogo;