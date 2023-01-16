import { useState } from "react";


const EventComponentQ2 = () => {
    const[change, setChange] = useState({input: '', result: ''});
    
    const handleChange = (e) => {
        setChange({input: e.target.value, result: change.result}); 
        //인풋이 바뀌면 복사된 기존 코드와 변경된 데이터의 키가 일치하는 보고 일치하면 input태그에 입력된 데이터로 변경 저장
        
    }
    const handleClick = () => {
        setChange({input: '', result: change.input}) 
        //버튼을 클릭하면 input에 입력된 값을 result에 저장하고 input은 공백으로 변경 
        
    }
    
    
    /*  
    객체로 묶지 않고 state을 두개 만들어서 코드를 작성할 수 있다.
    
    //핸들링하는 state 하나, 결과를 저장하는 state 하나
    const [data, setData] = useState(''); //인풋데이터
    const [change, setChange] = useState(''); //결과데이터
    
    const handleChange = (e) => {
        setData(e.target.value); //비동기로 자동변환
        //console.log(data); //이전값(공백)이 출력된다(정상)
    }
    
    const handleClick = (e) => {        
        setChange(data);
        setData('');
    }
    */

    return (
        <>
        <h3>인풋데이터 핸들링(실습)</h3>
        <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리 <br/>
            리엑트 힌트는? 아마도 state는 두개가 필요할 듯? 
        </p>

 
        <input type="text" onChange={handleChange} name="input" value={change.input}></input>
        <button type="button" onClick={handleClick} name="ressult">추가하기</button>

        <h3>결과</h3>
        <p>{change.result}</p>
    
        </>
    )

}
export default EventComponentQ2;