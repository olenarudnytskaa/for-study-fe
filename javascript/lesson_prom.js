const Currency = [
{
    AUD: {
    saleCurrency: 12.83,
    purchaseCurrency : 12.85 ,
    },
    CAD: {
    saleCurrency: 13.21, 
    purchaseCurrency: 13.21,
    },
    CZK:{
    saleCurrency: 10.67, 
    purchaseCurrency: 15.67 ,
    },
    DKK: { 
    saleCurrency : 12.52,
    purchaseCurrency: 14.52,
    },
    HUF:{
    saleCurrency: 15.52 ,
    purchaseCurrency: 12.52,
    },
    EUR:{
    saleCurrency:12.52,
    purchaseCurrency: 10.52 ,
    }, 
    toString(){
        return `Currency exchange <br> ${this.EUR} `
            }
}
 
    ]
    const currency = new Currency('Currency exchange')
    console.log( `${currency}`)
   








