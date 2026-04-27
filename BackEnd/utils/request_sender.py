import requests

def send_request(method, url, headers=None):
    try:
        response = requests.request(
            method=method,
            url=url,
            headers=headers,
            timeout=5
        )
        return response
    except Exception as e:
        print("Request failed:", e)
        return None