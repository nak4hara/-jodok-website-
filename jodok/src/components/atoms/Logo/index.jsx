import LogoImage from '../../../assets/logo.png'

export default function Logo({size}) {
    return (
        <img className={`object-cover max-h-full ${size}`}
            src={LogoImage}
            alt="Logotype from the website"
        />
    )
}