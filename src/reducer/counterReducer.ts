export default function counterReducer(
  count: number,
  action: { type: string }
) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return 0;
    default:
      return count;
  }
}
