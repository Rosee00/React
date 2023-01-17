import { useState } from "react";


const IterationComponent2 = () => {
    
    //1.반복할 데이터 (state로 관리)
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'},
    ];

    const [list, setList] = useState(arr);

    //2.map함수를 이용해서 li태그로 생성
    const newList = list.map( item => 
        <li key={item.id} onDoubleClick={ ()=> { handleRemove(item.id) }}> {/* 아이디를 매개변수로 던져줄 수 있음 */}
            {/*이벤트(handleRemove)는 단순 연결, 익명함수 안에 핸들리무브를 리턴(호출) -> handleRemove함수에 매개변수를 줄 수 있다 */}
            {item.topic}
        </li>
    ); 
    
    //3.인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e)=> {
        setData(e.target.value);
    }

    //4.추가하기 버튼 클릭시 input의 값을 list 마지막에 추가
    const handleClick = ()=> {
        let obj = {id: list[list.length-1].id+1, topic: data } //id는 list의 마지막 요소의 id+1
        //list.push(obj); //err state를 직접 변경x
        let newArr = list.concat(obj); //원본list는 수정하진 x, obj만 추가해서 새로운 리스트반환
        setList(newArr); //state변경 
        setData(''); //사용자가 입력한 input값 초기화
        
    }

    //5.삭제기능(더블클릭) -> 삭제에는 리스트의 아이디가 필요함
    //화살표 함수는 익명함수기 때문에 호이스팅이 불가
    //이벤트안에서 함수를 호출로 연결하는 방법
    //onClick={ () => 함수() }
    const handleRemove = (a) => {
        //console.log(a); //id(키)를 받음

        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        //const ex = [1,2,3,4,5].filter ( (item) => item != 3)

        const newList = list.filter( item => item.id !== a); //더블클릭한 데이터요소는 지워짐
        setList(newList);

    }



    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList} 
            </ul>
        </>
    )
}
export default IterationComponent2;