import React from "react";
function A(props){
    const h= () => { 
      props.em('123')
    }
return (
    <button onClick={h}>clic</button>
)
}
export default A;