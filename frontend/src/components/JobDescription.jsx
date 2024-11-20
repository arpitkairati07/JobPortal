import { Badge } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="font-extrabold text-2xl text-gray-800">FrontEnd Developer</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-blue-700" />
              12 Positions
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-green-700" />
              Part Time
            </div>
            <div className="flex items-center gap-2 bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-red-700" />
              24 LPA
            </div>
          </div>
        </div>
        <Button 
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'}`} 
          disabled={isApplied}>
          {isApplied ? 'Already applied' : 'Apply now'}
        </Button>
      </div>
      <h1 className="border-b-2 border-gray-300 font-medium py-4">Job Description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Bengaluru</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur.</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">9 LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicant: <span className="pl-4 font-normal text-gray-800">4</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">20-11-2024</span></h1> 
      </div>
    </div>
  );
};

export default JobDescription;
