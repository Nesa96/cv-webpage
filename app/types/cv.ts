export interface experience {
    position: string,
    dates: string,
    activities: string[]
};

export interface education {
    title: string,
    dates: string,
    school: string
};

export interface skill {
    name_skills: string,
    skills: string
};

export interface cvJson {
    title: string,
    location: string,
    summary: string,
    experience: experience[],
    education: education[],
    skills: skill[],
    languages: string[],
    projects: string[],
    certifications: education[],
    linkdIn: string,
    gitHub: string
}