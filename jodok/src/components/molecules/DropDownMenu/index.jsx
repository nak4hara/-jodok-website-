import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import MenuSharp from '@mui/icons-material/MenuSharp'
import Close from '@mui/icons-material/Close'
import Button from "../../atoms/Button"


export default function DropDownMenu({ menuPages }) {
    const [isOpen, setIsOpen] = useState(false)

    let menuRef = useRef(null);

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            } else return ""
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return (
        <>
            <Button styles='relative' name='menu' ariaLabel="navigation menu" onClick={(open) => setIsOpen(open => !open)}>
                {!isOpen ? (
                    <MenuSharp sx={{ fontSize: '28px' }} />
                ) : (
                    <Close sx={{ fontSize: '28px' }} />
                )
                }
            </Button>
            {isOpen && (
                <div ref={menuRef} className="absolute z-50 top-20 right-0 w-full sm:w-60 transition ease-linear duration-300 translate-y-0">
                    <ul>
                        {menuPages.map(page => (
                            <Link to={page.path} onClick={() => { setIsOpen(false) }}>
                                <li key={page.id} className="p-4 bg-eerie-black hover:bg-white text-white hover:text-blue-700">
                                    {page.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )
            }
        </>
    )
}