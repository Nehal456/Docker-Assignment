from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    response = {
        'message': f'Hello {name}, we received your email {email}.',
        'status': 'success'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)