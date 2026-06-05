import wsaInternPdf from '../assets/WSA intern.pdf';

export const internships = [
  {
    company: "Web Stack Academy",
    role: "Full Stack Web Developer Intern (Online)",
    duration: "Sep 2024",
    description: "Developed “Homely Hub,” a MERN-stack accommodation booking platform with advanced search and filtering, secure user authentication, and integrated payment gateway, gaining hands-on experience in full-stack development, API integration, and application deployment.",
    points: [
      "Designed and developed the responsive user interface using React.js and Tailwind CSS for a seamless user experience.",
      "Built the backend RESTful API using Node.js, Express.js, and MongoDB to manage properties, bookings, and user reviews.",
      "Implemented secure user authentication and authorization utilizing JSON Web Tokens (JWT) and bcrypt.",
      "Integrated Stripe payment gateway for handling secure online transactions and bookings.",
      "Developed advanced search and filter features, allowing users to query listings by location, price range, and amenities."
    ],
    skillsLearned: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Stripe Integration", "Tailwind CSS"],
    certificateLink: wsaInternPdf,
    logo: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
  }
];
