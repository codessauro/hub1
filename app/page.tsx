import { InvestmentOpportunities } from "@/components/investments/opportunities";
import { MarketInsights } from "@/components/dashboard/market-insights";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";

export default function Home() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InvestmentOpportunities />
        </div>
        <div>
          <MarketInsights />
        </div>
      </div>
    </div>
  );
}