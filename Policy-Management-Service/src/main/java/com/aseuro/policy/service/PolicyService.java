package com.aseuro.policy.service;

import com.aseuro.policy.dto.DashboardDto;
import com.aseuro.policy.dto.PolicyDto;

import java.util.List;

public interface PolicyService {

    DashboardDto getDashboardStatistics();

    PolicyDto createPolicy(PolicyDto policyDto);

    PolicyDto getPolicyById(Long id);

    List<PolicyDto> getAllPolicies();

    PolicyDto updatePolicy(Long id, PolicyDto policyDto);

    void deletePolicy(Long id);

    // List<PolicyDto> getRecentPolicies();
}
