# Agastya

![Travis CI](https://travis-ci.org/OswaldLabsOpenSource/agastya.svg?branch=master)
![Dependencies](https://img.shields.io/david/OswaldLabsOpenSource/agastya.svg)
![Dev dependencies](https://img.shields.io/david/dev/OswaldLabsOpenSource/agastya.svg)
![](https://img.shields.io/snyk/vulnerabilities/github/OswaldLabsOpenSource/agastya.svg)
![Bundle size](https://img.shields.io/bundlephobia/minzip/agastya.svg)

## 📦 Get Started

```bash
yarn add agastya
```

```js
// Import or require Agastya
import Agastya from "agastya";

// Initialize Agastya with your API key
new Agastya("API_KEY");
```

You can also use the official CDN instead:

```html
<script async src="https://agastya-loader.oswaldlabs.com/API_KEY.js"></script>
```

## Documentation

### Events

Agastya emits events which can be used for functionality or analytics purposes.

To listen to events, you can use the `on` function:

```js
agastya.on("open", iframe => {
  console.log("Agastya was opened!", iframe);
});
```

If you're using the CDN (which is asynchronous), you can do this instead:

```js
// Initialize `on` object
window.a11ySettings = window.a11ySettings || {};
window.a11ySettings.on = {};

// And add your listeners to it
window.a11ySettings.on.open = iframe => {
  console.log("Agastya was opened!", iframe);
};
```

Available events are:

| Event | Parameter | Emitted when |
| - | - | - |
| `ready` | None | Agastya is ready to listen to API calls |
| `start` | None | Script is initialized |
| `open` | None | Agastya is opened |
| `close` | None | Agastya is closed |
| `preloaded-external-css` | Stylesheet link href | Cached external CSS |
| `loading-external-css` | Stylesheet link href | Cached external CSS |
| `loaded-external-css` | Stylesheet link href | Cached external CSS |
| `button-appended` | Agastya button | Button is appended to DOM |
| `iframe-appended` | Agastya frame container | iFrame is appended to DOM |
| `toggle` | None | Open/close toggle |
| `cached-preferences` | Preferences object | Get preferences from store |
| `secure-track` | Tracking data object | Tracking custom event |
| `inject-css` | Style element | Injected style element |
| `update-css` | CSS string | Updating styles |

You can remove an event using the `off` function:

```js
agastya.off("open");
```

Or, if you're using the CDN, using `window.agastya` once it has been initialized:

```js
window.agastya.off("open");
```
