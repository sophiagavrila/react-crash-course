import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1> 
      <Todo text='Learn React' /> {/* Since we passed props as an arg, we used the props.text expression in the component template */}
      <Todo text='Fold Socks' />
      <Todo text='Beat Dark Souls' />
    </div>
  );
}

export default App;
