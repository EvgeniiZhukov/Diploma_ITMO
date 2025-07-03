import './ComponentsStyles/TemplateExtended.css'
import { FiEdit } from 'react-icons/fi'; 
import { useState } from 'react';
import ModalWindow from './ModalWindow';

function TemplateExtended (props){
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const changeValue = () =>{};
    const handleEditClick = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };
        if (!props.isSignal) {
        return   <>
                <ul>
                {props.array.map(item =>
                    <li key={item[0].toString() + item[1].toString()}>
                        <h5>{item[0]}</h5>
                        <input type='text' value = {item[1]} onChange={changeValue}></input>
                    </li> )}
                </ul>
            </>
        }
        return (
            <>
                <ul>
                    {props.array.map((item, index) => (
                        <li key={`${item[0]}-${index}`}>
                            <h5>{item[0]}</h5>
                            <input type="text" value={item[1]} onChange={changeValue} />
                            {index === props.array.length - 1 && (
                                <button 
                                    className="edit-button"
                                    onClick={() => handleEditClick(item[1])}
                                >
                                    <FiEdit />
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
                {modalOpen && (<ModalWindow modalContent={modalContent} setModalOpen={setModalOpen} />)}
            </>

        );

}
export default TemplateExtended;