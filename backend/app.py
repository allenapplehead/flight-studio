from flask import Flask, jsonify, request
app = Flask(__name__)


@app.before_request
def before():
    print("This is executed BEFORE each request.")


@app.route('/hello/')
def hello():
    return "Hello World!"


@app.route('/test/')
def aaa():
    return "Hello test!"


@app.route('/query-example')
def query_example():
    # if key doesn't exist, returns None
    language = request.args.get('language')

    return '''<h1>The language value is: {}</h1>'''.format(language)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
