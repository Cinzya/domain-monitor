import React from 'react';
import zahnrad from "../img/zahnrad.svg";
import muelleimer from "../img/muelleimer.svg";

export const Row = (props) => (
   
    <tr key={props.id}>
        <td><img src={zahnrad} alt="Zahnradbutton für Einstellungen"/></td>
        <td id="url">{props.url}</td>
        <td><span className={props.availability}>{props.availability}</span></td>
        <td id="checked">{props.checked}</td>
        <td id="added">{props.added}</td>
        <td>
            <form >
                <input
                    id="muell"
                    className="test"
                    onClick={props.delete}
                    type="image"
                    src={muelleimer}
                    alt="Mülleimer als Button"/>
            </form>
            </td>
    </tr>
    
);
export default Row;

