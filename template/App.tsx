import React from 'react';
import {
  Text,
  Layout,
  useTheme,
  IconRegistry,
  ApplicationProvider,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Mapping } from '@config/theme';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = () => {
  const theme = useTheme();

  return (
    <Layout style={styles.container}>
      <Text category="h2">React Native App</Text>
      <Icon name="react" size={40} color={theme['text-basic-color']} />
    </Layout>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={[EvaIconsPack]} />

      <ApplicationProvider {...eva} theme={eva.dark} customMapping={Mapping}>
        <Home />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
