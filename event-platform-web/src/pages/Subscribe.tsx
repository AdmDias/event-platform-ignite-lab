import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Logo } from "../components/Logo";
import bgCode from "../assets/bg-code.png"

export function Subscribe (){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        //await new Promise(resolve => setTimeout(resolve, 5000));

        navigate('/event')
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-blur bg-cover bg-no-repeat">
            <div className="flex items-center w-full max-w-[1100px] justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>
                        , do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das 
                        tecnologias mais utilizadas e com alta demanda para acessar 
                        as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente!</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Seu email completo"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />

                        <button
                            className="flex justify-center items-center gap-2 mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            { loading && (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            Garanta minha vaga
                        </button>
                    </form>
                </div>
            </div>
            
            <img id="bg-code-img" src={bgCode} className="mt-10" alt="" />
        </div>
    )
}