import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Main() {

  const navigation = useNavigation();

    return(
      <View>
        <Text> Page Main </Text>
        <Button title="Navigate to Cart" onPress={ () => navigation.navigate("Cart")}/>
      </View>
    );
}
