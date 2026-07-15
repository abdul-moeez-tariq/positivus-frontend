import frontend from "../../assets/images/services/frontend.png";
import backend from "../../assets/images/services/backend.png";
import fullstack from "../../assets/images/services/fullstack.png";
import database from "../../assets/images/services/database.png";
import api from "../../assets/images/services/api.png";
import deployment from "../../assets/images/services/deployment.png";

const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    image: frontend,
    bg: "bg-white",
    titleBg: "bg-[#B9FF66]",
    textColor: "text-black",
  },

  {
    id: 2,
    title: "Backend Development",
    image: backend,
    bg: "bg-[#B9FF66]",
    titleBg: "bg-white",
    textColor: "text-black",
  },

  {
    id: 3,
    title: "Full Stack Development",
    image: fullstack,
    bg: "bg-neutral-900",
    titleBg: "bg-[#B9FF66]",
    textColor: "text-white",
  },

  {
    id: 4,
    title: "Database Design",
    image: database,
    bg: "bg-white",
    titleBg: "bg-[#B9FF66]",
    textColor: "text-black",
  },

  {
    id: 5,
    title: "API Integration",
    image: api,
    bg: "bg-[#B9FF66]",
    titleBg: "bg-white",
    textColor: "text-black",
  },

  {
    id: 6,
    title: "Deployment & Maintenance",
    image: deployment,
    bg: "bg-neutral-900",
    titleBg: "bg-[#B9FF66]",
    textColor: "text-white",
  },
];

export default servicesData;
