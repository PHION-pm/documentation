module.exports = {
  title: "PHION",
  description: "Documentation for PHION Rice Package Manager",
  themeConfig: {
    smoothScroll: true,
    plugins: [],
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "https://github.com/PHION-pm/cli/releases" },
      { text: "Github", link: "https://github.com/PHION-pm" },
    ],
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        sidebarDepth: 1,
        children: [["Introduction.md", "Introduction"]],
      },
      {
        title: "Packaging",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["Packaging/package_structure.md", "Package Structure"],
          ["Packaging/Parsers.md", "Parsers"],
      ],
      },
      {
        title: "Support",
        collapsable: false,
        sidebarDepth: 1,  
        children: [
          ["Support/Overview.md", "Overview"],
      ],
      },
    ],
  },
};
