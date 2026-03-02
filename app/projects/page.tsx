    import Card from "@/components/Card";
export default function Projects(){
    return(
        <main className="h-screen w-screen bg-red-950 flex items-center flex-col gap-4">
            <h1 className="text-6x1 mt-4">Meus projetos</h1>

            <Card src="/pinguim.png"
            href="https://github.com/paolaesantos-blip/ippinguim-forja-tarde"
            title="Lp"
            description="UMA pagina com 4 seções"/>
            <Card src="/file.svg"
            title="exercicios forja"
            description="sobre as curiosidades sobre o animaal pinguim e alguns exercicios como quizz de conhecimento"
            href="https://github.com/paolaesantos-blip/ippinguim-forja-tarde"/>
            <Card src="next.svg"
            title="portifolio"
            description="portifolio feito com o react"
            href="https://github.com/paolaesantos-blip/ippinguim-forja-tarde"/>

        </main>
    )
}
