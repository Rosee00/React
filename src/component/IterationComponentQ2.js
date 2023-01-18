import { useState } from "react";


/* 반복에서는 항상 key를 줘야한다!!! */
const IterationComponentQ2 = () => {
    //1. select는 컴포넌트반복으로 option태그를 생성
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const newSelect = select.map((item, index) => 
        <option key={index}> {item} </option>
    );
    
    //2. data는 state로 관리하고 화면에 li태그로 반복합니다.
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const [list, setList] = useState(data);
    const newList = list.map( item => <li key={item.id}> {item.type} - {item.teacher} </li>)


    //3. 셀렉트박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.
    const handleChange = (e) => {
        //console.log(v);
        /* event로 값을 넘겨받아서 event.target.value로 바뀐 데이터를 받음 */
        let result =  data.filter( item => item.type === e.target.value);
        setList(result);
        
    }

    //4. 숙제: 검색기능 만들기 
    //검색기능 - 대소문자 구분하지 않고 teacher, type에 포함된 데이터만 필터링
    const [inputData, setInputData] = useState('');
    const handleInput = (e)=> {
        setInputData(e.target.value);
    }

    // const [findData, setFindData] = useState('');
    const handleFind = ()=> {
        let inputResult = data.filter( item=> item.type.toLowerCase().includes(inputData.toLowerCase()) || item.teacher.includes(inputData));
        setList(inputResult);
        
    }


    return(
        <>
            <h3>컴포넌트 반복 실습</h3>
            {/* 숙제 */}
            <input type="text" onChange={handleInput} />
            <button type="button" onClick={handleFind}>검색</button> <br/>

            {/* 수업 */}
            <select onChange={handleChange}> 
                {newSelect}
            </select>
            <ul>
                {newList}
            </ul>
        
        </>

    )
}

export default IterationComponentQ2;