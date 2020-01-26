import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActionButtonStyles = StyleSheet.create({
    touchableStyle: {
        width: 134,
        height: 44,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },

    captionStyle: {
        fontSize: 24,
        textTransform: 'lowercase'
    }

});

const ActionButton = ({ label, textColor, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                ActionButtonStyles.touchableStyle,
                { backgroundColor }
            ]}
        >
            <Text style={[
                ActionButtonStyles.captionStyle,
                { color: textColor }
            ]}>{label}</Text>
        </TouchableOpacity>
    );
}

export default ActionButton;