import React from "react";
import careers from "../../data/careers";
import { PageWrapper } from "../../components/layout";

export default function JobPage({ title, description, content }) {
  return (
    <PageWrapper seo={{ title: `LlamaCorp - ${title}`, description }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageWrapper>
  );
}

export async function getStaticPaths() {
  const paths = careers.map((e) => ({ params: { slug: e.slug } }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const job = careers.find(
    (e) => e.slug.toLowerCase() === params.slug.toLowerCase()
  );

  return {
    props: job,
  };
}
