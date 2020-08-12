import * as React from 'react'

export const useClientOnly = () => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(()=>{
    setMounted(true);
  }, [])
  return mounted;
}

export const ClientOnly: React.FC<{children: any}> = ({children})=>{
  const isMounted = useClientOnly();
  return isMounted ? <>
    {children}
  </> : null;
}