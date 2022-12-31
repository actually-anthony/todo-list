/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n}\\n\\n/* going to add dark color by default */\\n:root {\\n  --main-bg-color: #1e1e1e;\\n  --highlight-color: #414141;\\n  --project-font-size: 1em;\\n  --border-color: #474747;\\n  --border-size: 1px;\\n}\\n\\nbody {\\n  height: 100vh;\\n  display: flex;\\n  margin: 0;\\n}\\n\\n.main {\\n  width: 100vw;\\n  background-color: #1e1e1e;\\n  display: flex;\\n}\\n\\n#projects {\\n  background-color: #191919;\\n  margin: 0;\\n}\\n\\n.project_list {\\n  min-width: 15vw;\\n\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n}\\n\\n.project {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-size: var(--project-font-size);\\n  color: white;\\n  background-color: #191919;\\n  padding: 10px;\\n  cursor: pointer;\\n\\n  border-radius: 10px;\\n  border-style: black 2px dotted;\\n}\\n\\n.project:hover,\\n.project.active {\\n  color: white;\\n  background-color: #474747;\\n}\\n\\n#tasks {\\n  width: 50vw;\\n  border-left: 1px solid #474747;\\n  border-right: 1px solid #474747;\\n  padding: 1vw;\\n}\\n\\n.task,\\n.test_task {\\n  display: flex;\\n  padding: 10px;\\n  color: white;\\n  background-color: #1e1e1e;\\n  height: 2.5rem;\\n  border-radius: 2px;\\n  border-bottom: 1px solid #474747;\\n}\\n\\n.task_list {\\n  display: flex;\\n  flex-direction: column;\\n  overflow: auto;\\n  max-height: 80vh;\\n}\\n\\n.task:hover {\\n  background-color: #474747;\\n}\\n\\n.task_header {\\n  display: flex;\\n  flex-direction: column;\\n  color: white;\\n}\\n\\n.task_header > input {\\n  color: white;\\n  background-color: #292929;\\n  height: 2rem;\\n  margin-top: 10px;\\n  margin-bottom: 15px;\\n  border-radius: 5px;\\n  text-indent: 10px;\\n  font-size: 1rem;\\n  border: none;\\n}\\n\\n.task_amount {\\n  font-size: 0.7rem;\\n}\\n\\n.task_input:focus {\\n  outline: none !important;\\n  border: 1px solid #456eee;\\n}\\n\\n.task_header > div {\\n  font-size: 2rem;\\n}\\n\\n/* too lazy to make my own custom checkmark */\\n.check-box {\\n  height: 1rem;\\n  width: 1rem;\\n  accent-color: #474747;\\n}\\n\\n.left-side {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ \"./src/modules/interface.js\");\n/* harmony import */ var _modules_project_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project_master */ \"./src/modules/project_master.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\n// gets default tasks\nlet projects = (0,_modules_storage__WEBPACK_IMPORTED_MODULE_3__.generateProjects)();\n\nconst projects_element = document.getElementById(\"projects\");\nconst task_elements = document.getElementById(\"tasks\");\nlet activeProject = projects[0];\n\nprojects_element.appendChild((0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectList)(projects));\ntask_elements.appendChild((0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.createTaskHeader)(projects[0]));\n\n(0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)(projects[0], projects);\n(0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksRemaining)(projects);\n\nadd_project_listeners();\n\nconst task_input = document.querySelector(\".task_input\");\nconst tasks = document.querySelectorAll(\".task\");\n\ntask_input.addEventListener(\"keypress\", function (e) {\n  if (e.key === \"Enter\" && e.target.value != \"\") {\n    let task_title = e.target.value;\n    (0,_modules_project_master__WEBPACK_IMPORTED_MODULE_2__.add_task)(activeProject, task_title);\n    (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)(activeProject, projects);\n    (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.erase_task_input)();\n    (0,_modules_project_master__WEBPACK_IMPORTED_MODULE_2__.update_all_project)(projects);\n    (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksRemaining)(projects);\n    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_3__.storeProjects)(projects);\n  }\n});\n\n// TODO: move to itnerface.js\nfunction add_project_listeners() {\n  const elements = document.querySelectorAll(\".project\");\n\n  elements.forEach((element, i) => {\n    element.addEventListener(\"click\", function (e) {\n      activeProject = projects[i];\n      (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)(activeProject, projects);\n      (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.updateTaskHeader)(activeProject);\n      (0,_modules_interface__WEBPACK_IMPORTED_MODULE_1__.activateProject)(e.target, activeProject);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activateProject\": () => (/* binding */ activateProject),\n/* harmony export */   \"createProjectList\": () => (/* binding */ createProjectList),\n/* harmony export */   \"createTaskHeader\": () => (/* binding */ createTaskHeader),\n/* harmony export */   \"erase_task_input\": () => (/* binding */ erase_task_input),\n/* harmony export */   \"populateTaskList\": () => (/* binding */ populateTaskList),\n/* harmony export */   \"updateTaskHeader\": () => (/* binding */ updateTaskHeader),\n/* harmony export */   \"updateTasksRemaining\": () => (/* binding */ updateTasksRemaining)\n/* harmony export */ });\n/* harmony import */ var _project_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_master */ \"./src/modules/project_master.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n// TODO: Make this into a class ?\n// new interface (project_list, task_list)\n// well tbh, a lot of the variables can be put at the top\n\n\n\n\nfunction createProjectList(projects) {\n  // parent element\n  const project_element = document.createElement(\"div\");\n  project_element.classList.add(\"project_list\");\n\n  // loop through projects and append\n  // TODO: replace _ with a name\n  projects.forEach((project) => {\n    const _ = document.createElement(\"div\");\n    _.classList.add(\"project\");\n\n    const project_name = document.createElement(\"div\");\n    project_name.innerText = project.name;\n\n    const task_amount = document.createElement(\"div\");\n    task_amount.classList.add(\"task_amount\");\n\n    if (project.unfinished_tasks > 0) {\n      task_amount.innerText = project.unfinished_tasks;\n    }\n\n    _.appendChild(project_name);\n    _.appendChild(task_amount);\n\n    // add number of tasks due\\\n\n    project_element.appendChild(_);\n  });\n\n  return project_element;\n}\n\nfunction updateTasksRemaining(projects) {\n  // index should line up to projects\n  const project_list = document.querySelectorAll(\".project\");\n\n  projects.forEach((project, index) => {\n    const task_amount = project_list[index].querySelector(\".task_amount\");\n    task_amount.innerText = project.tasks.length;\n  });\n}\n\nfunction activateProject(e) {\n  // deactivate the other projects\n  const projects = document.querySelectorAll(\".project\");\n\n  projects.forEach((project) => {\n    project.classList.remove(\"active\");\n  });\n\n  e.classList.add(\"active\");\n}\n\nfunction populateTaskList(active_project, projects) {\n  const task_element = document.getElementById(\"tasks\");\n  let task_list;\n  // clear it out by default\n\n  if (document.querySelector(\".task_list\") == null) {\n    task_list = document.createElement(\"div\");\n    task_list.classList.add(\"task_list\");\n  } else {\n    task_list = document.querySelector(\".task_list\");\n    task_list.innerHTML = \"\";\n  }\n\n  active_project.tasks.forEach((t) => {\n    if (!t.finished) {\n      const task_container = document.createElement(\"div\");\n      const task_title = document.createElement(\"div\");\n      const checkbox = document.createElement(\"input\");\n\n      const left_task = document.createElement(\"div\");\n      left_task.classList.add(\"left-side\");\n\n      task_container.classList.add(\"task\");\n\n      task_title.classList.add(\"task_title\");\n      task_title.innerText = t.title;\n\n      checkbox.setAttribute(\"type\", \"checkbox\");\n      checkbox.classList.add(\"check-box\");\n\n      left_task.appendChild(checkbox);\n      left_task.appendChild(task_title);\n      task_container.appendChild(left_task);\n\n      //\n\n      task_list.appendChild(task_container);\n    }\n  });\n\n  task_element.appendChild(task_list);\n  add_checkbox_listeners(active_project, projects);\n}\n\nfunction add_checkbox_listeners(active_project, projects) {\n  const check_boxes = document.querySelectorAll(\".check-box\");\n\n  check_boxes.forEach((box) => {\n    box.addEventListener(\"click\", (e) => {\n      const tasks = document.querySelectorAll(\".task\");\n      const selected_task = e.target.parentNode.parentNode;\n\n      tasks.forEach((task, index) => {\n        if (task === selected_task) {\n          (0,_project_master__WEBPACK_IMPORTED_MODULE_0__.finish_task)(active_project, projects, index);\n          populateTaskList(active_project, projects);\n          (0,_project_master__WEBPACK_IMPORTED_MODULE_0__.update_all_project)(projects);\n          updateTasksRemaining(projects);\n          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProjects)(projects);\n        }\n      });\n    });\n  });\n}\n\nfunction erase_task_input() {\n  const task_input = document.querySelector(\".task_input\");\n  task_input.value = \"\";\n}\n\nfunction updateTaskHeader(project) {\n  const title = document.querySelector(\".title\");\n  title.textContent = project.name;\n\n  const input = document.querySelector(\".task_input\");\n  input.setAttribute(\"placeholder\", `Add task to \"${project.name}\"`);\n}\n\nfunction createTaskHeader(project) {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"task_header\");\n\n  const title = document.createElement(\"div\");\n  title.innerText = project.name;\n  title.classList.add(\"title\");\n\n  header.appendChild(title);\n\n  var input = document.createElement(\"INPUT\");\n  input.setAttribute(\"type\", \"text\");\n  input.classList.add(\"task_input\");\n  input.setAttribute(\"placeholder\", `Add task to \"${project.name}\"`);\n\n  header.appendChild(input);\n\n  return header;\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/interface.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name, dueDate = null) {\n    this.name = name;\n    this.dueDate = dueDate;\n    this.tasks = [];\n  }\n\n  get unfinished_tasks() {\n    const unfinished = this.tasks.filter((task) => {\n      return task.finished == false;\n    });\n\n    return unfinished.length;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/project_generator.js":
/*!******************************************!*\
  !*** ./src/modules/project_generator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load_default_projects\": () => (/* binding */ load_default_projects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n// update default_projects with tasks based on UI\n\n\n\n\nconst default_projects = createDefaultProjects();\nconst tasks = TESTcreateTodayTasks();\n\nfunction createDefaultProjects() {\n  const default_names = [\"Today\", \"Overdue\"];\n\n  // make project classes\n  const default_projects = [];\n\n  default_projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](default_names[0], \"2022/12/20\"));\n  default_projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](default_names[1], \"2022/12/19\"));\n\n  return default_projects;\n}\n\nfunction TESTcreateTodayTasks() {\n  const test_tasks_names = [\"first task\", \"second_task\"];\n\n  const tasks = [];\n\n  test_tasks_names.forEach((task_name) => {\n    tasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](task_name, \"Today\", \"2022/12/20\"));\n  });\n\n  tasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Eat oreos\", \"Overdue\", \"2022/12/19\"));\n\n  return tasks;\n}\n\n// project that contains all tasks\nfunction loadAllProject() {\n  const all_project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"All\");\n\n  tasks.forEach((task) => {\n    all_project.tasks.push(task);\n  });\n\n  default_projects.push(all_project);\n}\n\n// put task into appropriate project\nfunction load_default_projects() {\n  tasks.forEach((task) => {\n    default_projects.forEach((project) => {\n      // compare dates\n      if (task.origin_project == project.name) {\n        project.tasks.push(task);\n      }\n      // TODO: else to add overdue tasks\n    });\n  });\n\n  loadAllProject();\n\n  return default_projects;\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/project_generator.js?");

/***/ }),

