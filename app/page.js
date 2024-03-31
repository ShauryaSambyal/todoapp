"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [mainTask, setmainTask] = useState([])

    const submitHandler = (e)=> {
        e.preventDefault()
        setmainTask([...mainTask, {title, desc}])
        console.log(mainTask);
        settitle('')
        setdesc('')
    }
    const deleteHandler = (i)=> {
        let copytask = [...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)
    }
    let renderTask = <h2>No Tasks Available</h2>
    
    if(mainTask.length>0){
        renderTask = mainTask.map((t,i)=> {
            return (
                <li key={i} className='flex items-center justify-between mb-5'>
                    <div className='flex items-center justify-between mb-5 w-1 gap-5'>
                        <h5 className='text-2xl font-semibold m-4'>{t.title}:</h5>
                        <h6 className='tex-xl font-medium'>{t.desc}</h6>
                    </div>
                    <button onClick={()=> {
                        deleteHandler(i)
                    }} className='bg-green-700 border-1 rounded border-black text-white px-3 py-2 font-bold'>Done👍</button>
                </li>
            )
        })
    }
    return (
        <>
        <h1 className='bg-black text-white p-3 text-5xl font-bold text-center'>Your TODO List</h1>
        
        <form onSubmit={submitHandler}>
            <input type="text" className='text-2xl border-2 m-5 px-4 py-2 border-green-600' placeholder='Enter your tasks....' value={title} onChange={(e)=> {
                settitle(e.target.value)
            }}/>

            <input type="text" className='text-2xl border-2 m-5 px-4 py-2 border-green-600' placeholder='Enter the Description'
            value={desc}
            onChange={(e)=> {
                setdesc(e.target.value)
            }}
            />

            <button className='text-white px-4 py-2 text-2xl font-bold rounded m-5 bg-green-600 hover:bg-green-900 ease-in duration-100'>Add task</button>
        </form>

        <h2 className='text-4xl m-7 text-center font-bold'>Your tasks</h2>
        <hr />
        <div className='p-8 bg-slate-200'>
            <ul>
                {renderTask}
            </ul>
        </div>

        </>
    )
}

export default page



