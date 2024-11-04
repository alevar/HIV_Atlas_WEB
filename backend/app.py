from flask import Flask, redirect, send_from_directory
from flask_cors import CORS
from config.config import DATABASE
from db import init_db
from api.routes import hiv_atlas_bp
from utils.utils import safe_send_from_directory  # Import the utility function

app = Flask(__name__, static_folder='../frontend/build')
CORS(app)

# Register blueprints
app.register_blueprint(hiv_atlas_bp)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if app.debug:
        return redirect(f'http://localhost:5173/{path}')
    else:
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return safe_send_from_directory(app.static_folder, path)
        else:
            return safe_send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # Initialize the database (only needed once)
    with app.app_context():
        init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
