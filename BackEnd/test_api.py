from fastapi import FastAPI, Header, HTTPException

app = FastAPI()

@app.get("/secure/{user_id}")
def secure(user_id: int, authorization: str = Header(None)):

    print("Received header:", authorization)

    if authorization != "Bearer validtoken":
        raise HTTPException(status_code=401, detail="Unauthorized")

    return {"user_id": user_id, "data": "secret data"}


@app.get("/public/{user_id}")
def public(user_id: int):
    return {"user_id": user_id, "data": "public data"}