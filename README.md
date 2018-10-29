## aframe-text-texture-component

A text texture component for [A-Frame](https://aframe.io) that wraps
[THREE.TextTexture](https://github.com/SeregPie/THREE.TextTexture).

### Example
[Example](https://antoniohof.github.io/aframe-text-texture-component/example/)


### Usaeg

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="https://seregpie.github.io/THREE.TextTexture/THREE.TextTexture.js"></script>
  <script src="https://antoniohof.github.io/aframe-text-texture-component/dist/aframe-text-texture-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity text-texture="text: Texture Based Text with accented characters (á, ã, â...); scale: 1.5" position="0 0 -10"> </a-entity>
  </a-scene>
</body>
```

