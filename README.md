Ajax, Callback, and JSON Exercises

Continuation Passing Style

Given the following functions in continuation passing style:

function times2(arr, callback) {
  var result = arr.map(function(num) {
    return num * 2;
  });
  callback(result);
}
function sumArray(arr, callback) {
  var result = arr.reduce(function(a, b) {
    return a + b;
  });
  callback(result);
}
And an array:

var array = [1, 8, 2, 5];
Use the two functions together to first double the numbers in the array, sum them up and then print out the sum.

Continuation Passing Style 2

Given the function below which returns the largest element in an array:

function max(arr) {
  return arr.reduce(function(a, b) {
    return a > b ? a : b;
  });
}
Write a version of this function in continuation-passing style.
Add a delay to your CPS-style max function using setTimeout to make it into an asynchronous function.
Ajax Search Form

Download and unzip the ajax_exercise.zip file in a folder. Run it using python server.py and access the app at http://localhost:5000. This is a Flask app. To start, it should render a form at the root URL /. It should also return some JSON result data at /search.

Using jQuery, capture the form submit events:
prevent the default submit action
make an Ajax request to the /search URL
when the data comes back, render the result data to ul#result-list as individual li items
Send a query parameter to the /search. You may use jQuery's serialize method: $('#search-form').serialize() and plug its result into the data parameter of $.get. On the backend, verify that you are getting the query parameter passed in by printing request.args.
Create a database of websites. Each website needs only a title and a URL. A database schema has been provided in db.sql. Make a database, and within it, make a table, and manually enter some data for querying.
Change the search function of server.py to query the database for matching websites instead of returning the hard-coded results from results.json
