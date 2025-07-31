import { Header } from "@/components/Header"
import { JobCard } from "@/components/JobCard"
import { getTranslations } from "@/i18n/translations"

// Mock data for job opportunities - in German
const mockJobs = [
  {
    id: 1,
    title: "Hotelzimmer-Reinigungskraft",
    company: "Berlin Hilton Hotel",
    location: "Berlin Mitte",
    salary: "€12-15/Stunde",
    type: "Vollzeit",
    timePosted: "1 Tag",
    skills: ["Sorgfältig", "Körperliche Arbeit", "Teamarbeit"],
    isRemote: false,
    isUrgent: true
  },
  {
    id: 2,
    title: "Küchenhelfer",
    company: "Burger King Restaurant",
    location: "München",
    salary: "€11-13/Stunde",
    type: "Teilzeit",
    timePosted: "2 Tage",
    skills: ["Lebensmittelverarbeitung", "Schnelles Arbeiten", "Hygienebewusstsein"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 3,
    title: "Lagerarbeiter Verpackung",
    company: "Amazon Logistikzentrum",
    location: "Frankfurt",
    salary: "€13-16/Stunde",
    type: "Vollzeit",
    timePosted: "3 Tage", 
    skills: ["Verpackungsfertigkeiten", "Warenhandhabung", "Scanner-Bedienung"],
    isRemote: false,
    isUrgent: true
  },
  {
    id: 4,
    title: "Altenpflege-Assistent",
    company: "Sonnenschein Pflegezentrum",
    location: "Hamburg",
    salary: "€14-17/Stunde",
    type: "Vollzeit",
    timePosted: "1 Tag",
    skills: ["Geduld und Sorgfalt", "Deutsche Kommunikation", "Pflegeerfahrung bevorzugt"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 5,
    title: "Baustellenhelfer",
    company: "Deutsche Baufirma",
    location: "Berlin",
    salary: "€15-18/Stunde",
    type: "Vollzeit",
    timePosted: "4 Tage",
    skills: ["Körperliche Arbeit", "Sicherheitsbewusstsein", "Grundwerkzeuge verwenden"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 6,
    title: "Supermarkt Kassierer",
    company: "REWE Supermarkt",
    location: "Köln",
    salary: "€10.5-12/Stunde",
    type: "Teilzeit",
    timePosted: "5 Tage",
    skills: ["Kundenservice", "Deutsche Kommunikation", "Kassensystem"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 7,
    title: "Fabrik-Montagearbeiter",
    company: "Siemens Produktionsstätte",
    location: "München",
    salary: "€14-16/Stunde",
    type: "Vollzeit",
    timePosted: "2 Tage",
    skills: ["Präzisionsarbeit", "Qualitätskontrolle", "Fließbandarbeit"],
    isRemote: false,
    isUrgent: true
  },
  {
    id: 8,
    title: "Lieferfahrer",
    company: "DHL Express",
    location: "Hamburg",
    salary: "€13-15/Stunde",
    type: "Vollzeit",
    timePosted: "1 Woche",
    skills: ["Führerschein", "Routenplanung", "Kundenservice"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 9,
    title: "Bürogebäude-Reinigungskraft",
    company: "Reinigungsdienstleister",
    location: "Frankfurt",
    salary: "€11-14/Stunde",
    type: "Teilzeit",
    timePosted: "3 Tage",
    skills: ["Nachtschichtarbeit", "Reinigungsgeräte", "Selbstständiges Arbeiten"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 10,
    title: "Restaurant-Bedienung",
    company: "Traditionelles Deutsches Restaurant",
    location: "Berlin",
    salary: "€10-12/Stunde + Trinkgeld",
    type: "Teilzeit",
    timePosted: "2 Tage",
    skills: ["Deutsche Kommunikation", "Kundenservice", "Teller servieren"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 11,
    title: "Haushalts-Reinigungskraft",
    company: "Familien-Service GmbH",
    location: "München",
    salary: "€15-20/Stunde",
    type: "Flexible Arbeitszeit",
    timePosted: "4 Tage",
    skills: ["Haushaltsreinigung", "Zuverlässigkeit", "Flexible Zeiten"],
    isRemote: false,
    isUrgent: false
  },
  {
    id: 12,
    title: "Qualitätsprüfer",
    company: "Autoteile-Fabrik",
    location: "Stuttgart",
    salary: "€13-15/Stunde",
    type: "Vollzeit",
    timePosted: "1 Woche",
    skills: ["Qualitätskontrolle", "Aufmerksamkeit für Details", "Datenaufzeichnung"],
    isRemote: false,
    isUrgent: true
  }
]

export default async function JobsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t.jobsPage.title}
          </h1>
          <p className="text-gray-600">
            {t.jobsPage.subtitle.replace('{count}', mockJobs.length.toString())}
          </p>
        </div>

        {/* Filter Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 font-medium">{t.jobsPage.matchingResults}</span>
            <span className="text-blue-600">•</span>
            <span className="text-blue-600">{t.jobsPage.filteredBy}</span>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium">
            {t.jobsPage.showMore}
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t.jobsPage.needHelp}
          </h3>
          <p className="text-gray-600 mb-4">
            {t.jobsPage.helpMessage}
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
            {t.jobsPage.contactAdvisor}
          </button>
        </div>
      </main>
    </div>
  )
}