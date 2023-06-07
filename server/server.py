import random
import string
import json
from flask_cors import cross_origin, CORS
from flask import Flask, redirect, request, jsonify

app = Flask(__name__)
# allow CORS
CORS(app)

shortened_urls = {}

def generate_short_url(length=6):
    chars = string.ascii_letters + string.digits
    sort_url = ''.join(random.choice(chars) for _ in range(length))
    return sort_url

@app.route('/list', methods = ['GET'])
def list():
    return jsonify(shortened_urls = shortened_urls)

# Encode URL route
@app.route('/encode', methods = ['POST'])
def encode():
    # get long_url from request
    data = json.loads(request.data)
    long_url = data.get('long_url')
    # shorten url
    short_url = generate_short_url()
    # if short_url exists, save a new value
    while short_url in shortened_urls:
        short_url = generate_short_url()
    # add link to a list of all shortened links
    shortened_urls[short_url] = long_url
    # return json
    return jsonify(link = request.url_root + short_url)

@app.route('/decode', methods = ['POST'])
def decode():
    # get short url from request
    data = json.loads(request.data)
    short_url = data.get('short_url').replace('http://127.0.0.1:5000/', '')
    # find long url
    long_url = shortened_urls.get(short_url)
    if long_url:
        # if it's found, return it
        return jsonify(link = long_url)
    else:
        # if it's not found, return error
        return jsonify(message = 'URL not found')

@app.route('/<short_url>')
def redirect_url(short_url):
    long_url = shortened_urls.get(short_url)
    if long_url:
        return redirect(long_url)
    else:
        return jsonify(message = 'URL not found')

if __name__ == '__main__':
    app.run(debug=True)
