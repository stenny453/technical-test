---
title: Connect Wallet
position: Any, Bonus
file: src/components/Connect.tsx
difficulty: hard
---

# Connect Wallet (Metamask)

---

Difficulty: **Hard**

Tags: **Frontend**, **Fullstack**, **React**, **Ethereum**, **Wallet**

---

On this challenge you are asked to implement the "Connect" button whcih is intended to connect to your [Metamask wallet](https://metamask.io/download/).

[This link](https://docs.metamask.io/guide/getting-started.html#basic-considerations) could be helpful for you to achieve this challenge.

We already prepared where you should put your codes, check on `src/components/Connect/Context.tsx`. What you have to do:


> 1. fill the `connect` function so that it will connect into your metamask wallet
> 2. extract the account address, set it as a state value in the context. 
```
setState({ 
  connected: true, 
  account: 'the wallet address here'
});
```
> 3. implement the `disconnect` function