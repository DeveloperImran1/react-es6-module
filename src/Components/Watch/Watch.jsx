// json data manualy collect korar jonno chatGpt k bolte hobe: "give me five smart watch array of object format data or json data."
import React from 'react';


const Watch = ({watch}) => {
    console.log(watch)
    const {name, price} = watch;
    return (
        <div>
           <h2>Watch: {name}</h2>
           <p>Price: {price} </p>
        </div>
    );
};

export default Watch;