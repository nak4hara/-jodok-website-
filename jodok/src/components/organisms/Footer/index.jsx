import Logo from '../../atoms/Logo'

export default function Footer(){
    return(
       <footer className='bg-eerie-black p-2 w-full fixed bottom-0 left-0 flex justify-center items-center'>
            <section className='hidden w-1/2 justify-center'>
                <Logo size='w-3/4'/>
            </section>
            <section className='p-4 text-xs text-white font-light'>
                Developed by Karina Nakahara.
            </section>
       </footer> 
    )
}