import kidneyImg from '../assets/kidney_detection.png';
import ambulanceImg from '../assets/ambulance_platform.png';
import nearbyImg from '../assets/nearby_services.png';

export const projects = [
  {
    id: 1,
    name: "Integrated Emergency Ambulance Service Platform",
    description: "Emergency Ambulance Service Platform with real-time ambulance booking, driver registration, location tracking, and emergency response management.",
    tech: ["React", "Firebase", "Google Maps API"],
    github: "#",
    live: "#",
    image: ambulanceImg,
    category: "Full Stack",
    features: [
      "Real-time tracking",
      "Driver registration",
      "Emergency alerts",
      "Admin dashboard"
    ],
    duration: "3 Months"
  },
  {
    id: 2,
    name: "Nearby Services Finder with real time booking system",
    description: "Location-based service recommendation platform helping users find nearby service providers like plumbers, electricians, etc.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
    live: "#",
    image: nearbyImg,
    category: "Full Stack",
    features: [
      "Service categorization",
      "Location-based search",
      "User reviews",
      "Provider profiles"
    ],
    duration: "2 Months"
  },
  {
    id: 3,
    name: "Kidney Disease Detection System",
    description: "Developed a CNN-based Kidney Disease Detection System for accurate classification of CT scans into Normal, Cyst, Tumor, and Stone. Built a DL-enabled Telemedicine Platform using React.js and MongoDB for secure patient management and real-time consultations.",
    tech: ["MongoDB", "Express", "React", "Node.js", "CNN", "Deep Learning"],
    github: "#",
    live: "#",
    image: kidneyImg,
    category: "AI/ML",
    features: [
      "CNN-based CT classification",
      "MERN Stack Integration",
      "Secure Patient Management",
      "Real-time Consultations"
    ],
    duration: "4 Months"
  }
];
