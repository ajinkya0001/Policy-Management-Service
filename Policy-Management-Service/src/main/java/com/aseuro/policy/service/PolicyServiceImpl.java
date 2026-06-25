package com.aseuro.policy.service;

import com.aseuro.policy.dto.DashboardDto;
import com.aseuro.policy.dto.PolicyDto;
import com.aseuro.policy.entity.Policy;
import com.aseuro.policy.exception.DuplicatePolicyException;
import com.aseuro.policy.exception.ResourceNotFoundException;
import com.aseuro.policy.repository.PolicyRepository;
import com.aseuro.policy.util.PolicyMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class PolicyServiceImpl implements PolicyService {

    private final PolicyRepository policyRepository;

    @Override
    public List<PolicyDto> getAllPolicies() {
        log.debug("Retrieving all policies");
        return policyRepository.findAll()
                .stream()
                .map(PolicyMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public PolicyDto getPolicyById(Long id) {
        log.debug("Retrieving policy by id={}", id);
        return policyRepository.findById(id)
                .map(PolicyMapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Policy not found with id " + id));
    }

    @Override
    @Transactional
    public PolicyDto createPolicy(PolicyDto policyDto) {
        log.info("Creating policy with number={}", policyDto.getPolicyNumber());
        policyRepository.findByPolicyNumber(policyDto.getPolicyNumber())
                .ifPresent(existing -> {
                    throw new DuplicatePolicyException("Policy already exists with number " + policyDto.getPolicyNumber());
                });
        Policy policy = PolicyMapper.toEntity(policyDto);
        return PolicyMapper.toDto(policyRepository.save(policy));
    }

    @Override
    @Transactional
    public PolicyDto updatePolicy(Long id, PolicyDto policyDto) {
        log.info("Updating policy id={}", id);
        Policy existing = policyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Policy not found with id " + id));

        policyRepository.findByPolicyNumber(policyDto.getPolicyNumber())
                .filter(policy -> !policy.getPolicyId().equals(id))
                .ifPresent(policy -> {
                    throw new DuplicatePolicyException("Policy number already in use: " + policyDto.getPolicyNumber());
                });

        existing.setPolicyNumber(policyDto.getPolicyNumber());
        existing.setPolicyHolderName(policyDto.getPolicyHolderName());
        existing.setPolicyType(policyDto.getPolicyType());
        existing.setPremiumAmount(policyDto.getPremiumAmount());
        existing.setStatus(policyDto.getStatus());
        return PolicyMapper.toDto(policyRepository.save(existing));
    }

    @Override
    public DashboardDto getDashboardStatistics() {

        long total = policyRepository.count();

        long active = policyRepository.countByStatus("ACTIVE");

        long inactive = policyRepository.countByStatus("INACTIVE");

        return DashboardDto.builder()
                .totalPolicies(total)
                .activePolicies(active)
                .inactivePolicies(inactive)
                .build();
    }

    // @Override
    // public List<PolicyDto> getRecentPolicies() {

    //     return policyRepository
    //             .findTop5ByOrderByPolicyIdDesc()
    //             .stream()
    //             .map(policyMapper::toDto)
    //             .toList();

    // }


    @Override
    @Transactional
    public void deletePolicy(Long id) {
        log.info("Deleting policy id={}", id);
        if (!policyRepository.existsById(id)) {
            throw new ResourceNotFoundException("Policy not found with id " + id);
        }
        policyRepository.deleteById(id);
    }
}
