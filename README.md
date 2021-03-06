# ♿ Agastya

![Travis CI](https://travis-ci.org/OswaldLabsOpenSource/agastya.svg?branch=master)
![Dependencies](https://img.shields.io/david/OswaldLabsOpenSource/agastya.svg)
![Dev dependencies](https://img.shields.io/david/dev/OswaldLabsOpenSource/agastya.svg)
[![License](https://img.shields.io/github/license/OswaldLabsOpenSource/agastya.svg)](https://github.com/OswaldLabsOpenSource/agastya/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/OswaldLabsOpenSource/agastya.svg)
![Bundle size](https://img.shields.io/bundlephobia/minzip/agastya.svg)

## 📦 Get Started

```bash
yarn add agastya
```

```js
// Import or require Agastya
import Agastya from "agastya";

// Initialize Agastya with your API key
const agastya = new Agastya("API_KEY");
```

Optionally, you can use a specific channel:

```js
const agastya = new Agastya("API_KEY", "production"); // Production (default)
const agastya = new Agastya("API_KEY", "beta"); // Beta (stable)
const agastya = new Agastya("API_KEY", "dev"); // Nighly/development (breaking changes)
```

You can also use the official CDN instead:

```html
<script async src="https://platform.oswaldlabs.com/_/API_KEY.js"></script>
```

Once you've created the Agastya object, you can start using the API:

```js
agastya.open(); // Open the Agastya widget
agastya.api("enableMode", "read-aloud"); // Start read aloud mode
agastya.secureTrack({ hello: "world" }); // Track a custom event
```

## [API Documentation](https://help.oswaldlabs.com/developers/)

- [Getting started](https://help.oswaldlabs.com/developers/)
- [Installation](https://help.oswaldlabs.com/developers/installation.html)
- [API basics](https://help.oswaldlabs.com/developers/api.html)
- [Widget manipulation](https://help.oswaldlabs.com/developers/widget.html)
- [Listening for events](https://help.oswaldlabs.com/developers/events.html)
- [Tracking and data](https://help.oswaldlabs.com/developers/tracking.html)
- [Apps and modes](https://help.oswaldlabs.com/developers/modes.html)
- [Integrations](https://help.oswaldlabs.com/developers/integrations.html)
- [Embeds](https://help.oswaldlabs.com/developers/embeds.html)
