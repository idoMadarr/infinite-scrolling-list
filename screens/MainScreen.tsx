import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

// Redux Store
import {useAppDispatch, useAppSelector} from '../redux/store/store';
import {fetchAvailableJobs} from '../redux/actions/mainActions';

// Components
import JobSection from '../components/MainPartials/JobSection';
import HeaderList from '../components/MainPartials/HeaderList';

const INIT_PAGE = 1;

const MainScreen = () => {
  const dispatch = useAppDispatch();
  const {jobList, errorMessage} = useAppSelector(state => state.mainSlice);

  const [currentPage, setCurrentPage] = useState<number>(INIT_PAGE);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAvailableJobs(currentPage));
  }, [currentPage]);

  const onEndReached = () => setCurrentPage(prevState => prevState + 1);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchAvailableJobs(INIT_PAGE, jobList.length, true));
    setRefreshing(false);
  };

  const listFooterComponent = () => {
    if (!jobList.length) return;
    return <ActivityIndicator color={'black'} size={'large'} />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <HeaderList />
      {refreshing ? (
        <View style={styles.refreshContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={jobList}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
            <JobSection title={item.title} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0}
          onEndReached={onEndReached}
          onRefresh={onRefresh}
          refreshing={refreshing}
          ListFooterComponent={listFooterComponent}
          testID={'flatlist'}
        />
      )}
      <Text>{errorMessage}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  refreshContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainScreen;
