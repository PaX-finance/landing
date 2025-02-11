import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Intro = () => {
  return (
    <main className='mx-auto mt-4 md:mt-8 p-6 md:p-12 flex flex-col md:flex-row md:gap-8 items-center justify-between'>
      <div className='order-last mt-4 md:order-first w-full md:w-1/2 lg:w-2/3 space-y-6 lg:pr-12'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal leading-tight'>
          <span className='bg-[#ffcda0] px-1 rounded-lg inline-block transform transition hover:scale-105'>
            Get More
          </span>
          ,{' '}
          <span className='mt-2 md:mt-4 bg-[#ffb4fa] px-1 rounded-lg inline-block transform transition hover:scale-105'>
            Pay Less
          </span>
          ,{' '}
          <span className='mt-2 md:mt-4 bg-[#aad2ee] px-1 rounded-lg inline-block transform transition hover:scale-105'>
            Sell Smarter
          </span>
        </h1>
        <p className='text-lg md:text-xl text-gray-700 max-w-2xl leading-loose'>
          A smart payment terminal that cuts costs and boosts loyalty with every
          transaction
        </p>
        <div className='flex flex-row gap-4'>
          <Link href='https://form.typeform.com/to/g6Rbuxae'>
            <Button className='border-2 border-[#F26B3A] bg-[#F26B3A] text-white text-md font-semibold px-6 py-6 rounded-xl shadow-lg hover:bg-[#E25B2A] transition-all transform hover:scale-105 duration-300'>
              Start Now
            </Button>
          </Link>
          <Link href='https://form.typeform.com/to/g6Rbuxae'>
            <Button
              variant='outline'
              className='border-2 border-[#F26B3A] text-[#F26B3A] text-md font-semibold px-6 py-6 rounded-xl shadow-lg hover:bg-[#F26B3A] hover:text-white transition-all transform hover:scale-105 duration-300'
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className='order-first md:order-last w-full md:w-1/2 lg:w-1/3 mt-12 md:mt-0 relative aspect-square'>
        <Image
          src='/f310.png'
          alt='Rooter Payment Terminal'
          fill
          className='object-contain rounded-2xl shadow-2xl transform transition hover:scale-105 duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10 pointer-events-none' />
      </div>
    </main>
  );
};
