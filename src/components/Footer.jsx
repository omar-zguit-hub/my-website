export default function Footer() {
  return (
    <footer className="grid h-7 shrink-0 grid-cols-3 items-center bg-blue-900 px-3 text-xs text-white fixed bottom-0 left-0 right-0 z-50">

      {/* Left */}
      <div className="flex items-center gap-4 justify-self-start">
        <span>✓ main</span>

        <span className="text-green-700 justify-center animate-pulse">●</span>
        <span>Available</span>
      </div>

      {/* Center */}
      <div className="justify-self-center">
        <span>Omar Zguit</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 justify-self-end">
        <span>Morocco</span>
        <span>© 2026</span>
      </div>

    </footer>
  );
}