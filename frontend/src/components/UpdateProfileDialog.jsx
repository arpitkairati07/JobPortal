import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills || [], // Ensure skills are always an array
    file: null, // Initialize file as null
  });

  const dispatch = useDispatch();

  // Handle text input changes
  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    // If the name is "skills", split the input string into an array
    if (name === "skills") {
      setInput((prevState) => ({
        ...prevState,
        [name]: value.split(",").map((skill) => skill.trim()), // Ensure skills are split into array
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle file input changes
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput((prevState) => ({ ...prevState, file }));
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    // Check if all necessary fields are filled out
    if (!input.fullname || !input.email || !input.phoneNumber) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills.join(", ")); // Send as comma-separated string
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false); // Close the dialog on success
      }
    } catch (error) {
      // Handling errors gracefully
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent
          className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg backdrop-blur-md"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold text-gray-800">
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-6 py-6">
              {/* Name Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right text-gray-700">
                  Name
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phoneNumber"
                  className="text-right text-gray-700"
                >
                  Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Bio Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right text-gray-700">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Skills Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right text-gray-700">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills.join(", ")} // Display skills as comma-separated
                  onChange={changeEventHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Resume File Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right text-gray-700">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button
                  className="w-full my-4 bg-indigo-500 text-white shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
                  disabled
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full my-4 bg-indigo-500 text-white shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
