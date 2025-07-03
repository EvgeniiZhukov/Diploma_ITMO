import Template from './Template';

function ProductTemplates({ file }) {
    if (!file || typeof file !== 'object' || !file.jsonData) {
        return <div className="column">Нет продуктов</div>;
    }

    const productData = file.jsonData["master>name"] ? [file.jsonData] : [];

    return (
        <div id="productTemplates" className="column">
            {productData.map(item => (
                <Template 
                    json={item}
                    key={item["master>partNumber"]}
                    showChildren={false} 
                />
            ))}
        </div>
    );
}

export default ProductTemplates;