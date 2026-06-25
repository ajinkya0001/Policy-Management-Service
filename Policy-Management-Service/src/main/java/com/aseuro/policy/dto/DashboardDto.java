package com.aseuro.policy.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DashboardDto {

    private Long totalPolicies;

    private Long activePolicies;

    private Long inactivePolicies;

}