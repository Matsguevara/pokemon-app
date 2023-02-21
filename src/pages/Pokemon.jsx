import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/pokemon.css"

const Pokemon = () => {

  const [pokemon, setPokemon] = useState()

  const {id} = useParams()

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`

  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then((res) => setPokemon(res.data))
    .catch((err) =>console.log(err))
  }, [])
  

  return (
    <main className='pokemon__main' >
      <div className='pokemon__container'>
      {/* parte superior */}
      <section className='pokemon__card'>
        <section className={`pokemon__header bg-lg-${pokemon?.types[0].type.name}`}>
          <div className='pokemon__img'>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          </div>
        </section>
      </section>

      {/* Body */}
      <section className='pokemon__body'>
        <div className='pokemon__container__id'>
          <div className='pokemon__container__id2' >
              <h2 className='pokemon__id'># {pokemon?.id}</h2>
          </div>
        </div>
          <h2 className='pokemon__name'>{pokemon?.name}</h2>
          <hr className='pokemon__name__hr' />
        <div className='pokemon__card__w-h'>
          <div>
            <h5>Weight</h5>
            <h4 className='pokemon__weigth'>{pokemon?.weight}</h4>
          </div>
          <div>
            <h5>Height</h5>
            <h4 className='pokemon__height'>{pokemon?.height}</h4>
          </div>
        </div>

        <div className='pokemon__card'>
          <div className='pokemon__card__type'>
            <h3>type</h3>
            <div className='pokemon__card__type__1'>
              {
                pokemon?.types.map(type => <div className='pokemon__card__type__2' key={type.type.name}><span>{type.type.name}</span></div>)
              }
            </div>
          </div>
          <div className='pokemon__card__habilities'>
            <h3>habilities</h3>
            <div className='pokemon__card__habilities__1'>
              {
                pokemon?.abilities.map(ability => <div className='pokemon__card__habilities__2' key={ability.ability.name}><span>{ability.ability.name}</span></div> )
              }
            </div>
          </div>
        </div>

        {/* stats */}

        <section className='pokemon__stats'>
          <h2>stats</h2>
          <hr />
          <section className='pokemon__stats-info'>

            {
              pokemon?.stats.map(stat => (
            <article className='pokemon__stat'>
              <div className='pokemon__stat__header'>
                <h4>{stat.stat.name}:</h4>
                <h5>{stat.base_stat}/255</h5>
              </div>
              <div className='pokemon__stat-bar'>
                <div className='pokemon__stat-barGray'>
                  <div className='pokemon__stat-barProgress' style={{width: getPercentBar(stat.base_stat)}}></div>
                </div>
              </div>
            </article>
              ))
            } 
          </section>
        </section>

      </section>
      </div>
    </main>
  )
}

export default Pokemon