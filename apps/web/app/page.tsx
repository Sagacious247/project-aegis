import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

const markets = [
  {
    name: "BTC",
    price: "$104,284.20",
    change: "+2.84%",
    positive: true,
  },
  {
    name: "ETH",
    price: "$3,842.16",
    change: "+1.67%",
    positive: true,
  },
  {
    name: "SOL",
    price: "$186.42",
    change: "-0.84%",
    positive: false,
  },
  {
    name: "BNB",
    price: "$692.18",
    change: "+0.92%",
    positive: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F8FAFC]">
      <MobileNav />

      <div className="flex min-h-screen">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Topbar />

          <main className="space-y-10 p-6 md:p-10">
            {/* Hero */}
            <section>
              <div className="overflow-hidden rounded-2xl border border-[#1E3A52] bg-[#0D1B2A]">
                <div className="relative p-6 md:p-8">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#38BDF8]/5 blur-3xl" />

                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />

                      <span className="text-xs font-medium uppercase tracking-widest text-[#38BDF8]">
                        VORIX Intelligence Engine
                      </span>
                    </div>

                    <h1 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
                      Understand the market before you act.
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#94A3B8]">
                      VORIX combines market structure, momentum, volatility
                      and sentiment to help traders make more informed
                      decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Market Overview */}
            <section>
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    Market Overview
                  </h2>

                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Current market conditions across major assets.
                  </p>
                </div>

                <span className="text-xs text-[#64748B]">
                  Demo market data
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {markets.map((market) => (
                  <MarketCard
                    key={market.name}
                    name={market.name}
                    price={market.price}
                    change={market.change}
                    positive={market.positive}
                  />
                ))}
              </div>
            </section>

            {/* Market Intelligence */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Market Intelligence
                </h2>

                <p className="mt-1 text-sm text-[#94A3B8]">
                  VORIX interpretation of the current market environment.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <IntelligenceCard
                  title="Market Regime"
                  value="Bullish"
                  description="Market structure currently favors upward momentum."
                  accent="blue"
                />

                <IntelligenceCard
                  title="Momentum"
                  value="Strong"
                  description="Short-term momentum remains positive across major assets."
                  accent="blue"
                />

                <IntelligenceCard
                  title="Volatility"
                  value="Moderate"
                  description="Price movement remains active without extreme instability."
                  accent="amber"
                />
              </div>
            </section>

            {/* Main intelligence area */}
            <section className="grid gap-6 xl:grid-cols-3">
              {/* AI Analysis */}
              <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-6 xl:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-[#38BDF8]">
                      AI Analysis
                    </span>

                    <h2 className="mt-2 text-xl font-semibold">
                      Market Outlook
                    </h2>
                  </div>

                  <div className="rounded-lg border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1.5 text-xs font-medium text-[#38BDF8]">
                    Bullish Bias
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <p className="text-sm leading-7 text-[#CBD5E1]">
                    Current market conditions indicate a positive
                    short-term bias. Bitcoin remains above its recent
                    support structure while overall momentum across
                    major assets remains constructive.
                  </p>

                  <p className="text-sm leading-7 text-[#94A3B8]">
                    However, increasing participation should be monitored
                    alongside volatility. A sustained move above resistance
                    could strengthen the bullish structure, while a sharp
                    increase in volatility may signal a potential regime
                    change.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <Metric label="Trend" value="Positive" />
                  <Metric label="Momentum" value="Strong" />
                  <Metric label="Risk" value="Moderate" />
                </div>
              </div>

              {/* Sentiment */}
              <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-[#38BDF8]">
                  Market Sentiment
                </span>

                <h2 className="mt-2 text-xl font-semibold">
                  Investor Sentiment
                </h2>

                <div className="mt-8 flex flex-col items-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-[#38BDF8]/20">
                    <div className="text-center">
                      <p className="text-3xl font-semibold">
                        68
                      </p>

                      <p className="mt-1 text-xs text-[#94A3B8]">
                        Positive
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-center text-sm leading-6 text-[#94A3B8]">
                    Market sentiment is positive, but not yet at
                    extreme levels.
                  </p>
                </div>
              </div>
            </section>

            {/* Market Signals */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Market Signals
                </h2>

                <p className="mt-1 text-sm text-[#94A3B8]">
                  Key technical observations identified by VORIX.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#1E3A52] bg-[#0D1B2A]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left">
                    <thead className="border-b border-[#1E3A52] bg-[#07111F]">
                      <tr>
                        <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                          Asset
                        </th>

                        <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                          Trend
                        </th>

                        <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                          Momentum
                        </th>

                        <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                          Signal
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <SignalRow
                        asset="BTC"
                        trend="Bullish"
                        momentum="Strong"
                        signal="Positive"
                      />

                      <SignalRow
                        asset="ETH"
                        trend="Bullish"
                        momentum="Moderate"
                        signal="Positive"
                      />

                      <SignalRow
                        asset="SOL"
                        trend="Neutral"
                        momentum="Weak"
                        signal="Watch"
                      />

                      <SignalRow
                        asset="BNB"
                        trend="Bullish"
                        momentum="Moderate"
                        signal="Positive"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Strategy Lab */}
            <section>
              <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-[#38BDF8]/10 px-3 py-1 text-xs font-medium text-[#38BDF8]">
                      Strategy Research
                    </span>

                    <h2 className="mt-3 text-lg font-semibold">
                      Strategy Lab
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94A3B8]">
                      Build, test and evaluate trading strategies before
                      considering deployment.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-[#07111F] transition hover:bg-[#0EA5E9]"
                  >
                    Open Strategy Lab
                  </button>
                </div>
              </div>
            </section>

            {/* System Status */}
            <section>
              <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-6">
                <div className="mb-5">
                  <h2 className="text-lg font-semibold">
                    VORIX System Status
                  </h2>

                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Current platform infrastructure status.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <StatusItem
                    label="Web Application"
                    status="Operational"
                  />

                  <StatusItem
                    label="API"
                    status="Operational"
                  />

                  <StatusItem
                    label="Database"
                    status="Preparing"
                  />

                  <StatusItem
                    label="AI Engine"
                    status="Preparing"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}

function MarketCard({
  name,
  price,
  change,
  positive,
}: {
  name: string;
  price: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-5 transition hover:border-[#38BDF8]/30">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#94A3B8]">
          {name}
        </span>

        <span className="rounded-md bg-[#38BDF8]/10 px-2 py-1 text-xs text-[#38BDF8]">
          Crypto
        </span>
      </div>

      <div className="mt-6">
        <p className="text-2xl font-semibold tracking-tight">
          {price}
        </p>

        <p
          className={`mt-2 text-xs font-medium ${
            positive ? "text-[#38BDF8]" : "text-rose-400"
          }`}
        >
          {change} · 24h
        </p>
      </div>
    </div>
  );
}

function IntelligenceCard({
  title,
  value,
  description,
  accent,
}: {
  title: string;
  value: string;
  description: string;
  accent: "blue" | "amber";
}) {
  const valueClass =
    accent === "blue"
      ? "text-[#38BDF8]"
      : "text-amber-400";

  return (
    <div className="rounded-2xl border border-[#1E3A52] bg-[#0D1B2A] p-6 transition hover:border-[#38BDF8]/30">
      <p className="text-sm text-[#94A3B8]">
        {title}
      </p>

      <p className={`mt-4 text-2xl font-semibold ${valueClass}`}>
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
        {description}
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#1E3A52] bg-[#07111F] p-4">
      <p className="text-xs text-[#64748B]">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-[#38BDF8]">
        {value}
      </p>
    </div>
  );
}

function SignalRow({
  asset,
  trend,
  momentum,
  signal,
}: {
  asset: string;
  trend: string;
  momentum: string;
  signal: string;
}) {
  return (
    <tr className="border-b border-[#1E3A52] last:border-0">
      <td className="px-6 py-4 text-sm font-medium">
        {asset}
      </td>

      <td className="px-6 py-4 text-sm text-[#94A3B8]">
        {trend}
      </td>

      <td className="px-6 py-4 text-sm text-[#94A3B8]">
        {momentum}
      </td>

      <td className="px-6 py-4">
        <span
          className={
            signal === "Positive"
              ? "rounded-md bg-[#38BDF8]/10 px-2.5 py-1 text-xs font-medium text-[#38BDF8]"
              : "rounded-md bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-400"
          }
        >
          {signal}
        </span>
      </td>
    </tr>
  );
}

function StatusItem({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  const operational = status === "Operational";

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#1E3A52] bg-[#07111F] p-4">
      <span className="text-sm text-[#94A3B8]">
        {label}
      </span>

      <span
        className={
          operational
            ? "flex items-center gap-2 text-xs text-[#38BDF8]"
            : "flex items-center gap-2 text-xs text-amber-400"
        }
      >
        <span
          className={`h-2 w-2 rounded-full ${
            operational ? "bg-[#38BDF8]" : "bg-amber-400"
          }`}
        />

        {status}
      </span>
    </div>
  );
}