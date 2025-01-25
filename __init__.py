from flask import Flask
from .routes import configure_routes

# creates an instance of the Flask App
def create_app():
    app = Flask(__name__)
    
    # Configure routes
    configure_routes(app)
    
    return app