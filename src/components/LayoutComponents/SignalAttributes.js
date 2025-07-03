import "./ComponentsStyles/SignalAttributes.css";
export function SignalAttributes(props) {
    console.log("SignalAttributes",props);
  return (
    <p className="line">
      <span className="item"> &lt;item</span>
      <span className=" attribute"> id =</span> {props.id}
      <span className=" attribute"> type =</span>
      {props.type}
      <span className="attribute"> value =</span>
      {props.value}
      <span className="item">&gt;</span><br />
        <span>         </span>
        <span className="item"> &lt;item</span>
        <span className=" attribute"> id =</span> {props.item1_id} <span className="item">&gt;</span>{props.item1_value} <span className="item"> &lt;/item&gt;</span><br />
        <span>         </span>
        <span className="item"> &lt;item</span> 
        <span className=" attribute"> id =</span> {props.item2_id} <span className="item">&gt;</span>{props.item2_value} <span className="item"> &lt;/item&gt;</span><br /> 

      <span className="item"> &lt;/item&gt;</span>
    </p>
  );
}