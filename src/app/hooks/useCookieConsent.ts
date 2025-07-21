'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'tamborine-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'tamborine-cookie-preferences';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if consent has been given
    const consent = Cookies.get(COOKIE_CONSENT_KEY);
    const savedPreferences = Cookies.get(COOKIE_PREFERENCES_KEY);

    if (consent) {
      setHasConsent(true);
      if (savedPreferences) {
        try {
          setPreferences(JSON.parse(savedPreferences));
        } catch (error) {
          console.error('Error parsing cookie preferences:', error);
        }
      }
    } else {
      setHasConsent(false);
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    setPreferences(allAccepted);
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
    
    // Save to cookies (expires in 1 year)
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { expires: 365 });
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted), { expires: 365 });
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    setPreferences(onlyNecessary);
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
    
    // Save to cookies (expires in 1 year)
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { expires: 365 });
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(onlyNecessary), { expires: 365 });
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    const updatedPreferences = {
      ...newPreferences,
      necessary: true, // Always true
    };
    
    setPreferences(updatedPreferences);
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
    
    // Save to cookies (expires in 1 year)
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { expires: 365 });
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(updatedPreferences), { expires: 365 });
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  return {
    hasConsent,
    preferences,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
  };
};
