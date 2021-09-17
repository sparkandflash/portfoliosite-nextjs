import React, { Component } from 'react';
export default class About extends Component {
render() {
let galleryData = this.props.galleryData;
return (
<section id='about'>
<div className='row'>
<div className='three columns'>
<img className='profile-pic' src='images/plaz2.png' alt=' '/>
</div>
<div className='nine columns main-col'>
<h2>About Me</h2>
<p>
{
galleryData.aboutme
}
</p>

</div>
</div>
</section>
);
}
}