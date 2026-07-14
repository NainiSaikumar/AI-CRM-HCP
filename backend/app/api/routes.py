from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.interaction import Interaction
from app.schemas.interaction import InteractionCreate

router = APIRouter()


@router.get("/")
def home():
    return {
        "message": "AI CRM API Running"
    }


@router.get("/interactions")
def get_interactions(db: Session = Depends(get_db)):
    return db.query(Interaction).all()


@router.post("/interactions")
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    data = Interaction(**interaction.model_dump())

    db.add(data)
    db.commit()
    db.refresh(data)

    return data