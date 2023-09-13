import './CSS/Destination.css'

function Destination(){
    return (
        <div>
              <nav className='h-20 w-5/5 mt-8'>
                <input type="checkbox" id="check"/>
                <label for="check" class="cursor-pointer leading-20 float-right mr-8 text-4xl sm:hidden block">
                    <i class='bx bx-menu'></i>
                </label>
                <img src="/space-logo.png" alt="" className='inline-block leading-20 sm:px-10 sm:py-8 pl-16'/>

                <ul className='float-right flex flex-col items-start md:block p-8 pl-16 md:w-3/5 md:static fixed w-3/5 duration-1000 ease-in h-full -right-full text-center'>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-20 m-8'><a href='/' className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>00  </span>HOME</a></li>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8 underline underline-offset-32 decoration-2'><a href='/destination' className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>01  </span>DESTINATION</a></li>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><a href="/crew" className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>02  </span>CREW</a></li>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><a href="/technology" className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>03  </span>TECHNOLOGY</a></li>
                </ul>
            </nav>
            {/* Body Section */}
            <div className='flex flex-col w-4/5 items-center mx-auto  text-ash'>
                <h1 className='m-4'>01 PICK YOUR DESTINATION</h1>
                <div>
                    <img src="/moon.png" alt="" className='w-2/5 mx-32 my-8'/>
                    <div>
                        <ul className='flex justify-between w-4/5'>
                            <li><a href="">MOON</a></li>
                            <li><a href="">MARS</a></li>
                            <li><a href="">EUROPA</a></li>
                            <li><a href="">TITAN</a></li>
                        </ul>
                        <h1>MOON</h1>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <hr />
                        <div className='flex'>
                            <div>
                                <p>AVG. DISTANCE</p>
                                <p>384,400 KM</p>
                            </div>
                            <div>
                                <p>Est. travel time</p>
                                <p>3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination;