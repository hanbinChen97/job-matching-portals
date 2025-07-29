"use client"

import { Heart, MapPin, Clock, Building2, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface JobCardProps {
  job: {
    id: number
    title: string
    company: string
    location: string
    salary: string
    type: string
    timePosted: string
    skills: string[]
    companyLogo?: string
    isUrgent?: boolean
    isRemote?: boolean
  }
}

export function JobCard({ job }: JobCardProps) {
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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white relative">
      <Link href={`/jobs/${job.id}`} className="block">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {/* Company Logo */}
              <div className={`w-12 h-12 rounded-lg ${getRandomColor(job.company)} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                {getCompanyInitials(job.company)}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {job.title}
                </h3>
                <div className="flex items-center space-x-1 text-gray-600 mt-1">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">{job.company}</span>
                </div>
              </div>
            </div>
            
            {/* Heart Icon */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-red-500 transition-colors relative z-10"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // Handle favorite functionality here
                console.log('Added to favorites:', job.id)
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Location and Type */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Briefcase className="h-4 w-4" />
              <span>{job.type}</span>
            </div>
          </div>

          {/* Salary */}
          <div className="text-lg font-semibold text-gray-900 mb-3">
            {job.salary}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>{job.timePosted}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {job.isUrgent && (
                <Badge className="bg-red-100 text-red-700 text-xs">
                  Urgent
                </Badge>
              )}
              {job.isRemote && (
                <Badge className="bg-green-100 text-green-700 text-xs">
                  Remote
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 