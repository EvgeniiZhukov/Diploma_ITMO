// import { useState } from 'react';
import Template from './Template.js';

function ProductTemplates(json) {
    // const [product, setProduct] = useState([]);
    // const newDiv = <div key={product.length}>New div</div>;
    // setProduct([...product, newDiv]);
    return <div id = "productTemplates" className="column" >
        {json.file.jsonData["master>name"]? ([json.file.jsonData].map(item =>
        <Template 
            json = {item} key = {item["master>partNumber"]}
        />)) : ("")}
    </div>
};

export default ProductTemplates;