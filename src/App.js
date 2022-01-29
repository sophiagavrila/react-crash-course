import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1> 
      <Todo text='Learn React' />
      <Todo text='Fold Socks' />
      <Todo text='Beat Dark Souls' />
      {/* Remove Modal and Backdrop since we're not using it here (in Todo only) */}
    </div>
  );
}

export default App;
