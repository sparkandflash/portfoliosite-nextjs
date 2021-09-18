import React, { Component } from 'react';
export default class Footer extends Component {
render() {
let galleryData = this.props.galleryData;
return (
<footer>
<div className='row'>
<div className='twelve columns'>
<ul className='social-links'>
{
galleryData.socialLinks && galleryData.socialLinks.map((item)=>{
return(
<li>
<a href={item.url}>
<i className={item.className} />
</a>
</li>
)
})
}
</ul>
</div>
<h6 style={{ color: '#436164'}}>
          made with <a href="https://nextjs.org">next.js</a>
        </h6>
<div id='go-top'><a className='smoothscroll' title='Back to Top' href='#home'><i className='icon-up-open' /></a></div>
</div>
</footer>
);
}
}
