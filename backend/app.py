from flask import Flask, jsonify, request
# from blueprints.flight_endpoints import flight
from api.FlightSearch import GetFlights
from api.DateSearch import DateSearch
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

# @app.route('/')
# def getDate():
#     matches = datefinder.find_dates("todsay is 2000 feb 27")
#     for match in matches:
#         print(match)

#     return str(matches).encode()

# app.register_blueprint(flight)


@app.route('/', methods=['POST'])
def hello():

    return "hello"


@app.route('/getInfo', methods=['POST'])
def getFlightInformation():
    # print(request.json)
    # print("goes here")
    prompt1 = request.get_json()["user-text"]
    # prompt1 = "I want to fly from Chicago to Fuzhou."
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
    app.run(host="localhost", port=8000, debug=True)
