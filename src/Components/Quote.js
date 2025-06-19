import { useEffect, useState } from "react";

const quotes = [
    "시간은 돈보다 귀하다.",
    "어제는 역사고, 내일은 미스터리이며, 오늘은 선물이다.",
    "시간을 지배하는 자가 인생을 지배한다.",
    "낭비한 시간에 대한 후회는 더 많은 시간을 낭비하게 만든다.",
    "성공한 사람과 실패한 사람의 차이는 시간을 어떻게 쓰느냐이다.",
    "오늘 할 수 있는 일을 내일로 미루지 마라.",
    "시간은 당신이 가장 원하는 것이지만, 가장 잘 쓰지 않는 것이다.",
    "시간은 모든 것을 치유하지만, 시간 낭비는 치유할 수 없다.",
    "1분을 아껴라. 인생은 1분으로 이루어져 있다.",
    "늦었다고 생각할 때가 진짜 늦기 직전이다.",
];

const Quote = () => {
    const [quote, setQuote] = useState("");
    // 랜덤하게 명언 추출
    // Math.random(); // 0~1 : 0~quotes.length-1
    useEffect(() => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    }, []);
    return <div className="quote">「오늘의 명언」 <br/>"{quote}"</div>;
};

export default Quote;
