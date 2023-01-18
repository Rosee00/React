import { useEffect, useRef, useState } from "react";


const HookQ = ()=> {

    /* 
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.

    2. id, pw는 state로 관리합니다.
        로그인버튼 클릭시 공백이라면 공백인 태그에 포거스를 주세요.
        로그인버튼 클릭시 공백이아니라면 경고창으로 id와 pw를 출력해주세요. 
    */


    //1번
    const idTag = useRef(null); //Ref선언
    const pwTag = useRef(null); //초기값은 null로 설정, 아니면 undefind 

   useEffect( ()=>{
       idTag.current.focus(); //처음 마운트이후 id태그에 포커싱
    }, []);    

    

    //2번
    const [data, setData] = useState({id: '', pw: ''});

    /* 
    //인풋 id핸들링
    const handleId = (e)=> {
        setData({...data, ["id"]: e.target.value}) 
    }

    //인풋 pw핸들링
    const handlePw = (e)=> {
        setData({...data, ["pw"]: e.target.value})
    } 
    */
   
    //인풋태그 핸들링 -> name을 사용해서 위에 코드를 줄일 수 있다. 왜냐하면 키가 같으면 값이 변경O 아니면 변경X
    const handleChange = (e)=> {
        setData ({...data, [e.target.name]: e.target.value});
    }

    //클릭
    const handleClick = ()=> {
        // console.log(data);
        if(data.id === ''){
            idTag.current.focus(); //id태그
        } else if(data.pw === ''){
            pwTag.current.focus(); //pw태그
        } else {
            alert(`아이디: ${data.id}, 비밀번호: ${data.pw}`);
            setData({id: '', pw: ''});
        }


    }

    return(
        <div>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" onChange={handleChange} ref={idTag} value={data.id} /> <br/>
            <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} ref={pwTag} value={data.pw} /> <br/>
            <button onClick={handleClick}>로그인</button>

        </div>
    )
}
export default HookQ;
