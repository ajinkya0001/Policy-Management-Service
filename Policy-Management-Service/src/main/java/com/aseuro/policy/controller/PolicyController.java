package com.aseuro.policy.controller;

import com.aseuro.policy.dto.DashboardDto;
import com.aseuro.policy.dto.PolicyDto;
import com.aseuro.policy.service.PolicyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policies")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PolicyController {

    private final PolicyService policyService;

    @Operation(summary = "Retrieve all policies", description = "Returns a list of all policy records.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "List of policies retrieved successfully",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PolicyDto.class)))
    })
    @GetMapping
    public ResponseEntity<List<PolicyDto>> findAll() {
        return ResponseEntity.ok(policyService.getAllPolicies());
    }

    @Operation(summary = "Get a policy by ID", description = "Retrieve policy details for the given policy ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Policy found",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PolicyDto.class))),
            @ApiResponse(responseCode = "404", description = "Policy not found",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            examples = @ExampleObject(value = "{\"error\": \"Policy not found with id 1\"}")))
    })
    @GetMapping("/{id}")
    public ResponseEntity<PolicyDto> findById(@PathVariable Long id) {
        return ResponseEntity.ok(policyService.getPolicyById(id));
    }

    @Operation(summary = "Create a new policy", description = "Create a new policy with policy number, holder, type, premium and status.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Policy created successfully",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PolicyDto.class),
                            examples = @ExampleObject(value = "{\"policyId\": 1, \"policyNumber\": \"POL-12345\", \"policyHolderName\": \"Jane Doe\", \"policyType\": \"AUTO\", \"premiumAmount\": 1250.00, \"status\": \"ACTIVE\"}"))),
            @ApiResponse(responseCode = "400", description = "Invalid request payload",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            examples = @ExampleObject(value = "{\"policyNumber\": \"Policy number is required\"}")))
    })
    @PostMapping
    public ResponseEntity<PolicyDto> create(@Valid @RequestBody PolicyDto dto) {
        return ResponseEntity.ok(policyService.createPolicy(dto));
    }

    @Operation(summary = "Update an existing policy", description = "Update the policy details for the given ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Policy updated successfully",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PolicyDto.class),
                            examples = @ExampleObject(value = "{\"policyId\": 1, \"policyNumber\": \"POL-12345\", \"policyHolderName\": \"Jane Doe\", \"policyType\": \"HOME\", \"premiumAmount\": 1450.00, \"status\": \"ACTIVE\"}"))),
            @ApiResponse(responseCode = "404", description = "Policy not found",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            examples = @ExampleObject(value = "{\"error\": \"Policy not found with id 1\"}")))
    })
    @PutMapping("/{id}")
    public ResponseEntity<PolicyDto> update(@PathVariable Long id, @Valid @RequestBody PolicyDto dto) {
        return ResponseEntity.ok(policyService.updatePolicy(id, dto));
    }

    @Operation(summary = "Delete a policy", description = "Delete the policy with the specified ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Policy deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Policy not found",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            examples = @ExampleObject(value = "{\"error\": \"Policy not found with id 1\"}")))
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        policyService.deletePolicy(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardDto> dashboard() {

        return ResponseEntity.ok(
            policyService.getDashboardStatistics()
        );
    }
}
