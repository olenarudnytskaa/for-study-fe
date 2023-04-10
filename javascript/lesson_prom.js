const tablo = {
    tablo: "Exchange Currency",
}
for (const props in tablo) {
document.getElementById("logo01").innerHTML += (tablo[props]);
}

const AUD = {
        nameCurrency: "AUD" ,
        spaceName: '&emsp;',
        saleCurrency: 12.83,
        space: '&emsp;',
        purchaseCurrency : 12.85 ,
    };

for (const props in AUD) {
document.getElementById("logo").innerHTML += (AUD[props]);
}

const CAD = {
    nameCurrency: "CAD" ,
    spaceName: '&emsp;',
    saleCurrency: 13.21, 
    space: '&emsp;',
    purchaseCurrency: 13.21,
};

for (const props in CAD) {
    document.getElementById("logo1").innerHTML += (CAD[props]);
}

const CZK = {
    nameCurrency:"CZK" ,
    spaceName: '&emsp;',
    saleCurrency: 10.67, 
    space: '&emsp;',
    purchaseCurrency: 15.67 ,
};
for (const props in CZK) {
    document.getElementById("logo2").innerHTML += (CZK[props]);
}

const DKK = {
    nameCurrency: "DKK " ,
    spaceName: '&emsp;',
    saleCurrency : 12.52,
    space: '&emsp;',
    purchaseCurrency: 14.52,
} ;
for (const props in DKK) {
    document.getElementById("logo3").innerHTML += (DKK[props]);
}

const HUF = {
    nameCurrency: "HUF " ,
    spaceName: '&emsp;',
    saleCurrency: 15.52 ,
    space: '&emsp;',
    purchaseCurrency: 12.52,
};
for (const props in HUF) {
    document.getElementById("logo4").innerHTML += (HUF[props]);
}

const EUR = {
    nameCurrency: "EUR",
    spaceName: '&emsp;',
    saleCurrency:12.52,
    space: '&emsp;',
    purchaseCurrency: 10.52 ,
}

for (const props in EUR) {
    document.getElementById("logo5").innerHTML += (EUR[props]);
}
// for (const props in EUR.nameCurrency) {
    //  document.getElementById("logo5").innerHTML += (EUR.nameCurrency[props]);
    
// }