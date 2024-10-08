import { Metadata } from "next";
import Image from "next/image";
import  AguaPrincipal  from "@/img/agua1.jpeg"
import  AguaDois  from "@/img/agua2.jpeg"
import  AguaTres  from "@/img/agua3.jpeg"
import { strict } from "assert";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {

  const style = {
    cards: " flex flex-wrap justify-evenly mt-12 ",
    card: " w-96 mb-10 hover:scale-110 shadow-2xl ",
    cardImage: " h-60 rounded-t-3xl ",
    colorTitle: " text-sm font-bold mt-2 ",
    cardTexts: " flex flex-col items-center ",
    h2: " text-[34px] font-bold ",
    cardTextPrin: " p-4 text-center text-stone-400 ",
    obs: " grid grid-flow-col justify-stretch rounded-b-3xl text-white ",
    miniObs: " border-2 text-center py-1.5 ",
    miniTextPrin: " text-[20px] font-bold ",
  }


  // Tem que terminar
  const dados: { image: object, corTitle: string, contTitle: string, conth2: string, contTextPrin: string, obsColor: string, borderMiniObs: string} [] = [
    {
      image: AguaPrincipal,
      corTitle: "text-pink-600",
      contTitle: "4 days ago",
      conth2: "Post One",
      contTextPrin: "Acredita-se que no início do século 16 (dezesseis), uma gráfica imprimiu uma página de teste utilizando partes aleatórias de outros documentos dando origem ao Lorem Ipsum.",
      obsColor: "bg-pink-600",
      borderMiniObs: "border-pink-700"
    },
    {
      image: AguaDois,
      corTitle: "text-orange-500",
      contTitle: "5 days ago",
      conth2: "Post Two",
      contTextPrin: "Acredita-se que no início do século 16 (dezesseis), uma gráfica imprimiu uma página de teste utilizando partes aleatórias de outros documentos dando origem ao Lorem Ipsum.",
      obsColor: "bg-orange-500",
      borderMiniObs: "border-orange-700"
    },
    {
      image: AguaTres,
      corTitle: "text-green-600",
      contTitle: "6 days ago",
      conth2: "Post Three",
      contTextPrin: "Acredita-se que no início do século 16 (dezesseis), uma gráfica imprimiu uma página de teste utilizando partes aleatórias de outros documentos dando origem ao Lorem Ipsum.",
      obsColor: "bg-green-600",
      borderMiniObs: "border-green-700"
    }
  ]

  return (
    <>
    <div className={style.cards}>
      {dados.map((item, index) => (
        <div key={index}>
            <div className={style.card + "rounded-b-3xl "}>
              <Image src={item.image} className={style.cardImage} alt="Imagem da água" width={384} height={240} />
              <div className={style.cardTexts}>
                <p className={style.colorTitle + item.corTitle}>{item.contTitle}</p>
                <h2 className={style.h2}>{item.conth2}</h2>
                <p className={style.cardTextPrin}>{item.contTextPrin}</p>
              </div>
              <div className={style.obs + item.obsColor}>
                <div className={style.miniObs + item.borderMiniObs + " rounded-bl-3xl "}>
                  <p className={style.miniTextPrin}>texto</p>
                  <p>texto</p>
                </div>
                <div className={style.miniObs + item.borderMiniObs}>
                  <p className={style.miniTextPrin}>texto</p>
                  <p>texto</p>
                </div>
                <div className={style.miniObs + item.borderMiniObs + " rounded-br-3xl "}>
                  <p className={style.miniTextPrin}>texto</p>
                  <p>texto</p>
                </div>
              </div>
            </div>
          </div>  
      ))}
    </div> 

    </>
  );
}
