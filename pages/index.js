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
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className="d-flex flex-column"
                style={{
                    height: "105vh",
                    background: "url(/pattern.svg) no-repeat ",
                    backgroundSize: "cover",
                }}
            >
                <Header />
                <Hero />
                <img
                    style={{ width: "100%", transform: "rotate(180deg)" }}
                    src="/wave.svg"
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
                >
                    <h5 className="m-0 p3 text-center font-weight-bold">
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
            <Header />
            <Footer />
        </div>
    );
}
