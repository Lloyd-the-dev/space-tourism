import './CSS/Home.css'
import logo from '../public/space-logo.png'
import hamburger from '../public/Group.svg'

function Home(){
    return(
        <div className='m-8 sm:m-0 text-white'>
            <nav className='flex justify-between items-center'>
                <img src={logo} alt="" className='sm:m-8'/>
                <img src={hamburger} alt="" className='sm:hidden'/>
                <ul className='sm:flex justify-between w-1/2 p-8 m-0 hidden' id='list'>
                   <a href='/'><li className='underline underline-offset-32 decoration-2 cursor-pointer'>HOME</li></a>
                   <a href='/destination'><li className='cursor-pointer'>DESTINATION</li></a>
                   <a href="/crew"><li className='cursor-pointer'>CREW</li></a>
                   <a href="/technology"><li className='cursor-pointer'>TECHNOLOGY</li></a>
                </ul>
            </nav>
            <div className='mt-24 w-4/5  sm:ml-12 text-center md:ml-32 sm:flex' id='container'>
                <div className='w-3/5' id='firstChild'>
                    <p className='text-ash text-2xl tracking-widest' id='container'>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className='text-white text-8xl sm:text-10xl font-bele tracking-wider mt-8'>SPACE</h1>
                    <p className='text-ash text-xl mt-8 sm:w-3/5'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <h2 className='bg-white text-black p-8 rounded-full w-32 h-32 mb-24 font-bele flex items-center ml-32 mt-16 track-widest text-center sm:w-48 sm:h-48 sm:text-2xl sm:ml-48 sm:justify-center'>EXPLORE</h2>
            </div>
            
        </div>
    )
}
export default Home;