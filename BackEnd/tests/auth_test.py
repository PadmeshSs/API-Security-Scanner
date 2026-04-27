from utils.request_sender import send_request
from utils.response_analyzer import compare_responses

def test_missing_auth(config):

    headers = config.headers or {}

    baseline = send_request(config.method, config.url, headers)

    mutated_headers = headers.copy()
    mutated_headers.pop("Authorization", None)

    mutated = send_request(config.method, config.url, mutated_headers)

    if not baseline or not mutated:
        return None

    comparison = compare_responses(baseline, mutated)

    if baseline.status_code == 200 and mutated.status_code == 200:

        if comparison["same_body"]:
            severity = "CRITICAL"
            impact = "Same data accessible without authentication"
        else:
            severity = "HIGH"
            impact = "Different data accessible without authentication"

        return {
            "type": "Missing Authentication",
            "severity": severity,
            "endpoint": config.url,
            "status": mutated.status_code,
            "impact": impact,
            "evidence": {
                "baseline_status": baseline.status_code,
                "mutated_status": mutated.status_code,
                "same_body": comparison["same_body"]
            }
        }

    return None