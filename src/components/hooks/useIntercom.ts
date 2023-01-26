import { useEffect } from 'react';
import { loadIntercom, initIntercomWindow } from 'next-intercom';
import useMounted from './useMounted';

export default function useIntercom(appId: string) {
  const mounted = useMounted();
  useEffect(() => {
    if (mounted.current) {
      loadIntercom({ appId, ssr: false, initWindow: true });
      initIntercomWindow({ appId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
