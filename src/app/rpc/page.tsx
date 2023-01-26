'use client';

import { useEffect, useState, memo } from 'react';
import useMounted from '../../components/hooks/useMounted';

interface FetchOutput<T extends unknown> {
  processing?: boolean;
  error?: Error;
  data?: T;
}

const useFetch = <T extends unknown>(url: string, o?: RequestInit): [FetchOutput<T>, () => void] => {
  const mounted = useMounted();
  const [output, setOutput] = useState<FetchOutput<T>>({ processing: true });
  const trigger = () => {
    setOutput({ processing: true });
    fetch(url, o)
      .then((r) => r.json())
      .then((data) => setOutput({ data }))
      .catch((error) => setOutput({ error }))
      .finally(() =>
        setOutput((prev) => ({
          ...prev,
          processing: false,
        }))
      );
  };

  useEffect(() => {
    if (mounted.current) {
      trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [output, trigger];
};

function RPCPage() {
  const [{ data, error, processing }, trigger] = useFetch('/api/rpccall');

  return (
    <div style={{ marginTop: 20 }}>
      <h4>
        Call to <code>/api/rpccall</code>{' '}
        <button disabled={processing} onClick={trigger} className="btn">
          Call
        </button>
      </h4>
      <div style={{ marginTop: 20 }}>
        <h5>Output</h5>
        <pre>{JSON.stringify({ data, processing })}</pre>
      </div>

      {error && (
        <div style={{ marginTop: 20 }}>
          <h5>Error</h5>
          <pre style={{ color: '#ff0000', marginTop: 10 }}>{error?.message}</pre>
        </div>
      )}
    </div>
  );
}

export default memo(RPCPage);
