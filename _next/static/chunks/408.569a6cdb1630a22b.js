(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{4049:function(e,t,n){"use strict";var r=n(6257);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},507:function(e,t,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2436:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(h,t);var n,o,a,l=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=f(h);if(n){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return c(e)}(this,e)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),(t=l.call(this,e)).p=Promise.resolve(),t.resizeHandler=null,t.handlers={},t.syncWindowResize=t.syncWindowResize.bind(c(t)),t.syncEventHandlers=t.syncEventHandlers.bind(c(t)),t.attachUpdateEvents=t.attachUpdateEvents.bind(c(t)),t.getRef=t.getRef.bind(c(t)),t.handleUpdate=t.handleUpdate.bind(c(t)),t.figureCallback=t.figureCallback.bind(c(t)),t.updatePlotly=t.updatePlotly.bind(c(t)),t}return o=[{key:"updatePlotly",value:function(t,n,r){var o=this;this.p=this.p.then(function(){if(!o.unmounting){if(!o.el)throw Error("Missing element reference");return e.react(o.el,{data:o.props.data,layout:o.props.layout,config:o.props.config,frames:o.props.frames})}}).then(function(){!o.unmounting&&(o.syncWindowResize(t),o.syncEventHandlers(),o.figureCallback(n),r&&o.attachUpdateEvents())}).catch(function(e){o.props.onError&&o.props.onError(e)})}},{key:"componentDidMount",value:function(){this.unmounting=!1,this.updatePlotly(!0,this.props.onInitialized,!0)}},{key:"componentDidUpdate",value:function(e){this.unmounting=!1;var t=e.frames&&e.frames.length?e.frames.length:0,n=this.props.frames&&this.props.frames.length?this.props.frames.length:0,r=!(e.layout===this.props.layout&&e.data===this.props.data&&e.config===this.props.config&&n===t),o=void 0!==e.revision,i=e.revision!==this.props.revision;(r||o&&(!o||i))&&this.updatePlotly(!1,this.props.onUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,this.figureCallback(this.props.onPurge),this.resizeHandler&&y&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.removeUpdateEvents(),e.purge(this.el)}},{key:"attachUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&d.forEach(function(t){e.el.on(t,e.handleUpdate)})}},{key:"removeUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&d.forEach(function(t){e.el.removeListener(t,e.handleUpdate)})}},{key:"handleUpdate",value:function(){this.figureCallback(this.props.onUpdate)}},{key:"figureCallback",value:function(e){if("function"==typeof e){var t=this.el;e({data:t.data,layout:t.layout,frames:this.el._transitionData?this.el._transitionData._frames:null},this.el)}}},{key:"syncWindowResize",value:function(t){var n=this;y&&(this.props.useResizeHandler&&!this.resizeHandler?(this.resizeHandler=function(){return e.Plots.resize(n.el)},window.addEventListener("resize",this.resizeHandler),t&&this.resizeHandler()):!this.props.useResizeHandler&&this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}},{key:"getRef",value:function(e){this.el=e,this.props.debug&&y&&(window.gd=this.el)}},{key:"syncEventHandlers",value:function(){var e=this;p.forEach(function(t){var n=e.props["on"+t],r=e.handlers[t],o=!!r;n&&!o?e.addEventHandler(t,n):!n&&o?e.removeEventHandler(t):n&&o&&n!==r&&(e.removeEventHandler(t),e.addEventHandler(t,n))})}},{key:"addEventHandler",value:function(e,t){this.handlers[e]=t,this.el.on(this.getPlotlyEventName(e),this.handlers[e])}},{key:"removeEventHandler",value:function(e){this.el.removeListener(this.getPlotlyEventName(e),this.handlers[e]),delete this.handlers[e]}},{key:"getPlotlyEventName",value:function(e){return"plotly_"+e.toLowerCase()}},{key:"render",value:function(){return i.default.createElement("div",{id:this.props.divId,style:this.props.style,ref:this.getRef,className:this.props.className})}}],s(h.prototype,o),a&&s(h,a),Object.defineProperty(h,"prototype",{writable:!1}),h}(i.Component);return t.propTypes={data:a.default.arrayOf(a.default.object),config:a.default.object,layout:a.default.object,frames:a.default.arrayOf(a.default.object),revision:a.default.number,onInitialized:a.default.func,onPurge:a.default.func,onError:a.default.func,onUpdate:a.default.func,debug:a.default.bool,style:a.default.object,className:a.default.string,useResizeHandler:a.default.bool,divId:a.default.string},p.forEach(function(e){t.propTypes["on"+e]=a.default.func}),t.defaultProps={debug:!1,useResizeHandler:!1,data:[],style:{position:"relative",display:"inline-block"}},t};var o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(959)),a=(o=n(507))&&o.__esModule?o:{default:o};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=["AfterExport","AfterPlot","Animated","AnimatingFrame","AnimationInterrupted","AutoSize","BeforeExport","BeforeHover","ButtonClicked","Click","ClickAnnotation","Deselect","DoubleClick","Framework","Hover","LegendClick","LegendDoubleClick","Relayout","Relayouting","Restyle","Redraw","Selected","Selecting","SliderChange","SliderEnd","SliderStart","SunburstClick","Transitioning","TransitionInterrupted","Unhover","WebGlContextLost"],d=["plotly_restyle","plotly_redraw","plotly_relayout","plotly_relayouting","plotly_doubleclick","plotly_animated","plotly_sunburstclick"],y="undefined"!=typeof window},3408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2436)),o=i(n(3666));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,r.default)(o.default);t.default=a}}]);