import React, { Component } from 'react';
import { ImgAboutMe } from '../assets';

export default class About extends Component {
    render() {
        return (
            <div className="app">
                <ImgAboutMe />
                <div className='title'>About me</div>
                <div className='subtitle'>I was born in Jakarta, Indonesia</div>
                <div className='subtitle-small'>Last But not least i wanna thank me, for believing me</div>
            </div>
        )
    }
}
