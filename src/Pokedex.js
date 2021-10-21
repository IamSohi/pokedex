import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
export default class Pokedex extends Component {

    static defaultProps = {
        pokemons: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>

        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>

                <div className="Pokedex-cards">
                    {this.props.pokemons.map(p => (
                        <Pokecard id={p.id} name={p.name} type={p.fire} exp={p.base_experience} />
                    )
                    )}
                </div>




            </div>
        )
    }
}
