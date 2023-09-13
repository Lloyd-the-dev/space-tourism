
function Technology(){
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
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><a href='/destination' className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>01  </span>DESTINATION</a></li>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8'><a href="/crew" className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>02  </span>CREW</a></li>
                   <li className='cursor-pointer block md:inline-block leading-20 sm:my-0 sm:mx-10 m-8 underline underline-offset-32 decoration-2'><a href="/technology" className="hover:text-gray-400 ease-in duration-300"><span className='nav-number'>03  </span>TECHNOLOGY</a></li>
                </ul>
            </nav>
            <h1>This is the Technology page</h1>
        </div>
    )
}
export default Technology;