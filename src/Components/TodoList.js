const TodoList = ({ todos, onDelete, onToggle }) => {
    if (todos.length === 0) {
        return <p>할 일이 없습니다.</p>;
    }
    return (
        <div className="todo-list">
            <ul>
            {todos.map((item) => {
                return (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                onToggle(item.id);
                            }}
                            checked={item.done}
                        />
                        <span
                            style={{
                                textDecoration: item.done
                                    ? "line-through"
                                    : "none",
                                textDecorationColor: item.done
                                    ? "#0a040a"
                                    : "inherit",
                                textDecorationThickness: item.done
                                    ? "5px"
                                    : "none",
                            }}
                        >
                            {item.todo}
                        </span>
                        <button
                            className="todo-btn"
                            onClick={() => {
                                onDelete(item.id);
                            }}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </li>
                );
            })}
            </ul>
        </div>
    );
};

export default TodoList;
