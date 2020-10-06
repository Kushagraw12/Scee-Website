from flask import Flask, render_template, request, redirect
import os
import uuid


app = Flask(__name__)


@app.route ('/')
def index():
    return render_template ('index.html')

@app.route ("/blogs")
def blogs():
  return render_template("blogs.html")

if __name__ == "__main__":
    app.run(debug=True)