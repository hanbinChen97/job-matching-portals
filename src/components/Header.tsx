'use client'

import { Search, MapPin, Bell, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { getTranslations } from '@/i18n/translations'

export function Header() {
  const params = useParams();
  const locale = params?.locale as string || 'de';
  const t = getTranslations(locale);
  return (
    <header className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              {t.header.jobPortal}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}/jobs`} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.myJobs}
            </Link>
            <Link href={`/${locale}/quick-match`} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.jobMatching}
            </Link>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Link href={`/${locale}/profile`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarFallback className="bg-blue-500 text-white text-sm">
                  MM
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-700 hidden sm:inline">{t.header.userName}</span>
            </Link>
          </div>
        </div>

        {/* Search Section */}
        <div className="pb-6">
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t.header.jobTitle}
                className="pl-10 h-12 text-base border-gray-200 bg-white shadow-sm"
              />
            </div>
            <div className="sm:w-64 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t.header.location}
                className="pl-10 h-12 text-base border-gray-200 bg-white shadow-sm"
              />
            </div>
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
              {t.header.findJobs}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 