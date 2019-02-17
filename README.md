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

Available events are:

| Event | Parameter | Emitted when |
| - | - | - |
| `open` | Agastya frame element | Agastya is opened |
| `close` | Agastya frame element | Agastya is closed |
| `preloaded-external-css` | Stylesheet link href | Cached external CSS |
| `loading-external-css` | Stylesheet link href | Cached external CSS |
| `loaded-external-css` | Stylesheet link href | Cached external CSS |
