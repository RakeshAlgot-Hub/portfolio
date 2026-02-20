from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os

from app.routes import rooms, auth, properties, units, tenants, units_update, dashboard, payments

app = FastAPI()

# Safe CORS setup
allowedOriginsEnv = os.getenv("ALLOWED_ORIGINS")

if allowedOriginsEnv:
    allowedOrigins = allowedOriginsEnv.split(",")
else:
    allowedOrigins = ["*"]  # default to allow all

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowedOrigins,
    allow_credentials=False,  # important when using "*"
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router)
app.include_router(properties.router)
app.include_router(rooms.router)
app.include_router(units.router)
app.include_router(tenants.router)
app.include_router(units_update.router)
app.include_router(dashboard.router)
app.include_router(payments.router)

@app.get("/")
async def root():
    return {"message": "Backend is running"}

@app.get("/health")
async def healthCheck():
    return {"status": "ok"}

# Global error handler (optional but recommended)
@app.exception_handler(Exception)
async def globalExceptionHandler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error"}
    )