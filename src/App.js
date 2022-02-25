import React,{useState} from 'react';
import ColorList from './components/ColorList';
import colorData from './data/color-data.json';
import AddColorForm from './components/AddColorForm';
import {v4} from "uuid";
function App() {
  const [colors,setColor] = useState(colorData);

  var onRemove =(id) =>{
    const newColors = colors.filter(color=> color.id !== id);
    setColor(newColors);
  }

  var onRateColor=(id,rating)=>{
    const NewColors = colors.map(color => color.id === id ?{...color,rating}:color);
    setColor(NewColors);
  }

  return (
    <>
      <ColorList ></ColorList>
      <AddColorForm onNewColor={(title,color)=>{
        const newColors=[...colors,{
          id:v4(),
          rating:0,
          title,
          color
        }]
        setColor(newColors);
      }}></AddColorForm>
    </>
    
    );
}

export default App;
