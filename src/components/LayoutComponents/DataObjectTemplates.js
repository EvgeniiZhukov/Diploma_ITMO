import Template from './Template';
function DataObjectTemplates({ file, onShowChildren }) {
    if (!file || !Array.isArray(file)) {
        return <div className="column">Нет данных объектов</div>;
    }

    return (
        <div id="dataObjectTemplates" className="column">
            {file.map(item => (
                <Template 
                    json={item}
                    key={item["master>partNumber"]}
                    onShowChildren={onShowChildren}
                    showChildren={true} 
                />
            ))}
        </div>
    );
}

export default DataObjectTemplates;