import Link from "next/link";
import { Logo, Discord, Twitter, Telegram, Github } from "./icons";

const mediaLinks = [
  { Icon: Twitter, href: "https://twitter.com/LlamaCorpOrg" },
  { Icon: Telegram, href: "https://t.me/defillama_tg" },
  { Icon: Discord, href: "https://discord.gg/buPFYXzDDd" },
  { Icon: Github, href: "https://github.com/DefiLlama" },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div style={{ flex: "1 1 221px", marginLeft: "-7px" }}>
            <Logo width={221} height={27} />
          </div>

          <div className="icons">
            {mediaLinks.map(({ Icon, href }, idx) => (
              <Link key={`mediaLink__${idx}`} href={href}>
                <a target="_blank">
                  <Icon size={24} />
                </a>
              </Link>
            ))}
          </div>

          <div style={{ flex: 1 }} />
        </div>

        <div className="row">
          {/* <div className="row text-xs space-xs">
            <span>Terms of Use</span>
            <span style={{ marginLeft: "6px" }}>|</span>
            <span style={{ marginLeft: "6px" }}>Privacy Policy</span>
          </div> */}

          <div className="text-xs">
            Copyright © Llama Corp {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          position: relative;
          z-index: 1;
          height: 200px;
          margin: 5rem auto 0 auto;
          max-width: 1000px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
        }

        .icons {
          margin-top: 1rem;
          flex: 2 1 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 340px;
        }

        .text-xs {
          font-weight: 500;
          font-size: 12px;
          line-height: 24px;
          mix-blend-mode: normal;
          opacity: 0.6;
        }

        @media (min-width: 768px) {
          .icons {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}
