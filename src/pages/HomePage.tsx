import React from 'react';
import { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { LJTask, LJTaskState } from '../models/LJTask';

interface Props {

}

interface State {
    source: Object[]
}

export default class HomePage extends Component<Props, State> {
    static navigationOptions = {
        headerTitle: "ToDo",
        headerLeft: <Button title="Add" onPress={() => {

        }} />,
        headerRight: <Button title="Edit" onPress={() => {

        }} />
    }
    
    constructor(props: Props) {
        super(props);
        this.state = {
            source: [
                {key: "1", task: new LJTask("1", "111", "222", LJTaskState.prepared)},
                {key: "2", task: new LJTask("2", "111", "222", LJTaskState.prepared)}
            ]
        };
    }
 
    _renderItem = ({item}: any, index: number) => {
        let task: LJTask = item.task;
        return (
          <TouchableOpacity key={item.key} onPress={() => this._pressToDoTask(task)}
           style={styles.itemContainer} >
           <Text>{task.name}</Text>
           <Text style={styles.time}>{task.startTime + "-" + task.endTime}</Text>
           <Text style={styles.time}>{"状态：" + task.taskState}</Text>
          </TouchableOpacity>)
    }

    _pressToDoTask = (task: LJTask) => {
        alert(task.name);
    }

    render() {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.source} 
              renderItem={this._renderItem}   
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 5,
        borderRadius: 4,
    },
    time: {
        marginTop: 4,
        fontSize: 12,
    }

});
