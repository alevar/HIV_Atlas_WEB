import sqlite3
from flask import g
from config.config import DATABASE

# Database connection helper
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

# Close database connection after each request
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

# Initialize database (connects without creating tables)
def init_db():
    try:
        # Attempt to connect to the existing database
        db = get_db()
        # You can perform any necessary queries to ensure the tables are present if needed
    except sqlite3.Error as e:
        print(f"An error occurred: {e}")

