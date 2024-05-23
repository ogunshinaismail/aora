import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

type PropType = {
    title: string;
    value: string;
    handleCHangeText: (e:string) => void;
    otherStyles?: string;
    keyboardType?: string;
    placeholder?: string;
}

const FormField = ({title, value, handleCHangeText, otherStyles, placeholder, keyboardType}: PropType) => {
    const [showPwd, setShowPwd] = useState<boolean>(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium capitalize'>{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
            className='w-full h-full flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleCHangeText}
            secureTextEntry={title === 'password' && !showPwd}
        />

        {title === 'password' && (
            <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
                <Image source={!showPwd ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField