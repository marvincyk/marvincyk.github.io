export interface Job {
  dates: string;
  company: string;
  url?: string;
  role: string;
  note?: string;
  current?: boolean;
}

export interface Project {
  name: string;
  pitch: string;
  url: string;
  label: string;
}

export const jobs: Job[] = [
  {
    dates: "Feb 2024 · Now",
    company: "Easygo",
    url: "https://easygo.io",
    role: "Software Engineer",
    current: true,
  },
  {
    dates: "Nov 2022 · Dec 2023",
    company: "Black.ai",
    url: "https://black.ai",
    role: "Software Engineer",
  },
  {
    dates: "Feb 2022 · Oct 2022",
    company: "50 Raw",
    role: "Full Stack Developer",
    note: "intern → part-time",
  },
  {
    dates: "Nov 2018 · Mar 2020",
    company: "Metroport Group Berhad",
    url: "https://www.metroport.com/",
    role: "Head of IT",
  },
];

export const education = [
  { label: "Degree", value: "BSc, Computer Science" },
  { label: "School", value: "University of Melbourne" },
  { label: "Years", value: "2019 – 2022" },
];

export const projects: Project[] = [
  {
    name: "Plot.",
    pitch: "Journaling built around the month, not the day. No streaks, no guilt.",
    url: "https://plotjournal.app",
    label: "plotjournal.app",
  },
  {
    name: "Proofreach",
    pitch:
      "Find local businesses with a broken web presence and turn their flaws into outreach.",
    url: "https://proofreach.io/",
    label: "proofreach.io",
  },
  {
    name: "Treaty",
    pitch: "Tic-tac-toe, nine boards deep. Play friends live or take on the AI.",
    url: "https://playtreaty.com/",
    label: "playtreaty.com",
  },
];
