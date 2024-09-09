// 컴포넌트를 만들 땐 무조건 대문자를 써준다. 컴포넌트는 하나의 태그라고 생각해도 좋음
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Test2 = () =>{
    const [state, setState] = useState({text:"", log:[]});
    const onChangeHandler = (e) => {
        const {text, value} = e.target;
        return setState({...state, [text]:value, log:[...state.log, value]});
    }
    return (
        <div className="Test2">
            <input name="text" onChange={onChangeHandler} value={state.name}/>
            {state.log.map((value)=> <div> {value}</div>)}
        </div>
    );
}

export default Test2;