import React, { useContext, useRef, useState } from "react";
import { profileMode } from "./Profile";
import axiosInstance from "../../axios/Axios";
import { ClipLoader } from 'react-spinners'


const UpdateProfile = ({fname: prevFname, lname: prevLname, email: prevEmail, company: prevCompany}) => {
    const token = localStorage.getItem("token")
    const user_id = parseInt(localStorage.getItem("user_id"))
    const { setUpdateMode, profile } = useContext(profileMode)
    const fnameRef = useRef(profile.fname )
    const lnameRef = useRef(profile.lname )
    const emailRef = useRef(profile.email )
    const companyRef = useRef(profile.company )
    const [fieldError, setFieldError] = useState('')
    const [dbError, setDbError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdate = async (e) => {
        setDbError(''), setFieldError('')
        const fname = fnameRef.current.value
        const lname = lnameRef.current.value
        const email = emailRef.current.value
        const company = companyRef.current.value
    
        // Check fields
        if (!fname || !lname || !email || !company ){
          return setFieldError('All fields are requered.')
        }else if (prevFname == fname && prevLname == lname && prevEmail == email && prevCompany == company){
            return alert("No update, the same data")
        }
    
        try {
          setIsLoading(true)
          await axiosInstance.post("/users/profile/update", {
            user_id,
            fname, 
            lname, 
            email, 
            company, 
        }, { headers: {authorization: "Bearer " + token} })
          setIsLoading(false)
          setUpdateMode(false)
          
        } catch (error) {
          setIsLoading(false)
          setDbError(error.response?.data?.msg || error.message)
          console.log(error)
        }
      }
    
  return (
    <section className="flex w-full flex-grow bg-gray-200">
      <div className="flex flex-col w-5/6 bg-white ml-auto mr-auto mt-4 gap-4 p-5 border-2 border-gray-400">
        
        <div className='flex flex-col'>
          <label className="text-lg text-gray-800 font-semibold">First name</label>
          <input type="text" defaultValue={profile.fname} ref={fnameRef} className="flex-1 p-2 border-2 border-gray-400 ml-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <div className='flex flex-col'>
          <label className="text-lg text-gray-800 font-semibold">Last name</label>
          <input type="text" defaultValue={profile.lname} ref={lnameRef} className="flex-1 p-2 border-2 border-gray-400 ml-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <div className='flex flex-col'>
          <label className="text-lg text-gray-800 font-semibold">Email</label>
          <input type="email" defaultValue={profile.email} ref={emailRef} className="flex-1 p-2 border-2 border-gray-400 ml-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <div className='flex flex-col'>
          <label className="text-lg text-gray-800 font-semibold">Company</label>
          <input className="flex-1 p-2 border-2 border-gray-400 ml-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none" type="text" defaultValue={profile.company} ref={companyRef} />
        </div>
        {fieldError && <p className='text-center italic bold text-red-600'>{fieldError}</p>}
        {dbError && <p className='text-center italic bold text-red-600'>{dbError}</p>}

        <div className="flex gap-4 justify-around">
          <button onClick={handleUpdate} className="w-36 h-12 bg-blue-800 rounded-md"> 
            {
              isLoading ? <> <ClipLoader size={20} color="white"/> Please wait...</> : <> Update </>
            }
          </button>
          <button onClick={ () => { setUpdateMode((p) => !p)} } className="w-36 h-12 bg-blue-800 rounded-md"> Cancel </button>
        </div>

      </div>
    </section>
  );
};

export default UpdateProfile;
