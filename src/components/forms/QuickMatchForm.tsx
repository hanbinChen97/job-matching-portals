"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { getTranslations } from "@/i18n/translations"

interface QuickMatchData {
  age: string
  hasWorkExperience: boolean | null
  childrenCount: string
  language: string
}

export function QuickMatchForm() {
  const router = useRouter()
  const params = useParams()
  const locale = params?.locale as string || 'de'
  const t = getTranslations(locale)
  const [formData, setFormData] = useState<QuickMatchData>({
    age: "",
    hasWorkExperience: null,
    childrenCount: "",
    language: ""
  })

  const ageOptions = [
    "18-25", "26-35", "36-45", "46-55", "55+"
  ]

  const childrenOptions = [
    { value: "0", label: t.quickMatch.children.none },
    { value: "1", label: t.quickMatch.children.one },
    { value: "2", label: t.quickMatch.children.two },
    { value: "3+", label: t.quickMatch.children.threePlus }
  ]

  const languageOptions = [
    { value: "german", label: t.quickMatch.languages.german },
    { value: "english", label: t.quickMatch.languages.english },
    { value: "arabic", label: t.quickMatch.languages.arabic },
    { value: "turkish", label: t.quickMatch.languages.turkish },
    { value: "other", label: t.quickMatch.languages.other }
  ]

  const handleSubmit = () => {
    // Save to localStorage for future use
    localStorage.setItem('quickMatchData', JSON.stringify(formData))
    
    // Navigate to matching results page
    router.push(`/${locale}/matching-results`)
  }

  const isFormComplete = formData.age && 
                        formData.hasWorkExperience !== null && 
                        formData.childrenCount && 
                        formData.language

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-900">{t.quickMatch.title}</CardTitle>
        <p className="text-gray-600">{t.quickMatch.subtitle}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Age Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.quickMatch.ageGroup}
          </label>
          <div className="flex flex-wrap gap-2">
            {ageOptions.map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => setFormData({...formData, age})}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  formData.age === age
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.quickMatch.workExperience}
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData({...formData, hasWorkExperience: true})}
              className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
                formData.hasWorkExperience === true
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
              }`}
            >
              {t.quickMatch.hasExperience}
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, hasWorkExperience: false})}
              className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
                formData.hasWorkExperience === false
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
              }`}
            >
              {t.quickMatch.noExperience}
            </button>
          </div>
        </div>

        {/* Children Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.quickMatch.childrenCount}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {childrenOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFormData({...formData, childrenCount: option.value})}
                className={`px-4 py-3 rounded-lg border transition-all text-center ${
                  formData.childrenCount === option.value
                    ? 'bg-purple-500 text-white border-purple-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Language Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.quickMatch.language}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {languageOptions.map((lang) => (
              <button
                key={lang.value}
                type="button"
                onClick={() => setFormData({...formData, language: lang.value})}
                className={`px-4 py-3 rounded-lg border transition-all text-left ${
                  formData.language === lang.value
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Summary */}
        {isFormComplete && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">{t.quickMatch.summary}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-800">{t.quickMatch.ageLabel}: {formData.age}</Badge>
              <Badge className="bg-green-100 text-green-800">
                {t.quickMatch.experienceLabel}: {formData.hasWorkExperience ? t.matchingResults.experienceYes : t.matchingResults.experienceNo}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800">
                {t.quickMatch.childrenLabel}: {childrenOptions.find(c => c.value === formData.childrenCount)?.label}
              </Badge>
              <Badge className="bg-orange-100 text-orange-800">
                {t.quickMatch.languageLabel}: {languageOptions.find(l => l.value === formData.language)?.label}
              </Badge>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          disabled={!isFormComplete}
          className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isFormComplete ? t.quickMatch.startMatching : t.quickMatch.fillAllFields}
        </Button>
      </CardContent>
    </Card>
  )
}