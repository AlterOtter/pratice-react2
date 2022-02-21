import React,{useState} from "react";
import {FaStar} from "react-icons/fa";

const createArray = length =>[...Array(length)];


const Star=({selected=false , onSelect})=>(
    <FaStar color={selected?"red":"grey"} onClick={onSelect} />
);

export default function StarRating({totalStars=5}){
    const [SelectedStars,setStars] = useState(3);


    return (
        <>
            {createArray(totalStars).map((n,i)=>(
                <Star 
                    key={i} 
                    selected={SelectedStars>i} 
                    onSelect={()=>setStars(i+1)} ></Star>
                ))}
            <p>
                {SelectedStars}/{totalStars}
            </p>
        </>
        );
}