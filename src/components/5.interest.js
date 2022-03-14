import React, { Component } from 'react';
import { ImgSearching } from '../assets';

export default class Interest extends Component {
    render() {
        return (
            <div className="app">
                <ImgSearching />
                <div className='title'>Interest</div>
                <div className='subtitle'>I always wanna being interested in <b>Design 🎨</b></div>
            </div>
        )
    }
}
