import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Update: {
            screens: {
              Update: 'Update',
            },
          },
          Show: {
            screens: {
              Show: 'Show',
            },
          },
        },
      },
    },
  },
};

export default linking;
