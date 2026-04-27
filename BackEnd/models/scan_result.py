from typing import List, Dict

def format_result(findings: List[Dict]):
    return {
        "total": len(findings),
        "critical": sum(1 for f in findings if f["severity"] == "CRITICAL"),
        "high": sum(1 for f in findings if f["severity"] == "HIGH"),
        "medium": sum(1 for f in findings if f["severity"] == "MEDIUM"),
        "low": sum(1 for f in findings if f["severity"] == "LOW"),
        "findings": findings
    }