/***/ "./src/modules/project_master.js":
/*!***************************************!*\
  !*** ./src/modules/project_master.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add_task\": () => (/* binding */ add_task),\n/* harmony export */   \"finish_task\": () => (/* binding */ finish_task),\n/* harmony export */   \"update_all_project\": () => (/* binding */ update_all_project)\n/* harmony export */ });\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/modules/interface.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\n// TODO: Adding new tasks in from the task_header - will have to call interface .js\n\n// press enter on text_input, adds new list\n\n// add to the project\n// get current project and new task\n\nfunction get_all_tasks(projects) {\n  let tasks = [];\n\n  // recall: filter returns an array\n  const all_project = projects.filter((project) => {\n    return project.name == \"All\";\n  })[0];\n\n  // get tasks that were added to 'all'\n  const tasks_added_to_all = all_project.tasks.filter((task) => {\n    return task.origin_project == \"All\";\n  });\n\n  // add projects task to all but keep origin\n  projects.forEach((project) => {\n    if (project.name != \"All\") {\n      tasks = tasks.concat(project.tasks);\n    }\n  });\n\n  tasks = tasks.concat(tasks_added_to_all);\n\n  return tasks;\n}\n\n// from 'All' project not all projects\nfunction update_all_project(projects) {\n  // remove tasks from all that are from other origin projects but not existing anymore\n\n  // loop through 'all' tasks\n  // compare origin with project name\n  // if it's not in the\n\n  projects.forEach((project) => {\n    if (project.name == \"All\") {\n      project.tasks = get_all_tasks(projects);\n    }\n  });\n}\n\nfunction add_task(project, task) {\n  const addedTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](task, project.name, project.dueDate);\n  project.tasks.push(addedTask);\n}\n\nfunction finish_task(active_project, projects, task_index) {\n  if (active_project.name == \"All\") {\n    let task = active_project.tasks[task_index];\n\n    active_project.tasks.splice(task_index, 1);\n\n    if (task.origin_project != \"All\") {\n      // new all project\n      projects.forEach((p) => {\n        // select the correct corresponding project\n        if (p.name == task.origin_project) {\n          p.tasks.forEach((t, i) => {\n            if (t === task) {\n              p.tasks.splice(i, 1);\n            }\n          });\n        }\n      });\n    }\n  } else {\n    active_project.splice(task_index, 1);\n  }\n}\n\n// TODO: Adding descriptions to tasks\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/project_master.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProjects\": () => (/* binding */ generateProjects),\n/* harmony export */   \"storeProjects\": () => (/* binding */ storeProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _project_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_generator */ \"./src/modules/project_generator.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\n\nfunction storeProjects(projects) {\n  // wipe out previous storage\n  localStorage.clear();\n  const serialized_projects = JSON.stringify(projects);\n  localStorage.setItem(\"projects\", serialized_projects);\n}\n\nfunction generateProjects() {\n  // get projects\n  let stored_projects = localStorage.getItem(\"projects\");\n\n  // make default projects and store them\n  if (!stored_projects) {\n    // array value of projects\n\n    const projects = (0,_project_generator__WEBPACK_IMPORTED_MODULE_1__.load_default_projects)();\n\n    // saves projects\n    storeProjects(projects);\n    return projects;\n  }\n\n  // now we have to create a new projects class based on stored_projects\n  const projects = [];\n\n  stored_projects = JSON.parse(stored_projects);\n\n  stored_projects.forEach((project) => {\n    let project_object = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](project.name, project.dueDate);\n    project_object.tasks = addStoredTasks(project.tasks);\n    projects.push(project_object);\n  });\n\n  return projects;\n\n  // this is applicable to any project size...\n}\n\nfunction addStoredTasks(taskArray) {\n  const tasks = [];\n\n  taskArray.forEach((storedTask) => {\n    tasks.push(\n      new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n        storedTask.title,\n        storedTask.origin_project,\n        storedTask.dueDate,\n        storedTask.finished,\n        storedTask.description\n      )\n    );\n  });\n\n  return tasks;\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(\n    title,\n    origin_project,\n    dueDate = null,\n    finished = false,\n    description = null\n  ) {\n    this.title = title;\n    this.origin_project = origin_project;\n    this.dueDate = dueDate;\n    this.finished = finished;\n    this.description = description;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;