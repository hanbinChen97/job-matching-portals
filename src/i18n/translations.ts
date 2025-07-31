// Translation system for multilingual support
export interface Translations {
  // Homepage
  hero: {
    title: string
    subtitle: string
    startMatching: string
    viewAllJobs: string
  }
  
  // Job Categories
  categories: {
    title: string
    cleaning: {
      title: string
      description: string
    }
    restaurant: {
      title: string
      description: string
    }
    care: {
      title: string
      description: string
    }
    logistics: {
      title: string
      description: string
    }
  }
  
  // Why Choose Us
  whyChoose: {
    title: string
    free: {
      title: string
      description: string
    }
    precise: {
      title: string
      description: string
    }
    multilingual: {
      title: string
      description: string
    }
  }
  
  // CTA
  cta: {
    title: string
    subtitle: string
    button: string
  }
  
  // Header
  header: {
    jobPortal: string
    myJobs: string
    jobMatching: string
    userName: string
    jobTitle: string
    location: string
    findJobs: string
  }
  
  // Quick Match Form
  quickMatch: {
    title: string
    subtitle: string
    ageGroup: string
    workExperience: string
    hasExperience: string
    noExperience: string
    childrenCount: string
    language: string
    summary: string
    ageLabel: string
    experienceLabel: string
    childrenLabel: string
    languageLabel: string
    startMatching: string
    fillAllFields: string
    children: {
      none: string
      one: string
      two: string
      threePlus: string
    }
    languages: {
      german: string
      english: string
      arabic: string
      turkish: string
      other: string
    }
  }
  
  // Matching Results
  matchingResults: {
    searching: string
    analyzing: string
    analyzingSkills: string
    calculatingMatch: string
    noDataFound: string
    noDataMessage: string
    backToQuickMatch: string
    successTitle: string
    successMessage: string
    profileOverview: string
    age: string
    experience: string
    experienceYes: string
    experienceNo: string
    matchingJobs: string
    highMatch: string
    urgentJobs: string
    yourMatches: string
    sortedByMatch: string
    match: string
    viewAllJobs: string
    completeProfile: string
    completeProfileTip: string
    needHelp: string
    helpMessage: string
    requestConsultation: string
  }
  
  // Quick Match Page
  quickMatchPage: {
    title: string
    subtitle: string
    preciseMatching: string
    preciseMatchingDesc: string
    diverseOptions: string
    diverseOptionsDesc: string
    fullSupport: string
    fullSupportDesc: string
    processInfo: string
  }
  
  // Jobs Page
  jobsPage: {
    title: string
    subtitle: string
    matchingResults: string
    filteredBy: string
    showMore: string
    needHelp: string
    helpMessage: string
    contactAdvisor: string
  }
  
  // Profile Page
  profilePage: {
    joined: string
    editProfile: string
    downloadCV: string
    skills: string
    experience: string
    applications: string
    missingFields: string
  }
  
  // Update Profile Page
  updateProfile: {
    basicInfo: string
    education: string
    workExperience: string
    workPreferences: string
    familySituation: string
    languageSkills: string
    name: string
    namePlaceholder: string
    gender: string
    male: string
    female: string
    other: string
    age: string
    agePlaceholder: string
    phone: string
    email: string
    address: string
    addressPlaceholder: string
    educationLevel: string
    certificates: string
    selectedCertificates: string
    hasWorkExperience: string
    hasExperience: string
    noExperience: string
    workDescription: string
    workDescriptionPlaceholder: string
    skills: string
    educationLevels: {
      primary: string
      middle: string
      high: string
      vocational: string
      bachelor: string
      graduate: string
    }
    certificateTypes: {
      driving: string
      forklift: string
      safety: string
      food: string
      care: string
      cleaning: string
      other: string
    }
    skillTypes: {
      physical: string
      careful: string
      teamwork: string
      customer: string
      german: string
      english: string
      tools: string
      quality: string
      safety: string
      time: string
      learning: string
      adaptation: string
    }
  }
}

