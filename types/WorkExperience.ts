export interface WorkExperience {
  id: number;
  logo: string;
  name: string;
  period: {
    start: string;
    end: string;
  };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
  technologies?: string[];
  achievements?: string[];
  url?: string;
}
