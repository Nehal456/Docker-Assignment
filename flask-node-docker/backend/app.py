from flask import Flask, request, jsonify
from flask_cors import flask_cors

app = Flask(__name__)

@app.route('/', methods=['POST'])
def submit():

    data = request.get_json():

    name = data.get_json()

    name = data.get('name')
    email = data.get('email')
    return jsonify({
        "message": f"received submission
        from {name} ({email})",
        "data": data
    }), 200

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=5000,
        debug=True)