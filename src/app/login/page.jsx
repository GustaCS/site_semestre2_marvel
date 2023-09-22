'use client'

import Image from "next/image"
import loginimage from "@/images/login.jpg"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { toast } from "react-hot-toast"

export default function Login(){
    const [email, setEmail] = useState("")
    const[senha,setSenha] = useState("")
    const {push} = useRouter()

    function login(e){
        e.preventDefault()
        if(email==="gustavo@fiap.com" && senha==="123"){
            push("/")
        }else{
            toast.error("Credenciais Invalidas!", {
                style:{
                    backgroundColor:'#333',
                    color:'#fff'
                }
            })
        }
    }

    return(
        <div className="flex h-screen bg-black text-slate-50">
            <aside className="hidden md:flex ">
                <Image src={loginimage} className="h-full w-full object-cover"></Image>
            </aside>
            <main className="container m-auto max-w-md p-6">
                <h1 className="text-xl font-bold">Marvel API</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input className="bg-slate-600 p-1 rounded" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="senha">senha</label>
                    <input className="bg-slate-600 p-1 rounded" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <button className="bg-red-600 p-2 mt-3 rounded">Entrar</button>
                </form>
            </main>
        </div>
    )
}