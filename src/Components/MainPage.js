import { useEffect, useState } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Theme from "./Theme";
import Greeting from "./Greeting";

const MainPage = ({ user, onLogout }) => {
    const TODOS_KEY = "todos";
    const [todos, setTodos] = useState([]);
    // 처음에 localstrage에 저장된 todos 값이 있으면 읽어와서 설정
    useEffect(() => {
        const saved = localStorage.getItem(TODOS_KEY); // 문자열
        if (saved) {
            setTodos(JSON.parse(saved)); // 문자열->객체
        }
    }, []);
    // todos가 변경되면 localstorage에 저장
    useEffect(() => {
        const saved = JSON.stringify(todos); // 객체를 문자열로...
        localStorage.setItem(TODOS_KEY, saved);
    }, [todos]);

    const addTodo = (text) => {
        /*
         * todo {id:현재시간 Date.now(), text}
         */
        const newTodo = { id: Date.now(), todo: text, done: false};
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = (id) => {
        const update = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(update);
    };
    const toggleTodo = (id)=>{
        const update = todos.map((item)=>{
            return (item.id === id ? {...item, done: !item.done} : item);
        });
        setTodos(update);
    };
    return (
        <div className="login-aft">
            <h2>{user}님🤗</h2>
            <Greeting user={user}/>
            <button className="logout-btn" onClick={onLogout}><i className="fa-solid fa-power-off"></i></button>
            <Quote />
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
    );
};

export default MainPage;
