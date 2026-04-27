# 🚀 API Security Scanner

A full-stack API security testing tool that analyzes endpoints for common vulnerabilities like **Missing Authentication, IDOR, and Rate Limiting issues** using **behavior-based request comparison**.

---

## 📌 Overview

This project allows users to input an API endpoint along with request configuration (HTTP method + headers) and performs automated security analysis by comparing:

- **Baseline Request** → normal behavior  
- **Mutated Request** → altered input  
- **Comparison** → detect vulnerabilities  

Unlike static tools, this scanner evaluates **runtime API behavior**, making it closer to real-world testing.

---

## ⚙️ Tech Stack

### Frontend
- React (TypeScript)
- Material UI (MUI)

### Backend
- FastAPI (Python)
- Requests library

### Other
- REST APIs
- JSON communication

---

## 🧠 Core Concept

```text
Baseline Request  → Expected API behavior  
Mutated Request   → Slight variation (e.g., remove auth / change ID)  
Comparison        → Detect vulnerability
```

## 🔍 Features

### 🔐 Missing Authentication Detection
- Removes authentication headers (Authorization / API key)
- Checks if endpoint is still accessible
- Flags vulnerability if access is unchanged

---

### 🔄 IDOR Detection (GET only)
- Modifies resource identifiers (e.g., `/users/1 → /users/2`)
- Detects unauthorized data exposure

---

### ⚡ Rate Limiting Detection
- Sends multiple rapid requests (20x)
- Flags if no throttling or blocking is observed

---

## 📡 Method Support

| Method | Support Level | Notes |
|--------|--------------|------|
| GET | ✅ Full | Best for detection (IDOR, Auth, Rate) |
| POST | ⚠️ Partial | Limited to auth + rate testing |
| PUT/PATCH/DELETE | ❌ Not supported | Not suitable for current logic |

---

## 📥 Input Structure (Frontend → Backend)

```json
{
  "url": "https://api.com/resource/1",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer token"
  }
}
```

## 📤 Output Structure (Backend Response)
 
```json
{
  "total": 3,
  "critical": 1,
  "high": 1,
  "medium": 1,
  "low": 0,
  "findings": [
    {
      "type": "Missing Authentication",
      "severity": "CRITICAL",
      "endpoint": "https://api.com/resource/1",
      "status": 200,
      "impact": "Accessible without authentication",
      "evidence": {
        "baseline_status": 200,
        "mutated_status": 200
      }
    }
  ]
}
```
 
---
 
## 🔄 Application Flow
 
```
User Input (URL + Method + Headers)
        ↓
Frontend (React + MUI)
        ↓
POST /scan → FastAPI
        ↓
Backend runs:
  - Auth Test
  - IDOR Test
  - Rate Limit Test
        ↓
Calls Target API
        ↓
Returns JSON Response
        ↓
Frontend updates UI dynamically
```
 
---
 
## 🖥️ Running the Project
 
### 🔹 Backend
 
```bash
cd backend
uvicorn main:app --reload
```
 
### 🔹 Frontend
 
```bash
cd frontend
npm install
npm run dev
```
 
---
 
## 🔗 API Endpoint
 
```
POST http://127.0.0.1:8000/scan
```
 
---
 
## 🧪 Testing Examples
 
### ✅ GET Test (Recommended)
 
```json
{
  "url": "https://jsonplaceholder.typicode.com/users/1",
  "method": "GET",
  "headers": {}
}
```
 
### ⚠️ POST Test
 
```json
{
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  }
}
```
 
---
 
## 🚨 Important Notes
 
- GET requests provide the most reliable results
- POST requests are limited due to state changes
- Public APIs may produce expected "false positives"
- This tool simulates behavior, not full penetration testing
---
 
## 🎯 Key Concepts Demonstrated
 
- Behavior-based API security testing
- Request mutation techniques
- Full-stack integration (React + FastAPI)
- CORS handling and API communication
- Dynamic UI rendering from backend data
---
 
## 🧨 Limitations
 
- IDOR detection depends on predictable URL patterns
- POST/PUT requests are not ideal for comparison-based logic
- No deep payload fuzzing implemented
 
---
 
## ⭐ Final Note
 
This project focuses on **real-world API behavior analysis**, not just UI or CRUD operations, making it a strong demonstration of practical security and full-stack skills.
