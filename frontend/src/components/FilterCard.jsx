import { setSearchedQuery } from "@/redux/jobSlice";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Hyderabad", "Pune", "Mumbai", "Banglore"],
  },
  {
    filterType: "Industry",
    array: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Cloud Engineer",
      "Machine Learning Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-50k",
      "Less than 2LPA",
      "Less than 7.50LPA",
      "More than 10LPA",
      "More than 25LPA",
    ],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const changeHandler = (value) => {
      setSelectedValue(value);
  }
  useEffect(()=>{
      dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);
  return (
    <div className="w-full bg-white p-3 rounded-full">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              const id = `${index}-${index}`;
              return (
                <div key={index} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem
                    id={id}
                    value={item}
                    className="peer w-4 h-4 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-black checked:bg-black"
                  />
                  <Label htmlFor={id} className="cursor-pointer">
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
