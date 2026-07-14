from pydantic import BaseModel


class InteractionCreate(BaseModel):
    hcp_name: str
    interaction_type: str
    interaction_date: str
    interaction_time: str
    topics: str
    materials: str
    sentiment: str
    follow_up: str


class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True