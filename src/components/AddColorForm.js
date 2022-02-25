import React,{useState} from "react";
import { useInput } from "../customhook/useInput";
import {useColors} from "./ColorProvider"; 
export default function AddColorForm({onNewColor=f=>f}){
    const [titleProps,resetTitle]=useInput("");//참조하는 색이름
    const [colorProps,resetColor]=useInput("#000000");//16진수 색에 접근하기 위해 참조
    const {addColor} = useColors();

    const submit = e =>{ 
        console.log(titleProps.value);
        e.preventDefault();
        addColor(titleProps.value,colorProps.value);
        resetColor();
        resetTitle();
    };

    return (
        <form onSubmit={submit}>
            <input value={titleProps.value} onChange={titleProps.onChange} type="text" placeholder="Color Title ..." required />
            <input value={colorProps.value} onChange={colorProps.onChange}  type="color" required />
            <button>ADD</button> 
        </form>
    );

}