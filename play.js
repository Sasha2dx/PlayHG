let ps;
let game;

let getItems = location.search.substr(1).split("&");

for (let index = 0; index < getItems.length; index++) {
    let tmp = getItems[index].split("=");
    if (tmp[0] === 'g') game = tmp[1];
    else if (tmp[0] === 'ps') ps = tmp[1];
}

if (game){

    let url = 'https://holy-games.space/play/'+game
    if (ps) url +='?ps='+ps;
    url += location.hash;

    let iframe = document.getElementById("game");
    iframe.src = url;

} else {
    window.location.href = "https://holy-games.space";
}
