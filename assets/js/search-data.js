// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My full curriculum vitae can also be downloaded via the right [PDF] button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-personal-page-is-online",
          title: 'My personal page is online! ✨ 😄',
          description: "",
          section: "News",},{id: "projects-online-public-opinion-and-social-media-analysis",
          title: 'Online Public Opinion and Social Media Analysis',
          description: "The project collects and classifies large-scale data from major Chinese platforms to track media use trends across key social domains. It employs discourse and content analysis to examine emerging issues, misinformation, and online risks, providing evidence-based insights for digital literacy and public safety.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-online-legal-publicity-and-education",
          title: 'Online Legal Publicity and Education',
          description: "The project develops cross-sector initiatives and digital cultural content to promote legal awareness and online safety, engaging schools, communities, and young audiences.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-cultural-heritage-preservation-and-online-dissemination",
          title: 'Cultural Heritage Preservation and Online Dissemination',
          description: "The project investigates the impact of urban regeneration on cultural vitality and organizes heritage events, while producing multimedia outputs that enhance the visibility of Chinese traditions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-digital-transformation-of-the-cultural-system",
          title: 'Digital Transformation of The Cultural System',
          description: "The project advances digitization across multiple cultural domains and develops data-driven frameworks for public cultural services, recognized as best practice at the Digital China Summit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
