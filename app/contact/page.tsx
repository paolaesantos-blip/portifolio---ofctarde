"use client"
import { useEffect, useMemo, useState } from "react"

export default function Contact() {
    const [email, setEmail] = useState("");
    const error=useMemo(()=> !email.includes("@"),[email])
    //const[error, setError] = useState(false);
    

    /*useEffect(() => {
        if (email.includes("@")){
            setError(false);
        }else{
            setError(true); 
        }
    }, [email]);*/

    function getemail(){
        if(!error){
           const mensagem = `Gostaria de entrar em contato!\n\nemail:${email}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/554187630771?text=${msg} avaliamos seu email e gostaria de entrar em contato`)
        }

      

        }


    return (
        <main className="W-screen h-screen flex flex-col gap-16 intems-center justify-center">
            <h1 className="text-6x1">Contato</h1>
            <p>Digite seu email para eu entrar em contato no seu whatsapp!</p>
           

            <div>

                <input
                    type="email"
                    placeholder="Digite seu email"
                    className="border border-white"
                     value={email}
                onChange={(e) => setEmail(e.target.value)}

                    />
                    {error&&<p>Email invalido</p>}
                

            </div>

            <button className="cursor-pointer border border-white py-2 px-10 rounded-full disabled:cursor-not-allowed"
            onClick={() => getemail()}
            disabled={error}
            

            >Enviar</button>
        </main>
    )

}