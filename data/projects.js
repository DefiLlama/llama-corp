export const PROJECT_ID = {
  defiLlama: "DefiLlama",
  llamaPay: "LlamaPay",
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
