'use client'

import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { JobCard } from "@/components/JobCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"
import { CheckCircle, Clock, Star } from "lucide-react"
import { getTranslations } from "@/i18n/translations"

interface QuickMatchData {
  age: string
  hasWorkExperience: boolean | null
  childrenCount: string
  language: string
}

// Mock matched jobs based on user criteria
const getMatchedJobs = (userData: QuickMatchData) => {
  const allJobs = [
    {
      id: 1,
      title: "Reinigungskraft Hotel",
      company: "Luxushotel Berlin",
      location: "Berlin Mitte",
      salary: "€12-15/Stunde",
      type: "Vollzeit",
      timePosted: "1 Tag",
      skills: ["Keine Vorerfahrung", "Flexible Zeiten", "Teamarbeit"],
      isRemote: false,
      isUrgent: true,
      matchScore: 95
    },
    {
      id: 2,
      title: "Küchenhelfer",
      company: "Restaurant Am Markt",
      location: "München",
      salary: "€11-13/Stunde",
      type: "Teilzeit",
      timePosted: "2 Tage",
      skills: ["Einarbeitung", "Hygienestandards", "Schnelles Lernen"],
      isRemote: false,
      isUrgent: false,
      matchScore: 88
    },
    {
      id: 3,
      title: "Lagerarbeiter",
      company: "Logistik Express",
      location: "Hamburg",
      salary: "€13-16/Stunde",
      type: "Vollzeit",
      timePosted: "1 Tag",
      skills: ["Körperliche Fitness", "Schichtarbeit", "Zuverlässigkeit"],
      isRemote: false,
      isUrgent: true,
      matchScore: 82
    },
    {
      id: 4,
      title: "Pflegeassistent",
      company: "Seniorenheim Sonnenschein",
      location: "Frankfurt",
      salary: "€14-17/Stunde",
      type: "Vollzeit",
      timePosted: "3 Tage",
      skills: ["Geduld", "Deutsch B1", "Menschliche Wärme"],
      isRemote: false,
      isUrgent: false,
      matchScore: 78
    },
    {
      id: 5,
      title: "Supermarkt Kassiererin",
      company: "EDEKA Markt",
      location: "Köln",
      salary: "€10.50-12/Stunde",
      type: "Teilzeit",
      timePosted: "4 Tage",
      skills: ["Kundenservice", "Deutsch", "Freundlich"],
      isRemote: false,
      isUrgent: false,
      matchScore: 75
    },
    {
      id: 6,
      title: "Produktionshelfer",
      company: "Automobilwerk",
      location: "Stuttgart",
      salary: "€14-16/Stunde",
      type: "Schichtarbeit",
      timePosted: "1 Woche",
      skills: ["Handgeschick", "Präzision", "Teamwork"],
      isRemote: false,
      isUrgent: true,
      matchScore: 72
    }
  ]

  // Sort by match score (highest first)
  return allJobs.sort((a, b) => b.matchScore - a.matchScore)
}

export default function MatchingResultsPage() {
  const params = useParams()
  const locale = params?.locale as string || 'de'
  const t = getTranslations(locale)
  const [userData, setUserData] = useState<QuickMatchData | null>(null)
  const [matchedJobs, setMatchedJobs] = useState<Array<{id: number; title: string; company: string; location: string; salary: string; type: string; timePosted: string; skills: string[]; isRemote: boolean; isUrgent: boolean; matchScore: number}>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for matching process
    setTimeout(() => {
      // Get user data from localStorage
      const storedData = localStorage.getItem('quickMatchData')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setUserData(parsedData)
        setMatchedJobs(getMatchedJobs(parsedData))
      }
      setIsLoading(false)
    }, 2000)
  }, [])

  const getLanguageLabel = (value: string) => {
    const languageMap: Record<string, string> = {
      german: t.quickMatch.languages.german,
      english: t.quickMatch.languages.english, 
      arabic: t.quickMatch.languages.arabic,
      turkish: t.quickMatch.languages.turkish,
      other: t.quickMatch.languages.other
    }
    return languageMap[value] || value
  }

  const getChildrenLabel = (value: string) => {
    const childrenMap: Record<string, string> = {
      "0": t.quickMatch.children.none,
      "1": t.quickMatch.children.one,
      "2": t.quickMatch.children.two, 
      "3+": t.quickMatch.children.threePlus
    }
    return childrenMap[value] || value
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-8"></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t.matchingResults.searching}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t.matchingResults.analyzing}
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{t.matchingResults.analyzingSkills}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>{t.matchingResults.calculatingMatch}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t.matchingResults.noDataFound}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t.matchingResults.noDataMessage}
          </p>
          <Link href={`/${locale}/quick-match`}>
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t.matchingResults.backToQuickMatch}
            </Button>
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.matchingResults.successTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.matchingResults.successMessage.replace('{count}', matchedJobs.length.toString())}
          </p>
        </div>

        {/* User Profile Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.matchingResults.profileOverview}</h2>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                {t.matchingResults.age}: {userData.age}
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                {t.matchingResults.experience}: {userData.hasWorkExperience ? t.matchingResults.experienceYes : t.matchingResults.experienceNo}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">
                👶 {getChildrenLabel(userData.childrenCount)}
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
                🌍 {getLanguageLabel(userData.language)}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Matching Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{matchedJobs.length}</div>
              <div className="text-gray-600">{t.matchingResults.matchingJobs}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {matchedJobs.filter(job => job.matchScore >= 80).length}
              </div>
              <div className="text-gray-600">{t.matchingResults.highMatch}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {matchedJobs.filter(job => job.isUrgent).length}
              </div>
              <div className="text-gray-600">{t.matchingResults.urgentJobs}</div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {t.matchingResults.yourMatches}
            </h2>
            <div className="text-sm text-gray-500">
              {t.matchingResults.sortedByMatch}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedJobs.map((job) => (
              <div key={job.id} className="relative">
                {/* Match Score Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className={`${
                    job.matchScore >= 90 ? 'bg-green-500' :
                    job.matchScore >= 80 ? 'bg-blue-500' : 'bg-orange-500'
                  } text-white px-2 py-1 rounded-full`}>
                    {job.matchScore}{t.matchingResults.match}
                  </Badge>
                </div>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/jobs`}>
              <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                {t.matchingResults.viewAllJobs}
              </Button>
            </Link>
            <Link href={`/${locale}/profile`}>
              <Button variant="outline" className="px-8 py-3">
                {t.matchingResults.completeProfile}
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            {t.matchingResults.completeProfileTip}
          </p>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t.matchingResults.needHelp}
          </h3>
          <p className="text-gray-600 mb-6">
            {t.matchingResults.helpMessage}
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
            {t.matchingResults.requestConsultation}
          </Button>
        </div>
      </main>
    </div>
  )
}