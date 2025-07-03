import React, { useState } from 'react';
import './ComponentsStyles/Template.css';
import TemplateExtended from './TemplateExtended';
import { jsonToArray } from '../../code/JsonToArray';

function Template(props) {
    const arrayOfValues = jsonToArray(props.json);
    const [expanded, setExpanded] = useState(false);
    const [childrenVisible, setChildrenVisible] = useState(false);

    if (!props.json || typeof props.json !== 'object') return null;
    const getTitle = () => {
        if (props.json["master>name"]) 
            return props.json["master>name"];
        if (props.json['asciiPartNumber'] && props.json['signalName']) {
            return `${props.json['asciiPartNumber']} ${props.json['signalName']}`;
        }
        return 'Без названия';
    };
    const openProduct = () => {
        if (!expanded) {
            setExpanded(true);
        }
      
    };
    const saveProduct = () => {
        setExpanded(false);
    };
    const showChildren = () => {
        const newState = !childrenVisible;
        setChildrenVisible(newState);
        props.onShowChildren?.(props.json, newState);
    }
    return <div id = "dataObjectTemplates" className="template" onClick={openProduct}>
                <h3>{getTitle()}</h3>
                {expanded &&  
                <>
                    <TemplateExtended array={arrayOfValues} isSignal = {props.isSignal}/>
                    <div className = 'buttonSet'>
                        <button onClick = {saveProduct}>OK</button>
                            {props.showChildren && (
                                <button onClick={showChildren}>
                                    {childrenVisible ? 'Скрыть дочерние' : 'Показать дочерние'}
                                </button>
                            )}
                    </div>
                </>}
            </div>

};

export default Template;