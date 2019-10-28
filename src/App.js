import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import About from './screens/about';
import Question from './screens/question';
import { Actions,Scene,Router,Switch,Modal } from 'react-native-router-flux';

class TabIcon extends Component {
  render() {
   const title = this.props.title;
   return (
    <Text>{title}</Text>
   );
  }
}

export default class App extends Component {
  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key="root" tabs={true} hideNavBar={true} hideTabBar={true}>
        <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: '#f7f7f7'}}>
          <Scene key="Questions" component={Question} title="Question" icon={TabIcon} hideNavBar={true} />
          <Scene key="About" component={About} title="About" icon={TabIcon} hideNavBar={true} />
        </Scene>
      </Scene>
    )
  }

  render(){
    return <Router scenes = {this.scenes}/>
  }
}