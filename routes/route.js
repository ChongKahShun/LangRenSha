import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Join from "../screens/Join";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Create: Create,
    Join: Join
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
