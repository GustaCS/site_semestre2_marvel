export default function Card_herois({heroi}){

    return(
        <div className="items-center ml-4 gap-1">
        <img className="w-56 h-60 " src={heroi.foto} />
            <h2 className="text-3xl text-center text-slate-50">{heroi.nome}</h2>
        </div>
    )

}