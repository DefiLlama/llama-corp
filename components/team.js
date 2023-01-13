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

        <div>
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>

        <div className="grid-2">
          {_projects.map(({ id, title }) => (
            <div className="pill" key={`project__${id}`}>
              {title}
            </div>
          ))}
        </div>

        <div className="row">
          {mediaLinks.map(({ Icon, href }, idx) => (
            <Link key={`mediaLink__${idx}`} href={href}>
              <a target="_blank" rel="noreferrer noopener">
                <Icon size={18} />
              </a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 10px;
          background: #1b2033;
          border-radius: 12px;
        }

        .img-container {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
        }

        .name {
          margin: 10px;
          font-weight: 600;
          font-size: 1.2rem;
          line-height: 25px;
        }

        .role {
          margin-top: 5px;
          font-weight: 400;
          font-size: 1rem;
          line-height: 19px;
        }

        .grid-2 {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .pill {
          background: #494d5c;
          padding: 5px 10px;
          width: fit-content;
          border-radius: 12px;
          outline: none;
          color: #fff;
          font-size: 0.7rem;
        }

        .row {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .row > * {
          margin-left: 1rem;
        }

        .row > :first-child {
          margin-left: 0;
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
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            grid-gap: 1rem;
          }

          .row {
            margin: 10px 0 20px 0;
            display: flex;
            flex-direction: row;
          }

          .row > * {
            margin-left: 1rem;
          }

          .row > :first-child {
            margin-left: 0;
          }

          .pill {
            background: #494d5c;
            padding: 5px 10px;
            width: fit-content;
            border-radius: 12px;
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
