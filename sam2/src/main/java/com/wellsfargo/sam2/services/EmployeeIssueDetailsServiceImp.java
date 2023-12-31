package com.wellsfargo.sam2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.EmployeeIssueDetails;
import com.wellsfargo.sam2.repository.EmployeeIssueDetailsRepository;

@Service
public class EmployeeIssueDetailsServiceImp implements EmployeeIssueDetailsService{
	
	
	private final EmployeeIssueDetailsRepository issueDetailRepository;
	
	@Autowired
	public EmployeeIssueDetailsServiceImp(EmployeeIssueDetailsRepository issueDetailRepository) {
		super();
		this.issueDetailRepository = issueDetailRepository;
	}

	@Override
	public EmployeeIssueDetails createIssueDetail(EmployeeIssueDetails impd) {
	
		return issueDetailRepository.save(impd);
	}

	@Override
	public boolean existsIssueDetailsById(String id)
	{
		return issueDetailRepository.existsById(id);
	}

	@Override
	public Optional<EmployeeIssueDetails> findIssueDetailById(String id) {
		
		return issueDetailRepository.findById(id);
	}

	@Override
	public EmployeeIssueDetails updateIssueDetailMaster(EmployeeIssueDetails impd) {
		
		return issueDetailRepository.save(impd);
	}

	@Override
	public void DeleteByEmployeeId(String id) {
		issueDetailRepository.deleteByEmployee_EmployeeId(id);
	}

	@Override
	public boolean existsIssueDetailById(String id) {
		return false;
	}

	@Override
	public void deleteEmployeeIssueDetailsByItemId(String itemId){
		issueDetailRepository.deleteByItemId(itemId);
	}
}
