
import NoticeBoardLogo from "../../images/nb-logo.png"

// Todo : Change it later if wanted
const statusColors = {
    "Complete": "lightGreen",
    "In-progress": "orange",
    "Pending": "red"
};

const ProjectData = [
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Digital Notice Board",
        createdBy: "Suyog Patil",
        tags: ["Flutter1", "Firebase1", "Dart1", "Firebase3"],
        ratingValue: 4.5,
        statusLabel: "In-progress",
        statusColor: statusColors["In-progress"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 1",
        createdBy: "John Doe",
        tags: ["React", "Node.js", "Express"],
        ratingValue: 3.5,
        statusLabel: "Complete",
        statusColor: statusColors["Complete"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 2",
        createdBy: "Jane Smith",
        tags: ["Java", "Spring Boot", "MongoDB"],
        ratingValue: 4.0,
        statusLabel: "In-progress",
        statusColor: statusColors["In-progress"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 3",
        createdBy: "Bob Johnson",
        tags: ["Python", "Django", "PostgreSQL"],
        ratingValue: 3.8,
        statusLabel: "Incomplete",
        statusColor: statusColors["Incomplete"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 4",
        createdBy: "Alice Lee",
        tags: ["Vue.js", "Node.js", "MySQL"],
        ratingValue: 4.2,
        statusLabel: "Complete",
        statusColor: statusColors["Complete"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 5",
        createdBy: "David Smith",
        tags: ["React", "Firebase", "JavaScript"],
        ratingValue: 4.7,
        statusLabel: "In-progress",
        statusColor: statusColors["In-progress"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 6",
        createdBy: "Samantha Chen",
        tags: ["Angular", "Node.js", "MongoDB"],
        ratingValue: 4.1,
        statusLabel: "Complete",
        statusColor: statusColors["Complete"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 7",
        createdBy: "Kevin Jones",
        tags: ["Ruby on Rails", "PostgreSQL"],
        ratingValue: 3.9,
        statusLabel: "Incomplete",
        statusColor: statusColors["Incomplete"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 8",
        createdBy: "Emily Wilson",
        tags: ["React Native", "Node.js", "Firebase"],
        ratingValue: 4.3,
        statusLabel: "In-progress",
        statusColor: statusColors["In-progress"],
    },
    {
        logoSrc: NoticeBoardLogo,
        projectName: "Project 9",
        createdBy: "Michael Davis",
        tags: ["PHP", "Laravel", "MySQL"],
        ratingValue: 4.0,
        statusLabel: "Complete",
        statusColor: statusColors["Complete"],
    },
];

export default ProjectData;