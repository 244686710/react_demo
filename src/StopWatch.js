import React, { Component, Fragment } from 'react'
import MajorClock from './MajorClock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

class StopWatch extends Component {
    constructor () {
        super(...arguments);

        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: []
        }
    }
    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        });
    }
    onStart = () => {
        this.setState({
            isStarted: true,
            startTime:  new Date(),
            currentTime: new Date()
        })
        
        this.intervalHandle = setInterval(() => {
            this.setState({currentTime: new Date()});
        }, 1000 / 60);
    }
    onPause = () => {
        clearInterval(this.intervalHandle);
        this.setState({
            isStarted: false
        })
    }
    onReset = () => {
        this.setState({
            startTime: null,
            currentTime: null,
            splits: []
        })
    }
    render () {
        return (
            <Fragment>
                <style jsx>{`
                    h1 {
                        color: green
                    }
                `}</style>
                <h1>秒表</h1>
                <MajorClock 
                    milliseconds={this.state.currentTime - this.state.startTime}
                    activated={this.state.isStarted}
                    />
                <SplitTimes value={this.state.splits}/>
                <ControlButtons 
                    activated={this.state.isStarted} 
                    onPause={this.onPause} 
                    onStart={this.onStart} 
                    onSplit={this.onSplit}
                    onReset={this.onReset}
                    />
            </Fragment>
        )
    }
}

export default StopWatch