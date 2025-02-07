import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section className='mx-auto px-4 py-32 bg-gradient-to-b from-white to-[#F8FBFF]'>
      <div className='max-w-5xl mx-auto text-center'>
        <div className='text-[#F26B3A] text-7xl md:text-8xl font-bold mb-2 md:mb-4'>
          +25%
        </div>
        <div className='text-4xl md:text-5xl mb-3 text-[#F26B3A] font-bold'>
          sales
        </div>
        <h2 className='text-3xl md:text-4xl font-normal mt-6 md:mt-8 mb-12 max-w-4xl mx-auto'>
          We analyse your customers spending patterns and your inventory using
          AI to derive actionable insights and boost sales
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
          <Button
            size='lg'
            className='bg-[#F26B3A] hover:bg-[#E25B2A] text-lg px-8 py-6'
          >
            Start Now
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-[#F26B3A] text-[#F26B3A] hover:bg-[#F26B3A] hover:text-white text-lg px-8 py-6'
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
