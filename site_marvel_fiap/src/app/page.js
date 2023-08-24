import Campo_card from "@/components/Campo_card";
import Titulo from "@/components/Titulo";
import Card_herois from "@/components/cards_herois";

export default function Home() {
  return ( //JSX
    <main>
      <div className="Fundo w-full h-screen bg-black">
      <div className="RectangleInicial w-screen h-24 bg-red-800 bg-opacity-50">
        <h1 className="text-zinc-50 text-6xl p-4 float-left">Marvel</h1>
        <a href="#" className="text-zinc-50 text-3xl ml-3 p-7 float-left">Herois</a>
        <a href="#" className="text-zinc-50 text-3xl ml-3 p-7 float-left">Vilões</a>
        <a href="#" className="text-zinc-50 text-3xl ml-3 p-7 float-left">Equipes</a>
        <input type="text" className="m-6 p-3 rounded-md ml-80 w-1/4"></input>
      </div>
      <Titulo>Personagens</Titulo>
      <Campo_card>
      <Card_herois>Captão America</Card_herois>
        <Card_herois>Captão America</Card_herois>
        <Card_herois>Homem Aranha</Card_herois>
        <Card_herois>Homem Aranha</Card_herois>
        <Card_herois>Homem Aranha</Card_herois>
        <Card_herois>Homem Aranha</Card_herois>
        </Campo_card>
      </div>
    </main>
   
  )
}