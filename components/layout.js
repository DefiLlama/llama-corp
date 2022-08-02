import React from "react";
import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Background0, Background1 } from "../components/background";
import { Logo } from "../components/icons";
import SEO from "./seo";

export function PageWrapper({ seo, children }) {
  return (
    <>
      <SEO {...seo} />

      <div>
        <ParallaxBanner
          layers={[
            {
              children: <Background0 className="background0" />,
              speed: -20,
            },
            {
              children: <Background1 className="background1" />,
              speed: -10,
            },
          ]}
          className="background"
        >
          <div className="hero-container">
            <div className="hero">
              <Link href="/">
                <a>
                  <Logo className="logo" />
                </a>
              </Link>

              <h1>
                Open and transparent solutions for the decentralized world
              </h1>

              <h2>
                Llama Corp is a collective building out the decentralized future
                with data analytics, payments, cross-chain and media solutions
                used by more than 10M monthly users.
              </h2>
            </div>
          </div>

          {children}

          <section>
            <h3>Contact</h3>

            <Contact />
          </section>

          <Footer />
        </ParallaxBanner>
      </div>

      <style jsx>{`
        :global(.background0) {
          position: relative;
          z-index: -1;
          margin-top: 25rem;
          width: 100%;
          height: auto;
          transform: translateX(-20%);
          max-height: 1500px;
        }

        :global(.background1) {
          position: fixed;
          width: 100%;
          bottom: 200px;
          height: 100vh;
          max-height: 1500px;
        }

        :global(.logo) {
          margin-left: -7px;
          width: 250px;
          height: 32px;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          margin: 5rem auto 0 auto;
          padding: 0 20px;
          max-width: 1000px;
        }

        .hero {
          margin-left: auto;
          max-width: 600px;
        }

        @media (min-width: 768px) {
          :global(.background0) {
            margin-top: 15rem;
            height: 150vh;
            width: 100%;
          }

          :global(.logo) {
            width: 341px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
}
