from fastapi import APIRouter
from pydantic import BaseModel

from app.langgraph.workflow import graph

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


class Prompt(BaseModel):
    text: str


@router.post("/summary")
def generate_ai_summary(prompt: Prompt):

    result = graph.invoke(
        {
            "text": prompt.text,
            "summary": "",
        }
    )

    return {
        "summary": result["summary"]
    }