import React,{Component} from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component{
    state={
        eventos:[]
    };

    token = 'NVKG2DE5ZLYJ7ZF45P4J';
    ordenar = 'date';

    obtenerEventos = async (busqueda) =>{

        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        const eventos= await axios.get(url);

        console.log("eventos: ",eventos);
    }
    render(){
        return(
            <EventosContext.Provider
                value={{
                    eventos:this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;