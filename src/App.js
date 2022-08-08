

import { useState } from 'react';
import './App.css';
import AddText from './components/AddText';
import ItemBox from './components/ItemBox';

const expense = [{
}]




function App() {
  const [data,setData] = useState(expense)
  const  dataHandler = (enteredData) => {
    console.log(enteredData);
    setData((prevState ) => [...prevState,enteredData])
    console.log(enteredData);
  }

  return (
    <div className='App'>
        <AddText onDataHandler ={dataHandler}/>
      {data.map((el) => {
        return(
          <ItemBox
          
          text = {el.text}
          date ={el.date}
           /> 
         
        )

      })}
    </div>
   
  );
}

export default App;
