import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Post } from "./pages/post/post";
import { MyContext } from "./context/context";
import { CreatePost } from "./pages/createPost/createPost";

function App() {
  const [login, setLogin] = useState(null);

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
    </div>
  );
}

export default App;
