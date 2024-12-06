import React from 'react'
import JobList from '../../components/job/JobList'

function MyJobs() {

  return (
    <>
    <div>
        <div className='flex w-5/6 ml-auto mr-auto mt-8 justify-between font-semibold lg:w-3/4 lg:mt-14 '>
            <p className='w-full text-center pr-6 text-4xl'> My Job Posts </p>
        </div>
        <hr className='h-1 w-5/6 ml-auto mr-auto mt-3 mb-3 bg-black lg:w-3/4'/>
        <JobList emp={true} />
    </div>
    </>
  )
}

export default MyJobs