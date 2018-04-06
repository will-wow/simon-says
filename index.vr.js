import * as React from "react";
import { AppRegistry } from "react-vr";

import Router from "./src/Router";

const App = () => <Router />;

export default App;

AppRegistry.registerComponent("App", () => App);
