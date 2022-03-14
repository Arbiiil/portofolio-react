import React, { Component } from 'react';
import { ImgCertificate } from '../assets';

export default class Award extends Component {
    render() {
        return (
            <div className="app">
                <ImgCertificate />
                <div className='title'>Awards and Certificates</div>
                <div className='subtitle'>Still looking for Certificates 🔎</div>
                <div className='subtitle-small'></div>
            </div>
        )
    }
}
