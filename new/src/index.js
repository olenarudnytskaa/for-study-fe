import React from "react";
import  ReactDOM from "react-dom";
import './style.css';

function Goroskop(){
    const nameGoroskop = ['Овен ', 'Телец ', 'Близнецы', 'Рак','Лев', 'Дева', 'Весы' , 'Скорпион ','Стрелец', 'Козерог', 'Водолей' , 'Рыбы'  ];
    const dateGoroskop = [ '21.03 – 20.04', '21.04 – 21.05','22.05 – 21.06', '23.07 – 21.08', '22.08 – 23.09', '24.09 – 23.10', '24.10 – 22.11', '24.10 – 22.11', '23.11 – 22.12', '23.12 – 20.01', '21.01 – 19.02', '20.02 – 20.03']
    return  (   
        <div className="main">
            <div className="left">
{nameGoroskop.map((el, i) =>{
return <div className="name" key={i+1}>{el}</div>;
})}
</div>
 <div className="right">
 {dateGoroskop.map((el, i) =>{
   return <div className="date"key={i+2}>{el}</div>;
 })}
 </div>
 </div>

  )} 
ReactDOM.render(<Goroskop></Goroskop>, document.getElementById("rude"));

export default Goroskop;

// console.log('Server is running on http://localhost:3000');


