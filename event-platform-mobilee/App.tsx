import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/lib/apollo';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { Routes } from './src/router';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NATIVEBASETHEME } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={NATIVEBASETHEME}>
      <ApolloProvider client={client}>
        {/* <SafeAreaProvider> */}
          <StatusBar 
            barStyle='light-content'
            translucent
          />
          <Routes />
        {/* </SafeAreaProvider> */}
      </ApolloProvider>
    </NativeBaseProvider>
  );
}