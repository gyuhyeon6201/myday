

const Theme = ({theme, onChangeTheme}) => {
    return (
        <div className="theme-btn">
            <h3>테마변경</h3>
            <button className="main" onClick={()=>{onChangeTheme('man')}}>기본</button>
            <button className="dark" onClick={()=>{onChangeTheme('dark')}}>다크</button>
        </div>
    );
};

export default Theme;