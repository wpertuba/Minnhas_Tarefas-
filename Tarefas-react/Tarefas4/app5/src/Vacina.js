import React from 'react';

export default class Vacina extends React.Component {
    render() {
        return ( 
            <div>        
            <h3>  {this.props.nome} é uma vacina contra a Covid-19 </h3> 
            </div> 
            );
            
    }
}