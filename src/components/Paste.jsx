import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removefrompaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    
    function handleDelete(pasteId) {
        dispatch(removefrompaste(pasteId));      
    }
    
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-full text-center'>
            <input type="search" className='p-2 rounded-2xl min-w-[600px] mt-5 border-2  text-center border-slate-900' placeholder='search here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <div className='flex flex-col gap-5 mt-5 '>
                {
                    filteredData.length > 0 &&
                    filteredData.map((paste) => {
                        return (
                            <div className='border' key={paste?._id}>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    {paste.content}
                                </div>
                                <div className='flex flex-row gap-4 place-content-evenly '>
                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>
                                          
                                            Edit
                                        </a>
                                    </button>
                                    
                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>
                                            view
                                        </a>
                                    </button>
                                        
                                    <button onClick={()=>handleDelete(paste?._id)} >
                                        Delete
                                    </button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste?.content)
                                        toast.success('copied to clipboard')
                                    }}>
                                        Copy
                                    </button>
                                {/* share wala HW hai  */}
                                    <button>
                                        Share
                                    </button>
                                        
                                </div>
                                <div>{paste.createdAt}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Paste
