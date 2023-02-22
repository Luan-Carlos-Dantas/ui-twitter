import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separetor } from "../components/Separetor"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweet]= useState([''])

// SPA - Evitar redirecionamento

  function handleHotkeySubmit(event:KeyboardEvent){
    if (event.key == 'Enter' && (event.ctrlKey || event.metaKey)){

      setTweet([ newTweet, ...tweets])
      setNewTweet('')
    }
  }

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweet([ newTweet, ...tweets])
    setNewTweet('')
  }
 

  return(
    <main className='timeline'>
      <Header title='Tweet'/>

        <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Luan-Carlos-Dantas.png" alt="profile-image" />
              <textarea id="tweet"
               placeholder="What's happening ?" 
               value={newTweet}
               onKeyDown={handleHotkeySubmit}
               onChange={
                (event) =>{
                 setNewTweet(event?.target.value)
              } }></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <Separetor/>

          {tweets.map(tweet =>{
            return(
              <Tweet key={tweet} content={tweet}/>
            )
          })}
    </main>
  )
}

