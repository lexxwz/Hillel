import React, { Component } from 'react';
import List from '../List/List';
import './stile.css'

class ToDo extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: [],
    }

    transferToSecond() {
        let item = this.state.firstList.shift();
        this.state.secondList.unshift(item);
        this.setState({
            firstList: this.state.firstList,
            secondList: this.state.secondList
        })
    }

    transferToFirst() {
        let item = this.state.secondList.shift();
        this.state.firstList.unshift(item);
        this.setState({
            firstList: this.state.firstList,
            secondList: this.state.secondList
        })
    }

    transferToThird() {
        let item = this.state.secondList.shift();
        this.state.thirdList.unshift(item);
        this.setState({
            secondList: this.state.secondList,
            thirdList: this.state.thirdList
        })
    }

    removeLastItem() {
        this.state.thirdList.pop();
        this.setState({
            thirdList: this.state.thirdList
        })
    }

    render() {
        return (
            <div className='main'>
                <div className='block'>
                    {this.state.firstList.length > 0 && (
                        <List 
                            list = {this.state.firstList} 
                            actions = {
                                [
                                    {text: "Transfer first to right", action: this.transferToSecond.bind(this)}
                                ]
                            }>
                        </List>
                    )}
                </div>
                <div className='block'>
                    {this.state.secondList.length > 0 && (
                        <List 
                            list = {this.state.secondList} 
                            actions = {
                                [
                                    {text: "Transfer first to left", action: this.transferToFirst.bind(this)},
                                    {text: "Transfer first to right", action: this.transferToThird.bind(this)}
                                ]
                            }>
                        </List>
                    )}
                </div>
                <div className='block'>
                    {this.state.thirdList.length > 0 && (
                        <List 
                            list = {this.state.thirdList} 
                            actions = {
                                [
                                    {text: "Remove last item", action: this.removeLastItem.bind(this)}
                                ]
                            }>
                        </List>
                    )}
                </div>
            </div>
        );
    }
}

export default ToDo;