import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

const untranspiledModulePatterns = [
  '(jest-)?@react-native|react-native',
  '@react-native-community',
  'expo(nent)?',
  '@expo(nent)?/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
  '@geuntabuwono/react-native-material-textfield',
  'react-native-material-textfield',
  '@softmedialab/react-native-material-textfield',
  'usehooks-ts',
  'react-native-confirmation-code-field',
  'react-native-confirmation-code-input',
  'react-native-flash-message',
  'react-native-progress-steps',
];

type NewType = Config.InitialOptions;

const config: NewType = {
  preset: 'jest-expo',
  transformIgnorePatterns: [`node_modules/(?!${untranspiledModulePatterns.join('|')})`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      {
        '@src/*': ['./src/*'],
        '@features/*': ['./src/features/*'],
        '@components/*': ['./src/components/*'],
        '@hooks/*': ['./src/hooks/*'],
        '@utils/*': ['./src/utils/*'],
        '@assets/*': ['./src/assets/*'],
        '@navigation/*': ['./src/navigation/*'],
        '@services/*': ['./src/services/*'],
        '@slices/*': ['./src/slices/*'],
      },
      { prefix: '<rootDir>/' },
    ),
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coveragePathIgnorePatterns: [
    '/src/features/*',
    '/src/env.tsx',
    '/src/navigation/*',
    '/src/utils/*',
    '/src/components/UserCard*',
    '/src/components/Loading*',
  ],
  collectCoverage: true,
};

export default config;
