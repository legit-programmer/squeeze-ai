from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sage import getMessage

api = FastAPI()
class Prompt(BaseModel):
    prompt:str

api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get('/')
async def root():
    return {'message':'Hello WOlrd'}

@api.post('/post/')
async def post(prompt:Prompt):
    print("REQUEST RECIEVED! PROCESSING DATA...")
    data = getMessage(str(prompt))
    print(data)
    print("DATA PROCESSED! SENDING RESPONSE...")
    return JSONResponse(content=data, media_type='application/json')

    