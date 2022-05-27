// accept input
// fetch the data
// append the data

// url='http://www.omdbapi.com/?t=avenger'

// const=`http://www.omdbapi.com/?t=${title}&apikey=ef650941`

let movie_div=document.getElementById('movies');

let id;

async function searchMovies(q){
    // url prepare;
    try{
        let url=`https://www.omdbapi.com/?s=${q}&apikey=ef650941`;
   
    let res= await fetch(url)
    let data= await res.json() //res.json()---just to collect the data
    // console.log(data)
    
    return data.Search;

    }catch(err){
        console.log(err)
    }
    
}

//--------------append------------------

function append(movies){
    movie_div.innerHTML=null;
    if(movies===undefined){
        return false;
    }
    movies.forEach(function(el){
        let p=document.createElement('p')
        p.innerText=el.Title;

        movie_div.append(p);
    })
}
//--------------------------------------------
async function main(){
    let query=document.getElementById('query').value;
    // console.log(query)
    let response=searchMovies(query)
    let data=await response;
    // console.log(x) 
    //searchMovies() return the promises
    //async function return the promise

    append(data)
    console.log(data)

}

//-------------debouncing-----------

// main('a') ---> setTimeout(main,1000,'a') -->data
// main('av') --> get prev time id

function debounce(fun,delay){
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
        fun();
    
    },delay)

}
