interface Certificate {
  title: string;
  institution: string;
  date: string;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "Meta Front-End Developer",
    institution: "Meta",
    date: "August 2023",
    description:
      "Completed the Meta Front-End Developer Professional Certificate, covering HTML, CSS, JavaScript, React, and responsive web design.",
  },
  {
    title: "IBM Back-End Developer",
    institution: "IBM",
    date: "August 2023",
    description:
      "Completed the IBM Back-End Developer Professional Certificate, covering Node.js, Express, SQL, and RESTful APIs.",
  },
  {
    title: "CodinGame JavaScript Certification",
    institution: "CodinGame",
    date: "July 2023",
    description:
      "Achieved a score of 100% in the CodinGame JavaScript certification, demonstrating proficiency in JavaScript programming.",
  },
];

export { CERTIFICATES };
