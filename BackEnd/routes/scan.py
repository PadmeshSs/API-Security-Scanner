from fastapi import APIRouter
from models.scan_request import ScanRequest
from services.scanner_service import run_scan

router = APIRouter()

@router.post("/scan")
def scan_api(request: ScanRequest):
    return run_scan(request)