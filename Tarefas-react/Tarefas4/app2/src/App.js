import React from 'react'

class CompA extends React.Component {
  render() {
    return (
      <h2>Olá, eu sou {this.props.nome} {this.props.sobrenome}</h2>
    )
  }

}
export default CompA