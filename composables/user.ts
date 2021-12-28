export function useUser() {
  const user = useState('user', () => {
    return{};
  })

  return {
   user,
  }
}
