import DropdownFilter from './DropdownFilter'

export default function Sort() {
  const sortByOptions = [
    { value: 'latest', label: 'ok' },
    { value: 'oldest', label: 'ok' },
  ]

  return <DropdownFilter queryKey="sortBy" options={sortByOptions} />
}
'오래된' },