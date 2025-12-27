import { useState, useEffect } from 'react';
import { useLanguage, languages } from '@/contexts/LanguageContext';

export default function LanguageSelector({ isMobileMenu = false, isTransparent = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  if (isMobileMenu) {
    // Mobile menu version - two buttons in a row
    return (
      <div className="language-selector-mobile">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`language-button ${
              currentLanguage.code === lang.code ? 'active' : ''
            }`}
          >
            <span>{lang.name}</span>
          </button>
        ))}
        
        <style jsx>{`
          .language-selector-mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 20px 0;
          }
          
          .language-button {
            flex: 1;
            max-width: 100px;
            padding: 12px 24px;
            border-radius: 8px;
            border: 2px solid #e5e7eb;
            background: white;
            color: #374151;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .language-button:hover {
            background: #f9fafb;
            border-color: #d1d5db;
          }
          
          .language-button.active {
            background: #E93314;
            border-color: #E93314;
            color: white;
          }
        `}</style>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="language-selector-desktop" onClick={(e) => e.stopPropagation()}>
      <button
        className={`language-toggle ${isTransparent ? 'transparent' : ''}`}
        onClick={toggleDropdown}
      >
        <svg
          className="globe-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="language-code">{currentLanguage.name}</span>
        <svg
          className={`chevron-icon ${isOpen ? 'open' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages
            .filter((lang) => lang.code !== currentLanguage.code)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="language-option"
              >
                <span>{lang.name}</span>
              </button>
            ))}
        </div>
      )}

      <style jsx>{`
        .language-selector-desktop {
          position: relative;
          margin-left: 16px;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: ${isTransparent ? '#F8F8F2' : '#1f2937'};
        }

        .language-toggle:hover {
          background: ${isTransparent ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        }

        .language-toggle.transparent {
          color: #F8F8F2;
        }

        .globe-icon {
          width: 20px;
          height: 20px;
        }

        .language-code {
          font-size: 14px;
          font-weight: 600;
        }

        .chevron-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .chevron-icon.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          z-index: 1000;
          min-width: 100px;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 10px 16px;
          background: white;
          border: none;
          border-top: 1px solid #e5e7eb;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
        }

        .language-option:first-child {
          border-top: none;
        }

        .language-option:hover {
          background: #f9fafb;
        }

        @media (max-width: 1199px) {
          .language-selector-desktop {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

