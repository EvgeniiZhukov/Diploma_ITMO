// import React, { useState } from 'react';
import Template from './Template';

function SignalTemplates(json) {
    // const [product, setProduct] = useState([]);
    return <div id = "signalTemplates" className="column">
        {json.file? (json.file.map(item => 
        <Template json ={item} key={item["asciiPartNumber"].toString() + item['signalName']}/>
        )) : ("")}
    </div>
};

export default SignalTemplates;