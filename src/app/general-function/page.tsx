
"use client"
import { useState } from "react"

const GeneralFunction: React.FC = () => {

    interface HandelProps {
        a: string,
        b: string;
    }

    const [numero1, setNumero] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")

    const [respSoma, setSoma] = useState<number | undefined>()
    const [respSub, setSub] = useState<number | undefined>()
    const [respMul, setMul] = useState<number | undefined>()
    const [respDiv, setDiv] = useState<number | undefined>()

    const erro = "Digite direito, Sr. Usuário!"

    const handleAll = ({a, b} : HandelProps) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if (!isNaN(n1) && !isNaN(n2)) {
            setSoma(n1 + n2)
            setSub(n1 - n2)
            setDiv(n2 !== 0 ? n1/n1 : undefined)
            setMul(n1 * n2)
        }
    }

    return (
        <>
            <h1>Função Reaproveitar</h1>

            <div>
                <input type="text" placeholder="Numero 01" value={numero1} onChange={(batata) => setNumero(batata.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Numero 01" value={numero2} onChange={(batata) => setNumero2(batata.target.value)}/>
            </div>
            <div>
                <button onClick={() => handleAll({a: numero1, b: numero2})}>Calcular todes</button>
            </div>
            <div>
                <div>
                    <h2>soma</h2>
                    <p>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                </div>
                <div>
                    <h2>subtração</h2>
                    <p>{!isNaN(respSub ?? NaN) ? respSub : erro}</p>
                </div>
                <div>
                    <h2>multiplicação</h2>
                    <p>{!isNaN(respMul ?? NaN) ? respMul : erro}</p>
                </div>
                <div>
                    <h2>divisão</h2>
                    <p>{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(1) : erro}</p>
                </div>
            </div>
        </>
    )
}

export default GeneralFunction