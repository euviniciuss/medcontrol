import { NativeBaseProvider } from 'native-base'

import Login from './src/pages/Login'

import { THEME } from './src/styles/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Login />
    </NativeBaseProvider>
  );
}
