from flask import Flask, jsonify, request
from blueprints.flight_endpoints import flight
import datefinder

app = Flask(__name__)


# @app.route('/')
# def getDate():
#     matches = datefinder.find_dates("todsay is 2000 feb 27")
#     for match in matches:
#         print(match)

#     return str(matches).encode()

app.register_blueprint(flight)


@app.route('/')
def hello_world():
    return {
        "name": "Nagato",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }


if __name__ == '__main__':
    app.run(host='0.0.0.0')
