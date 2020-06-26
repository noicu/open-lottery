/* image-slider-prod-aem-v1.2.13 */
define("image-slider-app", ["require", "exports", "json!image-slider-environment.json"], function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.configure = function(t) {
        t.use.standardConfiguration().plugin("layout-base", {
            componentConfiguration: i
        }), i.testing && t.use.plugin("aurelia-testing"), t.start().then(function() {
            return t.setRoot("image-slider/image-slider-content")
        })
    }
});
var __decorate = this && this.__decorate || function(t, e, i, n) {
        var s, r = arguments.length,
            o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
        else
            for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
        return r > 3 && o && Object.defineProperty(e, i, o), o
    },
    __metadata = this && this.__metadata || function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    };
define("image-slider/image-slider-content", ["require", "exports", "aurelia-configuration", "aurelia-framework"], function(t, e, i, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t) {
            var e = this;
            this.config = t, this.imageWidth = function() {
                return e._imageWidth
            }, this.imageList = function() {
                return e._imageList
            }, this.imageListSetup(), this.imageWidth = this.getAemProperty("imageWidth")
        }
        return t.prototype.imageListSetup = function() {
            var t = this.getAemProperty("imageList");
            this.imageList = t ? t.split(",") : []
        }, t.prototype.getAemProperty = function(t, e) {
            void 0 === e && (e = null);
            var i = "appData." + t,
                n = this.config.get(i);
            return n && n !== "${properties." + t + "}" || (n = e), n
        }, t = __decorate([n.autoinject(), __metadata("design:paramtypes", [i.AureliaConfiguration])], t)
    }();
    e.ImageSliderContent = s
});
var __decorate = this && this.__decorate || function(t, e, i, n) {
        var s, r = arguments.length,
            o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n);
        else
            for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, i, o) : s(e, i)) || o);
        return r > 3 && o && Object.defineProperty(e, i, o), o
    },
    __metadata = this && this.__metadata || function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    };
