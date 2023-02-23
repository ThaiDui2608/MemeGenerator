import React, { useState, useEffect } from 'react'
import { AiFillBook } from 'react-icons/ai'
import './Meme.css'


const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMeme, setAllMeme] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`).then(res => res.json()).then(data => setAllMeme(data.data.memes))
  }, [])
  
  function getNewMeme(e){
    e.preventDefault()
    const ranNum = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[ranNum].url
    setMeme(prev => ({
      ...prev,
      randomImage: url
    }))
    meme.topText = ''
    meme.bottomText = ''
  }

  function changeHandler(e){
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main className='meme_container'>
        <form>
            <div className='input_container'>
                <input type='text' className='form_input' placeholder='top' name='topText' value={meme.topText} onChange={changeHandler}/>
                <input type='text' className='form_input' placeholder='bot' name='bottomText' value={meme.bottomText} onChange={changeHandler}/>
            </div>
            <button className='form_btn' onClick={getNewMeme}>Get a new meme image <AiFillBook/></button>
            <img className='img_meme' src={meme.randomImage} alt=''/>
            <h2 className='meme_text top_text'>{meme.topText}</h2>
            <h2 className='meme_text bottom_text'>{meme.bottomText}</h2>
        </form>
    </main>
  )
}

export default Meme