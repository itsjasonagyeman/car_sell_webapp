from pydantic import BaseModel

class CarSchema(BaseModel):
    primary_name: str
    secondary_name: str
    sale_type:str
    price:int
    speed:int
    engine_type:str
    gear_type:str
    engine:str
    image:str 