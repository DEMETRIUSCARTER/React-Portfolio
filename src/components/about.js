import React from "react"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                WELCOME TO DEMETRIUS' REACT DOMAIN
                <br className="hidden lg:inline-block" />I AM A FULL STACK WEB DEVELOPER.
                </h1>
                <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
                </p>
                <div className="flex justify-cenrter">
                    <a
                    href="contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        CHECK OUT MY PORTFOLIO
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./1.jpg"
                    />
                </div>
            </div>
        </section>
    );
}