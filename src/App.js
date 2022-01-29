function App() {
  // Keep in mind that below is JSX (not standard HTML), so class must be className which is JS prop of the obj
  return <div> 
      <h1>My Todos</h1>
      <div className='card'>
        <div>
          <h2>TITLE</h2>
        </div>

        <div className='actions'>
          <button className='btn'>Delete</button>
        </div>
      </div>
    </div>;
}

export default App;
