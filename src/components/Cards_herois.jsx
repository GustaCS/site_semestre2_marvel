"use client"

import { useEffect, useState } from "react"
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
export default function Card_herois({heroi}){
    const [ favorito, setFavorito ] = useState(false) // hooks

    useEffect(() => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(f => f.id === heroi.id)
        setFavorito(favorito)
    }, [])

    function favoritar(){
        setFavorito(true)
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(heroi)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
    
    function desfavoritar(){
        setFavorito(false) 
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizado = favoritos.filter(f => f.id !== heroi.id )
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado))
    }

    return(
        <div className=" rounded overflow-hidden shadow-md">
                    <div className='relative'>
        { favorito ? 
                <StarIcon 
                    className="h-6 w-6 text-red-600 absolute top-1 right-2 cursor-pointer"
                    onClick={desfavoritar}
                 />
                :
                <StarIconOutline 
                    className="h-6 w-6 absolute top-1 right-2 cursor-pointer hover:text-red-600" 
                    onClick={favoritar}
                />
            }
        </div>
            <img className="w-52 h-72 pl-2 sm:h-40" src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}/>
            <div className="m-4">
            <h2 className="text-sm  text-slate-100 text-center font-bold">{heroi.name}</h2>
            </div>
        </div>
    )

}