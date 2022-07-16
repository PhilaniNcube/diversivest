import Image from 'next/image';
import React from 'react';

const HowWeWork = ():JSX.Element => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 py-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex w-full flex-col">
            <h2 className="text-xl font-bold text-gray-700 md:text-3xl">
              How We Can Help You
            </h2>
            <h2 className="mt-4 text-xl font-bold text-gray-600 ">
              Custom Websites
            </h2>
            <p className="text-sm font-medium text-gray-600 md:text-lg">
              Your website is an essential part of doing business in the modern
              age. We are able to help you by creating custom made websites,
              that specifically cater to the unique needs of your business.
            </p>
            <h2 className="mt-4 text-xl font-bold text-gray-600 ">
              Digital Marketing
            </h2>
            <p className="text-sm font-medium text-gray-600 md:text-lg">
              We also provide <strong>Digital Marketing Services</strong> to
              make sure that your website is visible to the right audience. A
              website is little use to you if your potential customers cannot
              find you online.
            </p>
            <h2 className="mt-4 text-xl font-bold text-gray-600 ">
              Modern Tools
            </h2>
            <p className="text-sm font-medium text-gray-600 md:text-lg">
              We make use of the most cutting edge tools to built out the correct solution for your business. Our websites are guaranteed to be some of the best fasted sites available. This performance optimization is crucial for the success of your website.
            </p>
          </div>

          <Image className="w-full object-cover rounded" src="/images/devices.jpg" alt="devices" width={1920} height={1141} />
        </div>
      </div>
    </section>
  )
};
export default HowWeWork;
