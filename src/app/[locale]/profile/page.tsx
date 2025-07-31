import { Header } from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ProfileCompletionBanner } from "@/components/ProfileCompletionBanner"
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Star } from "lucide-react"
import { getTranslations } from "@/i18n/translations"

const userProfile = {
  name: "Max Musterman",
  email: "max.musterman@email.com",
  phone: "+49 123 456 7890",
  location: "Berlin, Germany",
  joinDate: "January 2024",
  title: "Senior Frontend Developer",
  bio: "Passionate frontend developer with 5+ years of experience building modern web applications. Love creating intuitive user experiences and working with cutting-edge technologies.",
  skills: [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", 
    "GraphQL", "MongoDB", "AWS", "Docker", "Jest"
  ],
  experience: [
    {
      company: "TechCorp",
      position: "Senior Frontend Developer",
      duration: "2022 - Present",
      description: "Lead frontend development for enterprise applications"
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2022", 
      description: "Built responsive web applications using React and TypeScript"
    }
  ],
  applications: [
    {
      id: 1,
      company: "Digital Agency",
      position: "Full Stack Developer",
      status: "Interview Scheduled",
      appliedDate: "2 days ago",
      salary: "€60,000 - €80,000"
    },
    {
      id: 2,
      company: "CloudTech",
      position: "DevOps Engineer", 
      status: "Under Review",
      appliedDate: "1 week ago",
      salary: "€75,000 - €95,000"
    },
    {
      id: 3,
      company: "AI Solutions",
      position: "Data Scientist",
      status: "Rejected",
      appliedDate: "2 weeks ago",
      salary: "€80,000 - €100,000"
    }
  ]
}

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-green-100 text-green-700"
      case "Under Review":
        return "bg-yellow-100 text-yellow-700"
      case "Rejected":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Completion Banner */}
        <ProfileCompletionBanner 
          completionPercentage={75}
          missingFields={["Bildungshintergrund", "Berufszertifikate", "Arbeitseinstellungen"]}
        />
        
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="bg-blue-500 text-white text-2xl">
                  MM
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {userProfile.name}
                </h1>
                <p className="text-xl text-blue-600 font-medium mb-3">
                  {userProfile.title}
                </p>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  {userProfile.bio}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>{userProfile.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{t.profilePage.joined.replace('{date}', userProfile.joinDate)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {t.profilePage.editProfile}
                </Button>
                <Button variant="outline">
                  {t.profilePage.downloadCV}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>{t.profilePage.skills}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>{t.profilePage.experience}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userProfile.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>{t.profilePage.applications}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userProfile.applications.map((app) => (
                    <div key={app.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{app.position}</h4>
                          <p className="text-blue-600 font-medium">{app.company}</p>
                          <p className="text-gray-600 text-sm mt-1">{app.salary}</p>
                          <p className="text-gray-500 text-xs mt-2">Applied {app.appliedDate}</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 