import React from 'react';
import Button from '../Button';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header-wrapper'>
                <div className='header'>
                    <div className='profile-picture-wrapper'>
                        <div className='profile-picture'></div>
                    </div>
                    <h1>Aeden Murray</h1>
                    <p className="tagline">aeden@aedenmurray.io</p>

                    <div className="buttons">
                        <Button 
                            text="GitHub" 
                            icon="logo-github" 
                            href="https://github.com/aedenmurray"
                        />

                        <Button 
                            text="Twitter" 
                            icon="logo-twitter" 
                            href="https://twitter.com/aedenmurray"
                        />
                    </div>
                </div>
            </div>
        );
    }
}