export const translations: Record<string, Translations> = {
  de: {
    hero: {
      title: "Finden Sie Ihren Traumjob",
      subtitle: "Unabhängig von Ihrem Hintergrund helfen wir Ihnen dabei, passende Arbeitsmöglichkeiten zu finden. Von der Reinigung über die Gastronomie bis hin zur Pflege - starten Sie Ihre neue Karriere.",
      startMatching: "🎯 Start Job Matching",
      viewAllJobs: "View All Jobs"
    },
    categories: {
      title: "Beliebte Arbeitsbereiche",
      cleaning: {
        title: "Reinigungsarbeiten",
        description: "Reinigungsarbeiten in Hotels, Bürogebäuden, Einkaufszentren mit stabilen Einnahmen und flexiblen Arbeitszeiten"
      },
      restaurant: {
        title: "Gastronomie Service",
        description: "Küchenhelfer, Kellner, Lieferfahrer - verschiedene Gastronomiepositionen zur Auswahl"
      },
      care: {
        title: "Pflegearbeit",
        description: "Möglichkeiten in der Altenpflege, Kinderbetreuung und Gesundheitsdiensten mit bereitgestellter Ausbildung"
      },
      logistics: {
        title: "Lager & Logistik",
        description: "Packer, Sortierer, Lieferfahrer - vielfältige Möglichkeiten in der Logistikbranche"
      }
    },
    whyChoose: {
      title: "Warum uns wählen?",
      free: {
        title: "Völlig kostenlos",
        description: "Registrierung, Matching und Bewerbung völlig kostenlos"
      },
      precise: {
        title: "Präzises Matching",
        description: "Die passendsten Jobs basierend auf Ihrer Situation"
      },
      multilingual: {
        title: "Mehrsprachige Unterstützung",
        description: "Deutsch, Englisch, Arabisch und andere Sprachen"
      }
    },
    cta: {
      title: "Bereit, Ihren Traumjob zu finden?",
      subtitle: "Starten Sie jetzt mit dem Matching-Prozess und finden Sie Ihre perfekte Stelle",
      button: "Jetzt Matching starten"
    },
    header: {
      jobPortal: "JobPortal",
      myJobs: "Meine Jobs",
      jobMatching: "Job Matching",
      userName: "Max Musterman",
      jobTitle: "Jobtitel, Fähigkeiten oder Unternehmen",
      location: "Ort oder remote",
      findJobs: "Jobs finden"
    },
    
    quickMatch: {
      title: "Schnelles Job-Matching",
      subtitle: "Teilen Sie uns einige Grundinformationen mit und wir helfen Ihnen, passende Arbeitsmöglichkeiten zu finden",
      ageGroup: "Ihre Altersgruppe *",
      workExperience: "Haben Sie Berufserfahrung? *",
      hasExperience: "Ja, ich habe Berufserfahrung",
      noExperience: "Nein, es ist mein erster Job",
      childrenCount: "Wie viele Kinder haben Sie? *",
      language: "Welche Sprache beherrschen Sie am besten? *",
      summary: "Ihre Auswahl-Zusammenfassung:",
      ageLabel: "Alter",
      experienceLabel: "Berufserfahrung",
      childrenLabel: "Kinder",
      languageLabel: "Sprache",
      startMatching: "Job-Matching starten",
      fillAllFields: "Bitte alle Felder ausfüllen",
      children: {
        none: "Keine Kinder",
        one: "1 Kind",
        two: "2 Kinder",
        threePlus: "3 oder mehr Kinder"
      },
      languages: {
        german: "Deutsch",
        english: "Englisch",
        arabic: "Arabisch",
        turkish: "Türkisch",
        other: "Andere"
      }
    },
    
    matchingResults: {
      searching: "Wir suchen die besten Jobs für Sie...",
      analyzing: "Unser KI-System analysiert Tausende von Stellenausschreibungen",
      analyzingSkills: "Analysiere Fähigkeiten...",
      calculatingMatch: "Berechne Passgenauigkeit...",
      noDataFound: "Keine Matching-Daten gefunden",
      noDataMessage: "Bitte füllen Sie zuerst das Quick-Match Formular aus.",
      backToQuickMatch: "Zurück zum Quick-Match",
      successTitle: "Matching erfolgreich! 🎯",
      successMessage: "Basierend auf Ihren Angaben haben wir {count} passende Stellenangebote für Sie gefunden",
      profileOverview: "Ihr Profil-Überblick:",
      age: "📅 Alter",
      experience: "💼 Berufserfahrung",
      experienceYes: "Ja",
      experienceNo: "Nein",
      matchingJobs: "Passende Jobs",
      highMatch: "Hohe Übereinstimmung",
      urgentJobs: "Dringend gesucht",
      yourMatches: "Ihre passenden Stellenangebote",
      sortedByMatch: "Sortiert nach Passgenauigkeit",
      match: "% Match",
      viewAllJobs: "Alle Jobs anzeigen",
      completeProfile: "Profil vervollständigen",
      completeProfileTip: "Vervollständigen Sie Ihr Profil für noch präzisere Matches",
      needHelp: "Benötigen Sie Unterstützung bei der Bewerbung?",
      helpMessage: "Unser Beratungsteam hilft Ihnen kostenlos bei Bewerbungsschreiben und Interviewvorbereitung",
      requestConsultation: "Kostenlose Beratung anfordern"
    },
    
    quickMatchPage: {
      title: "Finden Sie Ihren Traumjob",
      subtitle: "Wir konzentrieren uns darauf, passende Arbeitsmöglichkeiten für Sie zu finden. Unabhängig von Ihrem Hintergrund gibt es die richtige Position für Sie.",
      preciseMatching: "Präzises Matching",
      preciseMatchingDesc: "Die passendsten Jobs basierend auf Ihren Anforderungen",
      diverseOptions: "Vielfältige Auswahl",
      diverseOptionsDesc: "Verschiedene Branchen und Arbeitstypen zur Auswahl",
      fullSupport: "Vollständige Unterstützung",
      fullSupportDesc: "Von der Bewerbung bis zum Arbeitsantritt unterstützen wir Sie",
      processInfo: "Matching-Prozess dauert nur 1 Minute • Völlig kostenlos • Datenschutz garantiert"
    },
    
    jobsPage: {
      title: "Passende Arbeitsmöglichkeiten für Sie",
      subtitle: "Basierend auf Ihren Informationen haben wir {count} passende Arbeitsmöglichkeiten für Sie gefunden",
      matchingResults: "🎯 Matching-Ergebnisse",
      filteredBy: "Gefiltert nach Ihrem Alter, Erfahrung und Sprachkenntnissen",
      showMore: "Mehr Stellen anzeigen +",
      needHelp: "Benötigen Sie Hilfe?",
      helpMessage: "Unser Beratungsteam kann Ihnen kostenlose Jobberatung und Interviewvorbereitung anbieten",
      contactAdvisor: "Jobberater kontaktieren"
    },
    
    profilePage: {
      joined: "Beigetreten {date}",
      editProfile: "Profil bearbeiten",
      downloadCV: "Lebenslauf herunterladen",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      applications: "Meine Bewerbungen",
      missingFields: "Fehlende Felder"
    },
    
    updateProfile: {
      basicInfo: "Grundinformationen",
      education: "Bildungshintergrund",
      workExperience: "Berufserfahrung",
      workPreferences: "Arbeitseinstellungen",
      familySituation: "Familiensituation",
      languageSkills: "Sprachkenntnisse",
      name: "Name *",
      namePlaceholder: "Bitte geben Sie Ihren Namen ein",
      gender: "Geschlecht *",
      male: "Männlich",
      female: "Weiblich",
      other: "Andere",
      age: "Alter",
      agePlaceholder: "Bitte geben Sie Ihr Alter ein",
      phone: "Telefonnummer",
      email: "E-Mail-Adresse",
      address: "Wohnadresse",
      addressPlaceholder: "Bitte geben Sie Ihre Wohnadresse ein",
      educationLevel: "Bildungsniveau *",
      certificates: "Berufszertifikate (optional)",
      selectedCertificates: "Ausgewählte Zertifikate:",
      hasWorkExperience: "Haben Sie Berufserfahrung? *",
      hasExperience: "Ich habe Berufserfahrung",
      noExperience: "Ich habe keine Berufserfahrung",
      workDescription: "Beschreibung der Berufserfahrung",
      workDescriptionPlaceholder: "Bitte beschreiben Sie kurz Ihre Berufserfahrung, einschließlich Arbeitsplätze, Arbeitsinhalte, Arbeitsjahre usw.",
      skills: "Fähigkeiten (optional)",
      educationLevels: {
        primary: "Grundschule",
        middle: "Hauptschule",
        high: "Gymnasium",
        vocational: "Berufsausbildung",
        bachelor: "Bachelor",
        graduate: "Master und höher"
      },
      certificateTypes: {
        driving: "Führerschein",
        forklift: "Gabelstaplerschein",
        safety: "Sicherheitszertifikat",
        food: "Lebensmittelhygienezertifikat",
        care: "Pflegezertifikat",
        cleaning: "Reinigungszertifikat",
        other: "Andere"
      },
      skillTypes: {
        physical: "Körperliche Arbeit",
        careful: "Sorgfältig und verantwortlich",
        teamwork: "Teamarbeit",
        customer: "Kundenservice",
        german: "Deutsche Kommunikation",
        english: "Englische Kommunikation",
        tools: "Werkzeugverwendung",
        quality: "Qualitätskontrolle",
        safety: "Sicherheitsbewusstsein",
        time: "Zeitmanagement",
        learning: "Lernfähigkeit",
        adaptation: "Anpassungsfähigkeit"
      }
    }
  },
  
  en: {
    hero: {
      title: "Find Your Dream Job",
      subtitle: "Regardless of your background, we help you find suitable job opportunities. From cleaning to hospitality to healthcare - start your new career.",
      startMatching: "🎯 Start Job Matching",
      viewAllJobs: "View All Jobs"
    },
    categories: {
      title: "Popular Job Areas",
      cleaning: {
        title: "Cleaning Jobs",
        description: "Cleaning jobs in hotels, office buildings, shopping centers with stable income and flexible hours"
      },
      restaurant: {
        title: "Restaurant Service",
        description: "Kitchen helpers, waiters, delivery drivers - various restaurant positions available"
      },
      care: {
        title: "Care Work",
        description: "Opportunities in elderly care, childcare and health services with provided training"
      },
      logistics: {
        title: "Warehouse & Logistics",
        description: "Packers, sorters, delivery drivers - diverse opportunities in the logistics industry"
      }
    },
    whyChoose: {
      title: "Why Choose Us?",
      free: {
        title: "Completely Free",
        description: "Registration, matching and applications completely free"
      },
      precise: {
        title: "Precise Matching",
        description: "The most suitable jobs based on your situation"
      },
      multilingual: {
        title: "Multilingual Support",
        description: "German, English, Arabic and other languages"
      }
    },
    cta: {
      title: "Ready to Find Your Dream Job?",
      subtitle: "Start the matching process now and find your perfect position",
      button: "Start Matching Now"
    },
    header: {
      jobPortal: "JobPortal",
      myJobs: "My Jobs",
      jobMatching: "Job Matching",
      userName: "John Doe",
      jobTitle: "Job title, skills or company",
      location: "Location or remote",
      findJobs: "Find Jobs"
    },
    
    quickMatch: {
      title: "Quick Job Matching",
      subtitle: "Share some basic information with us and we'll help you find suitable job opportunities",
      ageGroup: "Your age group *",
      workExperience: "Do you have work experience? *",
      hasExperience: "Yes, I have work experience",
      noExperience: "No, this is my first job",
      childrenCount: "How many children do you have? *",
      language: "Which language do you speak best? *",
      summary: "Your selection summary:",
      ageLabel: "Age",
      experienceLabel: "Work Experience",
      childrenLabel: "Children",
      languageLabel: "Language",
      startMatching: "Start Job Matching",
      fillAllFields: "Please fill in all fields",
      children: {
        none: "No children",
        one: "1 child",
        two: "2 children",
        threePlus: "3 or more children"
      },
      languages: {
        german: "German",
        english: "English",
        arabic: "Arabic",
        turkish: "Turkish",
        other: "Other"
      }
    },
    
    matchingResults: {
      searching: "We're finding the best jobs for you...",
      analyzing: "Our AI system analyzes thousands of job postings",
      analyzingSkills: "Analyzing skills...",
      calculatingMatch: "Calculating match accuracy...",
      noDataFound: "No matching data found",
      noDataMessage: "Please fill out the Quick-Match form first.",
      backToQuickMatch: "Back to Quick-Match",
      successTitle: "Matching successful! 🎯",
      successMessage: "Based on your information, we found {count} suitable job opportunities for you",
      profileOverview: "Your profile overview:",
      age: "📅 Age",
      experience: "💼 Work Experience",
      experienceYes: "Yes",
      experienceNo: "No",
      matchingJobs: "Matching Jobs",
      highMatch: "High Match",
      urgentJobs: "Urgent Jobs",
      yourMatches: "Your matching job opportunities",
      sortedByMatch: "Sorted by match accuracy",
      match: "% Match",
      viewAllJobs: "View All Jobs",
      completeProfile: "Complete Profile",
      completeProfileTip: "Complete your profile for more precise matches",
      needHelp: "Need help with applications?",
      helpMessage: "Our consulting team provides free application writing and interview preparation support",
      requestConsultation: "Request Free Consultation"
    },
    
    quickMatchPage: {
      title: "Find Your Dream Job",
      subtitle: "We focus on finding suitable job opportunities for you. Regardless of your background, there's the right position for you.",
      preciseMatching: "Precise Matching",
      preciseMatchingDesc: "The most suitable jobs based on your requirements",
      diverseOptions: "Diverse Options",
      diverseOptionsDesc: "Various industries and job types to choose from",
      fullSupport: "Full Support",
      fullSupportDesc: "We support you from application to job start",
      processInfo: "Matching process takes only 1 minute • Completely free • Privacy guaranteed"
    },
    
    jobsPage: {
      title: "Suitable Job Opportunities for You",
      subtitle: "Based on your information, we found {count} suitable job opportunities for you",
      matchingResults: "🎯 Matching Results",
      filteredBy: "Filtered by your age, experience and language skills",
      showMore: "Show More Jobs +",
      needHelp: "Need Help?",
      helpMessage: "Our consulting team can offer you free job counseling and interview preparation",
      contactAdvisor: "Contact Job Advisor"
    },
    
    profilePage: {
      joined: "Joined {date}",
      editProfile: "Edit Profile",
      downloadCV: "Download CV",
      skills: "Skills",
      experience: "Experience",
      applications: "My Applications",
      missingFields: "Missing Fields"
    },
    
    updateProfile: {
      basicInfo: "Basic Information",
      education: "Education Background",
      workExperience: "Work Experience",
      workPreferences: "Work Preferences",
      familySituation: "Family Situation",
      languageSkills: "Language Skills",
      name: "Name *",
      namePlaceholder: "Please enter your name",
      gender: "Gender *",
      male: "Male",
      female: "Female",
      other: "Other",
      age: "Age",
      agePlaceholder: "Please enter your age",
      phone: "Phone Number",
      email: "Email Address",
      address: "Home Address",
      addressPlaceholder: "Please enter your home address",
      educationLevel: "Education Level *",
      certificates: "Professional Certificates (optional)",
      selectedCertificates: "Selected certificates:",
      hasWorkExperience: "Do you have work experience? *",
      hasExperience: "I have work experience",
      noExperience: "I have no work experience",
      workDescription: "Work experience description",
      workDescriptionPlaceholder: "Please briefly describe your work experience, including positions, job content, years of work, etc.",
      skills: "Skills (optional)",
      educationLevels: {
        primary: "Primary School",
        middle: "Middle School",
        high: "High School",
        vocational: "Vocational Training",
        bachelor: "Bachelor's Degree",
        graduate: "Graduate and Above"
      },
      certificateTypes: {
        driving: "Driver's License",
        forklift: "Forklift License",
        safety: "Safety Certificate",
        food: "Food Hygiene Certificate",
        care: "Care Certificate",
        cleaning: "Cleaning Certificate",
        other: "Other"
      },
      skillTypes: {
        physical: "Physical Work",
        careful: "Careful and Responsible",
        teamwork: "Teamwork",
        customer: "Customer Service",
        german: "German Communication",
        english: "English Communication",
        tools: "Tool Usage",
        quality: "Quality Control",
        safety: "Safety Awareness",
        time: "Time Management",
        learning: "Learning Ability",
        adaptation: "Adaptability"
      }
    }
  },
  
  zh: {
    hero: {
      title: "找到您的理想工作",
      subtitle: "无论您的背景如何，我们都能帮您找到合适的工作机会。从清洁工作到餐饮服务再到护理工作 - 开始您的新职业生涯。",
      startMatching: "🎯 开始工作匹配",
      viewAllJobs: "查看所有工作"
    },
    categories: {
      title: "热门工作领域",
      cleaning: {
        title: "清洁工作",
        description: "酒店、办公楼、购物中心的清洁工作，收入稳定，工作时间灵活"
      },
      restaurant: {
        title: "餐饮服务",
        description: "厨房助手、服务员、送货司机 - 多种餐饮岗位可选"
      },
      care: {
        title: "护理工作",
        description: "老年护理、儿童看护和医疗保健服务的机会，提供培训"
      },
      logistics: {
        title: "仓储物流",
        description: "包装工、分拣员、送货司机 - 物流行业的多样化机会"
      }
    },
    whyChoose: {
      title: "为什么选择我们？",
      free: {
        title: "完全免费",
        description: "注册、匹配和申请完全免费"
      },
      precise: {
        title: "精准匹配",
        description: "根据您的情况找到最合适的工作"
      },
      multilingual: {
        title: "多语言支持",
        description: "德语、英语、阿拉伯语和其他语言"
      }
    },
    cta: {
      title: "准备好找到您的理想工作了吗？",
      subtitle: "现在开始匹配过程，找到您的完美职位",
      button: "立即开始匹配"
    },
    header: {
      jobPortal: "求职门户",
      myJobs: "我的工作",
      jobMatching: "工作匹配",
      userName: "张三",
      jobTitle: "职位名称、技能或公司",
      location: "地点或远程",
      findJobs: "寻找工作"
    },
    
    quickMatch: {
      title: "快速工作匹配",
      subtitle: "与我们分享一些基本信息，我们将帮助您找到合适的工作机会",
      ageGroup: "您的年龄组 *",
      workExperience: "您有工作经验吗？ *",
      hasExperience: "是的，我有工作经验",
      noExperience: "没有，这是我的第一份工作",
      childrenCount: "您有多少个孩子？ *",
      language: "您最擅长哪种语言？ *",
      summary: "您的选择摘要：",
      ageLabel: "年龄",
      experienceLabel: "工作经验",
      childrenLabel: "孩子",
      languageLabel: "语言",
      startMatching: "开始工作匹配",
      fillAllFields: "请填写所有字段",
      children: {
        none: "没有孩子",
        one: "1个孩子",
        two: "2个孩子",
        threePlus: "3个或更多孩子"
      },
      languages: {
        german: "德语",
        english: "英语",
        arabic: "阿拉伯语",
        turkish: "土耳其语",
        other: "其他"
      }
    },
    
    matchingResults: {
      searching: "我们正在为您寻找最佳工作...",
      analyzing: "我们的AI系统正在分析数千个职位发布",
      analyzingSkills: "分析技能中...",
      calculatingMatch: "计算匹配准确度...",
      noDataFound: "未找到匹配数据",
      noDataMessage: "请先填写快速匹配表单。",
      backToQuickMatch: "返回快速匹配",
      successTitle: "匹配成功！🎯",
      successMessage: "根据您的信息，我们为您找到了{count}个合适的工作机会",
      profileOverview: "您的个人资料概览：",
      age: "📅 年龄",
      experience: "💼 工作经验",
      experienceYes: "是",
      experienceNo: "否",
      matchingJobs: "匹配工作",
      highMatch: "高匹配度",
      urgentJobs: "紧急招聘",
      yourMatches: "您的匹配工作机会",
      sortedByMatch: "按匹配准确度排序",
      match: "% 匹配",
      viewAllJobs: "查看所有工作",
      completeProfile: "完善个人资料",
      completeProfileTip: "完善您的个人资料以获得更精确的匹配",
      needHelp: "需要申请帮助吗？",
      helpMessage: "我们的咨询团队提供免费的申请书写和面试准备支持",
      requestConsultation: "申请免费咨询"
    },
    
    quickMatchPage: {
      title: "找到您的理想工作",
      subtitle: "我们专注于为您找到合适的工作机会。无论您的背景如何，都有适合您的职位。",
      preciseMatching: "精准匹配",
      preciseMatchingDesc: "根据您的要求提供最合适的工作",
      diverseOptions: "多样选择",
      diverseOptionsDesc: "各种行业和工作类型可供选择",
      fullSupport: "全面支持",
      fullSupportDesc: "从申请到入职，我们全程支持您",
      processInfo: "匹配过程仅需1分钟 • 完全免费 • 隐私保证"
    },
    
    jobsPage: {
      title: "适合您的工作机会",
      subtitle: "根据您的信息，我们为您找到了{count}个合适的工作机会",
      matchingResults: "🎯 匹配结果",
      filteredBy: "根据您的年龄、经验和语言技能筛选",
      showMore: "显示更多工作 +",
      needHelp: "需要帮助吗？",
      helpMessage: "我们的咨询团队可以为您提供免费的工作咨询和面试准备",
      contactAdvisor: "联系工作顾问"
    },
    
    profilePage: {
      joined: "加入于{date}",
      editProfile: "编辑个人资料",
      downloadCV: "下载简历",
      skills: "技能",
      experience: "经验",
      applications: "我的申请",
      missingFields: "缺失字段"
    },
    
    updateProfile: {
      basicInfo: "基本信息",
      education: "教育背景",
      workExperience: "工作经验",
      workPreferences: "工作偏好",
      familySituation: "家庭情况",
      languageSkills: "语言能力",
      name: "姓名 *",
      namePlaceholder: "请输入您的姓名",
      gender: "性别 *",
      male: "男",
      female: "女",
      other: "其他",
      age: "年龄",
      agePlaceholder: "请输入您的年龄",
      phone: "电话号码",
      email: "邮箱地址",
      address: "居住地址",
      addressPlaceholder: "请输入您的居住地址",
      educationLevel: "教育水平 *",
      certificates: "职业技能证书（可选）",
      selectedCertificates: "已选择的证书：",
      hasWorkExperience: "是否有工作经验？ *",
      hasExperience: "有工作经验",
      noExperience: "没有工作经验",
      workDescription: "工作经历描述",
      workDescriptionPlaceholder: "请简要描述您的工作经历，包括工作岗位、工作内容、工作年限等",
      skills: "技能特长（可选）",
      educationLevels: {
        primary: "小学",
        middle: "初中",
        high: "高中",
        vocational: "职业培训",
        bachelor: "大学本科",
        graduate: "研究生及以上"
      },
      certificateTypes: {
        driving: "驾驶执照",
        forklift: "叉车证",
        safety: "安全作业证",
        food: "食品处理证",
        care: "护理证书",
        cleaning: "清洁技能证",
        other: "其他"
      },
      skillTypes: {
        physical: "体力工作",
        careful: "细心负责",
        teamwork: "团队合作",
        customer: "客户服务",
        german: "德语交流",
        english: "英语交流",
        tools: "使用工具",
        quality: "质量检查",
        safety: "安全意识",
        time: "时间管理",
        learning: "学习能力",
        adaptation: "适应能力"
      }
    }
  }
}

export function getTranslations(locale: string): Translations {
  return translations[locale] || translations.de
}