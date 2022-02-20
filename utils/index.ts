export function shortenAddress(
  address: string,
  chars = 4,
  length: number
): string {
  return `${address.substring(0, 5)}...${address.substring(length - chars)}`;
}
