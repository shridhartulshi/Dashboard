package com.example.DashX.controller;

import com.example.DashX.Service.JiraService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jira")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend
public class JiraController {
    private final  JiraService jiraService;

    public JiraController( JiraService jiraService) {
        this.jiraService = jiraService;
    }

    @GetMapping("/data")
    public String getJiraData() {
        try {
            return jiraService.fetchJiraData();
        } catch (Exception e) {
            return "Error fetching Jira data: " + e.getMessage();
        }
    }
}
