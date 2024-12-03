import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-8 lg:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-5xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Find and connect with trusted service providers.
              
            </h2>
            <p className="mt-6 text-lg text-gray-600">
            Find the right service provider for your needs. Browse, connect, and request services quickly and easily. Enjoy a seamless experience from start to finish.
            </p>
            <Button className="mt-8 px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-primary-dark">
              Get Started Now
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/clean.jpg"
              width={700}
              height={700}
              className="rounded-xl shadow-lg"
              alt="Service Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
