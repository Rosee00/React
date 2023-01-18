import { useRef, useState } from "react";


const HookRef = () => {
    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''});
    //인풋
    const handleChange = (e)=> {
        setForm({...form, ["data"]: e.target.value})
        console.log(form);
    }

    //등록
    const handleClick = ()=> {
        setForm({data: '', result: form.data})

        //Ref사용
        // console.log(inputTag);
        // console.log(inputTag.current);
        // console.log(inputTag.current.value);

        inputTag.current.focus(); //등록버튼 클릭후, 인풋태그에 포커싱이됨


    }

    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성을 넣습니다
    const inputTag = useRef(); //선언
    

    return(
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )
}
export default HookRef;