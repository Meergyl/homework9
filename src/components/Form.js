import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [text, setText] = useState("");

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      text: text,
    };
    props.onDataHandler(data);
    setText("");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input onChange={textChangeHandler} value={text} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
