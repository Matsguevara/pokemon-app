import React from 'react'
import {useDispatch} from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));
  }


  return (
    <main>
        <section className='home'>
            <div className='home__img'>
                <img src="/images/pokedex.png" alt="" />
            </div>
            <h2 className='home__title'>¡Hello trainer!</h2>
            <p className='home__p'>Give me your name to start!</p>
            <form className='home__form' onSubmit={handleSubmit} >
                <input className='home__input' required id='nameTrainer' type="text" placeholder='your name...' />
                <button className='home__btn'>Start</button>
            </form>
        </section>
        <div className='home__red'></div>
        <div className='home__black'>
          <div className='home__pokeball'></div>
        </div>
    </main>
  )
}

export default Home