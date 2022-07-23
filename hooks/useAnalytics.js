import { load, trackPageview } from 'fathom-client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    
    load('YEBFTNIF', {
      includedDomains: ['llama-corp.com', 'www.llama-corp.com'],
    })

    const onRouteChangeComplete = () => {
      trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])
}
