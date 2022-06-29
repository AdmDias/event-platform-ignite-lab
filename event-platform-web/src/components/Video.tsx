import { useGetLessonBySlugQuery } from "../graphql/generated";

import { DefaultUi, Player, Youtube } from "@vime/react"
import { DiscordLogo, Lightning, FileArrowDown, CaretRight } from 'phosphor-react'

import '@vime/core/themes/default.css'


interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps){
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if(!data || !data.lesson) {
        return (
            <div className="flex-1"><p>Carregando...</p></div>
        )
    }
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            { data.lesson.title }
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            { data.lesson.description }
                        </p>

                        { data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-blue-500" 
                                    src={ data.lesson.teacher.avatarURL }
                                    alt="Github image"
                                />

                                <div className="leading-relaxed">
                                    <span className="block font-bold text-2xl"> 
                                        { data.lesson.teacher.name } 
                                    </span>
                                    <span className="block text-gray-200 text-sm"> 
                                        { data.lesson.teacher.bio } 
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <a 
                            href="#"
                            className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                        >
                            <DiscordLogo size={20} />
                            Comunidade do Discord
                        </a>

                        <a 
                            href="#"
                            className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                        >
                            <Lightning size={20} />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a
                        href="#"
                        className="flex items-stretch bg-gray-700 rounded overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="flex items-center bg-green-700 h-full p-6">
                        <FileArrowDown size={20} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu aprendizado...
                            </p>
                        </div>

                        <div className="flex items-center h-full p-6">
                            <CaretRight size={20} />
                        </div>
                    </a>

                    <a
                        href="#"
                        className="flex items-stretch bg-gray-700 rounded overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="flex items-center bg-green-700 h-full p-6">
                        <FileArrowDown size={20} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe Wallpapers exclusivos do Ignite Lab e personalize a sua Área de Trabalho...
                            </p>
                        </div>

                        <div className="flex items-center h-full p-6">
                            <CaretRight size={20} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}