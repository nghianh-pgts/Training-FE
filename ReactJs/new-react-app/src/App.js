import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import ThemeProvider from "./Providers/ThemeProvider";
import UserProvider from "./Providers/UserProvider";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ThemeProvider>
          <Header />
          <List />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
