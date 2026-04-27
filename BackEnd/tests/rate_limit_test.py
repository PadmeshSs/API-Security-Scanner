from utils.request_sender import send_request

def test_rate_limit(config):

    baseline = send_request(config.method, config.url, config.headers)

    # skip if not valid success response
    if not baseline or baseline.status_code not in [200, 201]:
        return None

    # check if protected
    headers = config.headers or {}
    test_headers = headers.copy()
    test_headers.pop("Authorization", None)

    no_auth = send_request(config.method, config.url, test_headers)

    if no_auth and no_auth.status_code not in [200, 201]:
        return None

    success_count = 0

    for _ in range(20):
        r = send_request(config.method, config.url, config.headers)
        if r and r.status_code in [200, 201]:
            success_count += 1

    if success_count == 20:
        return {
            "type": "Rate Limit Missing",
            "severity": "MEDIUM",
            "endpoint": config.url,
            "status": baseline.status_code,
            "impact": "No rate limiting detected",
            "evidence": {
                "requests_sent": 20,
                "successful_requests": success_count
            }
        }

    return None