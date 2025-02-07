export const Metrics = () => {
  return (
    <section id='metrics' className='mx-auto px-4 py-10 leading-loose'>
      <h2 className='text-4xl md:text-5xl font-normal text-center max-w-5xl mx-auto mb-24'>
        A next-gen POS that is{' '}
        <span className='bg-[#ffb4fa] rounded'>fast</span>,
        <div className='mt-4 md:mt-6'>
          <span className='bg-[#ffcda0] rounded'>intuitive</span> and{' '}
          <span className='bg-[#aad2ee] rounded'>boosts sales</span>
        </div>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
        <div className='text-center'>
          <div className='text-[#F26B3A] text-5xl md:text-6xl font-bold mb-4'>
            100+
          </div>
          <div className='text-xl text-gray-800'>Merchants onboarded</div>
        </div>

        <div className='text-center'>
          <div className='text-[#F26B3A] text-5xl md:text-6xl font-bold mb-4'>
            200k+
          </div>
          <div className='text-xl text-gray-800'>Saved in costs</div>
        </div>

        <div className='text-center'>
          <div className='text-[#F26B3A] text-5xl md:text-6xl font-bold mb-4'>
            10M+
          </div>
          <div className='text-xl text-gray-800'>Processed transactions</div>
        </div>
      </div>
    </section>
  );
};
