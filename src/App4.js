import EventComponent2 from "./component/EventComponent2";
import EventComponent from "./component/EventComponent";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";


const App = () => {
    
    /* 
    p.121
    이벤트 핸들링
    함수형 이벤트 핸들링    
    */


    return (
        <>
            <EventComponent/>
            <EventComponentQ/>

            {/* 실습 */}
            <EventComponent2/>

            <EventComponentQ2/>
        </>
    )
}

export default App;
