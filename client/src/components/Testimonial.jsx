"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Star} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Prop Savvy Realtors made my dream of owning a home a reality. Their expertise and dedication throughout the entire process was exceptional. I couldn't be happier with my new home!",
    rating: 5,
    location: "Beverly Hills, CA",
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "As an investor, I appreciate their market knowledge and professional approach. They helped me find properties with great potential and handled everything seamlessly.",
    rating: 5,
    location: "Manhattan, NY",
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team at Prop Savvy Realtors went above and beyond to help me find my first home. Their patience and guidance made the process stress-free and enjoyable.",
    rating: 5,
    location: "Miami, FL",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who found their perfect property
            with Prop Savvy Realtors
          </p>
        </div>

        <Splide
          options={{
            type: "fade",
            rewind: true,
            gap: "1rem",
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            classes: {
              arrows: "splide__arrows custom-arrows",
              arrow: "splide__arrow custom-arrow",
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
          }}
        >
          {testimonials.length > 0 &&
            testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-primary text-white px-4 py-1 rounded-full text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <div className="relative mb-6">
                        {/* <Quote className="absolute -top-4 -left-6 w-12 h-12 text-primary/10" /> */}
                        <p className="text-gray-700 text-xl leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="mt-6">
                        <h3 className="font-bold text-2xl text-gray-900 mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
        </Splide>

        <div className="text-center mt-16">
          <p className="text-lg text-primary font-medium">
            Ready to find your dream property? Let's make it happen together.
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .custom-arrows {
          @apply absolute top-1/2 -translate-y-1/2 w-full;
        }
        .custom-arrow {
          @apply absolute w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 transition-all hover:scale-110 !important;
        }
        .custom-prev {
          @apply -left-6 !important;
        }
        .custom-next {
          @apply -right-6 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
