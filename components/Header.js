import React from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyHeader = props => {
    return(
        <SafeAreaProvider>
            <Header
            centerComponent={{ text: props.title, style: { color: '#fff', fontSize:30, fontWeight:"bold", } }}
            backgroundColor = "#F69400"
            />
        </SafeAreaProvider>
    )
}

export default MyHeader;