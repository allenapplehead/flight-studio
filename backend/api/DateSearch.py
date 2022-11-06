from amadeus import Client, ResponseError
import os
import openai

class DateSearch:
    __amadeus = Client(
        client_id=os.getenv("AMADEUS_ID"),  # api key
        client_secret=os.getenv("AMADEUS_SECRET")  # api secret key
    )
    openai.api_key = os.getenv("OPENAI_API_KEY")
    response = ""

    '''
    object constructor, sets up all routes and sorted by price

    :param input: the raw input from text field
    '''
    def __init__(self, input):
        self.response = openai.Completion.create(
            model="text-davinci-002",
            prompt="Extract the date from this text:\n\nText: \"I want to travel on April 22, 2021.\"\Date: 2021-04-22\n\nText: \""+input+"\"\nDate:",
            temperature=0,
            max_tokens=60,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            stop=["\n"])["choices"][0]["text"].strip()

# test block
#temp = DateSearch("lets go outside on May 28 2023")
#print(temp.response)