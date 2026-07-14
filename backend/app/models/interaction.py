from sqlalchemy import Column, Integer, String, Text
from app.database.db import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(100), nullable=False)
    interaction_type = Column(String(50))
    interaction_date = Column(String(30))
    interaction_time = Column(String(30))
    topics = Column(Text)
    materials = Column(Text)
    sentiment = Column(String(30))
    follow_up = Column(Text)