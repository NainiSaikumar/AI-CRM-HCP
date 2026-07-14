from typing import TypedDict

from langgraph.graph import StateGraph, START, END

from app.services.groq_service import generate_summary


class GraphState(TypedDict):
    text: str
    summary: str


def summary_node(state: GraphState):
    result = generate_summary(state["text"])

    return {
        "text": state["text"],
        "summary": result,
    }


builder = StateGraph(GraphState)

builder.add_node("summary_node", summary_node)

builder.add_edge(START, "summary_node")
builder.add_edge("summary_node", END)

graph = builder.compile()