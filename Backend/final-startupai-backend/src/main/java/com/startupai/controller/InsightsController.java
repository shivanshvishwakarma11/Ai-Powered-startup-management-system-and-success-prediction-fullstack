
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/insights")
public class InsightsController {

    @GetMapping
    public Map<String, Object> insights() {

        return Map.of(
                "success", true,
                "data", List.of(
                        "AI market growing rapidly",
                        "Funding trends are positive",
                        "Strong user engagement"
                )
        );
    }
}
