import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

const JobSection: React.FC<{title: string; index: number}> = ({
  title,
  index,
}) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index > 9 ? 0 : index * 100)}
      style={styles.jobConatiner}>
      <Text style={styles.center}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  jobConatiner: {
    borderWidth: 1,
    borderRadius: 8,
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  center: {
    textAlign: 'center',
  },
});

export default JobSection;
