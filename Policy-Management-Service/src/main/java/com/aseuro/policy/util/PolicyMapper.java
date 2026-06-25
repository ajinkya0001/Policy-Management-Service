package com.aseuro.policy.util;

import com.aseuro.policy.dto.PolicyDto;
import com.aseuro.policy.entity.Policy;

public final class PolicyMapper {

    private PolicyMapper() {
    }

    public static PolicyDto toDto(Policy policy) {
        if (policy == null) {
            return null;
        }
        return PolicyDto.builder()
                .policyId(policy.getPolicyId())
                .policyNumber(policy.getPolicyNumber())
                .policyHolderName(policy.getPolicyHolderName())
                .policyType(policy.getPolicyType())
                .premiumAmount(policy.getPremiumAmount())
                .status(policy.getStatus())
                .build();
    }

    public static Policy toEntity(PolicyDto dto) {
        if (dto == null) {
            return null;
        }
        Policy policy = new Policy();
        policy.setPolicyId(dto.getPolicyId());
        policy.setPolicyNumber(dto.getPolicyNumber());
        policy.setPolicyHolderName(dto.getPolicyHolderName());
        policy.setPolicyType(dto.getPolicyType());
        policy.setPremiumAmount(dto.getPremiumAmount());
        policy.setStatus(dto.getStatus());
        return policy;
    }
}
