export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export const achievementsData: Achievement[] = [
  {
    "id": "engineering-leadership",
    "title": "Engineering Leadership",
    "organization": "Symphony AI",
    "description": "Led a development pod of 8 engineers delivering enterprise AI software.",
    "impact": [
      "Coordinated technical execution across development sprints",
      "Enforced coding standards and performed code reviews",
      "Supported reliable releases through testing and CI/CD"
    ]
  }
];
export const educationData: Education[] = [
  {
    "id": "utp",
    "institution": "Technological University of Peru",
    "degree": "Bachelor\u2019s Degree in Computer Science",
    "duration": "2014 - 2018",
    "location": "Lima, Peru"
  }
];
