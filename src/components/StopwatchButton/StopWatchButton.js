import StopWatchButtonStyles from '../StopwatchButton/StopWatchButtonStyles';
import { Text, TouchableOpacity, Animated } from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';

const StopWatchButton = ({
    time,
    startOnPressAction,
    timerOnPressAction,
    paused
}) => {
    if (time > 0) {
        const timerOpacity = new Animated.Value(1);
        const BLINK_DELAY = 1500;

        const blinker = toValue => {
            if (paused) {
                Animated.timing(timerOpacity, {
                    toValue,
                    duration: BLINK_DELAY
                }).start(() => {
                    blinker(toValue === 1 ? 0 : 1);
                });
            } else {
                Animated.timing(timerOpacity, {
                    toValue: 1,
                    duration: BLINK_DELAY
                }).start();
            }
        };

        blinker(0);

        return (
            <TouchableOpacity
                style={StopWatchButtonStyles.mainActionButton}
                onPress={timerOnPressAction}
            >
                <Animated.View style={[
                    StopWatchButtonStyles.mainActionButton,
                    { opacity: timerOpacity }
                ]}>
                    <Text style={StopWatchButtonStyles.mainActionButtonText}>
                        {moment.utc(time).format(i18n.TIME_FORMAT)}
                    </Text>
                    <Text style={[
                        StopWatchButtonStyles.mainActionButtonText,
                        StopWatchButtonStyles.mainActionButtonPauseText
                    ]}>
                        {i18n.STOP_WATCH.PAUSE}
                    </Text>
                </Animated.View>
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