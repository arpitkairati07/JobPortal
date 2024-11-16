import { Badge } from "lucide-react";
import React from "react";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      {/* Company Details */}
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-400">India</p>
      </div>

      {/* Job Details */}
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {/* Badges Section */}
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
    </div>
  );
};

export default LatestJobCards;