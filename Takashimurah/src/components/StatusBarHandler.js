import{
    View,
    StatusBar,
    Platform
} from 'react-native';

const StatusBarHandler = () => {
    return(
        <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}/>
    )
};

export default StatusBarHandler;