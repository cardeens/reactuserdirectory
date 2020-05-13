import React from "react";

function Row(props) {

    return (
        <tr className="row">
            <td>
                <img src={props.image} alt={props.name}/>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{window.moment(props.dob).format("MM-DD-YYYY")}</td>
        </tr>
    );
}

export default Row;