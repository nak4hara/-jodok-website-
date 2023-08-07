import CoupleDinner from '../../../assets/couple-dinner.svg'

export default function Banner() {
    return (
        <div className="grid sm:grid-cols-2 place-items-center bg-slate-600 min-h-screen w-screen ">
            <section className='grid -my-4 sm:my-0 p-8 h-full w-full content-center'>
                <a href="https://storyset.com/event" target='_blank'>
                    <img className='' src={CoupleDinner} />
                </a>
            </section>
            <section className='p-7 sm:p-12 flex flex-col gap-3 sm:gap-8 text-white sm:bg-slate-600'>
                <h1 className='text-2xl sm:text-5xl text-slate-950 font-bold'>Recipes we felt in love, all in one place.</h1>
                <p className='font-light sm:text-lg sm:w-4/5'>
                    This is a collection of recipes we tried and adapted to a couple size meal.
                    We make them mostly for date nights to have a balanced diet during the week.
                    Pick one and enjoy!
                </p>
            </section>
        </div>
    )
}