/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	AFRAME.registerComponent("text-texture", {
	  schema: {
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
	  },

	  init: function() {
	    this.textTexture = new THREE.TextTexture({
	      autoRedraw: this.data.autoRedraw,
	      text: decodeURI(this.data.text),
	      fontFamily: this.data.fontFamily,
	      fontSize: this.data.fontSize,
	      fontStyle: this.data.fontStyle,
	      textAlign: this.data.textAlign,
	      textLineHeight: this.data.textLineHeight,
	      fontWeight: this.data.fontWeight,
	      fontVariant: this.data.fontVariant,
	      fillStyle: this.data.fillStyle,
	      lineWidth: this.data.lineWidth,
	      strokeStyle: this.data.strokeStyle,
	      padding: this.data.padding
	    });

	    this.material = new THREE.SpriteMaterial({
	      map: this.textTexture,
	      color: this.data.fillStyle,
	      transparent: true
	    });
	    this.material.opacity = this.data.opacity
	    this.sprite = new THREE.Sprite(this.material);
	    this.sprite.scale.setX(this.textTexture.imageAspect).multiplyScalar(this.data.scale);
	    this.el.setObject3D("mesh", this.sprite);
	  },
	  play: function() {},
	  update: function(oldData) {
	    this.material.opacity = this.data.opacity
	    this.textTexture.text = decodeURI(this.data.text)
	    this.textTexture.fontFamily = this.data.fontFamily
	    this.textTexture.autoRedraw = this.data.autoRedraw
	    this.textTexture.fontStyle = this.data.fontStyle
	    this.textTexture.textAlign = this.data.textAlign
	    this.textTexture.textLineHeight = this.data.textLineHeight
	    this.textTexture.fontWeight = this.data.fontWeight
	    this.textTexture.fontVariant = this.data.fontVariant
	    this.textTexture.fillStyle = this.data.fillStyle
	    this.textTexture.lineWidth = this.data.lineWidth
	    this.textTexture.strokeStyle = this.data.strokeStyle
	    this.textTexture.padding = this.data.padding
	    this.sprite.scale.setX(this.textTexture.imageAspect).multiplyScalar(this.data.scale);
	    this.sprite.scale.setY(this.data.scale)
	  },
	  getTextLines: function () {
	    return this.textTexture.textLines;
	  },
	  getFontProperties: function () {
	    return this.textTexture.font;
	  },
	  getImageAspect: function () {
	    return this.textTexture.imageAspect;
	  },
	  getSize: function () {
	    return this.sprite.scale;
	  }
	});

/***/ })
/******/ ]);