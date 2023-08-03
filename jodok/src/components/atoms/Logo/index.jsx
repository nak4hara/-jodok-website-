import LogoImage from '../../../assets/logo.png'

export default function Logo() {
    return (
        <img className='object-cover max-h-full'
            src={LogoImage}
            alt="Logotype from the website"
        />
    )
}