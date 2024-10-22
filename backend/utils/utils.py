import os
from flask import send_from_directory

def safe_send_from_directory(directory, filename):
    response = send_from_directory(directory, filename)
    response.headers.pop('Content-Encoding', None)  # Remove Content-Encoding header if present
    return response
