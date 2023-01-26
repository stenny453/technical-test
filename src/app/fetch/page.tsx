'use client';

import { useEffect, useState, memo } from 'react';
import useMounted from '../../components/hooks/useMounted';
import apiCall from '../../lib/http';

interface FakeData {
  status: string;
  message: string;
}

interface FetchOutput<T extends unknown> {
  processing?: boolean;
  error?: Error;
  data?: T;
}

function FetchPage() {
  const mounted = useMounted();
  const [output, setOutput] = useState<FetchOutput<FakeData>>({ processing: true });

  const triggerAPICall = () => {
    setOutput((prev) => ({ ...prev, processing: true }));
    apiCall('/api/mayfail', { method: 'GET', retries: 5, timeout: 800 })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error(`HTTP Error ${response.status}: ${response.statusText}`));
      })
      .then((data) => setOutput({ data }))
      .catch((error) => setOutput({ error }))
      .finally(() => setOutput((prev) => ({ ...prev, processing: false })));
  };

  useEffect(() => {
    if (mounted.current) {
      triggerAPICall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <h4>
        Call to <code>/api/mayfail</code>{' '}
        <button disabled={output.processing} onClick={triggerAPICall} className="btn">
          Call
        </button>
      </h4>
      <div style={{ marginTop: 20 }}>
        <h5>Output</h5>
        <pre>{JSON.stringify({ output })}</pre>
      </div>

      {output.error && (
        <div style={{ marginTop: 20 }}>
          <h5>Error</h5>
          <pre style={{ color: '#ff0000', marginTop: 10 }}>{output.error.message}</pre>
        </div>
      )}
    </div>
  );
}

export default memo(FetchPage);
