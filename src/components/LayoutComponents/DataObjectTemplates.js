// import React, { useState } from 'react';
import Template from './Template.js';

function DataObjectTemplates(json) {
    // const [product, setProduct] = useState([]);
    return <div id = "dataObjectTemplates" className="column">
            {json.file? (json.file.map(item =><Template json ={item} key ={ item["master>partNumber"]}/>)) : ("")}
    </div>
};

export default DataObjectTemplates;