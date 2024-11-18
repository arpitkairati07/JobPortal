import { Badge } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AppliedJobTable = () => {
  // Mock data for applied jobs
  const appliedJobs = [
    { date: "17-07-2024", role: "Full Stack Developer", company: "Google", status: "Selected" },
    { date: "18-07-2024", role: "Frontend Developer", company: "Meta", status: "Pending" },
    { date: "19-07-2024", role: "Backend Developer", company: "Amazon", status: "Rejected" },
    { date: "20-07-2024", role: "DevOps Engineer", company: "Microsoft", status: "Selected" },
  ];

  return (
    <div className="p-4">
      <Table className="w-full border border-gray-200 rounded-lg">
        <TableCaption className="text-gray-500 italic">
          A list of your applied jobs.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index} className="hover:bg-gray-100">
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    job.status === "Selected"
                      ? "bg-green-100 text-green-700"
                      : job.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
