import React from 'react';
import { Button } from './ui/button';
import { Badge, Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import companyLogo from '../assets/Images/company-logo.webp';

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white-border border-gray-100'>
        <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        </div>

      <div className="flex items-center gap-2 my-2">
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage src={companyLogo} alt="Company Logo" />
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2 '>Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laboriosam? Sapiente voluptas blanditiis facere, corrupti aperiam eos commodi architecto.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4">
        <div className="flex items-center gap-1 bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm sm:text-xs sm:px-2 sm:py-1">
          <Badge size={16} className="text-blue-700" />
          12 Positions
        </div>
        <div className="flex items-center gap-1 bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm sm:text-xs sm:px-2 sm:py-1">
          <Badge size={16} className="text-green-700" />
          Part Time
        </div>
        <div className="flex items-center gap-1 bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm sm:text-xs sm:px-2 sm:py-1">
          <Badge size={16} className="text-red-700" />
          24LPA
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant='outline' className='rounded-full hover:bg-gray-100 hover:border-[#614051]'>Details</Button>
        <Button className='bg-[#7209b7] text-white rounded-full hover:bg-[#673AB7] transition-colors duration-200'>Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
