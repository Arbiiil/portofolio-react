import React, { Component } from 'react';
import { ImgPortofolio } from '../assets';

export default class Home extends Component {
    render() {
        return (
            <div className="app">
                <div>
                    <ImgPortofolio />
                </div>
                <div className='title'>Hello Everyone!</div>
                <div className='subtitle'>My name is Muhammad Rafif Wicaksono 🙆🏽‍♂️</div>
                <div className='subtitle-small'>Undergraduate 6th-Semester Student </div>
                <div className='subtitle-smaller'>Airlangga University</div>
            </div>
        )
    }
}
