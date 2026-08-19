import { PortfolioView } from "@/features/portfolio";

// The masthead prints an edition date; regenerate once a day so it stays true.
export const revalidate = 86400;

export default function Home() {
  return <PortfolioView />;
}
