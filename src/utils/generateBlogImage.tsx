export const generateBlogSVG = (keyword: string, category: string): string => {
	const categoryColors: Record<string, { primary: string; secondary: string; accent: string }> = {
		react: { primary: '#61DAFB', secondary: '#20232A', accent: '#149ECA' },
		nextjs: { primary: '#000000', secondary: '#FFFFFF', accent: '#0070F3' },
		nestjs: { primary: '#E0234E', secondary: '#200F21', accent: '#ED1543' },
		graphql: { primary: '#E10098', secondary: '#1C1C1C', accent: '#F6009B' },
		aws: { primary: '#FF9900', secondary: '#232F3E', accent: '#FF9900' },
		'ai-tools': { primary: '#10A37F', secondary: '#1A1A1A', accent: '#19C37D' },
	};

	const colors = categoryColors[category] || categoryColors.react;

	return `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.secondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.primary};stop-opacity:0.2" />
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#grad1)"/>
  
  <circle cx="150" cy="100" r="80" fill="${colors.primary}" opacity="0.1"/>
  <circle cx="1050" cy="530" r="100" fill="${colors.accent}" opacity="0.1"/>
  
  <rect x="50" y="50" width="8" height="200" fill="url(#grad2)" rx="4"/>
  <rect x="100" y="150" width="150" height="8" fill="url(#grad2)" rx="4"/>
  
  <polygon points="1000,100 1100,150 1000,200" fill="${colors.primary}" opacity="0.2"/>
  <polygon points="200,500 300,500 250,580" fill="${colors.accent}" opacity="0.2"/>
  
  <path d="M 800 450 Q 850 400 900 450 T 1000 450" stroke="${colors.primary}" stroke-width="3" fill="none" opacity="0.3"/>
  
  <circle cx="950" cy="120" r="15" fill="${colors.primary}" opacity="0.4"/>
  <circle cx="150" cy="550" r="20" fill="${colors.accent}" opacity="0.4"/>
  <circle cx="500" cy="100" r="10" fill="${colors.primary}" opacity="0.5"/>
  
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#FFFFFF" text-anchor="middle" opacity="0.95">
    ${keyword.toUpperCase()}
  </text>
  
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="28" fill="${colors.primary}" text-anchor="middle">
    Complete Guide & Best Practices
  </text>
  
  <rect x="400" y="400" width="400" height="6" fill="${colors.primary}" rx="3" opacity="0.7"/>
  
  <text x="600" y="500" font-family="Arial, sans-serif" font-size="24" fill="#CCCCCC" text-anchor="middle">
    Muhammad Naeem - imnaeem.dev
  </text>
</svg>
	`.trim();
};

