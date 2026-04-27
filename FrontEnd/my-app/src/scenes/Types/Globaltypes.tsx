export type headerType = {
    key: string,
    value: string
}

export type Scansend = {
    url: string,
    method: 'GET' | 'POST',
    headers: Record<string, string>
}

export type Finding = {
  type: string
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"
  endpoint: string
  status: number
  impact: string
  evidence: Record<string, any>
}

export type ScanResponse = {
  total: number
  critical: number
  high: number
  medium: number
  low: number
  findings: Finding[]
}