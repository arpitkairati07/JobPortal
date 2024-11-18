import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import companyLogo from "../assets/Images/company-logo.webp";
import { Button } from "./ui/button";
import { Badge, Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["React", "ExpressJs", "MongoDB", "NodeJS"];

const Profile = () => {
  const isResume=true;
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
              <h1 className="text-2xl font-semibold">Full Name</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consectetur impedit magnam dolorem, molestiae error.
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <Button variant="outline" className="rounded-full flex items-center gap-2">
            <Pen className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="h-5 w-5" />
            <span>arpit@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Contact className="h-5 w-5" />
            <span>9026776494</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          {skills.length !== 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => (
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a target="blank" href="https://youtube.com" className="text-blue-500 w-full hover:underline cursor-pointer">Resume</a>:<span>Not Applicable</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          {/* Application Table */}
          <AppliedJobTable></AppliedJobTable>
        </div> 
    </div>
  );
};

export default Profile;
