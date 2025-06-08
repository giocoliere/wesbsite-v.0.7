import React from 'react'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const socialLinks = [
    {
      platform: 'GitHub',
      username: '@giocoliere',
      url: 'https://github.com/giocoliere',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      platform: 'Discord',
      username: 'giocoliere',
      url: 'https://discord.com/users/842087107908206654',
      icon: 'fab fa-discord',
      color: '#5865F2'
    },
    {
      platform: 'Email',
      username: 'giocoliere@proton.me',
      url: 'mailto:giocoliere@proton.me',
      icon: 'fas fa-envelope',
      color: '#6D4AFF'
    },
    {
      platform: '🔫.lol',
      username: '@gioco',
      url: 'https://guns.lol/gioco',
      icon: 'fas fa-link',
      color: '#FF6B6B'
    }
  ]

  return (
    <div className="contact-popup-overlay" onClick={onClose}>
      <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
        <div className="contact-popup-header">
          <h3>Get in Touch</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="contact-popup-content">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--social-color': social.color } as React.CSSProperties}
            >
              <div className="social-icon">
                <i className={social.icon}></i>
              </div>
              <div className="social-info">
                <span className="platform">{social.platform}</span>
                <span className="username">{social.username}</span>
              </div>
              <div className="arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contact-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
          padding: 20px;
        }

        .contact-popup {
          background: white;
          border-radius: 20px;
          padding: 0;
          max-width: 350px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
          animation: slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin: auto;
        }

        .contact-popup-header {
          background: linear-gradient(135deg, #69a6ce, #b98acc);
          color: white;
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-popup-header h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          transition: all 0.2s ease;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .contact-popup-content {
          padding: 25px 20px;
        }

        .social-link {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          margin-bottom: 12px;
          border-radius: 14px;
          text-decoration: none;
          color: #333;
          background: #f8f9fa;
          border: 2px solid transparent;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          background: white;
          border-color: var(--social-color);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .social-link:last-child {
          margin-bottom: 0;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--social-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 14px;
          color: white;
          font-size: 1.1rem;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-link:hover .social-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .social-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .platform {
          font-weight: 600;
          font-size: 1rem;
          color: #333;
          margin-bottom: 2px;
        }

        .username {
          font-size: 0.85rem;
          color: #666;
          opacity: 0.9;
        }

        .arrow {
          color: var(--social-color);
          font-size: 1rem;
          opacity: 0;
          transform: translateX(-12px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-link:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Small mobile devices (up to 480px) */
        @media (max-width: 480px) {
          .contact-popup-overlay {
            padding: 8px;
            align-items: center;
          }

          .contact-popup {
            width: calc(100vw - 16px);
            max-width: 300px;
            max-height: 85vh;
            border-radius: 16px;
          }

          .contact-popup-header {
            padding: 14px 18px;
            border-radius: 16px 16px 0 0;
          }

          .contact-popup-header h3 {
            font-size: 1.1rem;
          }

          .close-btn {
            width: 30px;
            height: 30px;
            font-size: 0.9rem;
            padding: 5px;
          }

          .contact-popup-content {
            padding: 14px 12px;
          }

          .social-link {
            padding: 10px 12px;
            margin-bottom: 8px;
            border-radius: 12px;
          }

          .social-icon {
            width: 34px;
            height: 34px;
            margin-right: 10px;
            font-size: 0.9rem;
            border-radius: 10px;
          }

          .platform {
            font-size: 0.85rem;
            margin-bottom: 1px;
          }

          .username {
            font-size: 0.75rem;
          }

          .arrow {
            font-size: 0.8rem;
          }
        }

        /* Medium mobile devices (481px to 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .contact-popup-overlay {
            padding: 10px;
          }

          .contact-popup {
            width: calc(100vw - 20px);
            max-width: 320px;
            max-height: 85vh;
          }

          .contact-popup-header {
            padding: 16px 20px;
          }

          .contact-popup-header h3 {
            font-size: 1.2rem;
          }

          .close-btn {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }

          .contact-popup-content {
            padding: 18px 16px;
          }

          .social-link {
            padding: 12px 14px;
            margin-bottom: 10px;
            border-radius: 12px;
          }

          .social-icon {
            width: 38px;
            height: 38px;
            margin-right: 12px;
            font-size: 1rem;
          }

          .platform {
            font-size: 0.9rem;
          }

          .username {
            font-size: 0.8rem;
          }
        }

        /* Large mobile devices (641px to 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .contact-popup-overlay {
            padding: 12px;
          }

          .contact-popup {
            width: calc(100vw - 24px);
            max-width: 340px;
            max-height: 80vh;
          }

          .contact-popup-header {
            padding: 18px 22px;
          }

          .contact-popup-header h3 {
            font-size: 1.3rem;
          }

          .contact-popup-content {
            padding: 20px 18px;
          }

          .social-link {
            padding: 13px 15px;
            margin-bottom: 11px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            margin-right: 13px;
            font-size: 1.05rem;
          }

          .platform {
            font-size: 0.95rem;
          }

          .username {
            font-size: 0.82rem;
          }
        }

        /* Very small screens (max-width: 360px) */
        @media (max-width: 360px) {
          .contact-popup-overlay {
            padding: 6px;
          }

          .contact-popup {
            width: calc(100vw - 12px);
            max-width: 280px;
            border-radius: 14px;
          }

          .contact-popup-header {
            padding: 12px 14px;
          }

          .contact-popup-header h3 {
            font-size: 1rem;
          }

          .close-btn {
            width: 28px;
            height: 28px;
            font-size: 0.8rem;
          }

          .contact-popup-content {
            padding: 10px;
          }

          .social-link {
            padding: 8px 10px;
            margin-bottom: 6px;
          }

          .social-icon {
            width: 30px;
            height: 30px;
            margin-right: 8px;
            font-size: 0.8rem;
          }

          .platform {
            font-size: 0.8rem;
          }

          .username {
            font-size: 0.7rem;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .contact-popup-overlay {
            align-items: flex-start;
            padding-top: 10px;
          }

          .contact-popup {
            max-height: 95vh;
          }

          .contact-popup-header {
            padding: 12px 20px;
          }

          .contact-popup-content {
            padding: 16px;
          }

          .social-link {
            padding: 10px 16px;
            margin-bottom: 8px;
          }
        }

        /* High DPI screens adjustments */
        @media (-webkit-min-device-pixel-ratio: 2) and (max-width: 480px) {
          .social-link {
            min-height: 44px; /* Improved touch target */
          }
          
          .close-btn {
            min-width: 44px;
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactPopup
