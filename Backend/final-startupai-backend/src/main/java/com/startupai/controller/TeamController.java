
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @GetMapping
    public Map<String, Object> team() {

        return Map.of(
                "success", true,
                "data", List.of(
                        Map.of("name", "Shivansh", "role", "Founder"),
                        Map.of("name", "Rahul", "role", "Developer"),
                        Map.of("name", "Anjali", "role", "Designer")
                )
        );
    }
}
