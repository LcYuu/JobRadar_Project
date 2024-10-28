import React from 'react';
import ImageCarousel from '../../layout/ImageCarousel';
import { Button } from "../../../ui/button";

const EmployerCard = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
      <ImageCarousel logo={company.logo} /> {/* Đảm bảo `logo` là một URL hoặc một danh sách URL hợp lệ */}
      <h3 className="text-xl font-semibold mb-2">{company.companyName}</h3>
      <p className="text-gray-600 text-center mb-4">{company.description}</p>
      <p className="text-sm text-gray-500 mb-4">{company.applicationCount} người đã ứng tuyển</p>
      <Button variant="outline" className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
        Xem tất cả
      </Button>
    </div>
  );
};

export default EmployerCard;
