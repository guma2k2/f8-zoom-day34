const h1 = React.createElement("h1", null, "Todo List");

const ul = React.createElement(
    "ul",
    {
        id: "task-list",
    },
    [
        React.createElement("li", {
            className: "task-item active",
            title: "Task 1",
        }),
        React.createElement("li", {
            className: "task-item completed",
            title: "Task 2",
        }),
    ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1);
root.render(ul);
