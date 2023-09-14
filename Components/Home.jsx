import './CSS/Home.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className='text-white'>
            <nav className='h-20 w-5/5 mt-8'>
                <input type="checkbox" id="check"/>
                <label for="check" class="cursor-pointer leading-20 float-right mr-8 text-4xl sm:hidden block">
                    <i class='bx bx-menu'></i>
                </label>
                <img src="/space-logo.png" alt="" className='inline-block leading-20 sm:px-10 sm:py-8 pl-16'/>

                <ul id='navigation' className='float-right flex flex-col z-50items-start md:block p-8 pl-16 md:w-3/5 md:static fixed w-3/5 duration-1000 ease-in h-full -right-full text-center'>
                    <Link to='/' className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-20 m-8 underline underline-offset-32 decoration-2'><span className='nav-number'>00  </span>HOME</li></Link>
                    <Link to='/moon' className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><span className='nav-number'>01  </span>DESTINATION</li></Link>
                    <Link to="/crew" className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><span className='nav-number'>02  </span>CREW</li></Link>
                    <Link to="/technology" className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><span className='nav-number'>03  </span>TECHNOLOGY</li></Link>
                </ul>
            </nav>
            <div className='flex flex-col sm:flex-row sm:mt-48 sm:justify-between items-center w-4/5 my-0 mx-auto text-center' id='container'>
                <div className='sm:w-1/2 sm:text-left' id='firstChild'>
                    <p className='text-ash text-2xl sm:text-3xl tracking-widest m-8'>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className='text-white font-bele tracking-wider sm:text-10xl text-8xl m-8'>SPACE</h1>
                    <p className='text-ash text-2xl sm:text-xl m-8 sm:w-3/5'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <h2 className='bg-white text-black p-8 rounded-full w-32 h-32 sm:h-64 sm:w-64 sm:text-3xl sm:p-16 m-8 mb-24 sm:mt-16 font-bele flex items-center track-widest text-center'>EXPLORE</h2>
            </div>
            
        </div>
    )
}
export default Home;