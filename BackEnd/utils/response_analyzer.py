def compare_responses(res1, res2):
    if not res1 or not res2:
        return None

    return {
        "same_status": res1.status_code == res2.status_code,
        "same_body": res1.text == res2.text
    }