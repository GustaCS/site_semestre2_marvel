export default function Card_herois({children}){

    return(
        <div className="w-56 h-72 ml-5">
        <img className="Rectangle7 w-56 h-[255px]" src="https://via.placeholder.com/228x294" />
            <h2 className="text-3xl text-center text-slate-50">{children}</h2>
        </div>
    )

}