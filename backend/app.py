from flask import Flask, jsonify, request
# from blueprints.flight_endpoints import flight
from api.FlightSearch import FlightSearch
from api.DateSearch import DateSearch
from api.AirportSearch import AirportSearch
from flask_cors import CORS
# from api.test import test

app = Flask(__name__)
cors = CORS(app)


# @app.route('/', methods=['POST'])
# def hello():
#     return test()


@app.route('/getInfo', methods=['POST'])
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
            "id": i+1,
            "name": flightClient.getCallsign(flights[i]),
            "price": flightClient.getPrice(flights[i]),
            "Flight Duration": flightClient.getDuration(flights[i]),
            "time": dateAPI.timeStrip(dTime[1]),
            "Itinerary Arrival Date": aTime[0],
            "Itinerary Arrival Time": dateAPI.timeStrip(aTime[1])
        }
        flightInfo.append(info)

    return {
        "Departure": airports[0],
        "Arrival": airports[1],
        "Date": date,
        "Information": flightInfo
    }
    # return "hellop"


if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
