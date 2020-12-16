import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import Quiz from "./screens/Quiz";
import QuizCorrect from "./screens/QuizCorrect";

const MainStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "QAsk"

    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  QuizCorrect: {
    screen: QuizCorrect,
    navigationOptions: {
      headerTitle: "Your Answers",
      headerLeft: null
    }
  }
});

export default createAppContainer(MainStack);
