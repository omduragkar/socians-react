
import './App.css';
import Login from './components/login/Login';
import NavigationBar from './components/nav/NavigationBar';
import { BrowserRouter, Route } from "react-router-dom";
import Register from './components/register/Register';
import Home from './pages/home/Home';
import Post from './pages/createpost/Post';
import Footer from './components/footer/Footer';
function App() {
  return (
    
    <BrowserRouter>
      <NavigationBar/>
      <div style={{"minHeight":"40rem"}}>
        <Route path="/" exact>
          <Home/>
        </Route> 
        <Route path="/user/login" exact>
          <Login/>
        </Route> 
        <Route path="/user/register" exact>
          <Register/>
        </Route> 
        <Route path="/user/posts" exact>
          <Post/>
        </Route> 
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
