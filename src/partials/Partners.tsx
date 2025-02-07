import Image from 'next/image';

export const Partners = () => {
  return (
    <section id='partners' className='mx-auto px-4 py-20'>
      <h2 className='text-4xl md:text-5xl font-normal text-center max-w-4xl mx-auto mb-16'>
        100+ merchants trust us as their go-to provider for processing their
        sales
      </h2>

      {/* First row of partners */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12'>
        <div className='w-32 h-12 relative flex items-center'>
          <Image
            fill={true}
            src='/api/placeholder/128/48'
            alt='Google Cloud'
            className='object-contain'
          />
        </div>
        <div className='w-32 h-12 relative flex items-center'>
          <Image
            fill={true}
            src='/api/placeholder/128/48'
            alt='Polygon'
            className='object-contain'
          />
        </div>
        <div className='w-32 h-12 relative flex items-center'>
          <Image
            fill={true}
            src='/api/placeholder/128/48'
            alt='PancakeSwap'
            className='object-contain'
          />
        </div>
        <div className='w-32 h-12 relative flex items-center'>
          <Image
            fill={true}
            src='/api/placeholder/128/48'
            alt='zkSync'
            className='object-contain'
          />
        </div>
        <div className='w-32 h-12 relative flex items-center'>
          <Image
            fill={true}
            src='/api/placeholder/128/48'
            alt='Nansen'
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
};
