


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


const nameReducer = (state, action) => {

    state = {...state, [action.name]: action.value}; //위에 코드 한줄로 작성

    return state;
} 


//기본디포트 모형
export{myReducer, nameReducer}; //객체를 반환, 그 객체 안에는 myReducer라는 함수가 들어있음


