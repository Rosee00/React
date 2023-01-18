import { useRef, useState } from "react";


const HookQ2 = () => {

    /* 
    실습(할일목록 만들기)
    1. state는 {todo: '', list: [] }로 관리하세요
    2. 할일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그립니다
    3. 등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다
    */

    const inputRef = useRef(null);

    const [data, setData] = useState({todo: '', list: [] });

    //input데이터 todo에 저장
    const handleInput = (e)=> {
        setData({...data, ["todo"]: e.target.value})
    }
    
    //클릭, 추가하기
    const handleClick = ()=>{
        //concat을 사용해서 리스트추가
        //const newList = data.list.concat(data.todo); //기존 list는 유지, 새롭게 합쳐진 리스트를 반환   

        //push를 사용해서 리스트추가
        const newList = data.list; //list를 복사해서 newList에 넣어줌-> 복사를 해주는 이유는 state는 바로 수정이 불가능하기때문에 push를 바로 쓸 경우 state문법에 위배된다
        newList.push(data.todo); //복사한 newList에 push를 사용해서 input값을 추가해준다 

        setData({todo: '', list:newList}) //복사된 newList 
        // console.log(data);

        inputRef.current.focus();
        
    }

    //리스트 화면에 뿌리기
    const addList = data.list.map((item, index) =>
        <li key={index}>{item}</li>
    ) 



    return(
        <div>
            <h3>ref로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" onChange={handleInput} value={data.todo} ref={inputRef}/>
            <button onClick={handleClick}>등록하기</button>
            <ul>
                {addList}
            </ul>
        </div>
    )
}
export default HookQ2;