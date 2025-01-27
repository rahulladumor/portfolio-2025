import { GB, IN, IT } from "country-flag-icons/react/3x2";
import type { Language } from "types/Sections";

const languagesList: Language[] = [
  {
    id: 1,
    language: "English",
    text: "I'm fluent in English, the global language of connection and innovation.",
    icon: GB,
    color: "from-sky-500 to-indigo-500",
    tooltip: "Native-level proficiency in spoken and written English.",
  },
  {
    id: 2,
    language: "Hindi",
    text: "में हिंदी बोलने और समझने में सक्षम हूँ।",
    translation: "I can speak and understand Hindi fluently.",
    icon: IN,
    color: "from-yellow-500 to-orange-500",
    tooltip: "Fluent in one of the most widely spoken languages in the world.",
  },
  {
    id: 3,
    language: "Gujarati",
    text: "ગુજરાતી મારી માતૃભાષા છે.",
    translation: "Gujarati is my mother tongue and holds a special place in my heart.",
    icon: IN,
    color: "from-green-400 to-teal-500",
    tooltip: "Proficient in my native language, connecting me to my roots.",
  },
  {
    id: 4,
    language: "Italian",
    text: "Bella ciao, bella ciao, bella ciao ciao ciao!",
    translation: "I picked this up from the iconic Italian protest song featured in Money Heist.",
    icon: IT,
    color: "from-red-500 to-green-500",
    tooltip: "Learned some Italian through the timeless protest song featured in great TV!",
  },
];

export default languagesList;
