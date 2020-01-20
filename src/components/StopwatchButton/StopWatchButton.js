import StopWatchButtonStyles from '../StopwatchButton/StopWatchButtonStyles';
import { Text, TouchableOpacity } from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';

const StopWatchButton = ({ time, startOnPressAction, timerOnPressAction }) => {
    if (time > 0) {
        return (
            <TouchableOpacity
                style={StopWatchButtonStyles.mainActionButton}
                onPress={timerOnPressAction}
            >
                <Text style={StopWatchButtonStyles.mainActionButtonText}>
                    {moment.utc(time).format(i18n.TIME_FORMAT)}
                </Text>
                <Text style={[
                    StopWatchButtonStyles.mainActionButtonText,
                    StopWatchButtonStyles.mainActionButtonPauseText
                ]}>
                    {i18n.STOP_WATCH.PAUSE}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity
            style={StopWatchButtonStyles.mainActionButton}
            onPress={startOnPressAction}
        >
            <Text style={StopWatchButtonStyles.mainActionButtonText}>{i18n.STOP_WATCH.START}</Text>
        </TouchableOpacity>
    )
}

export default StopWatchButton;