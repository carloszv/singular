export type Customer = {
    id: string
    name: string
    projects: Project[]
}
  
export type Project = {
    name: string
    location: string
    investment: string
}