'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'
import { useState } from 'react'

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }, // German first (default)
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  
  const currentLocale = params?.locale as string
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  const switchLanguage = (newLocale: string) => {
    // 获取当前路径并移除语言前缀
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    
    // 设置cookie以记住用户的语言偏好
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`
    
    // 导航到新语言的路径
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
    
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-3 ${
                currentLocale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
              {currentLocale === language.code && (
                <span className="ml-auto text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}