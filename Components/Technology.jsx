
function Technology(){
    return (
        <div>
             <nav className='flex justify-between items-center'>
                <img src="../public/space-logo.png'" alt="" className='sm:m-8'/>
                <img src="../public/Group.svg" alt="" className='sm:hidden'/>
                <ul className='sm:flex justify-between w-1/2 p-8 m-0 hidden' id='list'>
                   <a href='/'><li className='cursor-pointer'>HOME</li></a>
                   <a href='/destination'><li className='cursor-pointer'>DESTINATION</li></a>
                   <a href="/crew"><li className='cursor-pointer'>CREW</li></a>
                   <a href="/technology"><li className='cursor-pointer underline underline-offset-32 decoration-2'>TECHNOLOGY</li></a>
                </ul>
            </nav>
            <h1>This is the Technology page</h1>
        </div>
    )
}
export default Technology;