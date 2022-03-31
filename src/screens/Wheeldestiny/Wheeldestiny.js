import React from 'react'
import {StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PossibilityMenu from '../reused/PossibilityMenu'

export default function Wheeldestiny() {
  return (
      <SafeAreaView style={style.container}>
          <PossibilityMenu/>
      </SafeAreaView>
    
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:50
    }
})