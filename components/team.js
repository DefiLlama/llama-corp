import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projects, { projectById } from "../data/projects";
import { Twitter, Telegram, Github } from "./icons";

function toggleSet(prev, key) {
  let next = new Set(prev);

  if (next.has(key)) {
    next.delete(key);
  } else {
    next.add(key);
  }

  return next;
}

function Card({ name, role, img, twitter, github, telegram, projects }) {
  const mediaLinks = [
    { Icon: Twitter, href: twitter },
    { Icon: Github, href: github },
    { Icon: Telegram, href: telegram },
  ].filter((link) => link.href);

  const _projects = projects
    .map((id) => projectById[id])
    .filter((project) => project);

  return (
    <>
      <div className="container">
        <div className="img-container">
          <Image alt={name} src={img} layout="fill" objectFit="cover" />
        </div>

        <div className="col">
          <div>
            <p className="name">{name}</p>
            <p className="role">{role}</p>

            <div className="row">
              {_projects.map(({ id, title }) => (
                <div className="pill" key={`project__${id}`}>
                  {title}
                </div>
              ))}
            </div>
          </div>

          <div className="row-social">
            {mediaLinks.map(({ Icon, href }, idx) => (
              <Link key={`mediaLink__${idx}`} href={href}>
                <a target="_blank" rel="noreferrer noopener" className="link">
                  <Icon size={14} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 10px;
          background: #1b2033;
          border-radius: 12px;
        }

        .col {
          height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .img-container {
          position: relative;
          width: 100%;
          height: 130px;
          border-radius: 8px;
          overflow: hidden;
        }

        .name {
          margin: 5px 0 0 0;
          font-weight: bold;
          font-size: 1rem;
        }

        .role {
          margin-top: 0px;
          font-weight: 400;
          font-size: 0.7rem;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          margin-left: -0.4rem;
          margin-top: -0.4rem;
        }

        .row > * {
          margin-left: 0.4rem;
          margin-top: 0.4rem;
        }

        .pill {
          background: #494d5c;
          padding: 2px 5px;
          width: fit-content;
          border-radius: 12px;
          outline: none;
          color: #fff;
          font-size: 0.6rem;
        }

        .row-social {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-left: -1rem;
          margin-top: -1rem;
        }

        .row-social > * {
          margin-left: 1rem;
          margin-top: 1rem;
        }

        .link:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

export default function Team({ items }) {
  const [selectedIds, setSelectedIds] = useState(new Set());

  function selectProject(id) {
    setSelectedIds((prev) => toggleSet(prev, id));
  }

  const allSelectedIds = Array.from(selectedIds);

  const team = items.filter(
    (item) =>
      allSelectedIds.length === 0 ||
      item.projects.some((projectId) => selectedIds.has(projectId))
  );

  return (
    <>
      <div className="row">
        {projects.map(({ id, title }) => (
          <div
            className={`pill ${selectedIds.has(id) ? "selected" : ""}`}
            key={`select_project__${id}`}
            onClick={() => selectProject(id)}
          >
            {title}
          </div>
        ))}
      </div>

      <div className="grid">
        {team.map((item, i) => (
          <Card key={`Team__${i}`} {...item} />
        ))}
      </div>

      <style jsx>
        {`
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 0.7rem;
          }

          .row {
            margin: 10px 0 20px 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            margin-left: -1rem;
            margin-top: -1rem;
          }

          .row > * {
            margin-left: 1rem;
            margin-top: 1rem;
          }

          .pill {
            background: #494d5c;
            padding: 3px 10px;
            width: fit-content;
            border-radius: 20px;
            outline: none;
            cursor: pointer;
            color: #fff;
            font-size: 0.7rem;
            user-select: none;
          }

          .pill.selected {
            background: #fff;
            color: #494d5c;
          }
        `}
      </style>
    </>
  );
}
