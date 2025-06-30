import './TemplateExtended.css'
function TemplateExtended (props){
    const changeValue = () =>{};
    // console.log("TEMPLATE EXTANDED : typeof", typeof(props.array));
return   <>
        <ul>
           {props.array.map(item =><li key={item[0].toString() + item[1].toString()}><h5>{item[0]}</h5><input type='text' value = {item[1]} onChange={changeValue}></input></li> )}
        </ul>
    </>
}
export default TemplateExtended;