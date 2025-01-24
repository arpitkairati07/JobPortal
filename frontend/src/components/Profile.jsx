import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import companyLogo from "../assets/Images/company-logo.webp";
import { Button } from "./ui/button";
import { Badge, Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "./Hooks/useGetAppliedJobs";

// const skills = ["React", "ExpressJs", "MongoDB", "NodeJS"];

const isResume=true;

const Profile = () => {
  useGetAppliedJobs();
  const [open,setOpen]=useState(false);
  const {user} =useSelector(store=>store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Section: Avatar and Profile Info */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <Avatar className="h-24 w-24">
              <AvatarImage src={companyLogo} alt="Company Logo" />
            </Avatar>

            {/* Profile Information */}
            <div>
              <h1 className="text-2xl font-semibold">{user?.fullname}</h1>
              <p className="text-gray-600">
                {user?.profile?.bio}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <Button onClick={()=>setOpen(true)} variant="outline" className="rounded-full flex items-center gap-2">
            <Pen className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="h-5 w-5" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Contact className="h-5 w-5" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          {user?.profile?.skills.length !== 0 ? (
            <div className="flex flex-wrap gap-2">
              {user?.profile?.skills.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full text-sm"
                >
                  <Badge size={16} className="text-blue-700" />
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-gray-500">Not Applicable</span>
          )}
          
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          {/* Application Table */}

          <AppliedJobTable></AppliedJobTable>
        </div> 
        <UpdateProfileDialog open={open} setOpen={setOpen}></UpdateProfileDialog>
    </div>
  );

};

export default Profile;
