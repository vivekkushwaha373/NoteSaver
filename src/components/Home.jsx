import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addtopaste, updatetopaste } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    // const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);
    const { pasteId } = useParams();
   
    useEffect(() => {
        console.log('I am running');
        console.log(pasteId);
        if (pasteId) {
            console.log(pasteId);
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId]); 
    



    function createPaste() {

        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        if (pasteId) {
            //updation
            dispatch(updatetopaste(paste));
        }
        else {
            //creation
            dispatch(addtopaste(paste));
        }

        //after cretion or updation 
        setTitle('');
        setValue('');
        setSearchParams('');
    }

  return (
      <div className='p-2 rounded-md mt-2 text-center '>
         
          <input type="text" placeholder='Enter title here' value={title} onChange={(e) => setTitle(e.target.value)} />
          
          <button onClick={createPaste}>
              {
                  pasteId? 'Update My paste':"Create my paste"
              }
          </button>
          <div>
              <textarea name="" id="" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter your content'
              rows={20} className='rounded-md p-2  border-black border-2 md:w-3/5 w-full mt-5 '
              >
                  
              </textarea>
          </div>
      </div>
  )
}

export default Home
