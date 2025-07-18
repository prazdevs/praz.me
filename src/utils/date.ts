export function formatDate(date: Date) {
  return date.toLocaleDateString("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
}
