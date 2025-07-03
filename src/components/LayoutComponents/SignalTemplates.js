
import Template from './Template';
function SignalTemplates({ file }) {
    if (!file || !Array.isArray(file)) {
        return <div className="column">Нет сигналов</div>;
    }

    return (
        <div id="signalTemplates" className="column">
            {file.map(item => (
                <Template 
                    json={item}
                    key={item['asciiPartNumber'] + item['signalName']}
                    showChildren={false}
                    isSignal={true} // Помечаем как сигнальный шаблон
                />
            ))}
        </div>
    );
}

export default SignalTemplates;