import { Provider } from "react-redux";
import "./index.css";
import Body from "./components/Body";
import store from "./components/utils.js/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Body />
      </div>
    </Provider>

    // background-image: https://i.imgur.com/An2Rl2R.jpg
    //God: https://i.imgur.com/CZT1d6u.png
  );
}

export default App;
