import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown, 
  faCode, 
  faTerminal, 
  faLaptopCode, 
  faToolbox,
  faDatabase, 
  faCloud, 
  faPaintBrush, 
  faGlobe, 
  faCube, 
  faServer, 
  faDesktop,
  faBrain, // New icon for AI tools
  faLock // New icon for Auth services
} from '@fortawesome/free-solid-svg-icons'

const Skills: React.FC = () => {
  // Track which categories are open
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})
  
  // Get category icon based on ID
  const getCategoryIcon = (id: string) => {
    const iconMap: Record<string, any> = {
      "version-control": faCode,
      "programming-languages": faTerminal,
      "development-tools": faToolbox,
      "frontend-technologies": faLaptopCode,
      "backend-databases": faDatabase,
      "cloud-services": faCloud,
      "design-tools": faPaintBrush,
      "cms": faGlobe,
      "3d-graphics": faCube,
      "devops": faServer,
      "operating-systems": faDesktop,
      "ai-tools": faBrain, // New icon for AI tools
      "auth-services": faLock // New icon for Auth services
    }
    
    return iconMap[id] || faCode
  }

  // Group skills by category
  const skillCategories = [
    {
      id: "version-control",
      title: "Version Control",
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com/' },
        { name: 'GitLab Flow', icon: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png', url: 'https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/' }
      ]
    },
    {
      id: "programming-languages",
      title: "Programming Languages",
      items: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', url: 'https://www.oracle.com/java/' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' }
      ]
    },
    {
      id: "development-tools",
      title: "Development Tools",
      items: [
        { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
        { name: 'Cursor', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png', url: 'https://cursor.sh/' },
        { name: 'GitHub.dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.dev/' },
        { name: 'Stackblitz', icon: 'https://images.seeklogo.com/logo-png/44/2/stackblitz-icon-logo-png_seeklogo-444239.png', url: 'https://stackblitz.com/' },
        { name: 'Firebase Studio', icon: 'https://firebase.google.com/images/icons/firebase_studio.png', url: 'https://firebase.studio' }
      ]
    },
    {
      id: "frontend-technologies",
      title: "Frontend Technologies",
      items: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactjs.org/' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', url: 'https://vite.dev/' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' }
      ]
    },
    {
      id: "ai-tools",
      title: "AI Tools",
      items: [
        { name: 'GitHub Copilot', icon: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png', url: 'https://github.com/features/copilot' },
        { name: 'Claude', icon: 'https://wpforms.com/wp-content/uploads/2024/08/claude-logo.png', url: 'https://claude.ai/' },
        { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png', url: 'https://chat.openai.com/' },
        { name: 'Lovable', icon: 'https://sacra.cdn.prismic.io/sacra/Z4V6ApbqstJ99Zom_lovablelogo.svg', url: 'https://lovable.ai/' },
        { name: 'Gemini', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5xNOdkOwTDL9cxAWHDDyjK-6HcM-qHCxhw&s', url: 'https://gemini.google.com/' },
        { name: 'Bolt', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Z-wR5SFaAvsG0wGL49HHx85246L3vbAltg&s', url: 'https://bolt.new/' },
        { name: 'v0', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXrz5XjZT70OoUXRxh_zHsVcIddFt4F9Avg&s', url: 'https://v0.dev/' }
      ]
    },
    {
      id: "backend-databases",
      title: "Backend & Databases",
      items: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
        { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', url: 'https://www.oracle.com/' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', url: 'https://supabase.com/' },
      ]
    },
    {
      id: "auth-services",
      title: "Authentication & Identity",
      items: [
        { name: 'Clerk', icon: 'https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logo.svg&w=48&q=75', url: 'https://clerk.com/' },
        { name: 'WorkOS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpgKYZNYgGPoMdP-5PUVq0ju7Of-OAqvlwA&s', url: 'https://workos.com/' },
        { name: 'better-auth', icon: 'https://better-auth.com/logo.png', url: 'https://better-auth.com/' },
        { name: 'stack-auth', icon: 'https://avatars.githubusercontent.com/u/161534807?s=200&v=4', url: 'https://stack-auth.com/' },
        { name: 'Logto', icon: 'https://avatars.githubusercontent.com/u/84981374?v=4', url: 'https://logto.io/' }
      ]
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      items: [
        { name: 'Firebase', icon: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png', url: 'https://firebase.google.com/' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', url: 'https://cloud.google.com/' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com/' },
        { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg', url: 'https://www.netlify.com/' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', url: 'https://vercel.com/' },
      ]
    },
    {
      id: "cms",
      title: "CMS",
      items: [
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg', url: 'https://wordpress.org/' },
        { name: 'WooCommerce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg', url: 'https://woocommerce.com/' },
        { name: 'HubSpot', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png', url: 'https://www.hubspot.com/' },
        { name: 'Wix', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg', url: 'https://www.wix.com/' },
        { name: 'Ghost', icon: 'https://ghost.org/images/logos/ghost-logo-orb.png', url: 'https://ghost.org/' },
        { name: 'Blogger', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Blogger.svg', url: 'https://www.blogger.com/' },
        { name: 'Hygraph', icon: 'https://www.hygraph.com/favicon.ico', url: 'https://hygraph.com/' }
      ]
    },
    {
      id: "dns-domains",
      title: "DNS & Domains",
      items: [
        { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', url: 'https://www.cloudflare.com/' },
        { name: 'CloudNS', icon: 'https://avatars.githubusercontent.com/u/7932688?s=200&v=4', url: 'https://www.cloudns.net/' },
        { name: 'Gcore', icon: 'https://gcore.com/img/logo.svg', url: 'https://gcore.com/' },
        { name: '1984', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWbXFhutE2SyVHQjvKD-ASj9GXmvLDDKimA&s', url: 'https://www.1984hosting.com/' },
        { name: 'Dynadot', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQnWb8SfXMdmYNQc5IOHZiAfUToXGCU_OEQ&s', url: 'https://www.dynadot.com/' },
        { name: 'Porkbun', icon: 'https://logowik.com/content/uploads/images/porkbun2662.logowik.com.webp', url: 'https://porkbun.com/' },
        { name: 'Namecheap', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBUSGEbMv1ij0PF1r1P_bMkQcROpfPIUXug&s', url: 'https://www.namecheap.com/' }
      ]
    },
    {
      id: "foss-oss-apps",
      title: "FOSS/OSS Applications",
      items: [
        { name: 'Mastodon', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Mastodon_Logotype_%28Simple%29.svg', url: 'https://joinmastodon.org/' },
        { name: 'Lemmy', icon: 'https://raw.githubusercontent.com/LemmyNet/lemmy-ui/main/src/assets/icons/apple-touch-icon.png', url: 'https://join-lemmy.org/' },
        { name: 'PeerTube', icon: 'https://joinpeertube.org/img/brand.png', url: 'https://joinpeertube.org/' },
        { name: 'Misskey', icon: 'https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png', url: 'https://misskey-hub.net/' },
        { name: 'Discourse', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Discourse_icon.svg', url: 'https://www.discourse.org/' },
        { name: 'GitBook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitbook/gitbook-original.svg', url: 'https://www.gitbook.com/' },
        { name: 'Pixelfed', icon: 'https://avatars.githubusercontent.com/u/38410642?v=4', url: 'https://pixelfed.org/' },
        { name: 'Funkwhale', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1ISu3qmHTwat0LkwsFvHB_4ifoPAigOUDg&s', url: 'https://funkwhale.audio/' },
        { name: 'Element', icon: 'https://element.io/images/logo-mark-primary.svg', url: 'https://element.io/' },
        { name: 'Revolt', icon: 'https://avatars.githubusercontent.com/u/57727799?s=200&v=4', url: 'https://revolt.chat/' },
        { name: 'ATProto', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg', url: 'https://atproto.com/' },
        { name: 'Wiki.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yId4wxmt4l_67ZVYvwKPUQJVysIryYM8zQ&s', url: 'https://js.wiki/' }
      ]
    },
    {
      id: "analytics-status",
      title: "Analytics & Status",
      items: [
        { name: 'Atlassian', icon: 'https://logosandtypes.com/wp-content/uploads/2020/07/Atlassian.png', url: 'https://www.atlassian.com/' },
        { name: 'incident.io', icon: 'https://incident.io/icons/icon-512x512.png', url: 'https://incident.io/' },
        { name: 'Betterstack', icon: 'https://pageflows.imgix.net/media/logos/better_stack.png?auto=compress&ixlib=python-1.1.2&s=648359af192a5b76ea29a3b3ad0f488e', url: 'https://betterstack.com/status-page' },
        { name: 'SEOgets', icon: 'https://images.saasworthy.com/seogets_49315_logo_1725625741_eup3k.png', url: 'https://seogets.com/' },
        { name: 'SimpleAnalytics', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSnSY73fabDnFG6VfEwygMKOZITpI3lkOrQ&s', url: 'https://simpleanalytics.com/' },
        { name: 'Umami', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHBqgDJYbTIb95EIEivH4LcjIDlrEvEnyIw&s', url: 'https://umami.is/' }
      ]
    },
    {
      id: "design-tools",
      title: "Design Tools",
      items: [
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', url: 'https://www.canva.com/' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', url: 'https://www.figma.com/' },
        { name: 'GIMP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg', url: 'https://www.gimp.org/' },
        { name: 'Krita', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Calligrakrita-base.svg', url: 'https://krita.org/' },
        { name: 'Clip Studio', icon: 'https://www.clipstudio.net/view/img/common/clipstudiopaint-icon.png', url: 'https://www.clipstudio.net/' },
        { name: 'Paint.NET', icon: 'https://www.syprus.com/paintnet/PaintDotNet_3.png', url: 'https://www.getpaint.net/' }
      ]
    },
    {
      id: "3d-graphics",
      title: "3D & Graphics",
      items: [
        { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg', url: 'https://www.blender.org/' }
      ]
    },
    {
      id: "devops",
      title: "DevOps",
      items: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.com/' },
        { name: 'GitLab', icon: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png', url: 'https://gitlab.com/' },
        { name: 'Gitea', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Gitea_Logo.svg', url: 'https://about.gitea.com/' },
        { name: 'Codeberg', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Codeberg_logo.svg', url: 'https://codeberg.org/' },
        { name: 'Forejo', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Forgejo_logo.svg', url: 'https://forejo.org/' },
        { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg', url: 'https://bitbucket.org/' },
        { name: 'Sentry', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg', url: 'https://sentry.io/' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', url: 'https://www.jenkins.io/' },
        { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg', url: 'https://slack.com/' },
        { name: 'Teams', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png', url: 'https://www.microsoft.com/microsoft-teams/' }
      ]
    },
    {
      id: "operating-systems",
      title: "Operating Systems",
      items: [
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
        { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', url: 'https://www.microsoft.com/windows/' }
      ]
    }
  ];

  // Toggle a category open/closed
  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6">
              {/* Enhanced Clickable Category Header */}
              <button 
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-xl transition-all duration-300 
                  ${openCategories[category.id] 
                    ? 'bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary shadow-md' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}`}
              >
                <div className="flex items-center">
                  {/* Category Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3
                    ${openCategories[category.id] 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700'}`}
                  >
                    <FontAwesomeIcon icon={getCategoryIcon(category.id)} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500">{category.items.length} technologies</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={`text-xs font-medium mr-2 transition-opacity duration-200 
                    ${openCategories[category.id] ? 'opacity-100' : 'opacity-0'}`}>
                    {openCategories[category.id] ? 'Click to collapse' : ''}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                    ${openCategories[category.id] ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`transition-transform duration-300 ${openCategories[category.id] ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                </div>
              </button>
              
              {/* Improved Collapsible Skills Grid with Animation */}
              <div 
                className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mt-3 transition-all duration-300 
                  origin-top ${openCategories[category.id] 
                    ? 'max-h-[1000px] opacity-100 scale-y-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 scale-y-0 transform -translate-y-4 overflow-hidden'}`}
                style={{transitionDelay: openCategories[category.id] ? '0ms' : '0ms'}}
              >
                {category.items.map((skill, skillIndex) => (
                  <a
                    key={skillIndex}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-2 bg-gray-50 hover:bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      animationDelay: `${skillIndex * 50}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 mb-2 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/40/69a6ce/ffffff?text=${skill.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .category-open a {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Skills
