
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  SafeAreaView, View
} from 'react-native';
import { BottomNavigation, Text   } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeRoute = () => (
  <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    <Text style={{fontSize:22}}>Home</Text>
  </View>
);
const AddRoute = () => (
  <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    <Text style={{fontSize:22}}>Add</Text>
  </View>
);
const ProfileRoute = () => (
  <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    <Text style={{fontSize:22}}>Profile</Text>
  </View>
);

function App () {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
  
    { key: 'home', title: 'Home', icon:(props)=> <MaterialCommunityIcons {...props} name='fire' size={26}/> },
    { key: 'add', title: 'Add', icon:(props)=> <MaterialCommunityIcons {...props} name='plus' size={26}/> },
    { key: 'profile', title: 'Profile', icon:(props)=> <MaterialCommunityIcons {...props} name='account' size={26}/> },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    add: AddRoute,
    profile: ProfileRoute,
  });

  return (
      <PaperProvider>
          <BottomNavigation
            // labeled={false}
            navigationState ={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: 'red' }}
          />
      </PaperProvider>
  );
};


export default App;
