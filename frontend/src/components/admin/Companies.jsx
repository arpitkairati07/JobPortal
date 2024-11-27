import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import useGetAllCompanies from '../Hooks/useGetAllCompanies'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
const Companies = () => {
  useGetAllCompanies();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[input,setInput] = useState("");

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input));
  },[input])
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto my-10">
        <div className='flex items-center justify-between my-5'>
        <Input className='w-fit' placeholder="Filter by Name" onChange={(e) => setInput(e.target.value)}></Input>
        <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable></CompaniesTable>
      </div>
    </div>
  )
}

export default Companies
