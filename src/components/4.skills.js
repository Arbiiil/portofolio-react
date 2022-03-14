import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ImgForms } from '../assets';

export default class Skills extends Component {
    render() {
        const mySkills = [
            { name: 'Reactjs', icon: faCode },
            { name: 'Figma', icon: faCode },
            { name: 'etc.', icon: faCode },
        ]
        return (
            <div className="app">
                <ImgForms />
                <div className='title'>Skills</div>
                <div className='subtitle'>Since my experience is mostly in UI and programming</div>
                <div className='subtitle-small'>Then my top skills are UI design and programming</div>

                {mySkills.map((skill, index) => (
                    <div key={index} style={{ margin: '10px 0' }}> <FontAwesomeIcon className='icon' style={{ fontSize: '20px', color: '#532e1c' }} icon={skill.icon} />&nbsp;&nbsp;{skill.name}</div>
                ))}
            </div>
        )
    }
}
