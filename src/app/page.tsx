import { Header } from "@/components/Header"
import { JobCard } from "@/components/JobCard"

// Mock data for demonstration
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Berlin, Germany",
    salary: "€70,000 - €90,000",
    type: "Full-time",
    timePosted: "2 days ago",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isRemote: true,
    isUrgent: false
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "StartupXYZ",
    location: "Munich, Germany",
    salary: "€65,000 - €85,000",
    type: "Full-time",
    timePosted: "1 day ago",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    isRemote: false,
    isUrgent: true
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Digital Agency",
    location: "Remote",
    salary: "€60,000 - €80,000",
    type: "Full-time",
    timePosted: "3 days ago",
    skills: ["React", "Node.js", "MongoDB", "Docker"],
    isRemote: true,
    isUrgent: false
  },
  {
    id: 4,
    title: "React Native Developer",
    company: "MobileFirst",
    location: "Hamburg, Germany",
    salary: "€55,000 - €75,000",
    type: "Contract",
    timePosted: "1 week ago",
    skills: ["React Native", "JavaScript", "iOS", "Android"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Frankfurt, Germany",
    salary: "€75,000 - €95,000",
    type: "Full-time",
    timePosted: "4 days ago",
    skills: ["Kubernetes", "Docker", "AWS", "Jenkins"],
    isRemote: true,
    isUrgent: true
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Cologne, Germany",
    salary: "€45,000 - €65,000",
    type: "Full-time",
    timePosted: "5 days ago",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "AI Solutions",
    location: "Remote",
    salary: "€80,000 - €100,000",
    type: "Full-time",
    timePosted: "2 days ago",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    isRemote: true,
    isUrgent: false
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Growth Inc",
    location: "Stuttgart, Germany",
    salary: "€70,000 - €90,000",
    type: "Full-time",
    timePosted: "1 week ago",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    isRemote: false,
    isUrgent: false
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hello Max Musterman,
          </h1>
          <p className="text-gray-600">
            Here&apos;s your job search overview.
          </p>
        </div>

        {/* Job Recommendations Section */}
        <section className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">💼</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                My Latest Job Recommendations
              </h2>
              <p className="text-gray-600 text-sm">
                These jobs match your search behavior and profile optimally.
              </p>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium">
              Show More +
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
