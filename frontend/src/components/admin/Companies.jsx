import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import useGetAllCompanies from '../Hooks/useGetAllCompanies'
import {Link} from 'react-router-dom'
const Companies = () => {
  useGetAllCompanies();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto my-10">
        <div className='flex items-center justify-between my-5'>
        <Input className='w-fit' placeholder="Filter by Name"></Input>
        <Button>
          <Link to="/admin/companies/create">
           New Company
           </Link></Button>
        </div>
        <CompaniesTable></CompaniesTable>
      </div>
    </div>
  )
}

export default Companies
