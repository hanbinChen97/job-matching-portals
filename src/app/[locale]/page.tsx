import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { getTranslations } from "@/i18n/translations"

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/quick-match`}>
              <Button className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                {t.hero.startMatching}
              </Button>
            </Link>
            <Link href={`/${locale}/jobs`}>
              <Button variant="outline" className="text-lg px-8 py-4">
                {t.hero.viewAllJobs}
              </Button>
            </Link>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🧹</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.categories.cleaning.title}</h3>
                <p className="text-gray-600 text-sm">
                  {t.categories.cleaning.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.categories.restaurant.title}</h3>
                <p className="text-gray-600 text-sm">
                  {t.categories.restaurant.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👴</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.categories.care.title}</h3>
                <p className="text-gray-600 text-sm">
                  {t.categories.care.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.categories.logistics.title}</h3>
                <p className="text-gray-600 text-sm">
                  {t.categories.logistics.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              {t.whyChoose.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🆓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.whyChoose.free.title}</h3>
                <p className="text-gray-600">
                  {t.whyChoose.free.description}
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.whyChoose.precise.title}</h3>
                <p className="text-gray-600">
                  {t.whyChoose.precise.description}
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.whyChoose.multilingual.title}</h3>
                <p className="text-gray-600">
                  {t.whyChoose.multilingual.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.cta.subtitle}
          </p>
          <Link href={`/${locale}/quick-match`}>
            <Button className="text-xl px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              {t.cta.button}
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}