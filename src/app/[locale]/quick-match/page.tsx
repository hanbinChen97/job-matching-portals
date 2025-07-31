import { Header } from "@/components/Header"
import { QuickMatchForm } from "@/components/forms/QuickMatchForm"
import { getTranslations } from "@/i18n/translations"

export default async function QuickMatchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.quickMatchPage.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.quickMatchPage.subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t.quickMatchPage.preciseMatching}</h3>
            <p className="text-gray-600 text-sm">{t.quickMatchPage.preciseMatchingDesc}</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t.quickMatchPage.diverseOptions}</h3>
            <p className="text-gray-600 text-sm">{t.quickMatchPage.diverseOptionsDesc}</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t.quickMatchPage.fullSupport}</h3>
            <p className="text-gray-600 text-sm">{t.quickMatchPage.fullSupportDesc}</p>
          </div>
        </div>

        {/* Quick Match Form */}
        <QuickMatchForm />
        
        {/* Help Text */}
        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">
            {t.quickMatchPage.processInfo}
          </p>
        </div>
      </main>
    </div>
  )
}