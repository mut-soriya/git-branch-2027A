window.PortfolioData = {
  profile: null,
  images: null,
  projects: null,
  skills: null,
  site: null
};

async function loadJSON(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
  return response.json();
}

async function loadPortfolioData() {
  const [profile, images, projects, skills, site] = await Promise.all([
    loadJSON("./data/profile.json"),
    loadJSON("./data/images.json"),
    loadJSON("./data/projects.json"),
    loadJSON("./data/skills.json"),
    loadJSON("./data/site.json")
  ]);

  PortfolioData.profile = profile;
  PortfolioData.images = images;
  PortfolioData.projects = projects;
  PortfolioData.skills = skills;
  PortfolioData.site = site;

  document.dispatchEvent(new CustomEvent("portfolio:data-ready", { detail: PortfolioData }));
}

window.loadPortfolioData = loadPortfolioData;
