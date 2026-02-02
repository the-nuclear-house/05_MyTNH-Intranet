import { useState, useEffect } from 'react'

export default function MyTNHPortal() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  const systemStatuses = [
    { name: 'Network', status: 'operational' },
    { name: 'M365', status: 'operational' },
    { name: 'Database', status: 'operational' },
    { name: 'Backups', status: 'operational' },
  ]

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long',
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const primaryApps = [
    { 
      name: 'Control Room', 
      description: 'CRM & Operations Hub',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      color: '#00b0f0',
      href: 'https://controlroom.thenuclearhouse.co.uk'
    },
    { 
      name: 'SharePoint', 
      description: 'Documents & Files',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="9" cy="9" r="6" />
          <circle cx="15" cy="15" r="6" />
        </svg>
      ),
      color: '#00b0f0',
      href: '#'
    },
    { 
      name: 'Quality Hub', 
      description: 'QMS & Compliance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: '#92d050',
      href: '#'
    },
    { 
      name: 'Teams', 
      description: 'Chat & Meetings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: '#00b0f0',
      href: 'https://teams.microsoft.com'
    },
    { 
      name: 'HR Portal', 
      description: 'People & Policies',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
      color: '#f4c255',
      href: '#'
    },
    { 
      name: 'Finance', 
      description: 'Expenses & Reports',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: '#92d050',
      href: '#'
    },
  ]

  const quickLinks = {
    'Documents': [
      { name: 'Company Policies', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Brand Assets', href: '#' },
      { name: 'Meeting Notes', href: '#' },
    ],
    'Quality & Compliance': [
      { name: 'QMS Documents', href: '#' },
      { name: 'Procedures', href: '#' },
      { name: 'Audit Reports', href: '#' },
      { name: 'Training Records', href: '#' },
    ],
    'Operations': [
      { name: 'Project Tracker', href: '#' },
      { name: 'Resource Planning', href: '#' },
      { name: 'IT Support', href: '#' },
      { name: 'Facilities', href: '#' },
    ],
  }

  const announcements = [
    { 
      title: 'Welcome to MyTNH', 
      content: 'Your new central hub for all company resources and applications.',
      date: 'Today',
      priority: 'info'
    },
    { 
      title: 'System Maintenance', 
      content: 'Scheduled maintenance window: Saturday 02:00-04:00 GMT',
      date: 'Upcoming',
      priority: 'warning'
    },
  ]

  return (
    <div className="min-h-screen bg-[#1f2937] text-[#f7f8fa]">
      {/* Scanline overlay effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage: `
            linear-gradient(rgba(0,176,240,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,176,240,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Top Status Bar */}
      <header className="relative z-10 border-b border-[#364451]/50 bg-[#1f2937]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo-white.svg" alt="The Nuclear House" className="h-10 w-10" />
              <div>
                <h1 className="text-lg font-semibold tracking-wide">MyTNH</h1>
                <p className="text-xs text-[#9babc2] tracking-widest uppercase">The Nuclear House</p>
              </div>
            </div>

            {/* System Status Indicators */}
            <div className="hidden md:flex items-center gap-6">
              {systemStatuses.map((system, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    system.status === 'operational' ? 'bg-[#92d050] shadow-[0_0_8px_#92d050]' :
                    system.status === 'degraded' ? 'bg-[#f4c255] shadow-[0_0_8px_#f4c255]' :
                    'bg-[#cc5500] shadow-[0_0_8px_#cc5500]'
                  }`} />
                  <span className="text-xs text-[#9babc2] uppercase tracking-wider">{system.name}</span>
                </div>
              ))}
            </div>

            {/* Time Display */}
            <div className="text-right">
              <div className="text-2xl font-mono tracking-wider text-[#00b0f0]">
                {formatTime(currentTime)}
              </div>
              <div className="text-xs text-[#9babc2] tracking-wide">
                {formatDate(currentTime)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        {/* Hero Image - Add your image to public/hero-image.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-image.jpg')`,
            backgroundColor: '#0f1419'
          }}
        />
        {/* Fallback decorative elements if no image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-24 rounded-lg border border-[#00b0f0]/20 opacity-30" style={{ boxShadow: 'inset 0 0 20px rgba(0,176,240,0.1)' }} />
          <div className="absolute top-16 left-20 w-32 h-16 rounded border border-[#92d050]/20 opacity-20" />
          <div className="absolute top-8 right-20 w-48 h-28 rounded-lg border border-[#4a5d6b]/30 opacity-20" />
          <div className="absolute bottom-20 right-32 w-3 h-3 rounded-full bg-[#92d050] shadow-[0_0_10px_#92d050]" />
          <div className="absolute bottom-24 right-40 w-2 h-2 rounded-full bg-[#f4c255] shadow-[0_0_8px_#f4c255]" />
          <div className="absolute bottom-28 right-36 w-2 h-2 rounded-full bg-[#00b0f0] shadow-[0_0_8px_#00b0f0]" />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] via-[#1f2937]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2937]/80 via-transparent to-[#1f2937]/80" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-2">
                Welcome to <span className="font-semibold text-[#00b0f0]">Mission Control</span>
              </h2>
              <p className="text-[#9babc2] text-lg">Your central hub for all TNH systems and resources</p>
            </div>
            
            {/* Quick Stats */}
            <div className="hidden lg:flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-mono text-[#92d050]">100%</div>
                <div className="text-xs text-[#9babc2] uppercase tracking-wider">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono text-[#00b0f0]">6</div>
                <div className="text-xs text-[#9babc2] uppercase tracking-wider">Active Systems</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-24 h-24 border border-[#00b0f0]/20 rounded-lg opacity-50" />
        <div className="absolute top-8 left-8 w-24 h-24 border border-[#00b0f0]/10 rounded-lg opacity-50" />
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Primary Applications Grid */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#00b0f0] rounded-full" />
            <h3 className="text-xl font-medium tracking-wide uppercase text-[#d0d9e0]">Primary Systems</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {primaryApps.map((app, idx) => (
              <a 
                key={idx}
                href={app.href}
                target={app.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group relative bg-[#364451]/40 hover:bg-[#364451]/70 border border-[#4a5d6b]/30 hover:border-[#4a5d6b] rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${app.color}15, transparent 70%)`
                  }}
                />
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${app.color}15`,
                      color: app.color,
                      boxShadow: `0 0 20px ${app.color}10`
                    }}
                  >
                    {app.icon}
                  </div>
                  <h4 className="font-medium text-[#f7f8fa] mb-1 group-hover:text-white transition-colors">
                    {app.name}
                  </h4>
                  <p className="text-xs text-[#9babc2] group-hover:text-[#d0d9e0] transition-colors">
                    {app.description}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#92d050] shadow-[0_0_6px_#92d050]" />
              </a>
            ))}
          </div>
        </section>

        {/* Two Column Layout: Quick Links + Announcements */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Quick Links Sections */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {Object.entries(quickLinks).map(([category, links], idx) => (
              <div key={idx} className="bg-[#364451]/30 border border-[#4a5d6b]/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${
                    idx === 0 ? 'bg-[#00b0f0]' : idx === 1 ? 'bg-[#92d050]' : 'bg-[#f4c255]'
                  }`} />
                  <h4 className="text-sm font-medium uppercase tracking-wider text-[#d0d9e0]">
                    {category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.href}
                        className="flex items-center gap-2 text-[#9babc2] hover:text-[#00b0f0] transition-colors py-1 group"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span className="text-sm">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Announcements Panel */}
          <div className="bg-[#364451]/30 border border-[#4a5d6b]/20 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#cc5500] animate-pulse" />
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#d0d9e0]">
                Announcements
              </h4>
            </div>
            <div className="space-y-4">
              {announcements.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-lg border-l-2 ${
                    item.priority === 'warning' 
                      ? 'bg-[#f4c255]/10 border-[#f4c255]' 
                      : 'bg-[#00b0f0]/10 border-[#00b0f0]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-sm font-medium text-[#f7f8fa]">{item.title}</h5>
                    <span className="text-xs text-[#9babc2]">{item.date}</span>
                  </div>
                  <p className="text-xs text-[#9babc2]">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#364451]/30 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-[#9babc2]">
              <span>© 2025 The Nuclear House</span>
              <a href="#" className="hover:text-[#00b0f0] transition-colors">IT Support</a>
              <a href="#" className="hover:text-[#00b0f0] transition-colors">Help & FAQ</a>
              <a href="#" className="hover:text-[#00b0f0] transition-colors">Feedback</a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#9babc2]">
              <div className="w-2 h-2 rounded-full bg-[#92d050] shadow-[0_0_6px_#92d050]" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
