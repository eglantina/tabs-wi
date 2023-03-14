import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiUserCircle , HiEyeSlash} from "react-icons/hi2";

export default function SpidLogin(){
return (
    <div>
    <p>SPID, il Sistema Pubblico di Identità Digitale, è il sistema di accesso che consente di utilizzare, 
    con un'identità digitale unica, i servizi online della Pubblica Amministrazione e dei privati accreditati. 
    Se sei già in possesso di un'identità digitale, accedi con le credenziali del tuo gestore. Se non hai ancora un'identità digitale, 
    richiedila ad uno dei gestori.</p>

    <Button as="a" variant="primary">
        < HiUserCircle />
    Entra con SPID
    </Button>
    
    </div>
);
}