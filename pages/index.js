import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "./../components/Projects";
import Activities from "./../components/Activities";
import Footer from "./../components/Footer";
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        if (typeof window != undefined) {
            const WOW = require("wowjs");
            new WOW.WOW().init();
        }
    }, []);
    return (
        <main className={styles.container}>
            <Head>
                <title> Saurabh Burade </title>
                <meta
                    name="description"
                    content=" Love to collaborate and develop amazing User Interfaces and
                    Web Applications. An awesome frontend developer with a
                    demonstrated history of working on ReactJS. Pursuing a
                    Bachelor of Engineering degree in Information Technology.
                    Developed some cool applications on MERN Stack and fond of
                    creating RESTful APIs in ExpressJS. Other than technical
                    things, I love to play Cricket, Chess, and Travel (Before
                    someone ate the Bat)."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="saurabh, saurabh burade, web,
                web developer, frontend, fullstack, mongodb, react.js, redux,
                next.js, express.js, node.js, ant design, fruits shop, github, covid-19 dashboard, kanban, scrum,chat app,firebase,mongoose
                " />

            </Head>

            <div
                className="d-flex flex-column "
                style={{
                    height: "105vh",
                    background: "url(/pattern.svg) no-repeat ",
                    backgroundSize: "cover",
                }}
                id="hero"
            >
                <Header />
                <Hero />
                <img
                    style={{ width: "100%", transform: "rotate(180deg)" }}
                    src="/wave.svg"
                    alt="wave"
                />
            </div>
            <div
                style={{
                    background: "url(/sideCircle.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    backgroundSize: "5em",
                    margin: "5% 0%",
                }}
            >
                <Skills />

                <div
                    style={{
                        background: "url(/quote.svg),url(/quote.svg)",
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "right top, left top",
                        margin: "5% 15%",
                    }}
                    className="wow animate__animated animate__fadeInUp"
                >
                    <h5 className="m-0 p3 text-center font-weight-bold ">
                        Not Limited to above tech at all, because life is all
                        about learning new things ;)
                    </h5>
                </div>

                <About />
            </div>
            <div
                style={{
                    background: "url(/leftcircle.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundSize: "5em",
                }}
            >
                <div
                    style={{
                        margin: "5% 15%",
                    }}
                >
                    <Education />
                </div>
            </div>

            <Projects />
            <Activities />
            <Footer />
        </main>
    );
}
