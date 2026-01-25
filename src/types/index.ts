export interface Project {
  id: number
  title: string
  description: string
  image: string
  repo: string
  deploy?: string
  tags?: string[]
}

export interface StatusItem {
  label: string
  value: string
  icon: string
}

export interface ShowcaseEntry {
  id: string
  title: string
  description?: string
  techs: string[]
  href?: string
}
