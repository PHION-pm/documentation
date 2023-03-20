module.exports = {
  title: "PHION",
  description: "Documentation for PHION Rice Package Manager",
  themeConfig: {
    lastUpdated: true,
    repo: "https://github.com/phion-pm/documentation",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    smoothScroll: true,
    plugins: [],
    nav: [
      {
        text: "Home",
        link: "/documentation",
      },
      {
        text: "Download",
        link: "https://github.com/PHION-pm/cli/releases",
      },
    ],
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        sidebarDepth: 1,
        children: [["Introduction.md", "Introduction"]],
        children: [["Installation.md", "Installation"]],
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
        children: [["Support/Overview.md", "Overview"]],
      },
    ],
  },
};
