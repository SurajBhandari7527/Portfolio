import json
import os
from flask import Flask, render_template, jsonify, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/roadmap')
def roadmap():
    return render_template('roadmap.html', active_page='roadmap')

@app.route('/projects')
@app.route('/projects/<category>')
def projects(category=None):
    # Support both /projects/<category> and /projects?category=...
    selected_category = category or request.args.get('category', 'all').lower()
    return render_template('projects.html', active_page='projects', active_category=selected_category)

@app.route('/about')
def about():
    return redirect(url_for('home', _anchor='about'))

@app.route('/contact')
@app.route('/contacts')
def contact():
    return redirect(url_for('home', _anchor='contact'))

# Roadmap API
@app.route('/api/roadmap')
@app.route('/roadmap.json')
def get_roadmap():
    json_path = os.path.join(app.root_path, 'roadmap.json')
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": f"Failed to load roadmap data: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)