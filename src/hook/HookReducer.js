
//리듀서 선언 (현재의state, 업데이트에 필요한정보)
import { useEffect, useReducer } from "react";

//외부에 만들어 놓은 리듀서를 가져와서 사용...
import {myReducer} from './HookReducerComponent';


//action을 판단해서 state 체인지
/* 
const myReducer = (state, action)=> {
    //action객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase'){
        state = {value: state.value +1};

    } else if(action.type === 'decrease') {
        state = {value: state.value -1};

    } else if(action.type === 'reset') {
        state = {value: 0};         
    }

    return state; //변환된 값을 리턴한다 꼭 달기 
}
*/

const HookReducer = () => {
    //const [현재값, 리듀서를 업데이트할 수 있는 함수] = userReducer( 외부에서 사용할 리듀서함수, 리듀서의 초기갑); 
    const [state, func] = useReducer(myReducer, {value: 0});

    const up = ()=>{
        func({type: "increase"});
    }

   /*  
   useEffect(()=>{
        func({type: 'reset'}); //리듀서를 실행시키고, myReducer의 action으로 전달됩니다.
    }, [])

    console.log(state); 
    */
    
    return(
        <>
            <button onClick={up}>증가</button>
            <button onClick={()=> func({type: "decrease"})}>감소</button>
            <button onClick={()=>func({type: "reset"})}>초기화</button>
            결과 {state.value}
        </>

    )
}

export default HookReducer;