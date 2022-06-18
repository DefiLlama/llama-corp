import React from "react";
import Projects from "../components/projects";
import Careers from "../components/careers";
import projects from "../data/projects";
import careers from "../data/careers";
import { PageWrapper } from "../components/layout";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        <section>
          <h3 className="project-title">Projects</h3>

          <Projects items={projects} />
        </section>

        {careers.length > 0 && (
          <section>
            <h3>Careers</h3>

            <Careers items={careers} />
          </section>
        )}
      </PageWrapper>

      <style jsx>{`
        @media (min-width: 768px) {
          .project-title {
            transform: translateY(100px);
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
