import { StyleSheet, Text, View } from 'react-native';
import Detail from './src/screens/Detail';
import Home from './src/screens/Home';
import BottomNav from './src/components/BottomNav';

export default function App() {
  return (
    <BottomNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
