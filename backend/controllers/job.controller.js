import { Job } from "../models/job.model.js";

// Admin posts a job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id; // Admin ID from middleware (e.g., auth token)

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false,
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_By: userId, // Corrected field name
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};

// Student retrieves all jobs
export const getAllJobs = async (req, res) => {
    try {

        const keyword = req.query.keyword || "";

        const query =
    keyword.trim() !== ""
        ? {
              $or: [
                  { title: { $regex: keyword, $options: "i" } },
                  { description: { $regex: keyword, $options: "i" } },
              ],
          }
        : {};


        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 });
        console.log(jobs)
        if (!jobs.length) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false,
            });
        }

        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};

// Student retrieves job by ID
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: "applications",
        });

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false,
            });
        }

        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};

// Admin retrieves jobs they created
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id; // Admin ID from middleware (e.g., auth token)

        const jobs = await Job.find({ created_By: adminId }) // Corrected field name
            .populate({ path: "company" })
            .sort({ createdAt: -1 });

        if (!jobs.length) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false,
            });
        }

        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error.", success: false });
    }
};
