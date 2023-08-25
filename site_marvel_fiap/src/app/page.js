import Campo_card from "@/components/Campo_card";
import Card_herois from "@/components/Cards_herois";
import Titulo from "@/components/Titulo";

export default function Home() {

  const marvel =[
    {
      nome:"homem Aranha",
      foto:"https://portalpopline.com.br/wp-content/uploads/2023/06/homem-aranha-4-2025-758x570.jpg"
    },
    {
      nome:"Captão America",
      foto:"https://portalpopline.com.br/wp-content/uploads/2023/06/homem-aranha-4-2025-758x570.jpg"
    },
    {
      nome:"Thanos",
      foto:"https://portalpopline.com.br/wp-content/uploads/2023/06/homem-aranha-4-2025-758x570.jpg"
    },
    {
      nome:"Hulk",
      foto:"https://portalpopline.com.br/wp-content/uploads/2023/06/homem-aranha-4-2025-758x570.jpg"
    },
    {
      nome:"Pantera Negra",
      foto:"https://portalpopline.com.br/wp-content/uploads/2023/06/homem-aranha-4-2025-758x570.jpg"
    }
  ]

  return ( //JSX
    <main>
      <div className="absolute">
        <img src="/image/fundo_marvel.png" className="w-screen h-screen"/>
      </div>
      <div className=" w-full h-screen bg-black bg-opacity-50 blur-1 absolute">
        {/* menu */}
      <div className="w-screen h-20 bg-red-800 bg-opacity-50">
        <h1 className="text-zinc-100 border-solid text-4xl p-4 float-left">MARVEL</h1>
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
        {marvel.map(herois=> <Card_herois heroi={herois}/>)}
      </Campo_card>
      </div>
      
    </main>
   
  )
}