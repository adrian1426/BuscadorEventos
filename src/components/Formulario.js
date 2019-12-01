import React,{Component} from 'react';
import {CategoriaConsumer} from '../context/CategoriaContext';

class Formulario extends Component{
    state = {
        nombre:'',
        categoria:''
    }

    obtenerDatosBusqueda = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render(){
        return(
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoria
                    </legend>
                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input
                            name="nombre"
                            className="uk-input"
                            type="text"
                            placeholder="Nombre de evento o ciudad"
                            onChange={this.obtenerDatosBusqueda}
                        />
                    </div>

                    <div className="uk-margin" uk-margin="true">
                        <select
                            className="uk-select"
                            name="categoria"
                            onChange={this.obtenerDatosBusqueda}
                        >
                            <option value="">--seleccionar categoria--</option>
                            <CategoriaConsumer>
                                {
                                    (value) =>{
                                        return(
                                            value.categorias.map(categoria=>(
                                                <option 
                                                    key={categoria.id}
                                                    value={categoria.id}
                                                    data-uk-form-select
                                                >
                                                    {categoria.name_localized}
                                                </option>
                                            ))
                                        )
                                    }                                  
                                }
                            </CategoriaConsumer>
                        </select>
                    </div>

                    <div>
                        <input 
                            type="submit" 
                            className="uk-button uk-button-danger"
                            value="Buscar"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Formulario;