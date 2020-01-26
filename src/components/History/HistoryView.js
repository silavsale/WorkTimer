import React from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import i18n from '../../i18n/i18n.js';
import HistoryViewStyles from './HsitoryViewStyles';
import { ACTIVITY_STORAGE_KEY } from '../../config/consts';

class HistoryView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parseActivities: [],
        };
        this.getActivities = this.getActivities.bind(this);
        props.navigation.addListener('willFocus', this.getActivities);
    }

    async getActivities() {
        const activites = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
        let parseActivities = [];
        if (activites !== null) {
            parseActivities = JSON.parse(activites);
        }
        this.setState({ parseActivities: parseActivities.reverse() });
    }

    renderItem({ item }) {
        return (
            <View style={HistoryViewStyles.historyItemContainer}>
                <View style={{ flex: 4 }}>
                    <Text style={HistoryViewStyles.historyItemNameText}>{item.name}</Text>
                </View>
                <View style={HistoryViewStyles.historyItemDetailsContainer}>
                    <View>
                        <Text style={HistoryViewStyles.historyItemDetailsText}>
                            {moment.utc(item.date).format(i18n.DATE_FORMAT)}
                        </Text>
                    </View>
                    <View>
                        <Text style={HistoryViewStyles.historyItemDetailsText}>
                            {moment.utc(item.timeSpent).format(i18n.TIME_FORMAT)}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { parseActivities } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={HistoryViewStyles.historyPageHeader}>
                    {i18n.HISTORY.SAVE_ACTIVITIES_HEADER}
                </Text>
                <FlatList
                    data={parseActivities}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => {
                        return item.name + index;
                    }}
                />
            </SafeAreaView>
        )
    }
}

export default HistoryView;