define("image-slider/carousel/carousel-container", ["require", "exports", "aurelia-framework", "hammerjs"], function(t, e, i, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, e) {
                var i = this;
                this.element = t, this.taskQueue = e, this.panBoundaryX = .5, this.swipeBoundaryX = .25, this.currentIndex = 0, this.alignToRight = !1, this.elementWidth = 0, this.elementCount = 0, this.cursorOffsetX = 0, this.cursorVelocityX = 0, this.containerOffsetX = 0, this.cursorDeltaTime = 0, this.resizeThrottle = null, this.touchDevice = !1, this.prevEnabled = !1, this.nextEnabled = !1, this.panEvent = function(t) {
                    return i.panEventHandler(t)
                }, this.swipeEvent = function(t) {
                    return i.swipeEventHandler(t)
                }, this.orientationEvent = function() {
                    return i.setPaneDimensions()
                }, this.resizeEvent = function() {
                    return i.resizeEventHandler()
                }
            }
            return t.prototype.bind = function() {
                var t = this;
                this.taskQueue.queueMicroTask(function() {
                    return t.initialize()
                })
            }, t.prototype.unbind = function() {
                this.hammer && this.hammer.off("panleft panright panend pancancel", this.panEvent), window.removeEventListener("resize", this.resizeEvent), window.removeEventListener("orientationchange", this.orientationEvent)
            }, t.prototype.isTouchDevice = function() {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            }, t.prototype.initialize = function() {
                this.panes = Array.prototype.slice.call(this.container.children), this.elementCount = this.panes.length, this.currentIndex = 0, this.containerOffsetX = 0, this.cursorOffsetX = 0, 0 !== this.elementCount && (this.hammer = new n(this.container), this.hammer.get("tap").set({
                    enable: !1
                }), this.hammer.get("press").set({
                    enable: !1
                }), this.hammer.get("doubletap").set({
                    enable: !1
                }), this.hammer.on("panstart panleft panright panend pancancel", this.panEvent), this.setPaneDimensions(), window.addEventListener("resize", this.resizeEvent), window.addEventListener("orientationchange", this.orientationEvent), this.snapToElement(0, !1))
            }, t.prototype.resizeEventHandler = function() {
                var t = this;
                this.resizeThrottle || (this.resizeThrottle = setTimeout(function() {
                    t.resizeThrottle = null, t.setPaneDimensions()
                }, 66))
            }, t.prototype.setPaneDimensions = function() {
                this.elementWidth = this.getElementWidth(this.container.children[0]), this.containerWidth = this.elementWidth * this.elementCount, this.view.style.width = null, this.container.computedStyles = this.container.computedStyles || window.getComputedStyle(this.container);
                var t = (parseFloat(this.container.computedStyles.paddingLeft) || 0) + (parseFloat(this.container.computedStyles.paddingRight) || 0);
                this.view.computedStyles = this.view.computedStyles || window.getComputedStyle(this.view), this.viewWidth = this.view.offsetWidth, this.view.style.width = this.viewWidth + "px", this.container.style.width = this.containerWidth + t + "px", this.viewWidth -= t, this.prevEnabled = this.currentIndex > 0, this.nextEnabled = -this.containerOffsetX + this.viewWidth < this.containerWidth, this.touchDevice = this.isTouchDevice(), this.smallDevice = this.touchDevice && this.viewWidth < 768, this.hammer.get("pan").set({
                    enable: !0
                }), this.viewWidth - (this.elementCount - this.currentIndex - 1) * this.elementWidth > 0 && this.snapToEnd(!1)
            }, t.prototype.getElementWidth = function(t) {
                return t.computedStyles = t.computedStyles || window.getComputedStyle(t), t.offsetWidth + parseFloat(t.computedStyles.marginLeft) + parseFloat(t.computedStyles.marginRight)
            }, t.prototype.next = function(t) {
                if (void 0 === t && (t = !0), this.currentIndex + 1 !== this.elementCount) {
                    var e = this.viewWidth - (this.elementCount - this.currentIndex - 1) * this.elementWidth > 0;
                    return e ? this.snapToElement(this.elementCount - 1, t, e) : this.snapToElement(this.currentIndex + 1, t, e)
                }
            }, t.prototype.prev = function(t) {
                if (void 0 === t && (t = !0), 0 !== this.currentIndex) {
                    if (!(this.viewWidth - (this.elementCount - this.currentIndex + 1) * this.elementWidth > 0)) return this.snapToElement(this.currentIndex - 1, t);
                    var e = Math.floor(this.viewWidth / this.elementWidth);
                    return this.snapToElement(this.currentIndex - e, !0)
                }
            }, t.prototype.snapToStart = function(t) {
                return void 0 === t && (t = !0), this.snapToElement(0, t, !1)
            }, t.prototype.snapToEnd = function(t) {
                return void 0 === t && (t = !0), this.snapToElement(this.elementCount - 1, t, !0)
            }, t.prototype.snapToElement = function(t, e, i) {
                if (void 0 === e && (e = !0), void 0 === i && (i = !1), this.currentIndex = Math.max(0, Math.min(t, this.elementCount - 1)), this.alignToRight = i || !1, this.container.classList.remove("snap-to-animate"), this.container.classList.remove("velocity-animate"), e && this.container.classList.add("snap-to-animate"), i) {
                    var n = this.elementWidth * (t + 1);
                    this.containerOffsetX = -(n - this.viewWidth), this.container.style.marginLeft = this.containerOffsetX + "px"
                } else {
                    var s = this.elementWidth * t;
                    this.containerOffsetX = -s, this.container.style.marginLeft = this.containerOffsetX + "px"
                }
                this.prevEnabled = this.currentIndex > 0, this.nextEnabled = -this.containerOffsetX + this.viewWidth < this.containerWidth
            }, t.prototype.setContainerOffset = function(t, e) {
                void 0 === e && (e = !1), this.container.classList.remove("snap-to-animate"), this.container.classList.remove("velocity-animate"), e && this.container.classList.add("velocity-animate");
                var i = this.containerOffsetX;
                return i += t, this.container.style.marginLeft = i + "px", this.currentIndex = Math.floor(-i / this.elementWidth), this.prevEnabled = -this.containerOffsetX > 0, this.nextEnabled = -this.containerOffsetX + this.viewWidth < this.containerWidth, i
            }, t.prototype.swipeEventHandler = function(t) {
                t.direction === n.DIRECTION_LEFT ? this.next() : t.direction === n.DIRECTION_RIGHT && this.prev(), this.hammer.stop(!0)
            }, t.prototype.panEventHandler = function(t) {
                if ("panstart" === t.type) this.container.classList.remove("snap-to-animate"), this.container.classList.remove("velocity-animate"), this.cursorDeltaTime = 0, this.container.classList.add("active");
                else if ("panleft" === t.type || "panright" === t.type) {
                    var e = t.deltaX - this.cursorOffsetX;
                    if (this.outOfBounds(t.direction, e)) e *= .1;
                    else if (this.smallDevice && Math.abs(t.deltaX) > this.elementWidth * this.swipeBoundaryX) return this.snapToElement(t.deltaX < 0 ? this.currentIndex + 1 : this.currentIndex, !0, this.currentIndex + 2 === this.elementCount), this.cursorVelocityX = 0, this.cursorDeltaTime = 0, this.cursorOffsetX = 0, void this.hammer.stop(!0);
                    this.containerOffsetX = this.setContainerOffset(e), this.cursorOffsetX = t.deltaX, this.cursorVelocityX = t.velocityX, this.cursorDeltaTime = t.deltaTime
                } else if ("panend" === t.type || "pancancel" === t.type) {
                    if (this.smallDevice)
                        if (this.containerOffsetX > 0) this.snapToElement(0, !0);
                        else if (Math.abs(this.containerOffsetX) > this.elementWidth * this.elementCount - this.viewWidth) this.snapToElement(this.elementCount - 1, !0, !0);
                    else {
                        var i = Math.abs(this.containerOffsetX) / this.elementWidth,
                            n = this.cursorOffsetX < 0 ? 1 - this.panBoundaryX : this.panBoundaryX;
                        i = i - Math.floor(i) > n ? Math.floor(i) + 1 : Math.floor(i), this.snapToElement(i, !0)
                    } else {
                        var e = 50 * this.cursorVelocityX,
                            s = this.containerOffsetX + e;
                        s > 0 ? this.snapToElement(0, !0, !1) : Math.abs(s) > this.elementWidth * this.elementCount - this.viewWidth ? this.snapToElement(this.elementCount - 1, !0, !0) : this.containerOffsetX = this.setContainerOffset(s - this.containerOffsetX, !0)
                    }
                    this.container.classList.remove("active"), this.cursorVelocityX = 0, this.cursorDeltaTime = 0, this.cursorOffsetX = 0
                }
            }, t.prototype.outOfBounds = function(t, e) {
                return t === n.DIRECTION_RIGHT ? this.containerOffsetX + e >= 0 : t === n.DIRECTION_LEFT ? Math.abs(this.containerOffsetX) + this.viewWidth + Math.abs(e) >= this.containerWidth : void 0
            }, t = __decorate([i.autoinject(), __metadata("design:paramtypes", [Element, i.TaskQueue])], t)
        }();
        e.CarouselContainerCustomElement = s
    }), define("text!index.html", ["module"], function(t) {
        t.exports = '<div aurelia-app="image-slider-app" class="image-slider-component" data-sly-use.imageslider="image-slider-helper.js" data-image-list="${imageSlider.sections}" data-image-width="${properties.imageWidth}"><sly data-sly-test="${imageSlider.sections}"><sly data-sly-use.clientlib="/apps/the-lott/sightly/clientlib-async/clientlib.html" data-sly-call="${clientLib.js @ categories=\'<%=category%>\', loading=\'async\'}" data-sly-unwrap><script type="text/javascript" src="./js/image-slider-app-bundle.js" async data-sly-test="false"><\/script></sly><sly data-sly-test="${!imageSlider.sections}" data-sly-test.author="${wcmmode.edit || wcmmode.design}"><p style="text-align:center;margin:1rem">&lt; Use the authoring dialog to add images &gt;</p></sly></div>'
    }), define("text!environment.css", ["module"], function(t) {
        t.exports = ""
    }), define("text!image-slider/image-slider-content.html", ["module"], function(t) {
        t.exports = '<template><require from="./image-slider.css"></require><require from="./carousel/carousel-container"></require><section class="image-slider"><carousel-container view-model.ref="carousel"><div repeat.for="image of imageList" class="image-slider-section" css="width: ${imageWidth};"><img src="${image}" alt="the Lott app screenshot" draggable="false"></div></carousel-container></section></template>'
    }), define("text!image-slider/carousel/carousel-container.html", ["module"], function(t) {
        t.exports = '<template><require from="./carousel-container.css"></require><div class="carousel"><section class="carousel-header show-for-medium"><button class="carousel-prev left arrow ${prevEnabled ? \'enabled\' : \'disabled\'}" click.delegate="prev()"></button> <button class="carousel-next right arrow ${nextEnabled ? \'enabled\' : \'disabled\'}" click.delegate="next()"></button></section><section class="carousel-view" ref="view"><div class="carousel-container row collapse" style="touch-action:none" ref="container"><slot></slot></div></section></div></template>'
    }), define("text!image-slider/image-slider.css", ["module"], function(t) {
        t.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.image-slider-component {\n  max-width: 71rem;\n  margin: 0; }\n  @media print, screen and (min-width: 48em) {\n    .image-slider-component {\n      margin: 0 2rem; } }\n\n.image-slider {\n  width: 100%; }\n  .image-slider .image-slider-section {\n    background: none;\n    margin: 0 .5rem;\n    width: 250px;\n    height: auto; }\n"
    }), define("text!image-slider/carousel/carousel-container.css", ["module"], function(t) {
        t.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.image-slider .carousel {\n  position: relative;\n  width: 100%;\n  display: block; }\n\n.image-slider .carousel-view {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  height: 100%;\n  margin-right: -2rem;\n  margin-left: -2rem; }\n  @media screen and (max-width: 47.9375em) {\n    .image-slider .carousel-view {\n      margin-right: 0rem;\n      margin-left: 0rem; } }\n  .image-slider .carousel-view .carousel-container {\n    width: auto;\n    height: 100%;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    cursor: pointer;\n    /* fallback if grab cursor is unsupported */\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab; }\n    .image-slider .carousel-view .carousel-container:active {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing; }\n    @media screen and (max-width: 47.9375em) {\n      .image-slider .carousel-view .carousel-container {\n        padding-left: 0.5rem;\n        padding-right: 0.5rem; } }\n  .image-slider .carousel-view .snap-to-animate {\n    transition: margin-left .3s ease-out; }\n  .image-slider .carousel-view .velocity-animate {\n    transition: margin-left 0.3s cubic-bezier(0.21, 0.55, 0.41, 0.76); }\n\n.image-slider .carousel-header {\n  position: absolute;\n  top: -51px;\n  right: 0px; }\n  .image-slider .carousel-header .carousel-prev {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0NHB4IiBoZWlnaHQ9IjQ0cHgiIHZpZXdCb3g9IjAgMCA0NCA0NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY28tLWJhY2stT0ZGPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkRTIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJpY28tLWJhY2stT0ZGIiBmaWxsPSIjRThFOEU4Ij4gICAgICAgICAgICA8ZyBpZD0i74SEIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjM5Mjg1NzEsMTQuNDgyMTQyOSBDMjYuMzkyODU3MSwxNC42MzY5MDU1IDI2LjMzMzMzMzksMTQuNzczODA4OSAyNi4yMTQyODU3LDE0Ljg5Mjg1NzEgTDE5LjE5NjQyODYsMjEuOTEwNzE0MyBMMjYuMjE0Mjg1NywyOC45Mjg1NzE0IEMyNi4zMzMzMzM5LDI5LjA0NzYxOTYgMjYuMzkyODU3MSwyOS4xODQ1MjMgMjYuMzkyODU3MSwyOS4zMzkyODU3IEMyNi4zOTI4NTcxLDI5LjQ5NDA0ODQgMjYuMzMzMzMzOSwyOS42MzA5NTE4IDI2LjIxNDI4NTcsMjkuNzUgTDI1LjMyMTQyODYsMzAuNjQyODU3MSBDMjUuMjAyMzgwNCwzMC43NjE5MDU0IDI1LjA2NTQ3NywzMC44MjE0Mjg2IDI0LjkxMDcxNDMsMzAuODIxNDI4NiBDMjQuNzU1OTUxNiwzMC44MjE0Mjg2IDI0LjYxOTA0ODIsMzAuNzYxOTA1NCAyNC41LDMwLjY0Mjg1NzEgTDE2LjE3ODU3MTQsMjIuMzIxNDI4NiBDMTYuMDU5NTIzMiwyMi4yMDIzODA0IDE2LDIyLjA2NTQ3NyAxNiwyMS45MTA3MTQzIEMxNiwyMS43NTU5NTE2IDE2LjA1OTUyMzIsMjEuNjE5MDQ4MiAxNi4xNzg1NzE0LDIxLjUgTDI0LjUsMTMuMTc4NTcxNCBDMjQuNjE5MDQ4MiwxMy4wNTk1MjMyIDI0Ljc1NTk1MTYsMTMgMjQuOTEwNzE0MywxMyBDMjUuMDY1NDc3LDEzIDI1LjIwMjM4MDQsMTMuMDU5NTIzMiAyNS4zMjE0Mjg2LDEzLjE3ODU3MTQgTDI2LjIxNDI4NTcsMTQuMDcxNDI4NiBDMjYuMzMzMzMzOSwxNC4xOTA0NzY4IDI2LjM5Mjg1NzEsMTQuMzI3MzgwMiAyNi4zOTI4NTcxLDE0LjQ4MjE0MjkgWiI+PC9wYXRoPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);\n    margin-right: 0.25rem; }\n  .image-slider .carousel-header .carousel-prev.enabled {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0NHB4IiBoZWlnaHQ9IjQ0cHgiIHZpZXdCb3g9IjAgMCA0NCA0NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY28tLWJhY2stT05AMS41eDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJEUyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iaWNvLS1iYWNrLU9OIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICA8ZyBpZD0i74SEIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjM5Mjg1NzEsMTQuNDgyMTQyOSBDMjYuMzkyODU3MSwxNC42MzY5MDU1IDI2LjMzMzMzMzksMTQuNzczODA4OSAyNi4yMTQyODU3LDE0Ljg5Mjg1NzEgTDE5LjE5NjQyODYsMjEuOTEwNzE0MyBMMjYuMjE0Mjg1NywyOC45Mjg1NzE0IEMyNi4zMzMzMzM5LDI5LjA0NzYxOTYgMjYuMzkyODU3MSwyOS4xODQ1MjMgMjYuMzkyODU3MSwyOS4zMzkyODU3IEMyNi4zOTI4NTcxLDI5LjQ5NDA0ODQgMjYuMzMzMzMzOSwyOS42MzA5NTE4IDI2LjIxNDI4NTcsMjkuNzUgTDI1LjMyMTQyODYsMzAuNjQyODU3MSBDMjUuMjAyMzgwNCwzMC43NjE5MDU0IDI1LjA2NTQ3NywzMC44MjE0Mjg2IDI0LjkxMDcxNDMsMzAuODIxNDI4NiBDMjQuNzU1OTUxNiwzMC44MjE0Mjg2IDI0LjYxOTA0ODIsMzAuNzYxOTA1NCAyNC41LDMwLjY0Mjg1NzEgTDE2LjE3ODU3MTQsMjIuMzIxNDI4NiBDMTYuMDU5NTIzMiwyMi4yMDIzODA0IDE2LDIyLjA2NTQ3NyAxNiwyMS45MTA3MTQzIEMxNiwyMS43NTU5NTE2IDE2LjA1OTUyMzIsMjEuNjE5MDQ4MiAxNi4xNzg1NzE0LDIxLjUgTDI0LjUsMTMuMTc4NTcxNCBDMjQuNjE5MDQ4MiwxMy4wNTk1MjMyIDI0Ljc1NTk1MTYsMTMgMjQuOTEwNzE0MywxMyBDMjUuMDY1NDc3LDEzIDI1LjIwMjM4MDQsMTMuMDU5NTIzMiAyNS4zMjE0Mjg2LDEzLjE3ODU3MTQgTDI2LjIxNDI4NTcsMTQuMDcxNDI4NiBDMjYuMzMzMzMzOSwxNC4xOTA0NzY4IDI2LjM5Mjg1NzEsMTQuMzI3MzgwMiAyNi4zOTI4NTcxLDE0LjQ4MjE0MjkgWiI+PC9wYXRoPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);\n    background-color: #6C4796; }\n  .image-slider .carousel-header .carousel-next {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0NHB4IiBoZWlnaHQ9IjQ0cHgiIHZpZXdCb3g9IjAgMCA0NCA0NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY28tLWZvcndhcmQtT0ZGPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkRTIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJpY28tLWZvcndhcmQtT0ZGIiBmaWxsPSIjRThFOEU4Ij4gICAgICAgICAgICA8ZyBpZD0i74SEIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM5Mjg1NzEsMTQuNDgyMTQyOSBDMjguMzkyODU3MSwxNC42MzY5MDU1IDI4LjMzMzMzMzksMTQuNzczODA4OSAyOC4yMTQyODU3LDE0Ljg5Mjg1NzEgTDIxLjE5NjQyODYsMjEuOTEwNzE0MyBMMjguMjE0Mjg1NywyOC45Mjg1NzE0IEMyOC4zMzMzMzM5LDI5LjA0NzYxOTYgMjguMzkyODU3MSwyOS4xODQ1MjMgMjguMzkyODU3MSwyOS4zMzkyODU3IEMyOC4zOTI4NTcxLDI5LjQ5NDA0ODQgMjguMzMzMzMzOSwyOS42MzA5NTE4IDI4LjIxNDI4NTcsMjkuNzUgTDI3LjMyMTQyODYsMzAuNjQyODU3MSBDMjcuMjAyMzgwNCwzMC43NjE5MDU0IDI3LjA2NTQ3NywzMC44MjE0Mjg2IDI2LjkxMDcxNDMsMzAuODIxNDI4NiBDMjYuNzU1OTUxNiwzMC44MjE0Mjg2IDI2LjYxOTA0ODIsMzAuNzYxOTA1NCAyNi41LDMwLjY0Mjg1NzEgTDE4LjE3ODU3MTQsMjIuMzIxNDI4NiBDMTguMDU5NTIzMiwyMi4yMDIzODA0IDE4LDIyLjA2NTQ3NyAxOCwyMS45MTA3MTQzIEMxOCwyMS43NTU5NTE2IDE4LjA1OTUyMzIsMjEuNjE5MDQ4MiAxOC4xNzg1NzE0LDIxLjUgTDI2LjUsMTMuMTc4NTcxNCBDMjYuNjE5MDQ4MiwxMy4wNTk1MjMyIDI2Ljc1NTk1MTYsMTMgMjYuOTEwNzE0MywxMyBDMjcuMDY1NDc3LDEzIDI3LjIwMjM4MDQsMTMuMDU5NTIzMiAyNy4zMjE0Mjg2LDEzLjE3ODU3MTQgTDI4LjIxNDI4NTcsMTQuMDcxNDI4NiBDMjguMzMzMzMzOSwxNC4xOTA0NzY4IDI4LjM5Mjg1NzEsMTQuMzI3MzgwMiAyOC4zOTI4NTcxLDE0LjQ4MjE0MjkgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuMTk2NDI5LCAyMS45MTA3MTQpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTIzLjE5NjQyOSwgLTIxLjkxMDcxNCkgIj48L3BhdGg+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    margin-left: 0.25rem; }\n  .image-slider .carousel-header .carousel-next.enabled {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0NHB4IiBoZWlnaHQ9IjQ0cHgiIHZpZXdCb3g9IjAgMCA0NCA0NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY28tLWZvcndhcmQtT048L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iRFMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Imljby0tZm9yd2FyZC1PTiIgZmlsbD0iI0ZGRkZGRiI+ICAgICAgICAgICAgPGcgaWQ9Iu+EhCI+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zOTI4NTcxLDE0LjQ4MjE0MjkgQzI4LjM5Mjg1NzEsMTQuNjM2OTA1NSAyOC4zMzMzMzM5LDE0Ljc3MzgwODkgMjguMjE0Mjg1NywxNC44OTI4NTcxIEwyMS4xOTY0Mjg2LDIxLjkxMDcxNDMgTDI4LjIxNDI4NTcsMjguOTI4NTcxNCBDMjguMzMzMzMzOSwyOS4wNDc2MTk2IDI4LjM5Mjg1NzEsMjkuMTg0NTIzIDI4LjM5Mjg1NzEsMjkuMzM5Mjg1NyBDMjguMzkyODU3MSwyOS40OTQwNDg0IDI4LjMzMzMzMzksMjkuNjMwOTUxOCAyOC4yMTQyODU3LDI5Ljc1IEwyNy4zMjE0Mjg2LDMwLjY0Mjg1NzEgQzI3LjIwMjM4MDQsMzAuNzYxOTA1NCAyNy4wNjU0NzcsMzAuODIxNDI4NiAyNi45MTA3MTQzLDMwLjgyMTQyODYgQzI2Ljc1NTk1MTYsMzAuODIxNDI4NiAyNi42MTkwNDgyLDMwLjc2MTkwNTQgMjYuNSwzMC42NDI4NTcxIEwxOC4xNzg1NzE0LDIyLjMyMTQyODYgQzE4LjA1OTUyMzIsMjIuMjAyMzgwNCAxOCwyMi4wNjU0NzcgMTgsMjEuOTEwNzE0MyBDMTgsMjEuNzU1OTUxNiAxOC4wNTk1MjMyLDIxLjYxOTA0ODIgMTguMTc4NTcxNCwyMS41IEwyNi41LDEzLjE3ODU3MTQgQzI2LjYxOTA0ODIsMTMuMDU5NTIzMiAyNi43NTU5NTE2LDEzIDI2LjkxMDcxNDMsMTMgQzI3LjA2NTQ3NywxMyAyNy4yMDIzODA0LDEzLjA1OTUyMzIgMjcuMzIxNDI4NiwxMy4xNzg1NzE0IEwyOC4yMTQyODU3LDE0LjA3MTQyODYgQzI4LjMzMzMzMzksMTQuMTkwNDc2OCAyOC4zOTI4NTcxLDE0LjMyNzM4MDIgMjguMzkyODU3MSwxNC40ODIxNDI5IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjE5NjQyOSwgMjEuOTEwNzE0KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0yMy4xOTY0MjksIC0yMS45MTA3MTQpICI+PC9wYXRoPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);\n    background-color: #6C4796; }\n  .image-slider .carousel-header .arrow {\n    color: #FFFFFF;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border-radius: 1.5rem;\n    position: absolute;\n    width: 2.125rem;\n    height: 2.125rem;\n    outline: none;\n    cursor: pointer; }\n  .image-slider .carousel-header .left.arrow {\n    right: 42px; }\n  .image-slider .carousel-header .right.arrow {\n    right: 0px; }\n  .image-slider .carousel-header .arrow.disabled {\n    background-color: #FAFAFA;\n    border-color: #E8E8E8;\n    border-width: 2px;\n    border-style: solid;\n    cursor: auto; }\n"
    }), define("text!image-slider-environment.json", ["module"], function(t) {
        t.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/image-slider/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
    }),
    function(t, e, i, n) {
        "use strict";

        function s(t, e, i) {
            return setTimeout(u(t, i), e)
        }

        function r(t, e, i) {
            return !!Array.isArray(t) && (o(t, i[e], i), !0)
        }

        function o(t, e, i) {
            var s;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (s = 0; s < t.length;) e.call(i, t[s], s, t), s++;
            else
                for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
        }

        function a(e, i, n) {
            var s = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = t.console && (t.console.warn || t.console.log);
                return r && r.call(t.console, s, n), e.apply(this, arguments)
            }
        }

        function c(t, e, i) {
            var n, s = e.prototype;
            n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && ht(n, i)
        }

        function u(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function h(t, e) {
            return typeof t == gt ? t.apply(e ? e[0] || n : n, e) : t
        }

        function l(t, e) {
            return t === n ? e : t
        }

        function d(t, e, i) {
            o(m(e), function(e) {
                t.addEventListener(e, i, !1)
            })
        }

        function g(t, e, i) {
            o(m(e), function(e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function p(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function M(t, e) {
            return t.indexOf(e) > -1
        }

        function m(t) {
            return t.trim().split(/\s+/g)
        }

        function f(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++
            }
            return -1
        }

        function I(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function y(t, e, i) {
            for (var n = [], s = [], r = 0; r < t.length;) {
                var o = e ? t[r][e] : t[r];
                f(s, o) < 0 && n.push(t[r]), s[r] = o, r++
            }
            return i && (n = e ? n.sort(function(t, i) {
                return t[e] > i[e]
            }) : n.sort()), n
        }

        function v(t, e) {
            for (var i, s, r = e[0].toUpperCase() + e.slice(1), o = 0; o < lt.length;) {
                if (i = lt[o], (s = i ? i + r : e) in t) return s;
                o++
            }
            return n
        }

        function T() {
            return yt++
        }

        function D(e) {
            var i = e.ownerDocument || e;
            return i.defaultView || i.parentWindow || t
        }

        function j(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                h(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function z(t) {
            var e = t.options.inputClass;
            return new(e || (Dt ? W : jt ? Y : Tt ? X : Q))(t, N)
        }

        function N(t, e, i) {
            var n = i.pointers.length,
                s = i.changedPointers.length,
                r = e & Nt && n - s == 0,
                o = e & (Ct | At) && n - s == 0;
            i.isFirst = !!r, i.isFinal = !!o, r && (t.session = {}), i.eventType = e, E(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function E(t, e) {
            var i = t.session,
                n = e.pointers,
                s = n.length;
            i.firstInput || (i.firstInput = w(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = w(e) : 1 === s && (i.firstMultiple = !1);
            var r = i.firstInput,
                o = i.firstMultiple,
                a = o ? o.center : r.center,
                c = e.center = x(n);
            e.timeStamp = mt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = S(a, c), e.distance = b(a, c), C(i, e), e.offsetDirection = L(e.deltaX, e.deltaY);
            var u = O(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = Mt(u.x) > Mt(u.y) ? u.x : u.y, e.scale = o ? Z(o.pointers, n) : 1, e.rotation = o ? P(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, A(i, e);
            var h = t.element;
            p(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
        }

        function C(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                s = t.prevDelta || {},
                r = t.prevInput || {};
            e.eventType !== Nt && r.eventType !== Ct || (s = t.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, n = t.offsetDelta = {
                x: i.x,
                y: i.y
            }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
        }

        function A(t, e) {
            var i, s, r, o, a = t.lastInterval || e,
                c = e.timeStamp - a.timeStamp;
            if (e.eventType != At && (c > zt || a.velocity === n)) {
                var u = e.deltaX - a.deltaX,
                    h = e.deltaY - a.deltaY,
                    l = O(c, u, h);
                s = l.x, r = l.y, i = Mt(l.x) > Mt(l.y) ? l.x : l.y, o = L(u, h), t.lastInterval = e
            } else i = a.velocity, s = a.velocityX, r = a.velocityY, o = a.direction;
            e.velocity = i, e.velocityX = s, e.velocityY = r, e.direction = o
        }

        function w(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: pt(t.pointers[i].clientX),
                clientY: pt(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: mt(),
                pointers: e,
                center: x(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function x(t) {
            var e = t.length;
            if (1 === e) return {
                x: pt(t[0].clientX),
                y: pt(t[0].clientY)
            };
            for (var i = 0, n = 0, s = 0; s < e;) i += t[s].clientX, n += t[s].clientY, s++;
            return {
                x: pt(i / e),
                y: pt(n / e)
            }
        }

        function O(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function L(t, e) {
            return t === e ? wt : Mt(t) >= Mt(e) ? t < 0 ? xt : Ot : e < 0 ? Lt : bt
        }

        function b(t, e, i) {
            i || (i = Qt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + s * s)
        }

        function S(t, e, i) {
            i || (i = Qt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(s, n) / Math.PI
        }

        function P(t, e) {
            return S(e[1], e[0], Wt) + S(t[1], t[0], Wt)
        }

        function Z(t, e) {
            return b(e[0], e[1], Wt) / b(t[0], t[1], Wt)
        }

        function Q() {
            this.evEl = Rt, this.evWin = Yt, this.pressed = !1, j.apply(this, arguments)
        }

        function W() {
            this.evEl = Bt, this.evWin = _t, j.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function k() {
            this.evTarget = Gt, this.evWin = Ft, this.started = !1, j.apply(this, arguments)
        }

        function R(t, e) {
            var i = I(t.touches),
                n = I(t.changedTouches);
            return e & (Ct | At) && (i = y(i.concat(n), "identifier", !0)), [i, n]
        }

        function Y() {
            this.evTarget = qt, this.targetIds = {}, j.apply(this, arguments)
        }

        function U(t, e) {
            var i = I(t.touches),
                n = this.targetIds;
            if (e & (Nt | Et) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var s, r, o = I(t.changedTouches),
                a = [],
                c = this.target;
            if (r = i.filter(function(t) {
                    return p(t.target, c)
                }), e === Nt)
                for (s = 0; s < r.length;) n[r[s].identifier] = !0, s++;
            for (s = 0; s < o.length;) n[o[s].identifier] && a.push(o[s]), e & (Ct | At) && delete n[o[s].identifier], s++;
            return a.length ? [y(r.concat(a), "identifier", !0), a] : void 0
        }

        function X() {
            j.apply(this, arguments);
            var t = u(this.handler, this);
            this.touch = new Y(this.manager, t), this.mouse = new Q(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function B(t, e) {
            t & Nt ? (this.primaryTouch = e.changedPointers[0].identifier, _.call(this, e)) : t & (Ct | At) && _.call(this, e)
        }

        function _(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches,
                    s = function() {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1)
                    };
                setTimeout(s, Jt)
            }
        }

        function H(t) {
            for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var s = this.lastTouches[n],
                    r = Math.abs(e - s.x),
                    o = Math.abs(i - s.y);
                if (r <= $t && o <= $t) return !0
            }
            return !1
        }

        function G(t, e) {
            this.manager = t, this.set(e)
        }

        function F(t) {
            if (M(t, ne)) return ne;
            var e = M(t, se),
                i = M(t, re);
            return e && i ? ne : e || i ? e ? se : re : M(t, ie) ? ie : ee
        }

        function V(t) {
            this.options = ht({}, this.defaults, t || {}), this.id = T(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = ae, this.simultaneous = {}, this.requireFail = []
        }

        function q(t) {
            return t & de ? "cancel" : t & he ? "end" : t & ue ? "move" : t & ce ? "start" : ""
        }

        function J(t) {
            return t == bt ? "down" : t == Lt ? "up" : t == xt ? "left" : t == Ot ? "right" : ""
        }

        function $(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function K() {
            V.apply(this, arguments)
        }

        function tt() {
            K.apply(this, arguments), this.pX = null, this.pY = null
        }

        function et() {
            K.apply(this, arguments)
        }

        function it() {
            V.apply(this, arguments), this._timer = null, this._input = null
        }

        function nt() {
            K.apply(this, arguments)
        }

        function st() {
            K.apply(this, arguments)
        }

        function rt() {
            V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ot(t, e) {
            return e = e || {}, e.recognizers = l(e.recognizers, ot.defaults.preset), new at(t, e)
        }

        function at(t, e) {
            this.options = ht({}, ot.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = z(this), this.touchAction = new G(this, this.options.touchAction), ct(this, !0), o(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ct(t, e) {
            var i = t.element;
            if (i.style) {
                var n;
                o(t.options.cssProps, function(s, r) {
                    n = v(i.style, r), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function ut(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var ht, lt = ["", "webkit", "Moz", "MS", "ms", "o"],
            dt = e.createElement("div"),
            gt = "function",
            pt = Math.round,
            Mt = Math.abs,
            mt = Date.now;
        ht = "function" != typeof Object.assign ? function(t) {
            if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var s = arguments[i];
                if (s !== n && null !== s)
                    for (var r in s) s.hasOwnProperty(r) && (e[r] = s[r])
            }
            return e
        } : Object.assign;
        var ft = a(function(t, e, i) {
                for (var s = Object.keys(e), r = 0; r < s.length;)(!i || i && t[s[r]] === n) && (t[s[r]] = e[s[r]]), r++;
                return t
            }, "extend", "Use `assign`."),
            It = a(function(t, e) {
                return ft(t, e, !0)
            }, "merge", "Use `assign`."),
            yt = 1,
            vt = /mobile|tablet|ip(ad|hone|od)|android/i,
            Tt = "ontouchstart" in t,
            Dt = v(t, "PointerEvent") !== n,
            jt = Tt && vt.test(navigator.userAgent),
            zt = 25,
            Nt = 1,
            Et = 2,
            Ct = 4,
            At = 8,
            wt = 1,
            xt = 2,
            Ot = 4,
            Lt = 8,
            bt = 16,
            St = xt | Ot,
            Pt = Lt | bt,
            Zt = St | Pt,
            Qt = ["x", "y"],
            Wt = ["clientX", "clientY"];
        j.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(D(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(D(this.element), this.evWin, this.domHandler)
            }
        };
        var kt = {
                mousedown: Nt,
                mousemove: Et,
                mouseup: Ct
            },
            Rt = "mousedown",
            Yt = "mousemove mouseup";
        c(Q, j, {
            handler: function(t) {
                var e = kt[t.type];
                e & Nt && 0 === t.button && (this.pressed = !0), e & Et && 1 !== t.which && (e = Ct), this.pressed && (e & Ct && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: "mouse",
                    srcEvent: t
                }))
            }
        });
        var Ut = {
                pointerdown: Nt,
                pointermove: Et,
                pointerup: Ct,
                pointercancel: At,
                pointerout: At
            },
            Xt = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            Bt = "pointerdown",
            _t = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (Bt = "MSPointerDown", _t = "MSPointerMove MSPointerUp MSPointerCancel"), c(W, j, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    s = Ut[n],
                    r = Xt[t.pointerType] || t.pointerType,
                    o = "touch" == r,
                    a = f(e, t.pointerId, "pointerId");
                s & Nt && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : s & (Ct | At) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, s, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: r,
                    srcEvent: t
                }), i && e.splice(a, 1))
            }
        });
        var Ht = {
                touchstart: Nt,
                touchmove: Et,
                touchend: Ct,
                touchcancel: At
            },
            Gt = "touchstart",
            Ft = "touchstart touchmove touchend touchcancel";
        c(k, j, {
            handler: function(t) {
                var e = Ht[t.type];
                if (e === Nt && (this.started = !0), this.started) {
                    var i = R.call(this, t, e);
                    e & (Ct | At) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            }
        });
        var Vt = {
                touchstart: Nt,
                touchmove: Et,
                touchend: Ct,
                touchcancel: At
            },
            qt = "touchstart touchmove touchend touchcancel";
        c(Y, j, {
            handler: function(t) {
                var e = Vt[t.type],
                    i = U.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        });
        var Jt = 2500,
            $t = 25;
        c(X, j, {
            handler: function(t, e, i) {
                var n = "touch" == i.pointerType,
                    s = "mouse" == i.pointerType;
                if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) B.call(this, e, i);
                    else if (s && H.call(this, i)) return;
                    this.callback(t, e, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Kt = v(dt.style, "touchAction"),
            te = Kt !== n,
            ee = "auto",
            ie = "manipulation",
            ne = "none",
            se = "pan-x",
            re = "pan-y",
            oe = function() {
                if (!te) return !1;
                var e = {},
                    i = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    e[n] = !i || t.CSS.supports("touch-action", n)
                }), e
            }();
        G.prototype = {
            set: function(t) {
                "compute" == t && (t = this.compute()), te && this.manager.element.style && oe[t] && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return o(this.manager.recognizers, function(e) {
                    h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), F(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions,
                    s = M(n, ne) && !oe[ne],
                    r = M(n, re) && !oe[re],
                    o = M(n, se) && !oe[se];
                if (s) {
                    var a = 1 === t.pointers.length,
                        c = t.distance < 2,
                        u = t.deltaTime < 250;
                    if (a && c && u) return
                }
                return o && r ? void 0 : s || r && i & St || o && i & Pt ? this.preventSrc(e) : void 0
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var ae = 1,
            ce = 2,
            ue = 4,
            he = 8,
            le = he,
            de = 16;
        V.prototype = {
            defaults: {},
            set: function(t) {
                return ht(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (r(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = $(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return r(t, "dropRecognizeWith", this) ? this : (t = $(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (r(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = $(t, this), -1 === f(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (r(t, "dropRequireFailure", this)) return this;
                t = $(t, this);
                var e = f(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    i.manager.emit(e, t)
                }
                var i = this,
                    n = this.state;
                n < he && e(i.options.event + q(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= he && e(i.options.event + q(n))
            },
            tryEmit: function(t) {
                if (this.canEmit()) return this.emit(t);
                this.state = 32
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | ae))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = ht({}, t);
                if (!h(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                this.state & (le | de | 32) && (this.state = ae), this.state = this.process(e), this.state & (ce | ue | he | de) && this.tryEmit(e)
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, c(K, V, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (ce | ue),
                    s = this.attrTest(t);
                return n && (i & At || !s) ? e | de : n || s ? i & Ct ? e | he : e & ce ? e | ue : ce : 32
            }
        }), c(tt, K, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Zt
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & St && e.push(re), t & Pt && e.push(se), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    s = t.direction,
                    r = t.deltaX,
                    o = t.deltaY;
                return s & e.direction || (e.direction & St ? (s = 0 === r ? wt : r < 0 ? xt : Ot, i = r != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === o ? wt : o < 0 ? Lt : bt, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
            },
            attrTest: function(t) {
                return K.prototype.attrTest.call(this, t) && (this.state & ce || !(this.state & ce) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = J(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), c(et, K, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ne]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ce)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), c(it, V, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [ee]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    r = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & (Ct | At) && !r) this.reset();
                else if (t.eventType & Nt) this.reset(), this._timer = s(function() {
                    this.state = le, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & Ct) return le;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === le && (t && t.eventType & Ct ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(), this.manager.emit(this.options.event, this._input)))
            }
        }), c(nt, K, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ne]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ce)
            }
        }), c(st, K, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: St | Pt,
                pointers: 1
            },
            getTouchAction: function() {
                return tt.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, i = this.options.direction;
                return i & (St | Pt) ? e = t.overallVelocity : i & St ? e = t.overallVelocityX : i & Pt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && Mt(e) > this.options.velocity && t.eventType & Ct
            },
            emit: function(t) {
                var e = J(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), c(rt, V, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ie]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    r = t.deltaTime < e.time;
                if (this.reset(), t.eventType & Nt && 0 === this.count) return this.failTimeout();
                if (n && r && i) {
                    if (t.eventType != Ct) return this.failTimeout();
                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        a = !this.pCenter || b(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                    if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = s(function() {
                        this.state = le, this.tryEmit()
                    }, e.interval, this), ce) : le
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = s(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ot.VERSION = "2.0.7", ot.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [nt, {
                    enable: !1
                }],
                [et, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [st, {
                    direction: St
                }],
                [tt, {
                        direction: St
                    },
                    ["swipe"]
                ],
                [rt],
                [rt, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [it]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        at.prototype = {
            set: function(t) {
                return ht(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? 2 : 1
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        s = e.curRecognizer;
                    (!s || s && s.state & le) && (s = e.curRecognizer = null);
                    for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (ce | ue | he) && (s = e.curRecognizer = i), r++
                }
            },
            get: function(t) {
                if (t instanceof V) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) {
                if (r(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (r(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        i = f(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== n && e !== n) {
                    var i = this.handlers;
                    return o(m(t), function(t) {
                        i[t] = i[t] || [], i[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== n) {
                    var i = this.handlers;
                    return o(m(t), function(t) {
                        e ? i[t] && i[t].splice(f(i[t], e), 1) : delete i[t]
                    }), this
                }
            },
            emit: function(t, e) {
                this.options.domEvents && ut(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](e), n++
                }
            },
            destroy: function() {
                this.element && ct(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, ht(ot, {
            INPUT_START: Nt,
            INPUT_MOVE: Et,
            INPUT_END: Ct,
            INPUT_CANCEL: At,
            STATE_POSSIBLE: ae,
            STATE_BEGAN: ce,
            STATE_CHANGED: ue,
            STATE_ENDED: he,
            STATE_RECOGNIZED: le,
            STATE_CANCELLED: de,
            STATE_FAILED: 32,
            DIRECTION_NONE: wt,
            DIRECTION_LEFT: xt,
            DIRECTION_RIGHT: Ot,
            DIRECTION_UP: Lt,
            DIRECTION_DOWN: bt,
            DIRECTION_HORIZONTAL: St,
            DIRECTION_VERTICAL: Pt,
            DIRECTION_ALL: Zt,
            Manager: at,
            Input: j,
            TouchAction: G,
            TouchInput: Y,
            MouseInput: Q,
            PointerEventInput: W,
            TouchMouseInput: X,
            SingleTouchInput: k,
            Recognizer: V,
            AttrRecognizer: K,
            Tap: rt,
            Pan: tt,
            Swipe: st,
            Pinch: et,
            Rotate: nt,
            Press: it,
            on: d,
            off: g,
            each: o,
            merge: It,
            extend: ft,
            assign: ht,
            inherit: c,
            bindFn: u,
            prefixed: v
        }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = ot, "function" == typeof define && define.amd ? define("hammerjs", [], function() {
            return ot
        }) : "undefined" != typeof module && module.exports ? module.exports = ot : t.Hammer = ot
    }(window, document);