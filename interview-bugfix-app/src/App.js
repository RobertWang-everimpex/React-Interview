import './App.css';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interview Bug Fix App</h1>
        <p>This app contains intentional bugs for the interview</p>
      </header>
      <main style={{ padding: '20px' }}>
        <UserProfile userId={1} />
        <hr />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
