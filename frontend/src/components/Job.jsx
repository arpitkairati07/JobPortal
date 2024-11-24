import React from 'react';
import { Button } from './ui/button';
import { Badge, Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import companyLogo from '../assets/Images/company-logo.webp';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
  const navigate=useNavigate();
  // const jobId='jdhjksdhncknkhehf';

  const daysAgoFunction= (mongodbTime) =>{
    const createdAt=new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference= currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-4 my-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={companyLogo} alt="Company Logo" />
        </Avatar>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">
          <Badge size={16} className="text-blue-700" />
          {job?.position} Positions
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm">
          <Badge size={16} className="text-green-700" />
          {job?.jobType}
        </div>
        <div className="flex items-center gap-2 bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-sm">
          <Badge size={16} className="text-red-700" />
          {job?.salary} LPA
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          className="rounded-full hover:bg-gray-100 hover:border-gray-400"
          onClick={()=> navigate(`/description/${job?._id}`)}
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white rounded-full hover:bg-[#673AB7] transition-colors duration-200">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
