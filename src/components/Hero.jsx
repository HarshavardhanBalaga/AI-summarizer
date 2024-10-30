import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className="w-28 object-contain" />

            <button type="button" onClick={() => {window.open('https://github.com/HarshavardhanBalaga', '_blank')}} className="black_btn">Github</button>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br />
            <span className="orange_gradient">OpenAI</span>
        </h1>
        <h2 className="desc">
            simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero