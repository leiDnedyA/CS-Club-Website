import { useEffect , useState , useContext } from 'react';
import { LangContext } from '@/app/components/context/lang-context';
import MatrixCanvas from '@/app/components/core/matrix-canvas';
import LangContent from '@/app/components/types/lang-content';
import GlitchText from '@/app/components/core/glitch-text';
import "@/app/globals.css";
import ThoughtBubble from '../core/thought-bubble';

export default function Splash({ title, desc } : { title : LangContent , desc : LangContent}) {
    const { lang } = useContext(LangContext);
    const [scroll, setScroll] = useState(0);
    const [touching , setTouching] = useState(true);

    useEffect(() => {
        addEventListener('scroll', () => {
            setTouching(window.scrollY < window.innerHeight / 3);
            const position = window.pageYOffset;
            const splashElement = document.getElementById('splash');
            const matrixElement = document.getElementById('matrix');
            let shrink = 97;
            setScroll(position);
            if (splashElement) {
                splashElement.style.transform = `translateY(${position * 0.5}px)`;
                
            }

            if (matrixElement) {
                matrixElement.style.opacity = `${1 - (position / 100)}`;
            }
        });
        return () => removeEventListener('scroll', () => {});
    }, []);

    useEffect(() => {console.log(lang)}, [lang])

    return (
        <>
        <head>
        <title>CS Club - UMass Boston</title>
        </head>
        <div className='z-10 relative h-screen overflow-clip p-0 m-0'>
            <div id="splash" className={`absolute z-10 top-0 w-screen h-screen flex flex-col justify-center`}>
                <MatrixCanvas scroll={scroll} />
                <div id="title" className='my-2 px-3 z-10 relative'>
                    <p className='text-3xl text-primary-200 px-2 py-2 font-extrabold'>{{
                        'en': 'UMass Boston',
                        'jp': 'ウマッスボストン',
                        'es': 'UMass Boston'
                    }[lang]}</p>
                    <span className='flex flex-row'>
                        <GlitchText className=" bg-transparent text-secondary-200 text-8xl font-bold w-auto">{title[lang]}</GlitchText>
                        <ThoughtBubble>
                            {{
                                'en': 'Find us at UHall, Room 2320',
                                'jp': 'ゆにばーしてい・ほーるの2320部屋にいます',
                            }[lang] as string}
                        </ThoughtBubble>
                    </span>
                    
                    <p className='text-xl text-secondary-100 px-2 py-2'>{desc[lang]}</p>
                    
                </div>
            </div>
            <div className="absolute bottom-[20px] z-10 w-full h-auto flex flex-col items-center ">
                {touching && <><span className="text-base text-secondary-100 animate-pulse font-medium animate-bounce">{{
                    "en": "Scroll to learn more",
                    "jp": "すくろーるしてもっとおしえる",
                }[lang]}</span>
                <svg className="animate-bounce animate-pulse w-6 h-6 text-secondary-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </>}
            </div>
        </div>
        </>
        
    )
}