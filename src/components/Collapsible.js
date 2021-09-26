import React from 'react';
import './Collapsible.css';

function Collapsible(props) {

    return (
        <div class="wrap-collabsible">
            <input id={"collapsible" + props.key} className="toggle" type="checkbox" value={props.key} />
            <label for={"collapsible" + props.key} className="lbl-toggle">{props.name ? props.name : "default_name"}</label>
            <div className="collapsible-content">
                <div className="content-inner">
                    {props.content ? props.content : <p>"default_content"</p>}
                </div>
            </div>
        </div>
    )
}

export default Collapsible
