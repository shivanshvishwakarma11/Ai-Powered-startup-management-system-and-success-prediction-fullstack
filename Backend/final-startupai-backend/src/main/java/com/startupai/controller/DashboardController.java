
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @GetMapping("/overview")
    public Map<String, Object> overview() {

        return Map.of(
                "success", true,
                "data", Map.of(
                        "totalUsers", 2500,
                        "activeStartups", 186,
                        "monthlyRevenue", 72000,
                        "growthRate", 24,
                        "fundingRaised", 980000
                )
        );
    }

    @GetMapping("/analytics")
    public Map<String, Object> analytics() {

        return Map.of(
                "success", true,
                "data", List.of(
                        Map.of("month", "Jan", "users", 100),
                        Map.of("month", "Feb", "users", 180),
                        Map.of("month", "Mar", "users", 260)
                )
        );
    }
}
