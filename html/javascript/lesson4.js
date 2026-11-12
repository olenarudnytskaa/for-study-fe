const currency = 
{
    AUD : {
        nameCurrency: "AUD" ,
        saleCurrency: 12.83,
        purchaseCurrency : 12.85 ,
        logoCurrency : "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
    },
    CAD : {
        nameCurrency: "CAD" ,
        saleCurrency :13.21, 
        purchaseCurrency : 13.21,
        logoCurrency :"https://www.worldatlas.com/r/w960-q80/img/flag/ca-flag.jpg"
    },
    CZK : {
        nameCurrency:"CZK" ,
        saleCurrency: 0.67, 
        purchaseCurrency: 0.67 ,
        logoCurrency : "https://cdn.britannica.com/86/7886-004-323985BD/Flag-Czech-Republic.jpg"
    } ,
    DKK : {
        nameCurrency: "DKK " ,
        saleCurrency : 2.52,
        purchaseCurrency: 2.52,
        logoCurrency :"https://flagpedia.net/data/flags/w1160/dk.webp",
    } ,
    HUF : {
        nameCurrency: "HUF " ,
        saleCurrency: 5.52 ,
        purchaseCurrency: 2.52,
        logoCurrency :"https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg",
    } ,
    EUR : {
        nameCurrency: "EUR",
        saleCurrency:12.52,
        purchaseCurrency: 10.52 ,
        logoCurrency :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/510px-Flag_of_Europe.svg.png"
    }
};


const names = [ "EUR", "HUF", "DKK", "CZK", "CAD" , "AUD" ] ;
names.forEach((v) => {
    document.getElementById("EUR","HUF", "DKK", "CZK", "CAD" , "AUD").innerHTML += `
    <img src="${currency[v].logoCurrency}">
    &nbsp ${currency[v].nameCurrency} 
    &nbsp ${currency[v].saleCurrency}
    &nbsp  ${currency[v].purchaseCurrency}
    `;
});





