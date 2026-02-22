import { Link, Outlet, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import logoImage from "../../assets/807de86398d23f237dad9ce342bf9fa992731f06.png";
import { AuthModal } from "./AuthModal";
import { useAuth } from "../contexts/AuthContext";

export function Layout() {
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  const [foundersOpen, setFoundersOpen] = useState(false);
  const [orgsOpen, setOrgsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const foundersRef = useRef<HTMLDivElement>(null);
  const orgsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const displayName =
    profile?.full_name?.trim() ||
    [profile?.first_name, profile?.last_name].filter(Boolean).join(" ") ||
    user?.email ||
    "Account";
  const displayEmail = user?.email || profile?.email || "";

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (foundersRef.current && !foundersRef.current.contains(event.target as Node)) {
        setFoundersOpen(false);
      }
      if (orgsRef.current && !orgsRef.current.contains(event.target as Node)) {
        setOrgsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const foundersItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/campaigns", label: "Campaigns" },
    { path: "/demo-hub", label: "Demo Hub" },
  ];

  const orgsItems = [
    { path: "/global-reach", label: "Global Reach" },
    { path: "/funding-hub", label: "Funding Hub" },
  ];

  const resourcesItems = [
    { path: "/mentors", label: "Mentor" },
    { path: "/opportunities", label: "Opportunities" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="HerLaunch" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                HerLaunch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Founders Dropdown */}
              <div
                className="relative"
                ref={foundersRef}
                onMouseEnter={() => setFoundersOpen(true)}
                onMouseLeave={() => setFoundersOpen(false)}
              >
                <button 
                  onClick={() => setFoundersOpen(!foundersOpen)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-medium"
                >
                  Founders
                  <ChevronDown className={`w-4 h-4 transition-transform ${foundersOpen ? 'rotate-180' : ''}`} />
                </button>
                {foundersOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {foundersItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setFoundersOpen(false)}
                        className="block px-4 py-2 hover:bg-pink-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Organizations Dropdown */}
              <div
                className="relative"
                ref={orgsRef}
                onMouseEnter={() => setOrgsOpen(true)}
                onMouseLeave={() => setOrgsOpen(false)}
              >
                <button 
                  onClick={() => setOrgsOpen(!orgsOpen)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-medium"
                >
                  Organizations
                  <ChevronDown className={`w-4 h-4 transition-transform ${orgsOpen ? 'rotate-180' : ''}`} />
                </button>
                {orgsOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {orgsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setOrgsOpen(false)}
                        className="block px-4 py-2 hover:bg-pink-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                ref={resourcesRef}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors font-medium"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 hover:bg-pink-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Add My Story */}
              <Link
                to="/add-my-story"
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  location.pathname === "/add-my-story"
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-pink-50"
                }`}
              >
                Add My Story
              </Link>
            </nav>

            {/* Auth: Sign In or User menu */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 transition-colors font-medium"
                >
                  <span className="hidden sm:inline text-gray-700">{displayName}</span>
                  <User className="w-5 h-5 text-gray-600" />
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="text-sm font-semibold text-gray-800 truncate">
                        {displayName}
                      </div>
                      <div className="text-xs text-gray-600 truncate">{displayEmail}</div>
                    </div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOut();
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-pink-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200">
        <div className="flex flex-col py-2">
          {/* Founders Section */}
          <div className="px-4 py-2">
            <div className="font-semibold text-sm text-gray-600 mb-2">Founders</div>
            <div className="flex flex-col gap-1">
              {foundersItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm rounded hover:bg-pink-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Organizations Section */}
          <div className="px-4 py-2">
            <div className="font-semibold text-sm text-gray-600 mb-2">Organizations</div>
            <div className="flex flex-col gap-1">
              {orgsItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm rounded hover:bg-pink-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="px-4 py-2">
            <div className="font-semibold text-sm text-gray-600 mb-2">Resources</div>
            <div className="flex flex-col gap-1">
              {resourcesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm rounded hover:bg-pink-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Add My Story */}
          <div className="px-4 py-2">
            <Link
              to="/add-my-story"
              className="block px-3 py-2 text-sm rounded hover:bg-pink-50 font-medium"
            >
              Add My Story
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 HerLaunch. Empowering women founders globally.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
