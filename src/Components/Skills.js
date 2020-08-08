import React, { Component } from 'react';
import Icons from './Icons';

export default class Skills extends Component {
    render() {
        return (
            <div className="row skill" id="skills">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <Icons />
                </div>
            </div>
        )
    }
}