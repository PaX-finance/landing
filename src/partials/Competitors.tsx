import Image from 'next/image';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Logo } from '@/components/logo';

export const Competitors = () => {
  return (
    <section id='competitors' className='mx-auto px-4 py-20'>
      <h2 className='mb-16 text-center text-4xl font-medium md:text-5xl lg:text-6xl'>
        Sell <span className='text-[#F26B3A]'>wisely</span>
      </h2>

      <div className='max-w-6xl mx-auto'>
        <div className='rounded-2xl border border-gray-200 overflow-hidden bg-white'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='w-1/5 bg-white'></TableHead>
                <TableHead className='w-1/5 text-center'>
                  <div className='flex flex-col items-center space-y-2'>
                    <div className='relative w-20 h-8'>
                      <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/SumUp_logo_ModernInk_RGB-FullLogo_web_400width.png/1200px-SumUp_logo_ModernInk_RGB-FullLogo_web_400width.png'
                        alt='SumUp'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className='w-1/5 text-center'>
                  <div className='flex flex-col items-center space-y-2'>
                    <div className='relative w-20 h-8'>
                      <Image
                        src='https://rizzofarrugia.com/wp-content/uploads/bov-logo.png'
                        alt='Bank of Valletta'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className='w-1/5 text-center'>
                  <div className='flex flex-col items-center space-y-2'>
                    <div className='relative w-20 h-8'>
                      <Image
                        src='https://cdn.cookielaw.org/logos/aa498dad-1691-4c3b-894a-906c990be323/eab8b6ff-57d6-438a-a7e5-c58dd370ce73/000d8b20-8c3d-4f4f-a0da-5b515f8f20d2/Square_combinationmark_black.png'
                        alt='Square'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className='w-1/5 bg-[#F8FBFF] text-center'>
                  <div className='flex flex-col items-center space-y-2'>
                    <div className='relative w-20 h-8'>
                      <Logo />
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Costs */}
              <TableRow>
                <TableCell className='font-medium'>Costs</TableCell>
                <TableCell className='text-center'>1 - 1.5%</TableCell>
                <TableCell className='text-center'>2+%</TableCell>
                <TableCell className='text-center'>2+%</TableCell>
                <TableCell className='bg-[#F8FBFF] text-center'>
                  0.3 - 1%
                </TableCell>
              </TableRow>
              {/* AI tools */}
              <TableRow>
                <TableCell className='font-medium'>AI Tools</TableCell>
                <TableCell className='text-center'>
                  <X className='mx-auto h-5 w-5 text-red-500' />
                </TableCell>
                <TableCell className='text-center'>
                  <X className='mx-auto h-5 w-5 text-red-500' />
                </TableCell>
                <TableCell className='text-center'>
                  <X className='mx-auto h-5 w-5 text-red-500' />
                </TableCell>
                <TableCell className='bg-[#F8FBFF] text-center'>
                  <Check className='mx-auto h-5 w-5 text-green-500' />
                </TableCell>
              </TableRow>
              {/* Merchant platform */}
              <TableRow>
                <TableCell className='font-medium'>Platform</TableCell>
                <TableCell className='text-center'>Paid</TableCell>
                <TableCell className='text-center'>Paid</TableCell>
                <TableCell className='text-center'>Not offered</TableCell>
                <TableCell className='bg-[#F8FBFF] text-center'>Free</TableCell>
              </TableRow>
              {/* Setup time */}
              <TableRow>
                <TableCell className='font-medium'>Setup time</TableCell>
                <TableCell className='text-center'>1 - 3 days</TableCell>
                <TableCell className='text-center'>1 week</TableCell>
                <TableCell className='text-center'>1 - 3 days</TableCell>
                <TableCell className='bg-[#F8FBFF]  text-center'>
                  Same day
                </TableCell>
              </TableRow>
              {/* Crypto support */}
              <TableRow>
                <TableCell className='font-medium'>Crypto Support</TableCell>
                <TableCell className='text-center'>
                  <Check className='mx-auto h-5 w-5 text-green-500' />
                </TableCell>
                <TableCell className='text-center'>
                  <X className='mx-auto h-5 w-5 text-red-500' />
                </TableCell>
                <TableCell className='text-center'>
                  <X className='mx-auto h-5 w-5 text-red-500' />
                </TableCell>
                <TableCell className='bg-[#F8FBFF] text-center'>
                  <Check className='mx-auto h-5 w-5 text-green-500' />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
