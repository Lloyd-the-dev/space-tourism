import '../CSS/Moon.css'
import { Link } from "react-router-dom";


function Moon(){
    return (
        <div id="moon">
            <nav className='h-20 w-5/5 mt-8'>
                <input type="checkbox" id="check"/>
                <label for="check" class="cursor-pointer leading-20 float-right mr-8 text-4xl sm:hidden block">
                    <i class='bx bx-menu'></i>
                </label>
                <img src="/space-logo.png" alt="" className='inline-block leading-20 sm:px-10 sm:py-8 pl-16'/>

                <ul id='navigation' className='float-right flex flex-col z-50items-start md:block p-8 pl-16 md:w-3/5 md:static fixed w-3/5 duration-1000 ease-in h-full -right-full text-center'>
                    <Link to='/' className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-20 m-8'><span className='nav-number'>00  </span>HOME</li></Link>
                    <Link to='/moon' className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8 underline underline-offset-32 decoration-2'><span className='nav-number'>01  </span>DESTINATION</li></Link>
                    <Link to="/crew" className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><span className='nav-number'>02  </span>CREW</li></Link>
                    <Link to="/technology" className="hover:text-gray-400 ease-in duration-300"><li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><span className='nav-number'>03  </span>TECHNOLOGY</li></Link>
                </ul>
            </nav>
            {/* Body Section */}
            <div className='flex flex-col w-4/5 items-center sm:items-start sm:mt-8 mx-auto  text-ash'>
                <h1 className='m-4 tracking-widest text-2xl'>01 PICK YOUR DESTINATION</h1>
                <div className='md:flex md:mt-8 md:justify-around'>
                    <img src="/moon.png" alt="" className='w-2/5 mx-32 sm:mx-16 my-8 animate-spin-slow'/>
                    <div className='md:flex md:items-start md:flex-col md:w-2/5'>
                        <ul className='flex justify-between w-3/5 my-8 mx-auto md:mx-0'>
                            <Link to="/moon" className='text-white underline underline-offset-16 decoration-4'><li>MOON</li></Link>
                            <Link to="/mars"><li>MARS</li></Link>
                            <Link to="/europa"><li>EUROPA</li></Link>
                            <Link to="/titan"><li>TITAN</li></Link>
                        </ul>
                        <h1 className='font-bele tracking-wider text-white text-5xl text-center'>MOON</h1>
                        <p className='text-center md:text-left my-4 mx-auto md:mx-0 w-3/5'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <hr className="border border-horizon w-4/5 md:w-3/5 my-8 mx-auto sm:mx-0"/>
                        <div className='flex flex-col sm:flex-row sm:justify-between text-center sm:text-left sm:w-3/5'>
                            <div className='sm:w-1/2'>
                                <p>AVG. DISTANCE</p>
                                <p className='text-3xl sm:text-xl text-white font-bele mb-4'>384,400 KM</p>
                            </div>
                            <div className='sm:w-1/2'>
                                <p>Est. travel time</p>
                                <p className='text-3xl sm:text-xl text-white font-bele mb-4 uppercase'>3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Moon;