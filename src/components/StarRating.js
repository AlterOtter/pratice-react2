import React,{useState} from "react";
import {FaStar} from "react-icons/fa";

const createArray = length =>[...Array(length)];


const Star=({selected=false , onSelect})=>(
    <FaStar color={selected?"red":"grey"} onClick={onSelect} />
);

export default function StarRating({SelectedStars,totalStars=5,onRate= f=>f}){
    return (
        <>
            {createArray(totalStars).map((n,i)=>(
                <Star 
                    key={i} selected={SelectedStars>i} 
                    onSelect={()=>onRate(i+1)} ></Star>
                ))}
            <p>
                {SelectedStars}/{totalStars}
            </p>
        </>
        );
}