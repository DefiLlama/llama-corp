import Link from "next/link";
import { ArrowRight } from "./icons";

export default function Contact() {
  return (
    <>
      <div className="container">
        <p className="description">
          If you want to get in touch, feel free to email us: <br />
          contact@llama-corp.com
        </p>

        <Link href="mailto: contact@llama-corp.com">
          <a  >
            <p className="email mt-4">
              email us
              <span>
                <ArrowRight width={18} height={14} />
              </span>
            </p>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .description {
          padding: 20px 30px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          border-radius: 12px;

          font-weight: 400;
          font-size: 1rem;
        }

        .email {
          padding: 20px;
          width: 260px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          border-radius: 12px;
          font-size: 1rem;
        }

        .email > span {
          margin: 4px 0 0 6px;
        }




        @media (min-width: 768px) {
          .container {
            position: relative;
            
          }

          .description {
            width: 70%;
            font-size: 1.2rem;
          }

          .email {
            position: absolute;
            top: 10px;
            width: 260px;
            left: calc(70% - 40px);
          }
        }

 @media (min-width: 1024px) {
            .email {
            width: 300px;
          
          }
        }

      `}</style>
    </>
  );
}
