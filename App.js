import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./app/components/navigation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
    
  );
}


