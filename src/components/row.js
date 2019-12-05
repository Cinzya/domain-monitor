import React from 'react';
import zahnrad from "../img/zahnrad.svg";
import muelleimer from "../img/muelleimer.svg";

export const Row = (props) => (
    <tr key={props.id}>
        <td><img src={zahnrad} /></td>
        <td>{props.url}</td>
        <td><span>{props.availability}</span></td>
        <td>{props.time}</td>
        <td></td>
        <td><img src={muelleimer} /></td>
    </tr>
);