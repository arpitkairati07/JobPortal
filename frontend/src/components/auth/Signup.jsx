import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate inputs before submission
    if (
      !input.fullname ||
      !input.email ||
      !input.phoneNumber ||
      !input.password ||
      !input.role
    ) {
      toast.error("Please fill out all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 rounded-md p-6 my-10 bg-white shadow-lg"
        >
          <h1 className="font-bold text-2xl mb-6 text-center">
            Create an Account
          </h1>

          {/* Full Name */}
          <div className="my-4">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="John Doe"
              className="placeholder-gray-100"
            />
          </div>

          {/* Email */}
          <div className="my-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="johndoe@gmail.com"
              className="placeholder-gray-100"
            />
          </div>

          {/* Phone Number */}
          <div className="my-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="9026776494"
              className="placeholder-gray-100"
            />
          </div>

          {/* Password */}
          <div className="my-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="placeholder-gray-100"
            />
          </div>

          {/* Select Profession */}
          <div className="my-4">
            <Label className="block mb-2">I'm a</Label>
            <RadioGroup defaultValue="student" className="flex items-center gap-4">
              {/* Student Option */}
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>

              {/* Recruiter Option */}
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="recruiter"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile Picture */}
          <div className="my-4">
            <Label htmlFor="profile">Profile Picture</Label>
            <Input
              id="profile"
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
            {input.file && <p className="text-sm text-gray-500 mt-2">Selected file: {input.file.name}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#6a38c2] hover:bg-[#5b30a6] text-white font-semibold py-2 rounded-md mt-6"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "SignUp"}
          </Button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
