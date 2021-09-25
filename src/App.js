import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AddBook from "./components/Books/AddBook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/addbook" component={AddBook} />;
      </BrowserRouter>
    </>
  );
};

export default App;
