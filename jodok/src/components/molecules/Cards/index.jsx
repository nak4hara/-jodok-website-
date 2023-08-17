
import { Link } from 'react-router-dom'
import Title from '../../atoms/Title'
import Button from '../../atoms/Button'

export default function Cards({ link, srcImage, title, description }) {
    return (
        <Link to={`recipe/${link}`} >

            <header className='max-w-xs'>
                <img className='object-cover w-full h-48'
                    src={srcImage}
                    alt={title}
                />
            </header>
            <section className='p-3 pb-4 flex flex-col gap-2'>
                <Title styles='font-semibold text-chestnut'>
                    {title}
                </Title>
                <div className='pb-2 text-justify grow'>
                    {description}
                </div>
                <Button styles='hover:bg-eerie-black bg-chestnut text-white text-xs w-24'>
                    View recipe
                </Button>
            </section>

        </Link>
    )
}