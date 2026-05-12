from fastapi import APIRouter, Depends, Body
from database.dbsetup import SessionLocal
from sqlalchemy.orm import Session
from models.CarDBModel import CarDBModel
from schema.CarSchema import CarSchema

router = APIRouter()

def get_db():
    dbsetup = SessionLocal()

    try:
        yield dbsetup
    finally:
        dbsetup.close()

@router.get('/car')
def get_cars(db: Session = Depends(get_db)):
    return db.query(CarDBModel).all()

@router.get('/car/{id}')
def get_car(id: int, db: Session = Depends(get_db)):
    car = db.query(CarDBModel).filter(CarDBModel.id == id).first()
    if not car:
        return {'message': 'Car not found'}
    return car

@router.post('/car')
def create_car(car: CarSchema, db: Session = Depends(get_db)):
    new_car = CarDBModel(**car.model_dump())
    db.add(new_car)
    db.commit()
    db.refresh(new_car)
    return new_car

@router.delete('/car/{id}')
def delete_car(id: int ,db: Session = Depends(get_db)):
    car = db.query(CarDBModel).filter(CarDBModel.id == id).first()

    if not car:
        return {'message': 'No car found'}
    
    db.delete(car)
    db.commit()
    return {'message':'Car deleted'}
