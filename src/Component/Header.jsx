import trollface from '../Image/troll.png'


function Header(){
    return(
        <div className="header_container">

            <div className="left">
            <img src={trollface} alt="trollface" className='headerLogo'/>
            <h1 className='headerh1'>Meme Generator</h1>
            </div>
            <h2>React Course - Project 3</h2>

        </div>
    )
}

export default Header;