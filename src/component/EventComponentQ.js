import { useState } from "react";

const EventComponentQ = () => {

    const [menu, setMenu] = useState('메뉴를 선택하세요');

    const handleMenu = (e) => {
        // console.log(e.target.value);
        if(e.target.value === "선택"){ 
          setMenu('메뉴를 선택하세요');
        } else{
          setMenu(e.target.value);
        }
    }
    

    return (
        <div>
          <hr/>
          <h3>셀렉트 태그 핸들링 (실습)</h3>
          <p>셀렉트 태그가 체이니 될 때 선택한 결과를 아래에 출력</p>

            <select onChange={handleMenu}>
              <option>선택</option>
              <option>피자</option>
              <option>햄버거</option>
              <option>치킨</option>
            </select>

            <h3>선택한 결과: {menu}</h3>
            {/* 값은 객체로 가져옴 */}

        </div>
    )
}

export default EventComponentQ; 