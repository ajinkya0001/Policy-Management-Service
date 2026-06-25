package com.aseuro.policy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class PolicyDto {

    @Schema(description = "Unique policy identifier", example = "1")
    private Long policyId;

    @NotBlank(message = "Policy number is required")
    @Schema(description = "Business policy number", example = "POL-12345")
    private String policyNumber;

    @NotBlank(message = "Policy holder name is required")
    @Schema(description = "Name of the policy holder", example = "Jane Doe")
    private String policyHolderName;

    @NotBlank(message = "Policy type is required")
    @Schema(description = "Type of policy", example = "AUTO")
    private String policyType;

    @NotNull(message = "Premium amount is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Premium amount must be greater than zero")
    @Schema(description = "Premium amount for the policy", example = "1250.00")
    private BigDecimal premiumAmount;

    @NotBlank(message = "Status is required")
    @Schema(description = "Policy status", example = "ACTIVE")
    private String status;
}
