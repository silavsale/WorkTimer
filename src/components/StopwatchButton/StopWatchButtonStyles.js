import { StyleSheet } from 'react-native';

const StopWatchButtonStyles = StyleSheet.create({
    mainActionButton: {
        width: 284,
        height: 284,
        borderRadius: 142,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E',

    },

    mainActionButtonText: {
        fontSize: 60,
        color: '#FFF',
        fontWeight: 'bold'
    },

    mainActionButtonPauseText: {
        fontSize: 30,
    },
});

export default StopWatchButtonStyles;