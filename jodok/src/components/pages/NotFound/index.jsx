import ErrorImage from'../../../assets/404.svg'


export default function NotFound(){
    return (
        <div className='p-8 flex flex-col items-center'>
            <img className='sm:w-1/2' src={ErrorImage} />
            <p className='sm:w-3/4 font-light sm:text-lg'>
                Come back later or wait for Karina to finish her work! Click on logo to go back, thanks!
            </p>
        </div>
    )
}