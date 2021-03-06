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
	    textLineHeight: { default: 1.2 },
	    fontFamily: {
	      default: 'Open Sans',
	      type: "string"
	    },
	    fontSize: {
	      default: 40,
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
	      default: 0.15,
	      min: 0,
	      max: 1,
	      type: "number"
	    },
	    fillStyle: {
	      default: "#fffff",
	      type: "color"
	    },
	    lineWidth: {
	      default: 0.0,
	      min: 0,
	      max: 0.5,
	      type: "number"
	    },
	    strokeStyle: {
	      default: "#fffff",
	      type: "color"
	    },
	    opacity: {
	      default: 1.0,
	      min: 0,
	      max: 1,
	      type: "number"
	    },
	    scale: {
	      default: 1.0,
	      type: "number"
	    }
	  },

	  init: function() {
	    this.textTexture = new THREE.TextTexture({
	      autoRedraw: this.data.autoRedraw,
	      text: unescape(this.data.text),
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
	    this.material = new THREE.MeshBasicMaterial({
	      map: this.textTexture,
	      transparent: true,
	      side: window.THREE.DoubleSide,
	      flatShading: true
	    });
	    this.geometry = new THREE.PlaneGeometry(1, 1, 1);
	    this.mesh = new THREE.Mesh(this.geometry, this.material);
	    this.el.setObject3D("mesh", this.mesh);
	  },
	  play: function() {},
	  update: function(oldData) {
	    this.material.opacity = this.data.opacity;
	    if (oldData.text !== this.data.text) {
	      this.textTexture.text = unescape(this.data.text);
	      this.textTexture.fontFamily = this.data.fontFamily;
	      this.textTexture.autoRedraw = this.data.autoRedraw;
	      this.textTexture.fontStyle = this.data.fontStyle;
	      this.textTexture.textAlign = this.data.textAlign;
	      this.textTexture.textLineHeight = this.data.textLineHeight;
	      this.textTexture.fontWeight = this.data.fontWeight;
	      this.textTexture.fontVariant = this.data.fontVariant;
	      this.textTexture.fillStyle = this.data.fillStyle;
	      this.textTexture.lineWidth = this.data.lineWidth;
	      this.textTexture.strokeStyle = this.data.strokeStyle;
	      this.textTexture.padding = this.data.padding;
	      var numberOfLines = (unescape(this.data.text).match(/\n/g)||[]).length + 1;
	      this.mesh.scale.set(this.textTexture.imageAspect * this.data.scale * numberOfLines, this.data.scale * numberOfLines, 1 );
	    }
	  },
	  tick: function () {
	  },
	  getTextLines: function () {
	    return this.textTexture ? this.textTexture.textLines : '';
	  },
	  getFontProperties: function () {
	    return this.textTexture ? this.textTexture.font : '';
	  },
	  getImageAspect: function () {
	    return this.textTexture ? this.textTexture.imageAspect : 0;
	  },
	  getSize: function () {
	    return this.geometry ? new THREE.Vector2(this.geometry.parameters.width * this.mesh.scale.x, this.geometry.parameters.height * this.mesh.scale.y) : new THREE.Vector2(0, 0);
	  }
	});


/***/ })
/******/ ]);