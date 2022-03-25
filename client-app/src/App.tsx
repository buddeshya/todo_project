import {Provider} from "react-redux";
import TodoList from "./containers/TodoList";
import store from "./store";

function App() {
  return (
    <Provider store ={store}>
      <TodoList/>
    </Provider>
  )
}

export default App;

