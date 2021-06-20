/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import db from './src/database';

AppRegistry.registerComponent(appName, () => App);
