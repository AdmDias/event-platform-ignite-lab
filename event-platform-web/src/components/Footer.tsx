import { RocketseatLogo } from "./RocketseatLogo"

//

export function Footer() {
    return (
        <footer className="w-full">
            <div className="flex items-center justify-between mt-20 mb-[21px] pt-6 px-6">
                <div className="flex items-center gap-6">
                    <RocketseatLogo />
                    <span className="text-sm text-gray-300">
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>
                <span className="text-sm text-gray-300">
                    Políticas de privacidade
                </span>
            </div>
        </footer>
    )
}