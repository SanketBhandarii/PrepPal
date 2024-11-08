import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './src/components/screens/Home';
import Details from './src/components/screens/Details';
import Splash from './src/components/Splash';
import {ActivityIndicator} from 'react-native';
import AllVideos from './src/components/Details/Video/AllVideos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#2a3950'},
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'vertical',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'vertical',
          }}
        />
        <Stack.Screen
          name="AllVideos"
          component={AllVideos}
          options={{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'vertical',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
