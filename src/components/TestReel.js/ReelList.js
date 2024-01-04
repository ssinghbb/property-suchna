// ReelList.js
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import Reel from './Reels';

const ReelList = ({ data }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      console.log('Current Index:', currentIndex);
      setCurrentIndex(currentIndex);
    }
  });
  return (
    <FlatList
    ref={flatListRef}
      pagingEnabled
      data={data}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item ,index}) => <Reel reel={item} index={index} currentIndex={currentIndex} />}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} // Adjust as needed
   
    />
  );
};

export default ReelList;
