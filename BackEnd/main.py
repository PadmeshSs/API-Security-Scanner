from fastapi import FastAPI
from routes.scan import router as scan_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(scan_router)

@app.get("/")
def root():
    return {"message": "API Security Scanner is running"}