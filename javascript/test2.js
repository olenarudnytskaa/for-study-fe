const zone = document. querySelector('#zone1');

const zone2 = document .querySelector('#ufo');

const ufo = document.querySelector('#ufo');

zone.ondragover = allowDrop;

zone2.ondragover = allowDrop;

function allowDrop (event) {
event .preventDefault();
}
ufo.ondragstart = drag;

function drag (event) {
event .dataTransfer.setData('id', event .target.id) ;

}

zone.ondrop = drop;
zone2.ondrop = drop;

function drop (event) {
let itemId = event. dataTransfer.getData('id');
console. log (itemId) ;
event .target.append(document. getElementById(itemId));

}