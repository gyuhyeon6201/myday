import { useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./Components/LoginForm";
import Time from "./Components/Time";
import MainPage from "./Components/MainPage";

import bgImg from "./images/sky.jpg";
import Weather from "./Components/Weather";
import Theme from "./Components/Theme";

const App = () => {
    const USER_KEY = "user_name";
    const [user, setUser] = useState("");
    // 처음에 시작하자 마자 user_name을 읽어와야 함
    useEffect(() => {
        const saved = localStorage.getItem(USER_KEY);
        if (saved) {
            setUser(saved);
        }
    }, []);
    const handleLogin = (data) => {
        localStorage.setItem(USER_KEY, data);
        setUser(data);
    };
    const handleLogout = () => {
        localStorage.removeItem(USER_KEY);
        setUser("");
    };


    // 테마
    const[theme, setTheme] = useState('main');
    useEffect(()=>{
        const saved = localStorage.getItem("theme");
        if(saved){
            setTheme(saved);
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme]);
    return (
        <div className={`app ${theme}`}>
            {/* <img src="./images/iwantgohome.png" alt="이미지1"/> */}
            {/* <img src={`${process.env.PUBLIC_URL}/images/iwantgohome.png`} alt="이미지1"/> */}
            {/* <img src={bgImg} alt="이미지2"/> */}
            <Weather />
            <Theme theme={theme} onChangeTheme={setTheme}/>
            <Time className={user ? "time time-aft" : "time"}/>
            {user ? (
                <MainPage user={user} onLogout={handleLogout} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
