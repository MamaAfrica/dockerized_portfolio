import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Service from './Service';

function Landingpage(){
    return(
<div>
    <Home/>
    <About/>
    <Service/>
    <Project/>
    <Blog/>
    <Contact/>
    <Footer/>
</div>
    )
}
export default Landingpage