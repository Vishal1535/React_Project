import React, { useEffect, useState } from "react";
import sentences from "./Component/JS/Sentence";

const App=()=>{
  let [Timer,SetTimer]=useState(60)
  const [Mistake,SetMistake]=useState(0)
  const [Text,SetText]=useState('');
  let [input,SetInput]=useState('')
  let [isType,SetType]=useState(false)
  let [Result,SetResult]=useState(false)
  const [Wpm, SetWpm] = useState(0)
  useEffect(()=>{
    let r=sentences[Math.floor(Math.random()*sentences.length)];
    SetText(r)
  },[])
  const handleChange=(e)=>{
    if(!isType)
      SetType(true);
   SetInput(e.target.value)
    

  }
  useEffect(()=>{
    let error=0;
    let correct=0;
    for(let i=0;i<input.length;i++)
    {
      if(input[i]!=Text[i])
      {
        error++;
      }
      else correct++
    }
    const words = correct / 5;
    SetWpm(words)
    SetMistake(error)
    if(input.length===Text.length)
    {
       let r=sentences[Math.floor(Math.random()*sentences.length)];
    SetText(r)
    SetInput('')

    }
    
  },[input])
  useEffect(() => {

  if (!isType || Timer <= 0) return

  const id = setInterval(() => {

    SetTimer((prev) => prev - 1)

  }, 1000)

  return () => clearInterval(id)

}, [isType, Timer])
useEffect(()=>{
  if(Timer===0)
  {
    SetResult(true)
  }
},[Timer])
  return(
<>
 
{!Result ? (

   <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center p-5">

  <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-3xl w-full">

    <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">
      TypeSpeed Test
    </h1>

    {/* Top */}
    <div className="flex justify-between mb-5">

      <div className="bg-orange-100 px-5 py-3 rounded-2xl">
        <p className="text-sm text-gray-500">
          Time Left
        </p>

        <h2 className="text-2xl font-bold text-orange-500">
          {Timer}s
        </h2>
      </div>

      <div className="bg-red-100 px-5 py-3 rounded-2xl">
        <p className="text-sm text-gray-500">
          Mistakes
        </p>

        <h2 className="text-2xl font-bold text-red-500">
          {Mistake}
        </h2>
      </div>

    </div>

    {/* Sentence */}
  {/* Sentence */}
<div className="text-xl leading-10 bg-gray-100 p-5 rounded-2xl mb-5 text-gray-700">

  {Text.split("").map((char, index) => {

    let color = ""

    if (index < input.length) {

      color =
        char === input[index]
          ? "text-green-500"
          : "text-red-500"
    }

    return (
      <span
        key={index}
        className={color}
      >
        {char}
      </span>
    )

  })}

</div>

    {/* Input */}
    <input
      type="text"
      placeholder="Start Typing here..."
      value={input}
      className="w-full border-2 border-orange-300 outline-none rounded-2xl p-4 text-lg focus:border-orange-500 duration-300" onChange={handleChange}
    />

  </div>

</div>
) : (

  <div className="bg-white shadow-2xl rounded-3xl p-8 my-30 text-center">

    <h1 className="text-4xl font-bold text-green-500 mb-5">
      Time Out ⌛
    </h1>

    <p className="text-2xl mb-3">
      WPM: {Wpm}
    </p>

    <p className="text-2xl mb-3">
      Mistakes: {Mistake}
    </p>

    <button
      onClick={() => window.location.reload()}
      className="bg-orange-500 text-white px-6 py-3 rounded-2xl mt-5"
    >
      Restart
    </button>

  </div>

)}
</>
  )
}

export default App;