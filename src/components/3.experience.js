import React, { Component } from 'react';
import Timelines from './components/timelines';

export default class Experience extends Component {
    render() {
        return (
            <div className="app">
                <Timelines />
                <div className='title'>Experience</div>
                <div className='subtitle'>My experince on Campus 🐑</div>
                <div className='subtitle-small'>My experience is mostly joining Major Community</div>
            </div>
        )
    }
}
