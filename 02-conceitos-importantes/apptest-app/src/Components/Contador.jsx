
import React from "react";
 







export function Counter(){

    function Increment(){
     setcouter(counter + 1);
    }
    
    const [counter, setcouter] = React.useState(0);
    
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={Increment} type="button">
                Increment
            </button>
        </div>
    );
}
