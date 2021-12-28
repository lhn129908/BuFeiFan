export function useRoundContent() {
  const roundContent = useState('roundContent', () => [])
  const roundContentTotal = useState('roundContentTotal', () => [])
  return {
    roundContent,
    roundContentTotal
  }
}
