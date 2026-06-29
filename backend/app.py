from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Sentinel AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "name": "Sentinel AI",
        "status": "Running",
        "version": "1.0"
    }

@app.get("/dashboard")
def dashboard():
    return {
        "workers": 128,
        "dangerZones": 3,
        "safetyScore": 96,
        "sensors": 24
    }

@app.get("/risk")
def risk():
    return {
        "currentRisk": 18,
        "prediction15": 41,
        "prediction30": 67,
        "prediction60": 82
    }

@app.get("/alerts")
def alerts():
    return [
        {
            "type": "Warning",
            "message": "Worker near High Risk Zone"
        },
        {
            "type": "Info",
            "message": "Gas sensors normal"
        }
    ]