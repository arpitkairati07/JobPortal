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

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!input.email || !input.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!input.role) {
      toast.error("Please select a role.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/"); // Navigate to home page
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-3/4 md:w-1/2 border border-gray-200 rounded-md p-6 my-10 bg-white shadow-lg"
        >
          <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>

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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#6a38c2] hover:bg-[#5b30a6] text-white font-semibold py-2 rounded-md mt-6"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
