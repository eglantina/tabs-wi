import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import spidIcone from '../icone/spid_icon.png';
import SpidLogin from './SpidElement';
import LoginCredenziali from './Credenziali';


export default function TabElement() {
  return (
   
    <Tabs
      defaultActiveKey="cie"
      id="uncontrolled-tab-example"
      className="mb-3">

      <Tab eventKey="spid" title="SPID" > <SpidLogin /></Tab> 

      <Tab eventKey="cie" title="CIE"> 
  
      </Tab>
      <Tab eventKey="eidas" title="eIDAS" >
     
      </Tab>
      <Tab eventKey="credenziali" title="Credenziali" >
        <LoginCredenziali />
      </Tab>

    </Tabs> 
 
  );
}
