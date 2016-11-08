$('#search-form').submit(function(event){
 event.preventDefault();

function getData(callback){
 $.get('/search', $('#search-form').serialize(), callback);
}
 getData(function(data){
   console.log(data);
   for (i=0; i < data.length; i++){
    $('#result-list').append('<li>' + data[i].title  + '</li>');
    $('#result-list').append('<li>' + data[i].url  + '</li>');
    }
  });
});
