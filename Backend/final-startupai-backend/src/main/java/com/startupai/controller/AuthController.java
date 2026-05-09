
package com.startupai.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        return Map.of(
                "success", true,
                "token", "demo-token-123",
                "user", Map.of(
                        "name", "Shivansh",
                        "email", body.get("email")
                )
        );
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, String> body) {
        return Map.of(
                "success", true,
                "message", "User registered successfully"
        );
    }
}
