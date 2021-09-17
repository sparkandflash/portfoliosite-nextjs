import React, { Component } from 'react';
import galleryData from '../galleryData';

export default class Header extends Component {
    render() {
        
        return (
            <React.Fragment>
               
                <header id='home'>
                    <nav id='nav-wrap'>
                        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                        <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                        <ul id='nav' className='nav'>
                            <li className='current'><a className='smoothscroll' href='#home'>Home</a></li>
                            <li><a className='smoothscroll' href='#about'>About</a></li>

                            <li><a className='smoothscroll' href='#portfolio'>Works</a></li>
                            <li><a className='smoothscroll' href='#contact'>Contact</a></li>
                        </ul>
                    </nav>
                    <div className='row banner'>
                        <div className='banner-text'>
                            <h1 className='responsive-headline'>I am {galleryData.name}.</h1>
                            <h3 style={{ color: '#000', fontFamily: 'sans-serif ' }}>I am a {galleryData.role}.{galleryData.roleDescription}
                            </h3>

                            <ul className='social'>
                                {
                                    galleryData.socialLinks && galleryData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target=''><i className={item.className}></i></a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}