import { Header } from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Building2, 
  Heart, 
  Share2, 
  Users, 
  Calendar,
  ChevronLeft
} from "lucide-react"
import Link from "next/link"

// Mock job data - in real app this would come from API
const getJobById = (id: string) => {
  const jobs = [
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
      isUrgent: false,
      description: `We are looking for a passionate Senior Frontend Developer to join our growing team. You will be responsible for building user-facing applications that serve millions of users worldwide.

## What you'll do:
- Develop and maintain modern web applications using React and TypeScript
- Collaborate with designers and backend developers to create seamless user experiences
- Write clean, maintainable, and well-tested code
- Mentor junior developers and contribute to technical decisions
- Participate in code reviews and architectural discussions

## What we offer:
- Competitive salary and equity package
- Flexible working hours and remote work options
- Professional development budget
- Modern office in the heart of Berlin
- Health insurance and wellness benefits`,
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of modern JavaScript/ES6+",
        "Experience with state management (Redux, Zustand, etc.)",
        "Knowledge of testing frameworks (Jest, RTL)",
        "Familiarity with CI/CD pipelines",
        "Excellent communication skills in English"
      ],
      benefits: [
        "€70,000 - €90,000 annual salary",
        "Flexible working hours",
        "Remote work options",
        "30 days vacation",
        "Health & dental insurance",
        "€2,000 learning budget",
        "Modern tech stack",
        "Startup equity"
      ],
      companyInfo: {
        name: "TechCorp",
        size: "50-200 employees", 
        industry: "Software & Technology",
        founded: "2019",
        description: "We're building the future of digital experiences with cutting-edge technology and innovative solutions."
      }
    }
  ]
  
  return jobs.find(job => job.id === parseInt(id)) || jobs[0]
}

interface JobDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params
  const job = getJobById(id)
  
  const getCompanyInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
  }

  const getRandomColor = (company: string) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-orange-500', 'bg-teal-500', 'bg-red-500'
    ]
    const index = company.length % colors.length
    return colors[index]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl ${getRandomColor(job.company)} flex items-center justify-center text-white font-semibold text-lg shrink-0`}>
                    {getCompanyInitials(job.company)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h1>
                        <p className="text-xl text-blue-600 font-medium mb-3">
                          {job.company}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Posted {job.timePosted}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {job.isRemote && (
                            <Badge className="bg-green-100 text-green-700">
                              Remote
                            </Badge>
                          )}
                          {job.isUrgent && (
                            <Badge className="bg-red-100 text-red-700">
                              Urgent
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {job.description.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('##')) {
                      return (
                        <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                          {paragraph.replace('## ', '')}
                        </h3>
                      )
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <li key={index} className="text-gray-600 ml-4">
                          {paragraph.replace('- ', '')}
                        </li>
                      )
                    }
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-gray-600 mb-3">
                          {paragraph}
                        </p>
                      )
                    }
                    return null
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>What We Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {job.salary}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Quick Apply
                  </Button>
                  <p className="text-xs text-gray-500">
                    By applying, you agree to our Terms of Service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{job.companyInfo.size}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4" />
                  <span>{job.companyInfo.industry}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Founded {job.companyInfo.founded}</span>
                </div>
                <p className="text-gray-600 text-sm pt-2">
                  {job.companyInfo.description}
                </p>
                <Button variant="outline" className="w-full mt-4">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 