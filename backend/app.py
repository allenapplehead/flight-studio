from flask import Flask, jsonify, request
# from blueprints.flight_endpoints import flight
from api.FlightSearch import GetFlights
from api.DateSearch import DateSearch
app = Flask(__name__)


# @app.route('/')
# def getDate():
#     matches = datefinder.find_dates("todsay is 2000 feb 27")
#     for match in matches:
#         print(match)

#     return str(matches).encode()

# app.register_blueprint(flight)


@app.route('/')
def getFlightInformation():
    prompt1 = "i want to travel from Toronto to San Fransisco on December 1 2022"
    date = DateSearch(prompt1)
    flightClient = GetFlights(prompt1)

    flight = flightClient.getCheapestRoute(date.response, 1)
    num = flightClient.getCallsign(flight)
    airports = flightClient.getAirports()
    dep = flightClient.getDepartureInfo(flight)
    arr = flightClient.getArrivalInfo(flight)
    cost = flightClient.getPrice(flight)
    duration = flightClient.getDuration(flight)

    return {
        "Flight Number": num,
        "Departure Airport": airports[0],
        "Departure Terminal": dep['terminal'],
        "Departure Time": dep['at'],
        "Arrival Airport": airports[1],
        "Arrival Terminal": arr['terminal'],
        "Arrival Time": arr['at'],
        "Flight Duration": duration,
        "Cost": cost,
    }


if __name__ == '__main__':
    app.run(host='0.0.0.0')
