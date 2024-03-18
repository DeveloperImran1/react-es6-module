import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
// import add from '../../Utility/calculate';    // akta function k export kore import korle aivabe import hobe.
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utility/calculate';  // akadhik file export kore import korle aivabe hobe.
// aikhane divideTheFirstNumberByTheSecondNumber ai function er nam onek boro howai distructure korar somoi as divide kore niasi. Tahole niche oi function k call korar somoi ato boro name na likha sudho divide likhlai hobe.

const Sunglass = () => {
    const first = 55;
    const second = 199;
    // const sum = add(first, second)
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vagg = divide(first, second);   // distructure korar somoi as divide kore niasi . so oi boro nam use na kore sudho divide use kora jabe.
    
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;