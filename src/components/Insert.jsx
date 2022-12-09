import React, { useState } from "react";
import '../styles/Insert.scss';

const Insert = ({insertHandler}) => {

  const [select, setSelect] = useState('지출');

  const [inputs, setInputs] = useState({
    date : '',
    type : '',
    text : '',
    price : ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const selectHandler = (e) => {
    setSelect(e.target.value);
    setInputs({...inputs, type : e.target.value})
  }

  const changeHandler = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const clickHandler = () => {
    insertHandler(inputs)
  }

  return (
    <div className="Insert">
      <form onSubmit={submitHandler}>
        <input type='date' name='date' className="dateInput"
               onChange={changeHandler}
        />
        <select value={select} name='type' onChange={selectHandler}>
          <option value='지출'>지출</option>
          <option value='수입'>수입</option>
        </select>
        <input type='text' name='text' className="textInput"
               onChange={changeHandler} placeholder="내용"
        />
        <input type='number' name='price'className="priceInput"
                onChange={changeHandler} placeholder="금액"
        />
        <button onClick={clickHandler}>입력</button>
      </form>
    </div>
  )
};

export default Insert;
