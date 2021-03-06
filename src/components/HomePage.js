import React, { useState } from 'react'
import Navbar from './Navbar'
import Gallary from './Gallary'
import CarouselMaker from './CarouselMaker'
import Donate from './Donate'
import Benefits from './Benefits'
import Contact from './Contact'
import Footer from './Footer'
import { CgDarkMode } from 'react-icons/cg'
import { MdLightMode } from 'react-icons/md'
function HomePage() {
    const [darkmode, setDarkmode] = useState(true);
    const isDarkmode = () => setDarkmode(!darkmode);

    return (
        <div className={darkmode ? 'bg-gradient-to-r from-black via-stone-800 to-neutral-800' : 'bg-gradient-to-r from-white via-stone-200 to-neutral-300'}>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="my-16 mx-5 text-center" >
                    <button onClick={isDarkmode}>
                        {
                            darkmode ? <MdLightMode size="4rem" color="yellow" /> : <CgDarkMode color="black" size="4rem" />
                        }
                    </button>
                </div>
            </div>
            <section id="home">
                <Gallary />
            </section>
            <section id="donation">
                <Donate toggleDarkmode={darkmode} />
            </section>
            <section className="my-8">
                <CarouselMaker />
            </section>
            <section id="benefits" className="mt-40 mb-10">
                <Benefits />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage