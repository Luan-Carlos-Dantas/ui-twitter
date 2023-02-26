import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separetor } from '../components/Separetor'
import { Tweet } from '../components/Tweet'

import './Status.css'

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([''])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key == 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswer([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet'/>
        <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam nesciunt placeat veniam ab! Suscipit consequatur officia explicabo consectetur ullam adipisci tempore modi qui laboriosam voluptates magni, ducimus provident excepturi!'/>
        <Separetor/>
        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Luan-Carlos-Dantas.png" alt="profile-image" />
              <textarea id="tweet" 
              placeholder="Tweet your answer"
              value={newAnswer}
              onKeyDown = {handleHotkeySubmit}
              onChange={(event) =>{
                setNewAnswer(event.target.value)
              }}></textarea>
            </label>
            <button type='submit'>
              <PaperPlaneRight/>
              <span>Answer</span>
            </button>
          </form>


          {answers.map(answer =>{
            return(
              <Tweet key={answer} content={answer}/>
            )
          })}
    </main>

  )
}