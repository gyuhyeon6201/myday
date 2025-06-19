import { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [user, setUser] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = user.trim();
        if(trimmed){
            onLogin(user); //부모에게 데이터 전송
            setUser('');
        }
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h2>이름을 입력해주세요</h2>
            <input
                placeholder="이름"
                value={user}
                onChange={(e)=>{setUser(e.target.value)}}
            />
            <button className="login-btn" type="submit">시작하기</button>
        </form>
    );
};

export default LoginForm;
