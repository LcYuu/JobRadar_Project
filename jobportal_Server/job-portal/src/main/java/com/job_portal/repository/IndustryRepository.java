package com.job_portal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.job_portal.DTO.CountJobByIndustry;
import com.job_portal.models.Industry;

public interface IndustryRepository extends JpaRepository<Industry, Integer> {

	// Tìm kiếm theo từng chữ cái nhập vào
	@Query("SELECT i FROM Industry i WHERE i.industryName LIKE %:query%")
	List<Industry> searchIndustry(@Param("query") String query);

	// Tìm theo tên được chọn từ Combobox
	Industry findByIndustryName(String industryName);
	
	@Query("SELECT new com.job_portal.DTO.CountJobByIndustry(i.industryId, i.industryName, COUNT(c.companyId)) " +
		       "FROM Industry i " +
		       "LEFT JOIN Company c ON c.industry.industryId = i.industryId " +
		       "LEFT JOIN JobPost jp ON jp.company.companyId = c.companyId " +
		       "WHERE jp.expireDate > CURRENT_DATE OR jp.expireDate IS NULL " +
		       "GROUP BY i.industryId, i.industryName")
		List<CountJobByIndustry> countJobsByIndustry();



}
