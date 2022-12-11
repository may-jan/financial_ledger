import React, { useEffect, useState } from "react";
import '../styles/Insert.scss';

const Insert = ({insertHandler, get, use}) => {

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
  }

  useEffect(() => {
    setInputs({...inputs, type : select})
  },[select])


  const changeHandler = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const clickHandler = () => {
    if(inputs.date === '' || inputs.text === '' || inputs.price === ''){
      return alert('항목이 제대로 입력되지 않았습니다 다시 입력해주세요')
    }

    if(inputs.type === '지출'){
      use(parseInt(inputs.price))
    }else if(inputs.type === '수입'){
      get(parseInt(inputs.price))
    }

    insertHandler(inputs)
  }

  return (
    <div className="Insert">
      <form onSubmit={submitHandler}>
        <input type='date' name='date' className="dateInput"
               onChange={changeHandler}
        />
        <select value={select} name='type'className="typeselect"
                onChange={selectHandler}>
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
