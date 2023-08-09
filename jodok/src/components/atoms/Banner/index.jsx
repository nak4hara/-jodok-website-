import CoupleDinner from '../../../assets/couple-dinner.svg'

export default function Banner() {
    return (
        <div className="grid sm:grid-cols-2 place-items-center bg-slate-600 min-h-full w-screen ">
            <section className='grid -my-4 sm:my-0 p-8 h-full w-11/12 content-center'>
                <a href="https://storyset.com/event" aria-label='Author of the illustration.' target='_blank'>
                    <img alt='Illustration of a couple eating in a table and drinking wine together' src={CoupleDinner} />
                </a>
            </section>
            <section className='p-10 sm:p-12 flex flex-col gap-5 sm:gap-8 text-white sm:bg-slate-600'>
                <h1 className='text-2xl sm:text-5xl font-bold'>Recipes he loves, all in one place.</h1>
                <p className='font-normal sm:text-lg sm:w-4/5'>
                    This is a collection of recipes we tried and adapted to a couple size meal.
                    We make them mostly for our weekly date nights.
                    Pick one and enjoy!
                </p>
            </section>
        </div>
    )
}