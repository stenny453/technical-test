import { useWallet } from './Context';

export default function Connect() {
  const { connect, connected, disconnect, account } = useWallet();

  return (
    <>
      {!connected ? (
        <button className="btn" onClick={connect}>
          Connect
        </button>
      ) : (
        <button title={account} className="btn" onClick={disconnect}>
          Disconnect
        </button>
      )}
    </>
  );
}
