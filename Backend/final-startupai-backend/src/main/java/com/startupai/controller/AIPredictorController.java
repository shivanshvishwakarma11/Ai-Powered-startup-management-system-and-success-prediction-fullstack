
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/predictor")
public class AIPredictorController {

    @PostMapping("/analyze")
    public Map<String, Object> analyze(@RequestBody Map<String, Object> request) {

        return Map.of(
                "success", true,
                "data", Map.of(
                        "successProbability", 82,
                        "marketScore", 76,
                        "growthPotential", 89,
                        "fundingChance", 68,
                        "riskLevel", "Medium",
                        "recommendation", "Strong potential in AI SaaS market"
                )
        );
    }
}
