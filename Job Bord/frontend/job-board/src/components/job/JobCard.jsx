import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function JobCard({ job, emp }) {
    const navigate = useNavigate()
    const { title, fname, lname, description, location, salary, created_at, job_id } = job
    const editedSal = Math.trunc(salary)
    const date = new Date(created_at);
    const month = date.toLocaleString('default', { month: 'short' });
    const formattedDate = `${month}-${date.getDate()}`;
    const [show, setShow] = useState(false)

    const handleApply = (e) => {
        navigate("/apply", { state: { job_id, title } } );
        
    }
    const handleDetails = () => {
        navigate("/job/detail", { state: { job, emp }});
    }

    return (
        <section className=' '>
            <div className={` flex flex-col w-11/12 bg-white ml-auto mr-auto mt-8 p-8 pb-0 border-gray-400 border-2 rounded-md
                ${!show && 'shadow-[3px_3px_7px_blue]'} ${show && "shadow-[1px_1px_0px_blue] rounded-bl-none rounded-br-none border-b-0"} lg:w-3/4 `}>

                <div className={` flex flex-col justify-between gap-4 text-xl md:flex-row`}>

                    <div className='flex flex-col gap-1'>
                        <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Title</p>
                        <p className='text-blue-700 text-2xl font-bold font-mono lg:text-3xl'>{title}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Company</p>
                        <p className=' text-md font-serif pl-4 lg:text-xl lg:pl-0 '>{`${fname} ${lname}`}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Location</p>
                        <p className=' text-md font-serif pl-4 lg:text-xl lg:pl-0 '>{location}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Salary</p>
                        <p className=' text-md font-serif pl-4 lg:text-xl lg:pl-0 '>{`$${editedSal}`}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Deadline</p>
                        <p className=' text-md font-serif pl-4 lg:text-xl lg:pl-0 '>{formattedDate}</p>
                    </div>
                </div>

                <div className={` mt-5 ${!show && 'hidden'}`}>
                    <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Description</p>
                    <p className='mb-3 lg:mb-5'>
                        {description}
                        Curabitur accumsan, sapien a commodo aliquet, urna nisi tempor lorem, at
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Pha
                    </p>
                    <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Responsibilities</p>
                    <p className='mb-3 lg:mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Phasellus vel lectus non nisl malesuada vehicula ut non risus.
                    </p>
                    <p className=' text-lg font-bold font-mono lg:text-xl lg:inline-flex '>Criterias</p>
                    <p className='mb-3 lg:mb-5'>
                        Curabitur accumsan, sapien a commodo aliquet, urna nisi tempor lorem, at
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Pha
                    </p>
                </div>

                {
                    !emp ?
                    <div className='flex h-32 justify-around lg:pt-8 '>
                        <button onClick={handleApply} className=' min-w-28 h-10 bg-blue-800 rounded-md lg:w-36 lg:h-12 '> Apply </button>
                        <button onClick={() => { setShow((prev) => (!prev)) }} className=' min-w-28 h-10 bg-blue-800 rounded-md lg:w-36 lg:h-12 '>
                            {show ? "Show Less" : "Detail"}
                        </button>
                    </div> :
                    <button onClick={handleDetails} className=' min-w-28 h-10 bg-blue-800 rounded-md lg:w-36 lg:h-12 '>  Details </button>

                }
                
            </div>

        </section>
    )
}

export default JobCard

