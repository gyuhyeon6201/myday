import { useEffect, useState } from "react";

const Time = ({className}) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        const closeEffect = () => {
            clearInterval(intervalID);
        };
        return closeEffect;
    }, []);
    return (
        <div className={className}>
            {/* {time.toLocaleTimeString("en-US")} */}
            {time.toLocaleTimeString("ko-KR", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </div>
    );
};

export default Time;
