var maxComic
var currentComic

window.onload = function(){
    //hämta senaste comic
    getComic('latest');
    //sätter funktionalitet för nav knappar

}

function getComic(which){
    //Hämta(fetch) data från xkcd api
    fetch('https://xkcd.vercel.app/?comic='+which)
        .then(function(response){
            //Kolla om svaret är ok(200)
            if(response.status === 200){
                return response.json();
            } else {
                throw new Error('Failed to load comic');
            }
        })
        .then(function(data){
            //Uppdatera maxComic värde
            if(maxComic < data.num){
                maxComic=data.num;
            }
            //Skicka json data för behandling till DOM
            console.log(data);
            appendComic(data);
        })
        .catch(function(error){
            console.log('Error: ', error);
        })
}

