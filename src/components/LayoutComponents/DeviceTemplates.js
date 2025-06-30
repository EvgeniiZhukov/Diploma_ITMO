import Template from './Template';
import React, { useState } from 'react';
function DeviceTemplates(json) {
    console.log("Device template:", json.hideFiles);
    console.log(json.file);
    return <div id = "deviceTemplates" className="column">
        {json.file? (json.file.map(item => 
            <Template json = {item} key = {item["master>partNumber"]} hideFiles={json.hideFiles}
        />)) : ("")}
    </div>
};

export default DeviceTemplates;