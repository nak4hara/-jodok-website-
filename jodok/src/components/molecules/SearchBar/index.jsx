import SearchIcon from '@mui/icons-material/Search';
import Input from '../../atoms/Input';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';

export default function SearchBar(data) {
    const [query, setQuery] = useState("");

    const filteredItems = useMemo(() => {
        return data.data.filter(item => {
            return item.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [data, query])


    return (
        <div className='relative h-full w-5/6 sm:w-1/2 pt-8'>
            <div className='rounded-full flex justify-between items-center px-3 border border-gray-300'>
                <Input
                    type='search'
                    placeholder='Search here...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <Button name='search-bar' ariaLabel='search recipe icon'>
                    <SearchIcon />
                </Button>
            </div>
            {query && (
                <div className='absolute w-full h-40 rounded-md overflow-hidden overflow-y-auto bg-white'>
                    {filteredItems.map((value, index) => {
                        return (
                            <Link className='flex py-2 px-5 w-full font-light text-stone-800 hover:bg-slate-100' to={`recipe/${value.link}`} key={index}>
                                {value.title}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
};