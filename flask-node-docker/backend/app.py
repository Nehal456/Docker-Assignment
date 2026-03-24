from flask import Flask, request, jsonify
from flask_cors import CORS # to Allow request from the frontend

app = Flask(__name__)

@app.route('/', methods=['POST'])
def process():

    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    # Example processing: just echo back
    response = {
        'message': f'Hello {name}, we 
received your email {email}.',
        'status': 'success'
    }
    return jsonify({
        

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=5000,
        debug=True)