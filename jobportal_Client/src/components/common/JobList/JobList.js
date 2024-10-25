import React, { useEffect } from 'react';
import JobCard from "../JobCard/JobCard";
import { useDispatch, useSelector } from 'react-redux';
import logo1 from '../../../assets/images/common/logo1.jpg';
import { getAllJobAction } from '../../../redux/JobPost/jobPost.action';

export default function JobList() {
  const dispatch = useDispatch();
  
  const { jobPost } = useSelector(store => store.jobPost);

  useEffect(() => {
    dispatch(getAllJobAction());  
  }, [dispatch]); 

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Các công việc nổi bật</h2>
        <a href="#" className="text-primary">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobPost && jobPost.length > 0 ? ( 
          jobPost.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.title}  
              company={job.company.companyName}  
              location={job.city.cityName}
              category={job.company.industry.industryName} 
              jobType={job.typeOfWork}
              companyLogo={job.company.logo || logo1} 
            />
          ))
        ) : (
          <p>Không có công việc nào để hiển thị.</p> 
        )}
      </div>
    </section>
  );
}
