import React, { Component } from 'react';
export default class ContactMe extends Component {
render() {
let galleryData = this.props.galleryData;
return (
<section id='contact'>
<div className='row section-head'>
<div className='ten columns'>
<p className='lead'>
Feel free to contact me for commissions or collabs, on discord or instagram.
fiverr coming up soon.

</p>
</div>
</div>
<div className='row'>
<aside className='eigth columns footer-widgets'>
<div className='widget'>
</div>
</aside>
</div>
</section>
);
}
}