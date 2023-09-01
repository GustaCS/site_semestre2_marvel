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
      foto:"https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/02/01-49.jpg"
    },
    {
      nome:"Thanos",
      foto:"https://upload.wikimedia.org/wikipedia/pt/f/fa/Josh_Brolin_como_Thanos.jpeg"
    },
    {
      nome:"Hulk",
      foto:"https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/hulk-png-sem-fundo9.png"
    },
    {
      nome:"Pantera Negra",
      foto:"https://3.bp.blogspot.com/-OG9nOFZnDtY/VE_8PggXt-I/AAAAAAAAI4I/OK0ZEc31Isw/s1600/B1DffjMCUAEN6Z5.jpg%2Blarge.jpg"
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