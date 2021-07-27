import { Switch, Route } from "react-router-dom";
import './App.css';
import Container from './components/container/container'
import Header from './components/header/header'
import Main from './components/main/main'
import About from './components/about/about'
import Tracks from './components/tracks/tracks'
import Speakers from './components/speakers/speakers'
import Attend from './components/attend/attend'
import Video from './components/video/video'
import PeopleSay from "./components/peopleSay/peopleSay";
import Tickets from './components/tickets/tickets'
import Sponsors from './components/sponsors/sponsors';
import Supports from './components/supports/supports';
import Footer from './components/footer/footer';


function App() {
    return (
    <>
<Header/>
{/* <Switch> */}
  {/* <Route path="/" exact> */}
<Container>
<Main/>
<About/>
<Tracks/>
<Speakers/>
<Attend/>
</Container>
<Video/>
<Container>
 <PeopleSay/> 
 <Tickets/>
</Container>
<Sponsors/>
<Container>
<Supports/>
</Container>
<Footer/>
{/* </Route> */}
{/* </Switch> */}
</>
  );
}




export default App;
