from utils.request_sender import send_request

def test_idor(config):

    # only for GET
    if config.method != "GET":
        return None

    if not config.url.endswith("/1"):
        return None

    mutated_url = config.url[:-1] + "2"

    baseline = send_request("GET", config.url, config.headers)
    mutated = send_request("GET", mutated_url, config.headers)

    if not baseline or not mutated:
        return None

    if baseline.status_code in [200, 201] and mutated.status_code in [200, 201]:
        return {
            "type": "IDOR",
            "severity": "HIGH",
            "endpoint": mutated_url,
            "status": mutated.status_code,
            "impact": "Access to other user's data",
            "evidence": {
                "original_url": config.url,
                "tested_url": mutated_url
            }
        }

    return None