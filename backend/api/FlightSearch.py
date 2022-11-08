from amadeus import Client, ResponseError
import os

class FlightSearch:
    # set up Amadeus client and openai
    __amadeus = Client(
        client_id=os.getenv("AMADEUS_ID"),  # api key
        client_secret=os.getenv("AMADEUS_SECRET")
        # api secret key
    )

    # set up private and protected variables
    __flights = []
    __flightDisplay = False
    __autoResponse = {}
    _airports = []

    '''
    object constructor, sets up airport locations
    
    :param departure: departure airport
    :param arrival: arrival airport
    '''
    def __init__(self, departure, arrival):
        self._airports = [departure, arrival]
        if(self._airports):
            self.__flightDisplay = True

    '''
    getAirports
    returns the departure and arrival airport codes in an array of size 2

    :rtype: str[]
    '''

    def getAirports(self):
        return self._airports

    '''
    getRoutes
    get all the routes from initialized airports for all airlines at a certain day

    :param departureDate: the day of departure as a string in the format of 'yyyy-mm-dd'
    :param adults: the number of adults aged 12 and over

    :rtype: dict
    '''

    def getRoutes(self, departureDate):
        if(self.__flightDisplay):
            try:
                response = self.__amadeus.shopping.flight_offers_search.get(
                    originLocationCode=self._airports[0],
                    destinationLocationCode=self._airports[1],
                    departureDate=departureDate,
                    adults=1)
                self.__flights = response.data
                self.__flightDisplay = True
                return self.__flights
            except ResponseError as error:
                print(error)
                self.__flightDisplay = False
                return {}
        else:
            return {}

    '''
    getNewRoutes
    get all the routes from specified airports for all airlines at a certain day

    :param departureAirport: the airport set for departure as a string in the format of airport code (e.g. 'YYZ', 'SFO', 'PEK')
    :param arrivalAirport: the airport set as arrival as a string in the format of airport code (e.g. 'YYZ', 'SFO', 'PEK')
    :param departureDate: the day of departure as a string in the format of 'yyyy-mm-dd'
    :param adults: the number of adults aged 12 and over

    :rtype: dict
    '''

    def getNewRoutes(self, departureAirport, arrivalAirport, departureDate):
        try:
            response = self.__amadeus.shopping.flight_offers_search.get(
                originLocationCode=departureAirport,
                destinationLocationCode=arrivalAirport,
                departureDate=departureDate,
                adults=1)
            self.__flights = response.data
            self.__flightDisplay = True
            self._airports = [departureAirport, arrivalAirport]
            return self.__flights
        except ResponseError as error:
            print(error)
            self.__flightDisplay = False
            return {}

    '''
    getCheapestRoute
    get the cheapest flight and outputs all the flight information stored in dictionary

    :rtype: dict
    '''

    def getCheapestRoute(self, departureDate):
        self.getRoutes(departureDate)
        if (self.__flightDisplay):
            self.__flights.sort(key=lambda d: d['price']['grandTotal'])
            return self.__flights[0]
        else:
            return {}


    '''
    get5CheapestRoute
    get 5 of the cheapest flight and outputs all the flight informations stored in array of dictionaries

    :rtype: dict
    '''

    def get5CheapestRoute(self, departureDate):
        self.getRoutes(departureDate)
        returnValue = list()
        if (self.__flightDisplay):
            self.__flights.sort(key=lambda d: d['price']['grandTotal'])
            maxIndex = 5 if (len(self.__flights) >= 5) else len(self.__flights)
            for i in range(maxIndex):
                returnValue.append(self.__flights[i])
            return returnValue
        else:
            return {}

    '''
    getPrice
    get the price of a specific flight
    
    :param routeInfo: flight information stored in dictionary
    :rtype: str
    '''

    def getPrice(self, routeInfo):
        '''example routeInfo (template)
        {'type': 'flight-offer', 'id': '145', 'source': 'GDS', 'instantTicketingRequired': False, 'nonHomogeneous': False, 
        'oneWay': False, 'lastTicketingDate': '2022-11-07', 'numberOfBookableSeats': 9, 'itineraries': [{'duration': 'PT5H3M', 
        'segments': [{'departure': {'iataCode': 'YYZ', 'terminal': '1', 'at': '2022-11-23T20:00:00'}, 'arrival': {'iataCode': 
        'YVR', 'terminal': 'M', 'at': '2022-11-23T22:03:00'}, 'carrierCode': 'AC', 'number': '127', 'aircraft': {'code': '789'}, 
        'operating': {'carrierCode': 'AC'}, 'duration': 'PT5H3M', 'id': '16', 'numberOfStops': 0, 'blacklistedInEU': False}]}], 
        'price': {'currency': 'EUR', 'total': '1005.86', 'base': '846.00', 'fees': [{'amount': '0.00', 'type': 'SUPPLIER'}, 
        {'amount': '0.00', 'type': 'TICKETING'}], 'grandTotal': '1005.86'}, 'pricingOptions': {'fareType': ['PUBLISHED'], 
        'includedCheckedBagsOnly': False}, 'validatingAirlineCodes': ['AC'], 'travelerPricings': [{'travelerId': '1', 
        'fareOption': 'STANDARD', 'travelerType': 'ADULT', 'price': {'currency': 'EUR', 'total': '502.93', 'base': '423.00'}, 
        'fareDetailsBySegment': [{'segmentId': '16', 'cabin': 'ECONOMY', 'fareBasis': 'HZ7LUCTG', 'brandedFare': 'STANDARD', 
        'class': 'H', 'includedCheckedBags': {'quantity': 0}}]}, {'travelerId': '2', 'fareOption': 'STANDARD', 'travelerType': 
        'ADULT', 'price': {'currency': 'EUR', 'total': '502.93', 'base': '423.00'}, 'fareDetailsBySegment': [{'segmentId': '16', 
        'cabin': 'ECONOMY', 'fareBasis': 'HZ7LUCTG', 'brandedFare': 'STANDARD', 'class': 'H', 'includedCheckedBags': {'quantity': 0}}]}]}
        '''
        return routeInfo['price']['grandTotal']

    '''
    getDepartureInfo
    returns the itinerary departure information i.e. airport, terminal, date+time 
    
    :param routeInfo: flight information stored in dict
    :rtype: dict
    '''

    def getDepartureInfo(self, routeInfo):
        # refer to {@code getPrice} for routeInfo example/template
        return routeInfo['itineraries'][0]['segments'][0]['departure']

    '''
    getArrivalInfo
    returns the itinerary arrival information i.e. airport, terminal, date+time 
    
    :param routeInfo: flight information stored in dict
    :rtype: dict
    '''

    def getArrivalInfo(self, routeInfo):
        # refer to {@code getPrice} for routeInfo example/template
        return routeInfo['itineraries'][0]['segments'][0]['arrival']

    '''
    getCallsign
    gets flight callsign
    
    :param RouteInfo: flight information stored in dict
    :rtype: str
    '''

    def getCallsign(self, routeInfo):
        # refer to {@code getPrice} for routeInfo example/template
        carrier = routeInfo['itineraries'][0]['segments'][0]['carrierCode']
        number = routeInfo['itineraries'][0]['segments'][0]['number']
        return carrier + number

    '''
    getDuration
    gets flight duration
    
    :param RouteInfo: flight information stored in dict
    :rtype: str
    '''

    def getDuration(self, routeInfo):
        # refer to {@code getPrice} for routeInfo example/template
        return routeInfo['itineraries'][0]['segments'][0]['duration']
