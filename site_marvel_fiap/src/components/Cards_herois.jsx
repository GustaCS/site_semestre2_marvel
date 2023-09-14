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
        <div className="items-center ml-4 gap-1">
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
        <img className="w-56 h-60 " src={heroi.foto} />
            <h2 className="text-3xl text-center text-slate-50">{heroi.nome}</h2>
        </div>
    )

}