import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/lib/apollo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/router';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}