import React,{Component} from 'react';
import axios from 'axios';

//crear context
const CategoriaContext = React.createContext();
export const CategoriaConsumer = CategoriaContext.Consumer;

class CategoriaProvider extends Component{
    state = {
        categorias : []
    };

    token = 'NVKG2DE5ZLYJ7ZF45P4J';

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async() =>{
        let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.categories
        });
    }

    render(){
        return(
            <CategoriaContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriaContext.Provider>
        );
    }
}

export default CategoriaProvider;