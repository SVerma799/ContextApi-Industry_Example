import "./App.css";
import Login from "./components/Login";
import { LoginProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Login />
      </LoginProvider>
    </div>
  );
}

export default App;
