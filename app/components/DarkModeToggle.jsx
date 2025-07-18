'use client';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
export default function DarkModeToggle(){
    const {theme,setTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);
    if(!mounted) return null; 
    return(
        <button
            aria-label="Toggle dark mode"
            className="p-2 rounded bg-gray-200 dark:bg-gray-600"
            onClick={()=>setTheme(theme==='light'?'dark':'light')}
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
}