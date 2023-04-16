import TodoList from './TodoList';  
import Footer from './Footer';
import Header from './Header';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
        <Header/>
          <TodoList/>
          <Footer/>
    </>
  )
}

export default App