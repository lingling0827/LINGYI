export type ProjectKind = 'product' | 'playground'

export type Project = {
  slug: string
  title: string
  year: string
  category: string
  summary: string
  description: string
  services: string[]
  cover: string
  accent: string
  image?: string
  cardImage?: string
  featured?: boolean
  type: ProjectKind
}

export type Experience = {
  period: string
  role: string
  company: string
  description: string
}

export type CaseStudyRow = {
  label: string
  description: string
  swatch?: string
  count?: string
}

export type CaseStudyGroup = {
  title: string
  intro?: string
  rows: CaseStudyRow[]
}

export type SanshengCaseStudy = {
  overview: { copy: string; images: string[] }
  painPoints: { copy: string; items: string[]; image: string }
  responsibilities: { intro: string; items: string[] }
  process: { items: string[]; image: string }
  layout: { intro: string; groups: CaseStudyGroup[]; image: string }
  colors: { intro: string; groups: CaseStudyGroup[]; image: string }
  spacing: { intro: string; groups: CaseStudyGroup[]; image: string }
  outcomes: { copy: string; items: string[]; image: string }
}
