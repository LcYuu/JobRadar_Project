import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Badge } from "../../../ui/badge";
import { useNavigate } from "react-router-dom";
import "./JobCard.css"; // Đảm bảo tệp CSS được import

const categoryStyles = {
  "Thiết kế": {
    backgroundColor: "rgba(0, 128, 0, 0.1)",
    color: "green",
  },
  "Kinh doanh": {
    backgroundColor: "rgba(128, 0, 128, 0.1)",
    color: "purple",
  },
  Marketing: {
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    color: "orange",
  },
  "Công nghệ": {
    backgroundColor: "rgba(0, 0, 255, 0.1)",
    color: "blue",
  },
  "IT phần cứng": {
    backgroundColor: "rgba(0, 0, 255, 0.1)",
    color: "blue",
  },
};

function JobCardContent({ company, location, category }) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-muted-foreground text-sm font-semibold inline-block max-w-[150px] truncate">
          {company}
        </span>
        <span className="text-muted-foreground text-sm">{location}</span>
      </div>
      <div className="flex space-x-2">
        <Badge
          style={
            categoryStyles[category] || {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              color: "black",
            }
          }
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
    </>
  );
}

export default function JobCard({
  jobTitle,
  company,
  location,
  category,
  jobType,
  companyLogo,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/"); // Điều hướng đến trang công việc chi tiết
  };

  return (
    <Card onClick={handleCardClick} className="card cursor-pointer"> {/* Thêm class card */}
      <CardHeader className="card-header"> {/* Thêm class card-header */}
        <JobCardHeader jobType={jobType} companyLogo={companyLogo} />
        <CardTitle>{jobTitle}</CardTitle>
      </CardHeader>
      <CardContent className="card-content"> {/* Thêm class card-content */}
        <JobCardContent
          company={company}
          location={location}
          category={category}
        />
      </CardContent>
    </Card>
  );
}

function JobCardHeader({ jobType, companyLogo }) {
  return (
    <div className="flex justify-between items-start mb-4">
      <img
        src={companyLogo}
        alt="Company Logo"
        className="w-12 h-12 rounded-lg"
      />
      <div className="bg-indigo-600 text-white border border-blue-500 px-2 py-1 rounded-md text-xs font-semibold uppercase">
        {jobType}
      </div>
    </div>
  );
}
