export default function Sidebar() {
    return (
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 self-start border-r border-[#1E3A52] bg-[#07111F] p-6 md:block">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            VORIX
          </h1>
  
          <p className="mt-1 text-xs text-[#8FAFC4]">
            AI Trading Intelligence
          </p>
        </div>
  
        <nav className="space-y-2">
          <NavItem label="Dashboard" active />
          <NavItem label="Market Intelligence" />
          <NavItem label="Portfolio" />
          <NavItem label="Risk Analytics" />
          <NavItem label="Strategy Lab" />
          <NavItem label="Backtesting" />
        </nav>
  
        <div className="mt-10 border-t border-[#1E3A52] pt-6">
          <NavItem label="Settings" />
        </div>
      </aside>
    );
  }
  
  function NavItem({
    label,
    active = false,
  }: {
    label: string;
    active?: boolean;
  }) {
    return (
      <div
        className={`rounded-lg px-4 py-3 text-sm transition ${
          active
            ? "bg-[#123A5A] text-white"
            : "text-[#8FAFC4] hover:bg-[#0D2438] hover:text-white"
        }`}
      >
        {label}
      </div>
    );
  }