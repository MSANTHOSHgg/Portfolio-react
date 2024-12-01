import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactForm/Component/ContactForm';
import ToDoList from './Pages/To-DoList/ToDoList';
import Homepage from "./Pages/Blog/BlogPages/Homepage/HomePage";
import Blog from './Pages/Blog/Blog';
import PostPage from "./Pages/Blog/BlogPages/Postpage/PostPage";
import CreateEditPost from "./Pages/Blog/BlogPages/EditPost/CreateEditPost";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contactform' element={<ContactUs />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog" element={<Homepage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/create" element={<CreateEditPost />} />
        <Route path="/edit/:id" element={<CreateEditPost />} />
      </Routes>
    </Router>
  )
}

export default App
