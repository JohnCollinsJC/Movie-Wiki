function search(){
    // console.log("hi");
let input = document.getElementById('search').value;
let type= document.getElementById('list').value
var request = new Request(`http://www.omdbapi.com/?i=tt3896198&apikey=5f086e49&s=${input}`);
fetch(request).then(function(response) {
  return response.text();
}).then(function(text) {
    var dictionary=JSON.parse(text)
    // console.log(data);
    data= dictionary.Search;
    let output='';
console.log(type);
    for (var i in data)
    {
        var go=0;
        if(type=='All'){
            go=1;   
        }
        else if(type=='movie' && data[i].Type=='movie'){
            go=1;
        }
        else if(type=='series' && data[i].Type=='series'){
            go=1;
        }
        if(go==1){
        output += `
            <ul >
            <a href="https://www.imdb.com/title/${data[i].imdbID}">
              <li><img src="${data[i].Poster}"></li>
              <li><h3 style="color:white;">${data[i].Title}</h3></li>
              </a>
            </ul>
          `;
           console.log(data[i].Title);
        }
        
    }
    document.getElementById('results').innerHTML = output;
});
}
