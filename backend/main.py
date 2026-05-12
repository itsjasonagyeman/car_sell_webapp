from fastapi import FastAPI
from routers.carrouter import router
from database.dbsetup import engine, Base

Base.metadata.create_all(bind = engine)

app = FastAPI()

app.include_router(router)