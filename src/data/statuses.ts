export type StatusItem = {
  label: string
  value: string
  icon: string
}

export const statuses: StatusItem[] = [
  { label: 'Availability', value: 'Open to new opportunities', icon: 'availability' },
  { label: 'Location', value: 'Maxwell, TX', icon: 'location' },
  { label: 'Work Preference', value: 'Open to Remote', icon: 'work' },
  { label: 'Security Clearance', value: 'Eligible', icon: 'shield' },
  { label: 'Relocation', value: 'Not open to relocation', icon: 'relocation' },
  { label: 'Education', value: "Pursuing Master's in CS", icon: 'education' },
]

export default statuses
