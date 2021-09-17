import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import galleryData from '../galleryData';

export default function Home() {
  return (
    <div className='App'>
<Header galleryData={galleryData}/>
<About galleryData={galleryData}/>
<Portfolio galleryData={galleryData}/>
<ContactMe galleryData={galleryData}/>
<Footer galleryData={galleryData}/>
</div>
  )
}
