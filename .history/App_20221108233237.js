import { useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import icon from './107022e81226b81ed091a599c02d9753.gif';
import A from './components/A'

export default function Cau2() {
  const [location1, setLocation1] = useState({
    marginLeft1: new Animated.Value(10),
    marginTop1: new Animated.Value(10),
  });
  const [location2, setLocation2] = useState({
    marginLeft2: new Animated.Value(10),
    marginTop2: new Animated.Value(10),
  });
  const [location3, setLocation3] = useState({
    marginLeft3: new Animated.Value(10),
    marginTop3: new Animated.Value(10),
  });
  // const [location4, setLocation4] = useState({
  //   x: null,
  //   y: null,
  //   marginLeft3: new Animated.Value(10),
  //   marginTop3: new Animated.Value(10),
  // });

  function onPress() {
    const x1 = getRndInteger(0, 300);
    const y1 = getRndInteger(0, 250);
    const x2 = getRndInteger(0, 300);
    const y2 = getRndInteger(0, 250);
    const x3 = getRndInteger(0, 300);
    const y3 = getRndInteger(0, 250);

    setLocation1({
      marginLeft1: x1,
      marginTop1: y1,
    });
    setLocation2({
      marginLeft2: x2,
      marginTop2: y2,
    });
    setLocation3({
      marginLeft3: x3,
      marginTop3: y3,
    });
    // setLocation4({
    //   x: x,
    //   y: y,
    //   marginLeft: x,
    //   marginTop: y,
    // });
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Cau 1 */}
      <Text style={{fontSize:20, fontWeight:'bold', color:'lightblue'}}>Bài Tập của Ngọc Ánh</Text>
      <A></A>
      


    </View>
  );
}
