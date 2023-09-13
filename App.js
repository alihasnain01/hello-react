const parent = React.createElement('div', { id: "parent" }, [React.createElement('div', { id: "child1" }, [
        React.createElement('h1', { id: "heading" }, 'I am tag h1'),
        React.createElement('h2', { id: "" }, 'I am tag h2')
    ]),
    React.createElement('div', { id: "child2" }, [
        React.createElement('h3', { id: "heading" }, 'I am tag h3'),
        React.createElement('h4', { id: "" }, 'I am tag h4')
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);