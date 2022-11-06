from flask import Flask, jsonify, request
# from blueprints.flight_endpoints import flight
from api.FlightSearch import FlightSearch
from api.DateSearch import DateSearch
from api.AirportSearch import AirportSearch
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


# @app.route('/', methods=['POST'])
# def hello():
#     return "hello"


@app.route('/', methods=['GET'])
def getFlightInformation():
    prompt1 = request.get_json()["user-text"]
    dateAPI = DateSearch(prompt1)
    date = dateAPI.response
    airportClient = AirportSearch(prompt1)
    airports = airportClient.getAirports()
    flightClient = FlightSearch(airports[0], airports[1])
    flights = flightClient.get5CheapestRoute(date)

    flightInfo = list()

    for i in range(len(flights)):
        dTime = flightClient.getDepartureInfo(flights[i])['at'].split("T")
        aTime = flightClient.getArrivalInfo(flights[i])['at'].split("T")
        info = {
            "Flight Number": flightClient.getCallsign(flights[i]),
            "Cost": flightClient.getPrice(flights[i]),
            "Flight Duration": flightClient.getDuration(flights[i]),
            "Itinerary Departure Time": dateAPI.timeStrip(dTime[1]),
            "Itinerary Arrival Date": aTime[0],
            "Itinerary Arrival Time": dateAPI.timeStrip(aTime[1])
        }
        flightInfo.append(info)

    return {
        "Departure Airport": airports[0],
        "Arrival Airport": airports[1],
        "Departure Date": date,
        "Flights Information": flightInfo
    }

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
