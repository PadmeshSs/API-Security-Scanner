import requests

def send_request(url):
    try:
        response = requests.get(url)
        print(f"URL: {url} - Status Code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"URL: {url} - Error: {e}")

def testing_missing_auth(url, headers):
    withauth = requests.get(url, headers=headers)
    withoutauth = requests.get(url)
    if withauth.status_code == 200 and withoutauth.status_code == 200:
        print(f"URL: {url} - Authentication is required.")

testing_missing_auth("https://www.example.com", headers={})