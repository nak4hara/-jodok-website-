
import { Link } from 'react-router-dom'
import Title from '../../atoms/Title'

export default function Cards({ link, srcImage, title, description }) {
    return (
        <Link to={`recipe/${link}`} >

            <header className='max-w-xs'>
                <img className='object-cover w-full h-48'
                    src={srcImage}
                    alt={title}
                />
            </header>
            <body className='p-3 pb-4 flex flex-col gap-2'>
                <Title styles='font-semibold text-chestnut'>
                    {title}
                </Title>
                <div className='pb-2 text-justify grow'>
                    {description}
                </div>
                <button className='bg-chestnut text-white p-2 w-1/2 rounded-sm place-self-center'>
                    View recipe
                </button>
            </body>

        </Link>
    )
}