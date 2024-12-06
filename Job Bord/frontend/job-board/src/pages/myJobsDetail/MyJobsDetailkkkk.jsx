import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/Axios'
import { useLocation } from 'react-router-dom'
import ApplicationList from '../../components/application/ApplicationList'

function MyJobsDetail() {
    const location = useLocation()
    const job_id = location?.state?.job_id
    const [applicants, setApplicants] = useState([])
    const [dbError, setDbError] = useState('')
    const [fetching, setFetching] = useState(true)

    const fetchApplicants = async () => {
        try {
            const response = await axiosInstance.get("/applications/myapplicants", { params: { job_id } })
            setApplicants(response?.data?.app_data)

        } catch (error) {
            console.log(error)
            setDbError(error?.response?.data?.msg || error.message)
        } finally {
            setFetching(false)
        }


    }
    useEffect(() => {
        fetchApplicants()
    }, [])
    return (
        <div>
            <ApplicationList applicants={applicants} />

        </div>
    )
}

export default MyJobsDetail