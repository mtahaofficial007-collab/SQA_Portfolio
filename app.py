from flask import Flask, render_template

# The constructor for Flask automatically looks for a 'templates' folder
# in the same directory as app.py
app = Flask(__name__)
app.secret_key = "supersecretkey"

# -----------------------
# Frontend Routes
# -----------------------

# These all correctly look in 'templates'
@app.route('/')
def home():
    # Looks for 'templates/home.html'
    return render_template('home.html') 

@app.route('/about')
def about():
    # Looks for 'templates/about.html'
    return render_template('about.html')

@app.route('/contact')
def contact():
    # Looks for 'templates/contact.html'
    return render_template('contact.html')

@app.route('/services')
def services():
    # Looks for 'templates/services.html'
    return render_template('services.html')

@app.route('/portfolio')
def portfolio():
    # Looks for 'templates/portfolio.html'
    return render_template('portfolio.html')

# -----------------------
# Portfolio Project Routes
# -----------------------

# Your project files are directly in the root 'SQA_PORTFOLIO' folder
# not within 'templates', so these paths need correction.

@app.route('/seo_helper_master')
def project1():
    # Corrected: Looks for 'projects/project1.html'
    # NOTE: You'll likely want to move project1.html and project2.html 
    # INTO the 'templates' folder, perhaps in a 'templates/projects' 
    # subdirectory for consistency.
    return render_template('seo_helper_master.html') 
    # Or, if you want them treated as templates:
    # return render_template('projects/project1.html') 
    # if you move them to templates/projects/

@app.route('/project2')
def project2():
    # Corrected: Looks for 'projects/project2.html'
    return render_template('project2.html')
    # Or, if you want them treated as templates:
    # return render_template('projects/project2.html')
    # if you move them to templates/projects/

# -----------------------
# Run App (Python 3.11 safe)
# -----------------------
if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)