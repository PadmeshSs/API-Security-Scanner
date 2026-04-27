from tests.auth_test import test_missing_auth
from tests.idor_test import test_idor
from tests.rate_limit_test import test_rate_limit
from tests.error_test import test_error_handling
from models.scan_result import format_result

def run_scan(config):

    findings = []

    tests = [
        test_missing_auth,
        test_idor,
        test_rate_limit,
        test_error_handling
    ]

    for test in tests:
        result = test(config)
        if result:
            findings.append(result)

    return format_result(findings)