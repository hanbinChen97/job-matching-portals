
# Product Requirements Document (PRD)

## Projektname: KI-gestütztes Job-Matching-Portal

### 1. Einführung

Das KI-gestützte Job-Matching-Portal zielt darauf ab, Arbeitssuchende – insbesondere Migranten – mit passenden Stellenangeboten zu verbinden und Unternehmen bei der Deckung ihres Fachkräftebedarfs zu unterstützen.

### 2. Zielgruppen

- Migranten
- Geringqualifizierte Arbeiter
- Langzeitarbeitslose

### 3. Hauptfunktionen

#### 3.1 Web-Crawler
- Suche nach Stellenangeboten auf Jobportalen und Unternehmenswebsites.
  
#### 3.2 LLM-Modul
- Semantische Klassifikation und Analyse von Jobdaten.

#### 3.3 Matching Engine
- Verknüpfung von Nutzerprofilen mit passenden Jobs.

#### 3.4 Datenbank
- Speicherung strukturierter Job- und Nutzerinformationen.

#### 3.5 Frontend
- Interaktive Benutzeroberfläche für Web und Mobile mit mehrsprachiger Unterstützung.

### 4. Technische Architektur

#### Komponenten:
1. **Job-Crawler-Agenten**
   - Technologie: Scrapy, BeautifulSoup
   
2. **Zentrale Datenbank**
   - Technologie: PostgreSQL
   
3. **LLM-Modul**
   - Technologie: OpenAI GPT, Hugging Face Transformers
   
4. **Matching Engine**

5. **Mehrsprachige Web-und Mobile-App**
   - Frameworks: Django/Flask (Backend), React Native (Frontend)
   
6. **Schnittstellen zu Partnern**
   - RESTful APIs für Kommunikation zwischen Frontend und Backend
  
### 5. Sicherheitsanforderungen

- SSL/TLS-Verschlüsselung für alle Datenübertragungen.
- DSGVO-konforme Speicherung und Verarbeitung personenbezogener Daten.
- Rollenbasierte Zugriffskontrolle.
  
### 6. Skalierbarkeit

Das System unterstützt horizontale Skalierung durch Containerisierung (Docker) und Orchestrierung (Kubernetes).

### 7. Geplante Erweiterungen

1. Erweiterung auf weitere Regionen und Branchen.
2. Integration von Weiterbildungs- und Sprachkursangeboten.
3. Echtzeit-Benachrichtigungen über neue passende Jobs.

### 8. API-Spezifikationen

**Nutzerregistrierung**

```
Methode: POST
Pfad: /api/register
Parameter:
    - username: string
    - email: string
    - password: string
```

**Profilerstellung**

```
Methode: POST
Pfad: /api/profile
Parameter:
    - user_id: integer
    - language_skills: list of strings
    - mobility: boolean
    - availability: string
```

**Jobangebotserfassung**

```
Methode: POST 
Pfad: /api/job 
Parameter:
    - company_id: integer 
    - title: string 
    - description: string 
    - location: string 
    - salary: string 
```

**Matching-Anfrage**

```
Methode: POST 
Pfad:/api/match 
Parameter:
    - user_id : integer 
```

**Bewerbungseinreichung**

```
Methode : POST 
Pfad:/api/apply Parameter :
     user_id : integer job_id : integer  
``` 

**Authentifizierung**

```
Method : POST Pfad:/api/login Parameter :
     email :string password:string  
``` 

### 9.Datenbankstruktur 

Tabelle : users
 
| Feldname | Typ | Beschreibung |
| --- | --- | --- |
| user_id | INTEGER PK | Eindeutige Nutzer-ID |
| name | TEXT | Name des Nutzers |
| email | TEXT | E-Mail-Adresse |

Tabelle : language_profiles 
 
| Feldname | Typ | Beschreibung |
| --- | --- | --- |
| language_profile_id INTEGER PK Eindeutige ID language TEXT Sprache(z.B.Deutsch , Arabisch ) proficiency_level TEXT Niveau(z.B.A2 , B1 , C1 ) |

Tabelle : companies
 
| Feldname Typ Beschreibung company_id INTEGER PK Eindeutige Unternehmens-ID name TEXT Name des Unternehmens industry TEXT Branche location TEXT Sitz des Unternehmens |

Tabelle : job_offers
 
| Feldname Typ Beschreibung job_id INTEGER PK Eindeutige Job-ID company_id INTEGER FK Verweis auf Unternehmen title TEXT Jobtitel description TEXT Beschreibung location TEXT Einsatzort salary TEXT Gehalt oder Stundenlohn requirements TEXT Anforderungen |

Tabelle : applications
 
| Feldname Typ Beschreibung application_id INTEGER PK Eindeutige Bewerbungs-ID user_id INTEGER FK Bewerber job_id INTEGER FK Beworbener Job application_date DATE Datum der Bewerbung status TEXT z.B.eingereicht , angenommen |

Tabelle matching_results
 
Feldname Typ Beschreibung match _ id INTEGER PK Eindeutige Matching-ID user _ id INTEGER FK Nutzer job _ id INTEGER FK Passendes Jobangebot match_score FLOAT Matching-Wert(z.B .0 .0–1 .0 ) matched_on DATE Datum des Matchings


---

Dieses PRD gibt einen Überblick über die geplanten Funktionen, technischen Anforderungen sowie die Architektur des Systems zur Entwicklung eines KI-gesteuerten Job-Matching-Portals in Deutschland.Wenn Sie weitere Details benötigen oder Anpassungen vornehmen möchten , lassen Sie es mich bitte wissen !