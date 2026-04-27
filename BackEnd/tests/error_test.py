from utils.request_sender import send_request

def test_error_handling(config):

    invalid_url = config.url + "/invalid-endpoint"

    response = send_request(config.method, invalid_url, config.headers)

    if response and response.status_code == 200:
        return {
            "type": "Improper Error Handling",
            "severity": "LOW",
            "endpoint": invalid_url,
            "status": response.status_code,
            "impact": "Invalid endpoints not properly handled",
            "evidence": {
                "tested_invalid_endpoint": True
            }
        }

    return None