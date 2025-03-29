import Image from "next/image";
import fitsobre from '../../public/img2.png'
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About(){
    return(
        <section className="bg-amber-50 py-16">
            <div className='container  px-4 mx-auto '>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image 
                    src={fitsobre}
                    fill
                      alt='foto'
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    
                    
                    />
                </div>

                <div className="space-y-6 mt-10">
                    <h2 className="text-4xl font-bold">SOBRE</h2>
                    <p>Somos uma empresa focada em inovação e bem-estar, criando soluções para quem busca resultados reais no mundo fitness. Nosso objetivo é conectar tecnologia e saúde, 
                        oferecendo treinos personalizados e suporte nutricional para levar sua performance ao próximo nível.</p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                            Treinos personalizados para todos os níveis</li>
                            <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Desafios motivacionais para manter você sempre ativo</li>
                        <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Dicas de nutrição para potencializar seus resultados</li>

                </ul>
                
                <a href="#" className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                    <WhatsappLogo className="w-5 h-5 text-white" />
                    Contato via WhatsApp
                </a>
                </div>
                </div>

            </div>
        </section>
    )
        
            
    
}