import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

const FormField = ({ title, value, handleChangeText, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <View className="space-y-2 mt-7">
        <Text className="text-base text-gray-100 pb-2 font-pmedium">{title}</Text>
        <View className={`border-2 w-full h-16 px-4 rounded-2xl ${isFocused ? 'border-yellow-300' : 'border-black-500'} bg-black-100`}>
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            onChangeText={handleChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>
    );
  };

export default FormField