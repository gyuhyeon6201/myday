import { useEffect, useState } from "react";


const Greeting = ({user}) => {
    const [greetingTime, setGreetingTime] = useState('');
    useEffect(()=>{
        const hour = new Date().getHours();
        if(hour<12){
            setGreetingTime('morning');
        }else if(hour<18){
            setGreetingTime('afternoon');
        }else{
            setGreetingTime('evening');
        }
    },[]);
    return (
        <div className="greeting">
            <h3>
                {greetingTime === 'morning' &&(
                    <>
                    {user}님, 좋은 아침이에요<i className="fa-solid fa-sun"></i> 오늘의 미션을 정리해보아요 :3
                    </>
                )}
                {greetingTime === 'afternoon' &&(
                    <>
                    {user}님, 좋은 오후에요<i className="fa-solid fa-mug-saucer"></i> 커피한잔의 여유를 가져보아요 :▷
                    </>
                )}
                {greetingTime === 'evening' &&(
                    <>
                    {user}님, 좋은 저녁이에요 오늘도 고생했어요 :)
                    </>
                )}
            </h3>
        </div>
    );
};

export default Greeting;