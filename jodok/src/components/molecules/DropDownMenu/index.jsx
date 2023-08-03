import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import MenuSharp from '@mui/icons-material/MenuSharp'
import Close from '@mui/icons-material/Close'


export default function DropDownMenu({ menuPages }) {
    const [isOpen, setIsOpen] = useState(false)

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return (
        <>
            <button
                className='relative'
                onClick={(open) => setIsOpen(open => !open)}>
                {!isOpen ? (
                    <MenuSharp sx={{ fontSize: '28px' }} />
                ) : (
                    <Close sx={{ fontSize: '28px' }} />
                )
                }
            </button>
            {isOpen && (
                <div ref={menuRef} className=" absolute top-20 right-0 w-full sm:w-60">
                    <ul>
                        {menuPages.map(page => (
                            <Link to={page.path} onClick={() => {setIsOpen(false)}}>
                                <li key={page.id} className="p-4 bg-blue-950 hover:bg-white text-white hover:text-blue-700">
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