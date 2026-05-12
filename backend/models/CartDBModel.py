from database.dbsetup import Base
from sqlalchemy import Column, Integer, String

class CartDBModel(Base):
    __tablename__ = 'cart'

    id = Column(Integer, primary_key=True, index=True)
    primary_name = Column(String)
    secondary_name = Column(String)
    sale_type= Column(String)
    price = Column(Integer)
    speed = Column(Integer)
    engine = Column(String)
    engine_type = Column(String)
    gear_type = Column(String)
    image = Column(String)