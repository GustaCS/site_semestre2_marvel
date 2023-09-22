import Campo_card from "@/components/Campo_card";
import Card_herois from "@/components/Cards_herois";
import Titulo from "@/components/Titulo";
import md5 from "md5";

const api_base_url = "https://gateway.marvel.com/v1/public"
const apikey="a56ade455a618737bdcba62667a72fbe"
const private_key="6b713a76e4f19d0a6eadadc7901539c2323110aa"

const pegarTimeStamp = () => Date.now().toString()
const getHash=(timeStamp)=>md5(timeStamp+private_key+apikey)

const timeStamp = pegarTimeStamp()
const hash = getHash(String(timeStamp))
const query = `limit=15&ts=${timeStamp}&apikey=${apikey}&hash=${hash}`

const url=`${api_base_url}/characters?${query}`

async function carregarDados(){
  const response = await fetch(url)
  const json = await response.json()
  return json.data.results
}
export default async function Home() {
  carregarDados()
  const dadosMarvel = await carregarDados()
  return ( //JSX
    <main>
      <div className="absolute">
        <img src="/image/fundo_marvel.png" className="w-screen h-screen bg"/>
      </div>
      <div className=" w-full h-screen bg-black bg-opacity-50 blur-1 absolute">
        {/* menu */}
      <div className="w-screen h-20 bg-red-800 bg-opacity-50">
        {/*logo marvel*/}
        <div className="absolute">
        <img src="/image/marvel-logo-nav.png" className="w-28  h-28 pb-8"/>
      </div>
        <ul className="flex pt-5 pl-32 float-left">
          <li className="text-zinc-100 text-3xl ml-3"><a href="#">Herois</a></li>
          <li className="text-zinc-100 text-3xl ml-3"><a href="#">Vilões</a></li>
          <li className="text-zinc-100 text-3xl ml-3"><a href="#">Equipes</a></li>
        </ul>
        <input type="text" className="m-5 p-2 ml-60 rounded-md  w-1/4"></input>
      </div>
      {/*personagens*/}
      <Titulo>Personagens</Titulo>
      <Campo_card>
        {dadosMarvel.map(herois=> <Card_herois heroi={herois}/>)}
      </Campo_card>
      </div>
      
    </main>
   
  )
}