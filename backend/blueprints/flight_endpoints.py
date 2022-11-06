from flask import Blueprint, request, jsonify
from api.airport import getAirportCode
from api.getDate import getDate
from api.FlightSearch import GetFlights

flight = Blueprint('api', __name__, url_prefix='/flight_api')


@flight.route('/getAirportCode')
def hello_world():
    tempvar = GetFlights("I want to fly from Chicago to Fuzhou.")
    return jsonify(tempvar.getCheapestRoute("2022-12-12", 1))


@flight.route('/test')
def hello_worewdwld():
    return "aaa"


@flight.route('/getDate', methods=['POST'])
def entities():
    if request.method == "POST":
        # "date": getDate(request.json["text"])
        data = request.json
        print(jsonify(data))
        return jsonify(data)


@flight.route('/entities/<int:entity_id>', methods=['GET', 'PUT', 'DELETE'])
def entity(entity_id):
    if request.method == "GET":
        return {
            'id': entity_id,
            'message': 'This endpoint should return the entity {} details'.format(entity_id),
            'method': request.method
        }
    if request.method == "PUT":
        return {
            'id': entity_id,
            'message': 'This endpoint should update the entity {}'.format(entity_id),
            'method': request.method,
            'body': request.json
        }
    if request.method == "DELETE":
        return {
            'id': entity_id,
            'message': 'This endpoint should delete the entity {}'.format(entity_id),
            'method': request.method
        }
