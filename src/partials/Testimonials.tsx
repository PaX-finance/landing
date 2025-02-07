export const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-24 bg-gradient-to-b from-[#FFF7F4] to-[#F8FAFF]'
    >
      <div className='px-4'>
        <h2 className='mb-16 text-center text-4xl font-medium md:text-5xl lg:text-6xl'>
          Loved by <span className='text-[#F26B3A]'>clients</span>
        </h2>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Main Testimonial */}
          <div className='rounded-2xl bg-white p-8 shadow-md md:col-span-2 lg:col-span-2 lg:row-span-2 transition-all'>
            <div className='flex h-full flex-col justify-between gap-8'>
              <q className='text-2xl font-medium leading-relaxed text-gray-800 lg:text-3xl'>
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ipsum perspiciatis consectetur assumenda
                incidunt.&quot;
              </q>
              <div className='mt-6 flex items-center gap-4 border-t border-gray-100 pt-6'>
                <div className='h-12 w-12 rounded-full bg-[#F26B3A]'></div>
                <div>
                  <p className='font-semibold text-gray-900'>John Doe</p>
                  <p className='text-gray-600'>CTO, Blockchain Corp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Testimonials */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className='rounded-xl bg-white p-6 shadow-md transition-all'
            >
              <div className='flex flex-col gap-6'>
                <q className='text-lg font-medium leading-snug text-gray-700'>
                  &quot;Lorem ipsum dolor sit amet consecte adipisicing elit.
                  Dignissimos ipsum perspiciatis consectetur assumenda.&quot;
                </q>
                <div className='flex items-center gap-4'>
                  <div className='h-10 w-10 rounded-full bg-[#F26B3A]/20'></div>
                  <div>
                    <p className='font-medium text-gray-900'>Jane Smith</p>
                    <p className='text-sm text-gray-600'>CEO, Web3 Startup</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
