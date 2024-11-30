import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs || []);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return (
                    job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
                );
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5">
                <div className="flex gap-5">
                    {/* Filter Section */}
                    <div className="w-1/5">
                        <FilterCard />
                    </div>

                    {/* Job Cards Section */}
                    <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                        {filterJobs.length === 0 ? (
                            <div className="text-center text-gray-500 mt-10">
                                <span>Job not found</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-4">
                                {filterJobs.map((job) => (
                                    <div key={job?._id}>
                                        <Job job={job} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
