import { useEffect, useState } from "react";


const HookEffect = ()=> {
    //useState 훅
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    //1. useEffect(함수, []) - 화면이 mount(실행)된 이후에 동작됩니다
    /* 
    useEffect(() => {
        console.log(`렌더링완료, state값${name}`)
    });
    */

    //2. useEffect(함수, []) - 화면이 첫번째 mount에서만 실행됩니다. 화면이 실행됐을 때, 처음에만 실행
    /* 
    useEffect(()=> {
        console.log(`처음만 실행됩니다`) 
    }, []);
    */
    
    //3. useEffect(함수, [state]) - 특정값이 렌더링될 때만 실행됩니다. 선택적으로 실행시킬 수 있다
    useEffect(()=>{
        console.log(`age or name이 변경될 때 실행됩니다`);
    }, [age, name]);

    


    return(
        <>
            이름:<input type="text" onChange={handleName}/> <br/>
            나이:<input type="number" onChange={handleAge}/> <br/>

            이름: {name}, 나이: {age}
        </>
    )
}

export default HookEffect;