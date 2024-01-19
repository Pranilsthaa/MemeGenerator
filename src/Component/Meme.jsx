import data from './data'
import React from 'react'

function Meme(){
      
      const [meme, setMeme] = React.useState(
        {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
        }
      )

      function EventHandler(){
        
        setMeme((prevMeme)=>{
            let i = Math.floor(Math.random()*data.data.memes.length)
            return {
                ...prevMeme,

                randomImage: data.data.memes[i].url
            }
            }
        )
      }

      function handleChange(event){
        const{name, value} = event.target;
        setMeme((preValue)=>({
            ...preValue,
            [name] : value
        }))
      }
console.log(meme)

    return(
        <div className="memeContainer">
            <div className="form">
                    <input placeholder="Top Text" id="h1" onChange={handleChange} name="topText" value={meme.topText}/>
                    <input placeholder="Bottom Text" id="h2" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
                    <button onClick={EventHandler} type="submit">Get a new meme image🖼️</button>
            </div>
            <div className="img_container">
            <h1>{meme.topText}</h1>
                <h2>{meme.bottomText}</h2>
                <img src={meme.randomImage} alt="Meme"/> 
            </div>
        </div>
       
    )
}

export default Meme;

