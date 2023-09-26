from urllib.parse import urlencode

import requests
from fastapi import FastAPI

from api.Constants import API_KEY

app = FastAPI()

@app.get("/api/books")
def query_books(search_value: str | None = None):
    if not search_value.strip():
        return { "totalItems": 0, "items": [] }
    
    query_string = urlencode({ "q": search_value, "key": API_KEY })
    response = requests.get(f"https://www.googleapis.com/books/v1/volumes?{query_string}")

    return response.json()