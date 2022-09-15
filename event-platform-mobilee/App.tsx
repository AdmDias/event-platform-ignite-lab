import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/lib/apollo';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { Routes } from './src/router';
import { NATIVEBASETHEME } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={NATIVEBASETHEME}>
      <ApolloProvider client={client}>
          <StatusBar 
            barStyle='light-content'
            translucent
          />
          <Routes />
      </ApolloProvider>
    </NativeBaseProvider>
  );
}