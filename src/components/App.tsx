import { Provider } from "react-redux";

import { store } from "../redux-state";
import RepositoriesList from "./RepositoriesList";
function App() {

  return (
    <Provider store={store}>
  <div>
    <h1> Search for Package !</h1>
    <RepositoriesList></RepositoriesList>
  </div>
  </Provider>

  )
}


export default App;