import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
  loadStories()
}, module);

const StorybookUIRoot = getStorybookUI({});
export default StorybookUIRoot;
