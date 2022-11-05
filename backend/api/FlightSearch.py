from amadeus import Client, ResponseError
import os
import openai

class GetFlights:
    # set up Amadeus client and openai
    __amadeus = Client(
        client_id='fAwinMExdvRlfYYWXiyTdwGngmig2Uir',  # api key
        client_secret='m78GQsUGRqeAfpvU'  # api secret key
    )
    openai.api_key = "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"

    # set up private and protected variables
    __flights = []
    __flightDisplay = False
    __autoResponse = {}
    _airports = []

    '''
    object constructor, sets up all routes and sorted by price

    :param input: the raw input from text field
    '''
    def __init__(self, input):
        self.__autoResponse = openai.Completion.create(
            model="text-davinci-002",
            prompt="Extract the airport codes from this text:\n\nText: \"I want to fly from Los Angeles to Miami.\"\nAirport codes: LAX, MIA\n\nText: \""+input+"\"\nAirport codes:",
            temperature=0,
            max_tokens=60,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            stop=["\n"])  # output follows a specific format
        self._airports = self.__autoResponse["choices"][0]["text"].strip().split(", ")  # get the output as a string

    '''
    getRoutes
    get all the routes from initialized airports for all airlines at a certain day

    :param departureDate: the day of departure as a string in the format of 'yyyy-mm-dd'
    :param adults: the number of adults aged 12 and over
    '''
    def getRoutes(self, departureDate, adults):
        try:
            response = self.__amadeus.shopping.flight_offers_search.get(
                originLocationCode=self._airports[0],
                destinationLocationCode=self._airports[1],
                departureDate=departureDate,
                adults=adults)
            self.__flights = response.data
            self.__flightDisplay = True
            return self.__flights
        except ResponseError as error:
            print(error)
            self.__flightDisplay = False
            return {'status':'error obtaining route information'}
    
    '''
    get all the routes from specified airports for all airlines at a certain day

    :param departureAirport: the airport set for departure as a string in the format of airport code (e.g. 'YYZ', 'SFO', 'PEK')
    :param arrivalAirport: the airport set as arrival as a string in the format of airport code (e.g. 'YYZ', 'SFO', 'PEK')
    :param departureDate: the day of departure as a string in the format of 'yyyy-mm-dd'
    :param adults: the number of adults aged 12 and over
    '''
    def getRoutes(self, departureAirport, arrivalAirport, departureDate, adults):
        try:
            response = self.__amadeus.shopping.flight_offers_search.get(
                originLocationCode=departureAirport,
                destinationLocationCode=arrivalAirport,
                departureDate=departureDate,
                adults=adults)
            self.__flights = response.data
            self.__flightDisplay = True
            return self.__flights
        except ResponseError as error:
            print(error)
            self.__flightDisplay = False
            return {'status':'error obtaining route information'}

    '''
    getCheapestRoute
    get the cheapest flight and outputs all the flight information stored in dictionary

    :rtype: dict
    '''
    def getCheapestRoute(self):
        if(self.__flightDisplay):
            self.__flights.sort(key=lambda d: d['price']['grandTotal'])
            return self.__flights[0]
        else:
            return {'status':'error obtaining route information'}

