import React from 'react';
import { View, Text } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import Search from './src/pages/Search';
import Bookmark from './src/pages/Bookmark';

const App = DrawerNavigator({
  Search: { screen: Search },
  Bookmark: { screen: Bookmark }
});

export default App;