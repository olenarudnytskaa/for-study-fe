import { rerenderEntiretree } from "..";

let state = [
    {
        one:{ name:'Kerzen Herz',
        img: './candels/IMG_7975.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        two:{ name:'Kerzen Herz',
        img: './candels/IMG_7982.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        three:{ name:'Kerzen Herz',
        img: './candels/IMG_7989.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        four:{ name:'Kerzen Herz',
        img: './candels/IMG_8495.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        five:{ name:'Kerzen Herz',
        img: './candels/IMG_8497.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        sex:{ name:'Kerzen Herz',
        img: './candels/IMG_8769.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        seven:{ name:'Kerzen Herz',
        img: './candels/IMG_8770.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        eight:{ name:'Kerzen Herz',
        img: './candels/IMG_8771.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        nine:{ name:'Kerzen Herz',
        img: './candels/IMG_8775.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        ten:{ name:'Kerzen Herz',
        img: './candels/IMG_8778.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        eleven:{ name:'Kerzen Herz',
        img: './candels/IMG_8782.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        twelv:{ name:'Kerzen Herz',
        img: './candels/IMG_8786.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        thirteen:{ name:'Kerzen Herz',
        img: './candels/IMG_7982.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },
        fourteen:{ name:'Kerzen Herz',
        img: './candels/IMG_7982.png',
        weight: '55 gram',
        price: '10ch',
        material: 'soya wax'
        },


    }
]

export const Subscrib = (observer) =>{
rerenderEntiretree(observer)
}
// export function showProductCard (state = []) {
//     const newElementsArr = state.map(({name, img, weight, price, material}) =>  {
//         return  createCardProduct(name, img, weight, price, material,  {name, img, weight, price, material})
//      }) 
 
//      document.querySelector("#group")
//      .append(...newElementsArr)
// }
export default state;
// export default createCardProduct;
