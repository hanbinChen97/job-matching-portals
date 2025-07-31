"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { ChevronLeft, Save } from "lucide-react"
import Link from "next/link"

interface ProfileData {
  // Basic Info
  fullName: string
  gender: string
  age: string
  phoneNumber: string
  email: string
  address: string
  
  // Education
  education: string
  certificates: string[]
  
  // Work Experience
  hasWorkExperience: boolean
  workExperience: string
  skills: string[]
  
  // Preferences
  workType: string[]
  workLocation: string[]
  salaryExpectation: string
  workSchedule: string[]
  
  // Family
  childrenCount: string
  childcareSupport: boolean
  
  // Language
  languages: string[]
}

export default function UpdateProfilePage() {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "",
    gender: "",
    age: "",
    phoneNumber: "",
    email: "",
    address: "",
    education: "",
    certificates: [],
    hasWorkExperience: false,
    workExperience: "",
    skills: [],
    workType: [],
    workLocation: [],
    salaryExpectation: "",
    workSchedule: [],
    childrenCount: "",
    childcareSupport: false,
    languages: []
  })

  const sections = [
    { title: "基本信息", icon: "👤" },
    { title: "教育背景", icon: "🎓" },
    { title: "工作经验", icon: "💼" },
    { title: "工作偏好", icon: "⚙️" },
    { title: "家庭情况", icon: "👨‍👩‍👧‍👦" },
    { title: "语言能力", icon: "🗣️" }
  ]

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('detailedProfile', JSON.stringify(profileData))
    
    // Navigate back to profile
    router.push('/profile')
  }

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else {
      handleSave()
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const renderBasicInfo = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            姓名 *
          </label>
          <Input
            value={profileData.fullName}
            onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
            placeholder="请输入您的姓名"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            性别 *
          </label>
          <div className="flex gap-2">
            {["男", "女", "其他"].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() => setProfileData({...profileData, gender})}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  profileData.gender === gender
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            年龄
          </label>
          <Input
            value={profileData.age}
            onChange={(e) => setProfileData({...profileData, age: e.target.value})}
            placeholder="请输入您的年龄"
            type="number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            电话号码
          </label>
          <Input
            value={profileData.phoneNumber}
            onChange={(e) => setProfileData({...profileData, phoneNumber: e.target.value})}
            placeholder="+49 123 456 7890"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          邮箱地址
        </label>
        <Input
          value={profileData.email}
          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
          placeholder="your@email.com"
          type="email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          居住地址
        </label>
        <Input
          value={profileData.address}
          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
          placeholder="请输入您的居住地址"
        />
      </div>
    </div>
  )

  const renderEducation = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          教育水平 *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["小学", "初中", "高中", "职业培训", "大学本科", "研究生及以上"].map((edu) => (
            <button
              key={edu}
              type="button"
              onClick={() => setProfileData({...profileData, education: edu})}
              className={`px-4 py-3 rounded-lg border transition-all text-left ${
                profileData.education === edu
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
              }`}
            >
              {edu}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          职业技能证书（可选）
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["驾驶执照", "叉车证", "安全作业证", "食品处理证", "护理证书", "清洁技能证", "其他"].map((cert) => (
            <button
              key={cert}
              type="button"
              onClick={() => {
                const newCerts = profileData.certificates.includes(cert)
                  ? profileData.certificates.filter(c => c !== cert)
                  : [...profileData.certificates, cert]
                setProfileData({...profileData, certificates: newCerts})
              }}
              className={`px-4 py-3 rounded-lg border transition-all text-left ${
                profileData.certificates.includes(cert)
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
              }`}
            >
              {cert}
            </button>
          ))}
        </div>
        
        {profileData.certificates.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">已选择的证书：</p>
            <div className="flex flex-wrap gap-2">
              {profileData.certificates.map((cert, index) => (
                <Badge key={index} className="bg-purple-100 text-purple-800">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderWorkExperience = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          是否有工作经验？ *
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setProfileData({...profileData, hasWorkExperience: true})}
            className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
              profileData.hasWorkExperience === true
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
            }`}
          >
            有工作经验
          </button>
          <button
            type="button"
            onClick={() => setProfileData({...profileData, hasWorkExperience: false})}
            className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
              profileData.hasWorkExperience === false
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
            }`}
          >
            没有工作经验
          </button>
        </div>
      </div>
      
      {profileData.hasWorkExperience && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            工作经历描述
          </label>
          <textarea
            value={profileData.workExperience}
            onChange={(e) => setProfileData({...profileData, workExperience: e.target.value})}
            placeholder="请简要描述您的工作经历，包括工作岗位、工作内容、工作年限等"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
          />
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          技能特长（可选）
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "体力工作", "细心负责", "团队合作", "客户服务", "德语交流", "英语交流",
            "使用工具", "质量检查", "安全意识", "时间管理", "学习能力", "适应能力"
          ].map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => {
                const newSkills = profileData.skills.includes(skill)
                  ? profileData.skills.filter(s => s !== skill)
                  : [...profileData.skills, skill]
                setProfileData({...profileData, skills: newSkills})
              }}
              className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                profileData.skills.includes(skill)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderWorkPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          期望工作类型 *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["清洁工作", "餐饮服务", "仓储物流", "照护服务", "建筑助手", "工厂生产", "客户服务", "其他"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                const newTypes = profileData.workType.includes(type)
                  ? profileData.workType.filter(t => t !== type)
                  : [...profileData.workType, type]
                setProfileData({...profileData, workType: newTypes})
              }}
              className={`px-4 py-3 rounded-lg border transition-all text-left ${
                profileData.workType.includes(type)
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          期望工作地点
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["柏林", "慕尼黑", "汉堡", "法兰克福", "科隆", "斯图加特", "不限地点"].map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => {
                const newLocations = profileData.workLocation.includes(location)
                  ? profileData.workLocation.filter(l => l !== location)
                  : [...profileData.workLocation, location]
                setProfileData({...profileData, workLocation: newLocations})
              }}
              className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                profileData.workLocation.includes(location)
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          期望薪资（每小时）
        </label>
        <div className="flex flex-wrap gap-2">
          {["€10-12", "€12-15", "€15-18", "€18-20", "€20+", "面议"].map((salary) => (
            <button
              key={salary}
              type="button"
              onClick={() => setProfileData({...profileData, salaryExpectation: salary})}
              className={`px-4 py-2 rounded-lg border transition-all ${
                profileData.salaryExpectation === salary
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300'
              }`}
            >
              {salary}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          期望工作时间
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["全职", "兼职", "周末工作", "夜班", "灵活工时", "临时工作"].map((schedule) => (
            <button
              key={schedule}
              type="button"
              onClick={() => {
                const newSchedules = profileData.workSchedule.includes(schedule)
                  ? profileData.workSchedule.filter(s => s !== schedule)
                  : [...profileData.workSchedule, schedule]
                setProfileData({...profileData, workSchedule: newSchedules})
              }}
              className={`px-4 py-3 rounded-lg border transition-all text-left ${
                profileData.workSchedule.includes(schedule)
                  ? 'bg-indigo-500 text-white border-indigo-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300'
              }`}
            >
              {schedule}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderFamilyInfo = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          孩子数量
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { value: "0", label: "无孩子" },
            { value: "1", label: "1个孩子" },
            { value: "2", label: "2个孩子" },
            { value: "3+", label: "3个或更多" }
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setProfileData({...profileData, childrenCount: option.value})}
              className={`px-4 py-3 rounded-lg border transition-all text-center ${
                profileData.childrenCount === option.value
                  ? 'bg-pink-500 text-white border-pink-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      {profileData.childrenCount !== "0" && profileData.childrenCount !== "" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            是否有照看孩子的支持？
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setProfileData({...profileData, childcareSupport: true})}
              className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
                profileData.childcareSupport === true
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
              }`}
            >
              有支持（家人/朋友/托儿所）
            </button>
            <button
              type="button"
              onClick={() => setProfileData({...profileData, childcareSupport: false})}
              className={`px-6 py-3 rounded-lg border transition-all flex-1 ${
                profileData.childcareSupport === false
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
              }`}
            >
              需要灵活工作时间
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const renderLanguageSkills = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          语言能力 *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { value: "german-basic", label: "德语 - 基础" },
            { value: "german-intermediate", label: "德语 - 中级" },
            { value: "german-advanced", label: "德语 - 高级" },
            { value: "english-basic", label: "英语 - 基础" },
            { value: "english-intermediate", label: "英语 - 中级" },
            { value: "english-advanced", label: "英语 - 高级" },
            { value: "arabic", label: "阿拉伯语" },
            { value: "turkish", label: "土耳其语" },
            { value: "other", label: "其他语言" }
          ].map((lang) => (
            <button
              key={lang.value}
              type="button"
              onClick={() => {
                const newLanguages = profileData.languages.includes(lang.value)
                  ? profileData.languages.filter(l => l !== lang.value)
                  : [...profileData.languages, lang.value]
                setProfileData({...profileData, languages: newLanguages})
              }}
              className={`px-4 py-3 rounded-lg border transition-all text-left ${
                profileData.languages.includes(lang.value)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
        
        {profileData.languages.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">您的语言能力：</p>
            <div className="flex flex-wrap gap-2">
              {profileData.languages.map((lang, index) => {
                const langObj = [
                  { value: "german-basic", label: "德语 - 基础" },
                  { value: "german-intermediate", label: "德语 - 中级" },
                  { value: "german-advanced", label: "德语 - 高级" },
                  { value: "english-basic", label: "英语 - 基础" },
                  { value: "english-intermediate", label: "英语 - 中级" },
                  { value: "english-advanced", label: "英语 - 高级" },
                  { value: "arabic", label: "阿拉伯语" },
                  { value: "turkish", label: "土耳其语" },
                  { value: "other", label: "其他语言" }
                ].find(l => l.value === lang)
                
                return (
                  <Badge key={index} className="bg-blue-100 text-blue-800">
                    {langObj?.label}
                  </Badge>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderBasicInfo()
      case 1: return renderEducation()
      case 2: return renderWorkExperience()
      case 3: return renderWorkPreferences()
      case 4: return renderFamilyInfo()
      case 5: return renderLanguageSkills()
      default: return renderBasicInfo()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/profile" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          返回个人资料
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            完善个人信息
          </h1>
          <p className="text-gray-600">
            详细的个人信息帮助我们为您匹配更合适的工作机会
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 ${
                  index <= currentSection ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentSection 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentSection ? '✓' : section.icon}
                </div>
                <span className="text-sm font-medium hidden sm:block">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Form Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">{sections[currentSection].icon}</span>
              <span>{sections[currentSection].title}</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            {renderCurrentSection()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>上一步</span>
              </Button>
              
              <Button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
              >
                {currentSection === sections.length - 1 ? (
                  <>
                    <Save className="h-4 w-4" />
                    <span>保存信息</span>
                  </>
                ) : (
                  <>
                    <span>下一步</span>
                    <span>→</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}