import React from 'react';
import zahnrad from "../img/zahnrad.svg";
import muelleimer from "../img/muelleimer.svg";
import burgermenu from "../img/burgermenu.svg";

export const Row = (props) => (

    <tr key={props.id}>

        <td> 
        <div 
        //Macht das Burgermenü draggable
        className="drag"
        draggable={true}>
        <img src={burgermenu}/> 
        </div> </td>
    
        <td><img src={zahnrad} /></td>
        <td>{props.url}</td>
        <td><span className={props.availability}>{props.availability}</span></td>
        <td>{props.time}</td>
        <td></td>
        <td><img src={muelleimer} /></td>

    </tr>
);