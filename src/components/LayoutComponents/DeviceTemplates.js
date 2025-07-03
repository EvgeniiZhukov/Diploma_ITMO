import Template from './Template';

function DeviceTemplates({ file, onShowChildren }) {
    if (!file || !Array.isArray(file)) {
        return <div className="column">Нет устройств</div>;
    }

    return (
        <div id="deviceTemplates" className="column">
            {file.map(item => (
                <Template 
                    json={item}
                    key={item["master>partNumber"]}
                    onShowChildren={onShowChildren}
                    showChildren={true} // Явно включаем кнопку
                />
            ))}
        </div>
    );
}

export default DeviceTemplates;