import {StyleSheet, Text, View} from 'react-native';

import {SPACING} from './constants';

type ICarouselDataType = {
  key: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
};
const Content = (item: ICarouselDataType) => {
  return (
    <>
      <Text style={styles.itemTitle} numberOfLines={1} adjustsFontSizeToFit>
        {item.title}
      </Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.currency}>USD</Text>
      </View>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.4,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: SPACING,
  },
  price: {
    color: 'black',
    fontSize: 42,
    letterSpacing: 3,
    marginRight: 8,
  },
  currency: {
    color: 'black',
    fontSize: 16,
    lineHeight: 36,
    alignSelf: 'flex-end',
  },
});
