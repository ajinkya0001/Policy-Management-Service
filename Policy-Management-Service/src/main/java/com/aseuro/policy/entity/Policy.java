package com.aseuro.policy.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "policies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long policyId;

    @Column(nullable = false, unique = true, length = 64)
    private String policyNumber;

    @Column(nullable = false, length = 128)
    private String policyHolderName;

    @Column(nullable = false, length = 64)
    private String policyType;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal premiumAmount;

    @Column(nullable = false, length = 32)
    private String status;
}
