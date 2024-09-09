// 컴포넌트를 만들 땐 무조건 대문자를 써준다. 컴포넌트는 하나의 태그라고 생각해도 좋음

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Log from './Log'

const Test2 = () =>{
    const [txt, setTxt] = useState("");
    const [logs, setLogs] = useState([]);

    const onChangeTxt = (e) => {
        setTxt(e.target.value);
        setLogs([...logs, e.target.value]);
    }
    return (
        <div className="Test2">
            <input name="text" onChange={onChangeTxt}/>
            <Log />
            {logs.map((str, i) => i%2 === 0 && <Log i={i} str = {str}/>)}
        </div>
    );
}

export default Test2;