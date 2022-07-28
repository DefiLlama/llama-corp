import Link from "next/link";
import ArrowLink from "./arrowLink";

function Card({ slug, title, description }) {
  return (
    <>
      <Link href={`/jobs/${slug}`}>
        <a>
          <div className="container">
            <div>
              <p className="title">{title}</p>
              <p className="description">{description}</p>
            </div>

            <ArrowLink />
          </div>
        </a>
      </Link>

      <style jsx>{`
        .container {
          padding: 20px 30px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 12px;
          font-style: normal;
        }

        .title {
          margin: 0;
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 31px;
        }

        .description {
          margin-top: 10px;
          font-weight: 400;
          font-size: 1rem;
          line-height: 25px;
        }
      `}</style>
    </>
  );
}

export default function Careers({ items }) {
  return (
    <>
      <div className="grid">
        {items.map((item, i) => (
          <Card key={`Career__${i}`} {...item} />
        ))}
      </div>

      <style jsx>
        {`
          .grid {
            display: grid;
            grid-gap: 2rem;
          }
        `}
      </style>
    </>
  );
}
