import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import WheelPage from "./Components/WheelPage";
import ResultPage from "./Components/ResultPage";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/try-your-luck" exact>
        <WheelPage />
      </Route>
      <Route path="/claim-prize">
        <ResultPage />
      </Route>
    </div>
  );
}

export default App;
