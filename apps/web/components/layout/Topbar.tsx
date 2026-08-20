export default function Topbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-[#1E3A52] bg-[#07111F]/95 px-6 py-5 backdrop-blur md:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#8FAFC4]">
              Project VORIX
            </p>
  
            <h2 className="text-2xl font-semibold text-white">
              Market Dashboard
            </h2>
          </div>
  
          <div className="rounded-full border border-[#5ED6FF]/30 bg-[#5ED6FF]/10 px-4 py-2 text-sm text-[#5ED6FF]">
            System Online
          </div>
        </div>
      </header>
    );
  }