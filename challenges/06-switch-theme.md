---
title: Switch theme with React context API
position: Frontend, Fullstack
file: src/contexts/ThemeProvider.tsx
difficulty: medium
---

# Switch Theme using `React` context API

---

Difficulty: **Medium**

Tags: **Frontend**, **Fullstack**, **React**

---

![](https://img001.prntscr.com/file/img001/7_p8IvyeQbiqTMtRHI_27A.png)

For this challenge what you have to do is to make the theme switcher works properly.

For instance, it doesn't! the checkbox works perfectly but actually it only handles an internal state of a `boolean` value. See in `src/components/ThemeToggle/Component.tsx`.

In other hand, the entire page supports well a theme switch (`light` <-> `dark`). We use React context API to hold the theme value `src/components/contexts/ThemeContext.tsx` and set it in the main `html` tag as `class` and `color-scheme`.

```html
    <!-- src/app/layout.tsx -->
    <Provider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <html lang="en" color-scheme={theme} className={theme}>
            <head />
            ...
```

So you don't have to worry about how the theme value is set, What we expect from you is to ensure the theme value changes when you toggle the checkbox. You can bring your focus on:
- `src/components/contexts/ThemeContext.tsx` where you should hold the theme value as a state in the context, and provide a way to change it. The change method should be available from outside so the `<ThemeToggle>` component can leverage on it
- `src/component/ThemeToggle/Component.tsx`, in this part you have use the method you wrote from above in order to change the checkbox value, and also use the current `ThemeValue`. This component is already a controlled component.


Feel free to bring any improvement if find any!
