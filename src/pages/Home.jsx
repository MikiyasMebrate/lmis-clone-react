import MainNavBar from "../components/ui/MainNavBar"
import img1 from "../assets/images/certificate1.png"
import mike from "../assets/images/K78A8718.jpg"
import professionalImg from "../assets/images/professional.png"
import { Badge, Button } from "flowbite-react";
import { AiOutlineArrowRight, AiFillPlayCircle } from "react-icons/ai"
import { useState } from "react";
import { ModalVideo } from "../components/ui/ModalVideo";
import { PromoCard } from "../components/ui/PromoCard";
import { InfoCard } from "../components/ui/InfoCard";

const Home = () => {
    const [openModalVideo, setOpenModalVideo] = useState(false);
    return (
        <div>
            <section className="mb-20">
                <MainNavBar />
            </section>

            <section>
                <div className="md:h-[calc(100vh-90px)]  mx-auto">


                    <div className="flex flex-col justify-center  md:flex-row gap-8">

                        <div className="md:w-2/5  mt-10  ms-3 me-3 md:h-[calc(100vh-90px)] md:m-3 md:ms-20  flex flex-col justify-center">

                            <div className="flex  md:m-3"><Badge icon={"HiCheck"}>Empowering Opportunity. Advancing Ethiopia.</Badge></div>

                            <div className="w-9/12  ">
                                <p className="text-4xl m-5 md:m-0 md:text-7xl font-bold">Empowering Individuals, Businesses & Nations</p>
                            </div>

                            <p className="mt-10  md:mt-10 text-gray-400/75 w-3/4">The Ethiopian Labor Market Information System empowers individuals, businesses, and nations by connecting skilled Ethiopian workers with domestic and global employment opportunities, fostering economic growth and development.</p>

                            <div className="flex flex-row mt-10 gap-10">
                                <Button gradientDuoTone="cyanToBlue" >Register <AiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
                                <Button onClick={() => setOpenModalVideo(!openModalVideo)} className="underline " color="blue" ><AiFillPlayCircle className="mr-2 h-5 w-5" /> Ethiopian Statistics Service 43,500 ቅጥር እዚ ይገኛል! </Button>
                            </div>

                        </div>


                        <div className="hidden md:block borders md:w-3/5 ">
                            <div class="container mx-auto ">

                                <div class="flex flex-col md:flex-row gap-8">
                                    <div class="md:w-full"> <img className="w-full bg-none" src={img1} alt="" /></div>
                                    <div class="md:w-full">
                                        <div className="flex w-full h-full justify-end items-center">
                                            <img className="w-1/2 bg-none" src={professionalImg} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>




                        </div>


                    </div>

                </div>
            </section>


            <section className="container mt-20 md:m-0  md:mx-auto">
                <div class="w-full inline-flex flex-nowrap md:mt-28 mt-6 md:my-8 scroll-container group overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                    </ul>

                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                        <li>
                            <PromoCard img={mike} />
                        </li>
                    </ul>


                </div>
            </section>



            <section className="container mx-auto text-center  mt-20">
                <p className=" font-bold text-2xl md:text-7xl text-gray-400/25">What Biqu Provides</p>
                <p className="text-base font-bold md:text-3xl">Key features and services</p>
                <p className="text-gray-500 text-sm md:text-base md:w-2/5 text-center mx-auto">Connects job seekers with employers based on skills and requirements, fostering meaningful employment opportunities.</p>
            </section>

            <section className="container mx-auto mt-20 ">
                <div class="grid md:grid-cols-3 justify-center gap-x-8 gap-y-8 md:gap-y-24 ">
                    <div class="md:w-full">
                        <InfoCard title="Job Matching Facility" body="Connects job seekers with employers based on skills and requirements, fostering meaningful employment opportunities." />
                    </div>

                    <div class="md:w-full">
                        <InfoCard title="Interoperability" body="Facilitates seamless data exchange among various stakeholders, enabling comprehensive analysis and collaboration." />
                    </div>

                    <div class="md:w-full">
                        <InfoCard title="Service-Driven Approach" body="Offers a comprehensive range of career development services, including online examinations and advisory systems, to support individuals in their professional journey." />
                    </div>

                    <div class="md:w-full">
                        <InfoCard title="Job Matching Facility" body="Connects job seekers with employers based on skills and requirements, fostering meaningful employment opportunities." />
                    </div>

                    <div class="md:w-full">
                        <InfoCard title="Interoperability" body="Facilitates seamless data exchange among various stakeholders, enabling comprehensive analysis and collaboration." />
                    </div>

                    <div class="md:w-full">
                        <InfoCard title="Service-Driven Approach" body="Offers a comprehensive range of career development services, including online examinations and advisory systems, to support individuals in their professional journey." />
                    </div>

                </div>
            </section>


            <ModalVideo url={"https://www.youtube.com/embed/e2V9s61El-E?si=Mi5kfh563_j6gnVx"} setOpenModal={setOpenModalVideo} openModal={openModalVideo} />



        </div>
    );
}

export default Home;