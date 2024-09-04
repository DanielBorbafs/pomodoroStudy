import React from 'react'
import Botao from '../Botao'
import { deflate } from 'zlib'

class Formulario extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Oque vamos estudar?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Botao />
            </form>

        )

    }

}

export default Formulario