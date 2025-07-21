'use client';

import { useCookieConsent } from '@/app/hooks/useCookieConsent';
import CookieBanner from './CookieBanner';
import CookieSettings from './CookieSettings';
import CookieIcon from './CookieIcon';

export default function CookieConsent() {
  const {
    hasConsent,
    preferences,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  // Don't render anything until we know the consent status
  if (hasConsent === null) {
    return null;
  }

  return (
    <>
      {/* Banner - shows when no consent is given */}
      <CookieBanner
        show={showBanner}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
        onCustomize={openSettings}
      />

      {/* Settings Modal */}
      <CookieSettings
        show={showSettings}
        preferences={preferences}
        onSave={savePreferences}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
        onClose={closeSettings}
      />

      {/* Settings Icon - shows when consent is given and banner is not showing */}
      <CookieIcon
        show={hasConsent && !showBanner && !showSettings}
        onClick={openSettings}
      />
    </>
  );
}
