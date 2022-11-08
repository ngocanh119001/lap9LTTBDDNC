import { useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import A from './components/A';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Cau 1 */}
      {/* <Text style={{fontSize:20, fontWeight:'bold', color:'lightblue'}}>Bài Tập của Ngọc Ánh</Text> */}
      <AssetExample></AssetExample>

    </View>
  );
}
