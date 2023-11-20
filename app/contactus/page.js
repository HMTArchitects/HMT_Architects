import { Contactus } from "@/components";
import Iframe from 'react-iframe'
import { Footer } from "@/components";
export default function Contact() {
    return (
            <>  
            <div className="flex md:flex-row flex-col ">
                <div className="xl:w-2/5 lg:w-2/5 bg-white py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none flex basis-1/2 mx-auto">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-black font-bold">Drop By Our Office</h1>
                        <p className="text-lg text-black pb-8 leading-relaxed font-normal lg:pr-4">Visit us and have coffee with us while we discuss the plans for your future project.</p>    
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call " width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-4 text-black text-base">+91 983 321 321</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail mb-6" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-black text-base mb-6">hmtarchitects106@gmail.com</p>
                        </div>                    
                        <div className="flex pb-2 items-center">
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.0311046943877!2d80.21173595260018!3d13.041956172795492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e94193970f%3A0x621ebe35d760ea0!2sHMT%20Architects!5e0!3m2!1sen!2sin!4v1666200523162!5m2!1sen!2sin"
                           
                            id=""
                            className="md:w-[640px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                            display="block"
                            position="relative"/>
                            
                        </div>
                        <div className="flex items-center">
                           
                        <a href="/projects">
                            <p className="text-black pt-2  tracking-wide underline hover:text-blue-500">View Our Projects</p>
                        </a>
                        </div>
                    </div>
                </div>

            <Contactus/>
            </div>
    <Footer /> </>
        
    )
}
