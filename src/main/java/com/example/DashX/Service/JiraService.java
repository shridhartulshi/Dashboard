package com.example.DashX.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@Service
public class JiraService {
    private final RestTemplate restTemplate;
    private final String JIRA_URL = "https://sarangkhode456.atlassian.net/rest/api/2/search";
    private final String JIRA_AUTH = "ATATT3xFfGF0zDI56Z-G5Y6dVcyPyFwImYes0n9dN3K4NCwSXcEeR7ph_vP9kSS91lMfMFvlZllqmlLvdCFDQou8KL_ehH1EtNwEGaYOs_qw4R4jnvr0REgj-upyq63NK5IIIrlHdHsKVytlg8z4VYIYroSqQdsCZWoTEz_DAlNctucclQOhaEU=024F0CD7";  // Replace with actual credentials

    public JiraService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String fetchJiraData() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", JIRA_AUTH);
        headers.set("Accept", "application/json");

        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(JIRA_URL, HttpMethod.GET, entity, String.class);

        return response.getBody(); // Return JSON response
    }
}
