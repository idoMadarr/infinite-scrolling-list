import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';

const HeaderList = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>
        Infinite Scrolling List with Load More, Pull to Refresh and a bit of
        Reanimated
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
});

export default HeaderList;
