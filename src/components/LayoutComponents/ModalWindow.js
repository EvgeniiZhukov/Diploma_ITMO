import'./ComponentsStyles/ModalWindow.css';
import { TfiClose } from "react-icons/tfi";
import { signalAttributesFormatter } from '../../code/SignalAttributiesFormatter';
import { SignalAttributes } from '../LayoutComponents/SignalAttributes';
function ModalWindow(props) {
    const result = signalAttributesFormatter(props.modalContent);
    return <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Signal attributies</h2>                 
                    <button 
                        className="modal-close"
                        onClick={() => props.setModalOpen(false)}>
                        <TfiClose />
                    </button>
                </div>
                <div className="modal-text">
                    <div>{result.map(attribute =>(  
                    <SignalAttributes key={attribute.id} 
                        id={attribute.id} 
                        value={attribute.value}
                        type={attribute.type}
                        item1_id={attribute.item1.id}
                        item1_value={attribute.item1.value}
                        item2_id={attribute.item2.id}
                        item2_value={attribute.item2.value} 
                    /> ))}
                    </div>
                </div>
            </div>
        </div>
    </>                    

}
export default ModalWindow;