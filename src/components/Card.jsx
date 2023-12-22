import { useState } from 'react'
import Form from './Form'

function Card () {
  const [birthDateOuput, setBirthDateOuput] = useState(null)
  return (
    <>
      <article className="bg-white px-8 rounded-t-3xl rounded-bl-3xl rounded-br-[35%] w-full md:w-[500px] shadow-sm">
        <header className="py-8 border-b-2 pb-14 md:pb-8 relative">
          <Form setBirthDateOuput={setBirthDateOuput} />
        </header>
        <footer className="pb-10 pt-12 md:py-10 md:pt-8">
          <ul className=" flex flex-col gap-1">
            <li className="font-bold text-4xl md:text-6xl italic">
              <span className="text-violet-600">{birthDateOuput?.years ?? '- -'}</span> years
            </li>
            <li className="font-bold text-4xl md:text-6xl italic">
              <span className="text-violet-600">{birthDateOuput?.months ?? '- -'}</span> months
            </li>
            <li className="font-bold text-4xl md:text-6xl italic">
              <span className="text-violet-600">{birthDateOuput?.days ?? '- -'}</span> days
            </li>
          </ul>
        </footer>
      </article>
    </>

  )
}

export default Card
