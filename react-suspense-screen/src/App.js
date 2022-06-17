import React, { lazy, Component, Suspense } from "react";
import axios from "axios";
import LoadingScreen from "./components/LoadingScreen";

const Persons = lazy(() => import("./components/Persons"));

class App extends Component {
  state = { persons: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <div>
        <Suspense fallback={<LoadingScreen />}>
          <Persons persons={this.state.persons} />
        </Suspense>
      </div>
    );
  }
}

export default App;
