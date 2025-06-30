import React, { useState } from 'react';
import './Template.css';
import TemplateExtended from './TemplateExtended';
import { jsonToArray } from '../../code/JsonToArray';

function Template(props) {
    console.log("Template props", props.hideFiles);
    const arrayOfValues = jsonToArray(props.json);
    const [state, setState] = useState(false);
    const openProduct = () => {
        if (!state) {
            setState(true);
        }
      
    };
    const saveProduct = () => {
        setState(false);
    };
    const showChild = () => {
    }
    return <div id = "dataObjectTemplates" className="template" onClick={openProduct}>
                <h3>{props.json["master>name"]?(props.json["master>name"]):(props.json['asciiPartNumber'] +' '+props.json['signalName'])}</h3>
                {state &&  <><TemplateExtended array={arrayOfValues}/>
                <div className = 'buttonSet'>
                    <button onClick = {saveProduct}>OK</button>
                    <button onClick = {showChild}>Показать дочерние</button> 
                </div></>}
            </div>

};

export default Template;