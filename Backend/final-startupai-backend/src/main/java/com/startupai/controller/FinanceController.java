
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/finance")
public class FinanceController {

    @GetMapping("/reports")
    public Map<String, Object> reports() {

        return Map.of(
                "success", true,
                "data", List.of(
                        Map.of("month", "January", "revenue", 12000),
                        Map.of("month", "February", "revenue", 18000),
                        Map.of("month", "March", "revenue", 22000)
                )
        );
    }
}
