from fastapi import APIRouter, Depends, Body
from database.dbsetup import SessionLocal
from sqlalchemy.orm import Session
from models.CarDBModel import CarDBModel
from models.CartDBModel import CartDBModel
from schema.CarSchema import CarSchema
from schema.CartSchema import CartSchema

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
@router.get('/cart')
def get_carts(db: Session = Depends(get_db)):
    return db.query(CartDBModel).all()


@router.get('/car/{id}')
def get_car(id: int, db: Session = Depends(get_db)):
    car = db.query(CarDBModel).filter(CarDBModel.id == id).first()
    if not car:
        return {'message': 'Car not found'}
    return car
@router.get('/cart/{id}')
def get_cart(id: int, db: Session = Depends(get_db)):
    cart = db.query(CartDBModel).filter(CartDBModel.id == id).first()
    if not cart:
        return {'message': 'Cart not found'}
    return cart


@router.post('/car')
def create_car(car: CarSchema, db: Session = Depends(get_db)):
    new_car = CarDBModel(**car.model_dump())
    db.add(new_car)
    db.commit()
    db.refresh(new_car)
    return new_car

@router.post('/cart')
def create_car(cart: CartSchema, db: Session = Depends(get_db)):
    new_cart = CartDBModel(**cart.model_dump())
    db.add(new_cart)
    db.commit()
    db.refresh(new_cart)
    return new_cart



@router.delete('/car/{id}')
def delete_car(id: int ,db: Session = Depends(get_db)):
    car = db.query(CarDBModel).filter(CarDBModel.id == id).first()

    if not car:
        return {'message': 'No car found'}
    
    db.delete(car)
    db.commit()
    return {'message':'Car deleted'}

@router.delete('/cart/{id}')
def delete_car(id: int ,db: Session = Depends(get_db)):
    cart = db.query(CartDBModel).filter(CartDBModel.id == id).first()

    if not cart:
        return {'message': 'No car found'}
    
    db.delete(cart)
    db.commit()
    return {'message':'Cart deleted'}

