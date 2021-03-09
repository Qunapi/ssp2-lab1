import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Post } from "./pages/post/post";
import { MyContext } from "./context/context";
import { CreatePost } from "./pages/createPost/createPost";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [login, setLogin] = useState(null);
  console.info(login);
  return (
    <div className="App">
      <MyContext.Provider value={{ login, setLogin }}>
        <Router>
          <Switch>
            <Route path="/post/:id" component={Post}></Route>
            <Route path="/create" component={CreatePost}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
        </Router>
      </MyContext.Provider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
