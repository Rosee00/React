
/* 
이미지를 가져오는 방법

1.외부 서버에서 경로를 참조받음 (가장일반적인 방법)

2.src폴더 밑에 img파일 참조가능
import img1 from '../img/img1.png'; //이미지가 많아지면 효율이 떨어짐

3.public 폴더 밑에 넣는 경우 이미지를 바로 참조가능(추천)
*/

import { useState } from "react";


const IterationComponentQ = () => {

    //데이터 - public폴더밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]


    //2.반복처리
    const newList = arr.map( item => 
        <div key={item.src}>
            <img src={item.src} alt={item.title} width="100" onClick={ () => {handleClick(item.src)} }/>
            <p>제목: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
        
    )
    
    //3. 클릭시, 화면에 그려질 내용을 state로 관리
    const[content, setContent] = useState('');
    const handleClick = (src)=> {
        //console.log(src); //src를 받아옴 
        setContent(src);       
    }



    return(
        <>

            <h3>이미지 데이터 반복하기</h3> {/* 3번 */}
            {/* 
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
            <img src={img1} alt="제목" width="100"/>  
            <img src="/img/img1.png" alt="제목" width="100"/> ◎절대경로 >> img파일이 public 안에 위치   
            */}

            <div>
                <img src={content} width="200"/>
            </div>

            <div style={{display: "flex", justifyContent: "space-around"}}>
                {/* 반복할 요소의 모형 */}
                {/* <div>
                    <img src="/img/img1.png" alt="제목" width="100"/> 
                    <p>제목:</p>
                    <p>가격:</p>
                </div> */}


                {newList}

            </div>


        </>

    )
}

export default IterationComponentQ;