 package com.wellsfargo.sam2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.sam2.models.EmployeeCardDetails;
import com.wellsfargo.sam2.repository.EmployeeCardDetailsRepository;

@Service
public class EmployeeCardDetailsServiceImp implements EmployeeCardDetailsService {

	private final EmployeeCardDetailsRepository empCardDetRepo;

    @Autowired
    public EmployeeCardDetailsServiceImp(EmployeeCardDetailsRepository empCardDetRepo) {
        this.empCardDetRepo = empCardDetRepo;
    }

    @Override
    public EmployeeCardDetails createEmployeeCardDetails(EmployeeCardDetails empCardDet) {
        return empCardDetRepo.save(empCardDet);
    }

    @Override
    public Optional<EmployeeCardDetails> findEmployeeCardDetailsById(String id) {
        
        return empCardDetRepo.findById(id);
    }

    @Override
    public boolean existEmployeeCardDetailsById(String id)
    {
        return empCardDetRepo.existsById(id);
    }

    @Override
    public EmployeeCardDetails updateEmployeeCardDetails(EmployeeCardDetails empCardDet) {
        return empCardDetRepo.save(empCardDet);
    }

	@Override
	public void deleteByEmployeeId(String id) {
		empCardDetRepo.deleteByEmployee_EmployeeId(id);
		
	}

	@Override
	public void deleteByLoanId(String id) {
		empCardDetRepo.deleteByLoanCard(id);
		
	}
}
