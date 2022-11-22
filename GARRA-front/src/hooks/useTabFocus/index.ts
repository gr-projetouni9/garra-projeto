import { useEffect, useState } from 'react'

export const useTabFocus = () => {
  const [tabHasFocus, setTabHasFocus] = useState(true)

  useEffect(() => {
    const onTabFocus = () => {
      setTabHasFocus(true)
    }

    const onTabBlur = () => {
      setTabHasFocus(false)
    }

    globalThis.addEventListener('focus', onTabFocus)
    globalThis.addEventListener('blur', onTabBlur)

    return () => {
      globalThis.removeEventListener('focus', onTabFocus)
      globalThis.removeEventListener('blur', onTabBlur)
    }
  }, [])

  return { tabHasFocus }
}
