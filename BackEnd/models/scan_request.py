from pydantic import BaseModel
from typing import Dict, Optional

class ScanRequest(BaseModel):
    url: str
    method: str = "GET"
    headers: Optional[Dict[str, str]] = {}