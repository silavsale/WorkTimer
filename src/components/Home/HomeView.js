import React from 'react';
import { View, Text, TouchableOpacity, AppState } from 'react-native';
import HomeViewStyles from './HoveViewStyles';
import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopwatchButton/StopWatchButton';
import AsyncStorage from '@react-native-community/async-storage';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    async handleAppStateChange(nextAppState) {
        console.log('nextAppState', nextAppState);
        const now = new Date().getTime();
        console.log('this', this);
        const { time } = this.state;
        const readTime = await AsyncStorage.getItem('@time');
        const readStateChangeTimestamp = await AsyncStorage.getItem('@appStateChangedTimeStamp');

        console.log('stored date', readStateChangeTimestamp, readTime);
        const timeDifference = now - parseInt(readStateChangeTimestamp);
        const newTime = parseInt(readTime) + timeDifference;
        console.log('newTime', newTime);
        if (nextAppState === 'active') {
            this.setState({
                time: newTime,
            },
                this.startTimer,
            )
        }

        await AsyncStorage.setItem('@time', JSON.stringify(time));
        await AsyncStorage.setItem('@appStateChangedTimeStamp', JSON.stringify(now));
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    startTimer() {
        setInterval(() => {
            const { time, paused } = this.state;
            if (!paused) {
                this.setState({
                    time: time + 1000
                })
            }
        })
    }

    pauseTimer() {
        const { paused } = this.state;
        this.setState({ paused: !paused })
    }

    render() {
        const { time } = this.state;
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.homeViewContainer]} >
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcodeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
                </View>
                <View style={{ flex: 2 }} >
                    <StopWatchButton
                        time={time}
                        startOnPressAction={this.startTimer}
                        timerOnPressAction={this.pauseTimer}
                    />
                </View>
            </View>
        )
    }
};

export default HomeView;