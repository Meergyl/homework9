
import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Todos from './components/Todos';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDo App in ReactJS</h1>
        <Todos />
      </div>
    );
  }
}

export default App;







  // // const[type,setType]=useState("users")
  // // const[data,setData]=useState([])
  // // useEffect(()=>{
  // //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  // // .then(response => response.json())
  // // .then(json =>setData(json))
    

  // // },[type])
  // // useEffect(()=>{
  // //     console.log("ComponentDidMount",[])
  // // })
 
 
  //     {/* <h1>Resyrs:{type}</h1>
  //     <button onClick={()=>setType("users")}>Пользователи</button>
  //     <button  onClick={()=>setType("todos")}>Todo</button>
  //     <button  onClick={()=>setType("posts")}>Посты</button>
  //     <pre>{JSON.stringify(data,null,2)}</pre> */}
