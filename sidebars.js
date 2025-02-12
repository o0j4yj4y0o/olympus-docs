/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{type: 'autogenerated', dirName: './main'}],

  // But you can create a sidebar manually
  // config options: https://docusaurus.io/docs/next/sidebar/items
  main: [
    {
      type: "category",
      label: "Basics",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "basics/readme",
      },
      items: [
        "basics/bonding",
        "basics/inverse-bonds",
        "basics/staking",
        "basics/bophades"
      ],
    },
    {
      type: "category",
      label: "Treasury",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "treasury/index",
      },
      items: [
        "treasury/pol",
        "treasury/range-bound",
      ],
    },
    {
      type: "category",
      label: "Governance",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "governance/index",
      },
      items: [
        "governance/council",
        "governance/policy",
        {
          type: "category",
          label: "DAO Processes",
          collapsible: true,
          collapsed: true,
          items: [
            "governance/treasury-process",
            "governance/policy-process",
            "governance/grant-process",
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Technical Guides",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "technical-guides/index",
      },
      items: [
        {
          type: "category",
          label: "Using the Website",
          collapsible: true,
          collapsed: true,
          items: [
            "using-the-website/staking",
            {
              type: "category",
              label: "Purchase A Bond (1, 1)",
              collapsible: true,
              collapsed: false,
              link: {
                type: "doc",
                id: "using-the-website/bonds/index",
              },
              items: [{ type: "doc", id: "using-the-website/bonds/bond_example" }],
            },
          ],
        },
        {
          type: "category",
          label: "Contracts",
          collapsible: true,
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "contracts" }],
        }
      ],
    },
    // {
    //   type: "category",
    //   label: "Get Involved",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [
    //     { type: "autogenerated", dirName: "get-involved" },
    //     {
    //       type: "link",
    //       label: "Community Discord",
    //       href: "https://discord-invite.olympusdao.finance",
    //     },
    //     {
    //       type: "link",
    //       label: "Forum",
    //       href: "https://forum.olympusdao.finance/",
    //     },
    //     {
    //       type: "link",
    //       label: "Twitter",
    //       href: "https://twitter.com/OlympusDAO",
    //     },
    //     {
    //       type: "link",
    //       label: "Medium",
    //       href: "https://olympusdao.medium.com/",
    //     },
    //     {
    //       type: "link",
    //       label: "Snapshot",
    //       href: "https://snapshot.org/#/olympusdao.eth",
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Old Stuff",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "category",
    //       label: "Protocol Basics",
    //       collapsible: true,
    //       collapsed: true,
    //       items: [{ type: "autogenerated", dirName: "basics" }],
    //     },
    //     {
    //       type: "category",
    //       label: "Literature & Content",
    //       collapsible: true,
    //       collapsed: true,
    //       items: [{ type: "autogenerated", dirName: "literature-content" }],
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;
