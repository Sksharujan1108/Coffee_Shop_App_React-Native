/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { useStore } from '../../../feature/store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { styles } from './style';
import { COLORS, FONTSIZE } from '@/src/theme/theme';
import HeaderBar from '@/src/component/HeaderBar';
import { Ionicons } from '@expo/vector-icons';
import CoffeeCard from '@/src/component/CoffeeCard';

const getCategoriesFromData = (data: any) => {
  const temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  const categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    const coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);

  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );

  const [searchText, setSearchText] = useState('');

  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );
  
  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };



  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Find the best {'\n'} coffee sk cool bar 🤓🥳!
        </Text>

        {/* Search Bar */}

        <View style = {styles.InputContainerComponent}>

          <TouchableOpacity 
            onPress={() => {
              searchCoffee(searchText)
            }}>
            <Ionicons
              style = {styles.InputIcon}
              name="search-circle"
              size={28}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>

          <TextInput
            placeholder='Find Your Coffee .....'
            value = {searchText}
            onChangeText = {(text) =>{ 
              setSearchText(text)
              searchCoffee(text)
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style = {styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
             <TouchableOpacity
               onPress={() => {
                resetSearchCoffee()
               }}
             >
               <Ionicons 
                 style = {styles.InputIcon}
                 name = 'close'
                 size={FONTSIZE.size_28}
                 color= {COLORS.primaryLightGreyHex}
               />
             </TouchableOpacity> 
            ) : ( 
            <></>
          )}
        </View>

        {/* Category Scrolls */}
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator = {false}
          contentContainerStyle = {styles.CategoryScrollViewStyle} 
        >
            {categories.map((data, index) => (
              <View 
                key = {index.toString()} 
                style = {styles.CategoryScrollViewContainer}
              >
                <TouchableOpacity 
                  style = {styles.CategoryScrollViewItem} 
                  onPress = {() => {
                    ListRef?.current?.scrollToOffset({
                      animated: true,
                      offset: 0,
                    })
                    setCategoryIndex({index: index, category: categories[index]});
                    setSortedCoffee([
                      ...getCoffeeList(categories[index], CoffeeList),
                    ]);
                  }}
                >
                  <Text 
                    style = {[styles.CategoryText,
                      categoryIndex.index === index ? 
                        {color: COLORS.primaryOrangeHex} 
                        : {},
                    ]}
                  > {data}</Text>
                    {categoryIndex.index === index ?
                      ( 
                        <View style = {styles.ActiveCategory}/>
                      ) 
                      : 
                      ( <></> )
                    }
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>

        {/* Coffee FlatList */}

        <FlatList
          ref = {ListRef}
          horizontal
          ListEmptyComponent = {
            <View style = {styles.EmptyListContainer}>
              <Text style = {styles.CategoryText}> No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator = {false}
          data = {sortedCoffee}
          contentContainerStyle = {styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity 
                onPress = {() => {
                  // pass The Data Next Screen Routes and params method
                  navigation.push('Details', {
                    id: item.id,
                    index: item.index,
                    type: item.type,
                  })
                }}
              >
                <CoffeeCard  
                  id = {item.id}
                  type = {item.type}
                  index = {item.index}
                  roasted = {item.roasted}
                  imagelink_square = {item.imagelink_square} 
                  name = {item.name}
                  special_ingredient  = {item.special_ingredient}
                  average_rating = {item.average_rating}
                  price = {item.prices[2].price}
                  buttonPressHandler = {item.buttonPressHandler}
                />
              </TouchableOpacity>
            )  
          }}
        />

        <Text style = {styles.CoffeeBeansTitle}> Coffee Beans </Text>

        {/* Beans FlatList */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator = {false}
          data = {BeanList}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity 
                onPress = {() => {
                  navigation.push('Details')
                }}
              >
                <CoffeeCard  
                  id = {item.id}
                  type = {item.type}
                  index = {item.index}
                  roasted = {item.roasted}
                  imagelink_square = {item.imagelink_square} 
                  name = {item.name}
                  special_ingredient  = {item.special_ingredient}
                  average_rating = {item.average_rating}
                  price = {item.prices[2].price}
                  buttonPressHandler = {item.buttonPressHandler}
                />
              </TouchableOpacity>
            )  
          }}
        />
        

      </ScrollView>
    </View>
  );
};

export default HomeScreen;
