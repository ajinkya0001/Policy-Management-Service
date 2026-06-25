package com.aseuro.policy.repository;

import com.aseuro.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    Optional<Policy> findByPolicyNumber(String policyNumber);

    List<Policy> findByPolicyType(String policyType);

    @Query("select p from Policy p where lower(p.status) = 'active'")
    List<Policy> findActivePolicies();

    long countByStatus(String status);

    // List<Policy> findTop5ByOrderByPolicyIdDesc();

    long count();
}
