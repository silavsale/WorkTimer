import { StyleSheet } from 'react-native';

const FinishStyles = StyleSheet.create({
    mainHeader: {
        fontSize: 40,
        textAlign: 'center',
        flex: 2,
    },

    timerSubHeader: {
        fontSize: 40,
        textAlign: 'center',
        flex: 2,
    },

    activityNameLabel: {
        fontSize: 16,
    },

    activityNameInput: {
        borderRadius: 5,
        borderColor: '#848484',
        borderWidth: 1,
        height: 44,
        marginTop: 7
    },

    actionButtonsContainer: {
        marginTop: 65,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

});

export default FinishStyles;