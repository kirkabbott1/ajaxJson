from flask import Flask, jsonify, request
import pg;
app = Flask('app')
db = pg.DB(dbname='ajax')
@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    print request.args;
    return query();

    # search_str = request.arg('search')
    # print request.args
    # this sends the contents of static/results.json
    # return app.send_static_file('results.json')
def query():
    search_string = request.args.get('search');
    print search_string;
    results = db.query("select title, url from website where title =$1",search_string).dictresult();
    return jsonify(results);


app.run(debug=True)
