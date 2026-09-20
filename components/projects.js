import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "./arrowLink";

function Card({ title, description, logo, href }) {
  return (
    <>

      <div className="container">
        <Link href={href}>
          <a target="_blank">
            <div className="header">
              <Image alt={`${title} logo`} {...logo} />
            </div>
          </a>
        </Link>
        <Link href={href}>
          <a target="_blank">
            <div className="content">
              <p>{description}</p>
              <ArrowLink className="arrow-link" />
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          background: #1b1f32;
          color: #fff;
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
        }

        .header {
          text-align: center;
          background: #323546;
          padding: 20px 80px;
        }

        .content {
          height: 300px;
          padding: 20px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        :global(.arrow-link) {
          align-self: flex-end;
        }

        @media (min-width: 768px) {
          .container {
            width: 280px;
          }

          .header {
            padding: 20px 30px;
          }
        }

        @media (min-width: 1024px) {
              .container {
               width: 334px;
          }
        }

      `}</style>
    </>
  );
}

export default function Projects({ items }) {
  return (
    <>
      <h3 className="md:ml-6 mb-4 mt-5 text-[1.5rem]">Projects</h3>
      <div className="container ">
        <div className="grid">
          {items.map((project, idx) => (
            <div key={`ProjectCard__${idx}`} className={`project-${idx % 4}`}>
              <Card {...project} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: auto;
        }

        .grid {
          display: grid;
          grid-gap: 20px;
          margin-bottom: 2rem;
        }

        .project-0 {
          margin: none;
        }

        .project-1 {
          margin: none;
        }

        .project-2 {
          margin: none;
        }

        .project-3 {
          margin: none;
        }

        @media (min-width: 768px) {
          .grid {
            display: grid;
            margin-bottom: 6rem;
            grid-template-columns: repeat(2, 1fr);
          }

          .project-0 {
            margin: 50px 0 0 25px;
          }

          .project-1 {
            margin: 0 0 0 25px;
          }

          .project-2 {
            margin: 50px 0 0 50px;
          }

          .project-3 {
            margin: 0px 0 25px 50px;
          }
        }

        @media (min-width: 1000px) {
          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .project-0 {
            margin: 100px 0 0 50px;
          }

          .project-1 {
            margin: 0 0 0 50px;
          }

          .project-2 {
            margin: 100px 0 0 100px;
          }

          .project-3 {
            margin: 0px 0 50px 100px;
          }
        }
      `}</style>
    </>
  );
}