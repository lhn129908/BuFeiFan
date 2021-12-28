export function useTotal() {
    const total = useState("total", () => '');
    return {
      total
    };
  }