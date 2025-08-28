const html = (
    <>
        <h1>Bài tập về nhà</h1>
        <ul>
            <li>
                <a href="./counter.html">
                    Bài 1: <strong>Counter App</strong>
                </a>
            </li>
            <li>
                <a href="./todo.html">
                    Bài 2: <strong>Todo App</strong>
                </a>
            </li>
            <li>
                <a href="./profile.html">
                    Bài 3: <strong>Profile App</strong>
                </a>
            </li>
            <li>
                <a href="./products.html">
                    Bài 4: <strong>Product List</strong>
                </a>
            </li>
            <li>
                <a href="./comments.html">
                    Bài 5: <strong>Comment List</strong>
                </a>
            </li>
            <li>
                <a href="./weather.html">
                    Bài 6: <strong>Weather App</strong>
                </a>
            </li>
        </ul>
    </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(html);
