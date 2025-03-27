import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import fitacad from '../../public/img3.png'

import Image from 'next/image'
export function Hero(){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div>
                <Image
                src={fitacad}
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 lg:hidden'
                
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'>

                </div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10">Seu Treino, Seu Ritmo, Seu Resultado!</h1>
                        <p className="lg:text-lg">Alcance seus objetivos com treinos personalizados,
                             planos nutricionais e desafios para manter sua motivação. </p>

                             <div>
                                <a 
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                
                                >
                                    <WhatsappLogo className='w-5 h-5'/>
                                    Contato via WhatsApp
                                </a>
                             </div>

                             <div className="mt-8">
                                
                                <p className="text-sm mb-4">
                                    <b className="bg-black text-white px-2 py-1 rounded-md">10%</b> de desconto no primeiro ano</p>
                             </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                       <Image 
                       src={fitacad}
                       alt='foto'
                       className='object-contain'
                       fill
                       sizes='(max-widht: 950px) 0vw, 50vw'
                       quality={100}
                       priority
                       
                       />

                    </div>
                </article>
            </div>
        
        </section>
    )
}