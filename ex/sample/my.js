var nm = 'android';
var req = [
    'Node 9',
    'Vs Code',
    'Vs Code Plugins',
    'typescript',
    'angular cli',
    'Ubuntu, Windows or Mac'
]

var preReq = [
    'Html',
    'Css',
    'JS',
    'Bootstrap',
    'Typescript'
]
function btnOkay() {
    document.getElementById('myH1').innerText = nm;
}


setInterval( function(){
    document.getElementById('tmr').innerText = new Date().toString();
}, 1000);