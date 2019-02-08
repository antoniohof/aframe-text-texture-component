## aframe-text-texture-component

A text component for [A-Frame](https://aframe.io) that wraps
[THREE.TextTexture](https://github.com/SeregPie/THREE.TextTexture).
Attention: Only compatible with THREE.TextTexture version 18.8.6

```https://unpkg.com/three.texttexture@18.8.6/THREE.TextTexture.js```

* supports unicode
* supports outline 
* supports padding, line height and text align
* supports transparency

### Example
[Try it](https://antoniohof.github.io/aframe-text-texture-component/example/)


### Usage

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="https://unpkg.com/three.texttexture@18.8.6/THREE.TextTexture.js"></script>
  <script src="https://antoniohof.github.io/aframe-text-texture-component/dist/aframe-text-texture-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity text-texture="text: Texture Based Text with accented characters (á, ã, â...); scale: 1.5" position="0 0 -10"> </a-entity>
  </a-scene>
</body>
```

### Parameters
```javascript
    autoRedraw: {
      default: true,
      type: "boolean"
    },
    text: {
      default: "",
      type: "string"
    },
    textAlign: {
      default: "center",
      oneOf: ["center", "left", "right"],
      type: "string"
    },
    textLineHeight: { default: 1 },
    fontFamily: {
      default: 'Open Sans',
      type: "string"
    },
    fontSize: {
      default: 60,
      min: 1,
      max: 128,
      type: "int"
    },
    fontWeight: {
      default: "normal",
      oneOf: ["normal", "bold"],
      type: "string"
    },
    fontVariant: {
      default: "normal",
      oneOf: ["normal", "small-caps"],
      type: "string"
    },
    fontStyle: {
      default: "normal",
      oneOf: ["normal", "italic"],
      type: "string"
    },
    padding: {
      default: 0.25,
      min: 0,
      max: 1,
      type: "number"
    },
    fillStyle: {
      default: "#fff",
      type: "color"
    },
    lineWidth: {
      default: 0,
      min: 0,
      max: 0.5,
      type: "number"
    },
    strokeStyle: {
      default: "#fff",
      type: "color"
    },
    opacity: {
      default: "1",
      min: 0,
      max: 1,
      type: "number"
    },
    scale: {
      default: 1,
      type: "number"
    }
```
