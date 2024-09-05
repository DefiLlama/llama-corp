export const PROJECT_ID = {
  defiLlama: "DefiLlama",
  llamaNodes: "LlamaNodes",
  dlNews: "DLNews",
  dlResearch: "DLResearch",
  llamaPay: "LlamaPay",
  llamaFolio: "LlamaFolio",
  chainList: "ChainList",
};

const projects = [
  {
    id: PROJECT_ID.defiLlama,
    title: "DeFiLlama",
    description:
      "DeFiLlama is the leading solution for decentralized finance data, used by the largest financial institutions in the world.",
    logo: {
      src: "/assets/defillama.svg",
      width: 240,
      height: 60,
    },
    href: "https://defillama.com",
  },
  {
    id: PROJECT_ID.llamaNodes,
    title: "LlamaNodes",
    description:
      "LlamaNodes offers fast and secure access to the blockchain. Robust, private, and open-source: LlamaNodes does Web3 infrastructure the crypto way.",
    logo: {
      src: "/assets/llamanodes.svg",
      width: 270,
      height: 60,
    },
    href: "https://llamanodes.com",
  },
  {
    id: PROJECT_ID.dlNews,
    title: "DLNews",
    description:
      "DLNews is a news organisation that provides original, in-depth reporting on cryptocurrency and decentralised finance.",
    logo: {
      src: "/assets/dlnews.svg",
      width: 270,
      height: 60,
    },
    href: "https://dlnews.com",
  },
  {
    id: PROJECT_ID.dlResearch,
    title: "DLResearch",
    description:
      "DL Research provides in-depth research reports, intelligence and custom content to take your brand to the next level.",
    logo: {
      src: "/assets/dlresearch.svg",
      width: 270,
      height: 60,
    },
    href: "https://dlnews.com/research",
  },
  {
    id: PROJECT_ID.llamaFolio,
    title: "LlamaFolio",
    description:
      "LlamaFolio is an open and transparent wallet analytics tool and portfolio tracker.",
    logo: {
      src: "/assets/llamafolio.svg",
      width: 220,
      height: 60,
    },
    href: "https://llamafolio.com/",
  },
  {
    id: PROJECT_ID.chainList,
    title: "ChainList",
    description:
      "Chainlist is a list of crypto networks and RPCs to facilitate the usage of EVM compatible blockchains.",
    logo: {
      src: "/assets/chainlist.svg",
      width: 200,
      height: 60,
    },
    href: "https://chainlist.org/",
  },
  {
    id: PROJECT_ID.llamaPay,
    title: "LlamaPay",
    description:
      "LlamaPay is a non-custodial solution to automate recurring payments like salaries for crypto companies.",
    logo: {
      src: "/assets/llamapay.svg",
      width: 220,
      height: 60,
    },
    href: "https://llamapay.io/"
  },

];

export const projectById = {};
for (const project of projects) {
  projectById[project.id] = project;
}

export default projects;
