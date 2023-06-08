import { useState } from 'react';
import ProTypes from 'prop-types';


export const CounterApp = ( {value} ) => {
    
    
    const [ counter, setCounter ] = useState( value );

    const handLeApp = () => { setCounter( counter + 1  ); }

    const restPrue = () => {setCounter( counter -1  );}
    
    const resetPrue = () => {setCounter( value  );  }
     return (
         <>
             <h1>CounterApp</h1>
             <p>{counter}</p>
             <button onClick={handLeApp}> +1 </button>
             <button onClick={restPrue} > -1 </button>
             <button onClick={resetPrue} > reset </button>
         </>
         )
 
 };

 CounterApp.ProTypes = {
    h1: ProTypes.string.isRequired,
    value: ProTypes.number.isRequired,
 };