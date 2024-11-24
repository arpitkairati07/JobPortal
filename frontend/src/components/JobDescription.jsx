import { Badge } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const JobDescription = () => {
  const isApplied = true;
  const params=useParams();
  const jobId=params.id;
  const {singleJob} = useSelector(store=>store.job);
  const {user} = useSelector(store=>store.auth);
  const dispatch=useDispatch();


  useEffect(()=>{
    const fetchSingleJob=async() => {
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJob();
},[jobId,dispatch,user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="font-extrabold text-2xl text-gray-800">{singleJob?.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-blue-700" />
              {singleJob?.position} Positions
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-green-700" />
              {singleJob?.jobType}
            </div>
            <div className="flex items-center gap-2 bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
              <Badge size={16} className="text-red-700" />
              {singleJob?.salary} LPA
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
      <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
    </div>
  );
};

export default JobDescription;
