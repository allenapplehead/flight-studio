import os
import openai
import requests
openai.api_key = os.getenv("OPENAI_API_KEY")

# url = "https://airport-info.p.rapidapi.com/airport"

# querystring = {"iata": "YYZ"}

# headers = {
# 	"X-RapidAPI-Key": "e6d65d63c7msha25ab600a9a7089p1e9eacjsn0a60f57c53ff",
# 	"X-RapidAPI-Host": "airport-info.p.rapidapi.com"
# }

# response = requests.request("GET", url, headers=headers, params=querystring)

# print(response.text)


def getAirportCode(text):
    print(text)
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt="Extract the airport codes from this text:\n\nText: \"I want to fly from Los Angeles to Miami.\"\nAirport codes: LAX, MIA\n\nText: \"" + text+"\"\nAirport codes:",
        temperature=0,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=["\n"]
    )
    airportCodes = response["choices"][0]["text"].replace(" ", "").split(",")
    return airportCodes
