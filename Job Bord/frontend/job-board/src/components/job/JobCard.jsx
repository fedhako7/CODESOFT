import React, { useState } from 'react'

function JobCard({ job }) {
    const { title, fname, lname, description, location, salary, created_at } = job
    const editedSal = Math.trunc(salary)
    const date = new Date(created_at);
    const month = date.toLocaleString('default', { month: 'short' });
    const formattedDate = `${month}-${date.getDate()}`;
    const [show, setShow] = useState(false)


    // #TODO
    const handleApplication = () => {
    }
    return (
        <section className=' '>
                <div className={`flex w-5/6 h-36 justify-between bg-white ml-auto mr-auto mt-8 p-8
                    border-gray-400 border-2 rounded-md shadow-[3px_3px_7px_blue] text-xl 
                    ${show && "shadow-[1px_0px_0px_blue] rounded-bl-none rounded-br-none border-b-0"} lg:w-3/4 `
                }>

                    <div className='flex flex-col gap-1'>
                        <p className='text-blue-700 text-2xl font-bold font-mono lg:text-3xl'>{title}</p>
                        <p className='text-lg font-bold font-mono lg:text-xl '>{`${fname} ${lname}`}</p>
                    </div>

                    <p className='text-lg font-mono font-bold self-center lg:text-xl'>{location}</p>
                    <p className='text-lg font-mono font-bold self-center lg:text-xl'>{`$${editedSal}`}</p>
                    <p className='text-xl font-mono font-bold self-center lg:text-2xl'>{formattedDate}</p>
                    <div className='flex flex-col h-32 relative bottom-3 gap-5 lg:flex-row lg:gap-8 lg:pt-8 '>
                        <button onClick={handleApplication} className=' min-w-28 h-10 bg-blue-600 rounded-md lg:w-36 lg:h-12 '>Apply</button>
                        <button onClick={() => { setShow((prev) => (!prev)) }} className=' min-w-28 h-10 bg-blue-600 rounded-md lg:w-36 lg:h-12 '>
                            {show ? "Show Less" : "Detail"}
                        </button>
                    </div>
                </div>
                {<div className={` w-5/6 bg-white ml-auto mr-auto -mt-1 p-8 border-gray-400 border-2 border-t-0
                    rounded-bl-md rounded-br-md shadow-[1px_1px_0px_blue] ${!show && 'hidden'} text-xl lg:w-3/4 `
                    }>
                    <p className=' text-2xl font-semibold -mb-2 p-3 lg:p-4 '>Description</p>
                    <p className='mb-3 lg:mb-5'>
                        {description}
                        Curabitur accumsan, sapien a commodo aliquet, urna nisi tempor lorem, at
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Pha
                    </p>
                    <p className='text-2xl font-semibold -mb-2 p-3 lg:p-4'>Responsibilities</p>
                    <p className='mb-3 lg:mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Phasellus vel lectus non nisl malesuada vehicula ut non risus.
                    </p>
                    <p className='text-2xl font-semibold -mb-2 p-3 lg:p-4'>Criterias</p>
                    <p className='mb-3 lg:mb-5'>
                        Curabitur accumsan, sapien a commodo aliquet, urna nisi tempor lorem, at
                        elementum neque justo ut nisi. Integer ac elit non turpis tincidunt suscipit.
                        Pha
                    </p>
                </div>}

        </section>
    )
}

export default JobCard

















