function fetchtoserver(){
    return fetch('./cerver.json');
}
fetchtoserver().then((response)=>{return response.json}).then((data=>console.log(data)));