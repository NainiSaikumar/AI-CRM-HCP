import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
)


def generate_summary(text: str):
    prompt = f"""
You are an AI CRM Assistant.

Analyze the following healthcare representative interaction.

{text}

Generate:

1. Professional Summary

2. Sentiment

3. Follow-up Recommendation

Return plain text only.
"""

    response = llm.invoke(prompt)

    return response.content