export function useRoundDetail() {
  const roundDetail = useState('roundDetail', () => [])
  return {
    roundDetail
  }
}
