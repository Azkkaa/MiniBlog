import { useEffect, useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log(search);
    }, [search]);

    return (
        <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
            <div className='bg-white text-gray-900'>
                <header className='mt-10 p-7'>
                    <h1 className='text-[26px] font-bold underline underline-offset-2'>Search Bar</h1>
                </header>

                <div>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full p-2 border border-gray-500 rounded-xl' placeholder='Search' />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;