"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

interface ProfileCompletionBannerProps {
  completionPercentage?: number
  missingFields?: string[]
}

export function ProfileCompletionBanner({ 
  completionPercentage = 60, 
  missingFields = ["教育背景", "详细工作经历", "职业偏好"] 
}: ProfileCompletionBannerProps) {
  const isCompleteProfile = completionPercentage >= 90

  if (isCompleteProfile) {
    return (
      <Card className="bg-green-50 border-green-200 mb-6">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-green-900">
                🎉 Profil vervollständigt!
              </h3>
              <p className="text-green-700 text-sm">
                Ihr vollständiges Profil hilft uns dabei, Ihnen präzisere Job-Matches anzubieten
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-blue-50 border-blue-200 mb-6">
      <CardContent className="pt-6 pb-6">
        <div className="flex items-start space-x-4">
          <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h3 className="font-semibold text-blue-900">
                Vervollständigen Sie Ihre Informationen für präzisere Matches
              </h3>
              <Badge className="bg-blue-100 text-blue-800">
                {completionPercentage}% vollständig
              </Badge>
            </div>
            
            <p className="text-blue-700 text-sm mb-4">
              Ergänzen Sie die folgenden Informationen und wir können Ihnen passendere Arbeitsmöglichkeiten empfehlen und Ihre Erfolgsrate bei Vorstellungsgesprächen erhöhen
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-blue-100 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            
            {/* Missing Fields */}
            <div className="flex flex-wrap gap-2 mb-4">
              {missingFields.map((field, index) => (
                <Badge key={index} variant="outline" className="border-blue-300 text-blue-700">
                  {field}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link href="/update-profile">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  🚀 Informationen vervollständigen
                </Button>
              </Link>
              <Button variant="outline" className="border-blue-300 text-blue-700">
                Später erinnern
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}