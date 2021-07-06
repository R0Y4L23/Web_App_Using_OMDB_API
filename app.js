$(document).ready(function(){
    $("#search-form").on('submit',function(e){
        console.log("search");
        var text = $(".search").val();
         if(text!="")
         {   
           getMovies(text);
         }
         else
         {
             $(".contain").html("No results! Please enter.");
         }
        e.preventDefault();
    });
});
function getMovies(text)
{
    axios.get('http://www.omdbapi.com/?apikey=5c4b9c43&s='+text).then(function(response){
    console.log(response);
    let movies=response.data.Search;
    let output='';
    for(var i=0;i<movies.length;i++)
    {
        if(movies[i].Poster=="N/A")
        {
            output+='<div class="results"><img src="/images/not_found.jpg" width=200px height=300px><h5>'+movies[i].Title+'</h5><h3>Release Date :'+movies[i].Year+'</h3></div>'
        }
        else
        {
            output+='<div class="results"><img src="'+movies[i].Poster+'" width=200px height=300px><h5>'+movies[i].Title+'</h5><h3>Release Date :'+movies[i].Year+'</h3></div>'
        }  
    }
    $(".contain").html(output);
    }).catch(function(err){
        console.log(err);
    });
}