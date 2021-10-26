import React from "react";
import Aluno from './Aluno';

export default class Faculdade extends React.Component {
    render() {
        return (

            <div>
                <h3>Quem está na Faculdade? </h3>
                <Aluno />
            </div>

        );
    }
}
