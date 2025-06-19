import { useState } from "react";


const TodoForm = ({onAdd}) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e)=>{
        // form, submit 이 가지고 있는 기본 설정(ex/ 새로고침) 중단
        e.preventDefault();
        const trimmed = task.trim();
        if(trimmed){
            // 할 일 텍스트를 mainpage(부모)에 전달
            onAdd(task);
            setTask('');
        }
    }
    return (
        <form className="todo" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={task}
                onChange={(e)=>{setTask(e.target.value);}}
                placeholder="오늘 미션을 입력해 주세요"
            />
            {/* <button type="submit">추가</button> */}
        </form>
    );
};

export default TodoForm;