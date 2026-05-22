'use client'

import { useEffect } from 'react'

/**
 * Listens for postMessage events from the CMS iframe preview.
 * When the CMS sends a { type: 'cms-preview', section, data } message,
 * we store it in sessionStorage so pages can read it for live preview.
 * Pages should check sessionStorage on mount when in preview mode.
 */
export default function CMSPreviewListener() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type !== 'cms-preview') return
      const { section, data } = event.data
      if (!section || !data) return
      try {
        sessionStorage.setItem(`cms_preview_${section}`, JSON.stringify(data))
        // Dispatch custom event so components can react without a page reload
        window.dispatchEvent(new CustomEvent('cms-preview-update', { detail: { section, data } }))
      } catch {
        // sessionStorage not available
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return null
}
