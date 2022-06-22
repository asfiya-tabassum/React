// import logo from './logo.svg';
import './App.css';
import Firstcomp from './components/Firstcomp'
import Secondcomp from './components/Secondcomp'
import Message from './components/Message';
import Profilef from './components/Profilef';
import Profilec from './components/Profilec';
import Counterc from './components/Counterc';
import Counterf from './components/Counterf';
import FuncionalEvent from './components/FunctionalEvent';
import ClassEvent from './components/ClassEvent';
import Conditional from './components/Conditional';
import RenderList from './components/RenderList';
import Form from './components/Form';
import Todo from './components/Todo';
import Inlinecomponent from './components/Inlinecomponent';
import Stylesheetcomp from './components/Stylesheetcomp';
function App() {
  return (
    <div className="App">
      <Firstcomp/>
      <Secondcomp/>
      <Message/>
      <Profilef statment="this is how we use props in functinal"  name="hello this is second prop"/>
      <Profilec name="hi there"/>
      <Counterc/>
      <FuncionalEvent/>
      <ClassEvent/>
      <Counterf/>
      {/* <Conditional/>
      <RenderList/> */}
      <Form/>

      <Todo/>
      
      <Inlinecomponent/>
      <Stylesheetcomp/>

    </div>
  );
}

export default App;
