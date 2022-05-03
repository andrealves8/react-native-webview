import React, {useState, useRef} from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationView from './NavigationView';

const styles = {
    container: {
        flex: 1,
        marginTop: 50,
    },
};

const ContentView = () => {
    const webViewRef = useRef();

    return (
    <View style={styles.container}>
        <WebView 
        ref={webViewRef}
        source={{ uri:'https://www.youtube.com/' }} 
        />
        <NavigationView/>
    </View>
    );
};

export default ContentView;

