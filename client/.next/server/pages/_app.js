"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/ui/color-mode.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/color-mode.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorModeButton: () => (/* binding */ ColorModeButton),\n/* harmony export */   ColorModeIcon: () => (/* binding */ ColorModeIcon),\n/* harmony export */   ColorModeProvider: () => (/* binding */ ColorModeProvider),\n/* harmony export */   DarkMode: () => (/* binding */ DarkMode),\n/* harmony export */   LightMode: () => (/* binding */ LightMode),\n/* harmony export */   useColorMode: () => (/* binding */ useColorMode),\n/* harmony export */   useColorModeValue: () => (/* binding */ useColorModeValue)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ClientOnly,IconButton,Skeleton,Span!=!@chakra-ui/react */ \"(pages-dir-node)/__barrel_optimize__?names=ClientOnly,IconButton,Skeleton,Span!=!./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=LuMoon,LuSun!=!react-icons/lu */ \"(pages-dir-node)/__barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_themes__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__]);\n([next_themes__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ ColorModeProvider,useColorMode,useColorModeValue,ColorModeIcon,ColorModeButton,LightMode,DarkMode auto */ \n\n\n\n\nfunction ColorModeProvider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        attribute: \"class\",\n        disableTransitionOnChange: true,\n        ...props\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nfunction useColorMode() {\n    const { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    const toggleColorMode = ()=>{\n        setTheme(resolvedTheme === \"dark\" ? \"light\" : \"dark\");\n    };\n    return {\n        colorMode: resolvedTheme,\n        setColorMode: setTheme,\n        toggleColorMode\n    };\n}\nfunction useColorModeValue(light, dark) {\n    const { colorMode } = useColorMode();\n    return colorMode === \"dark\" ? dark : light;\n}\nfunction ColorModeIcon() {\n    const { colorMode } = useColorMode();\n    return colorMode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_3__.LuMoon, {}, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 45,\n        columnNumber: 33\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_3__.LuSun, {}, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 45,\n        columnNumber: 46\n    }, this);\n}\nconst ColorModeButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ColorModeButton(props, ref) {\n    const { toggleColorMode } = useColorMode();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ClientOnly, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n            boxSize: \"8\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n            lineNumber: 56,\n            columnNumber: 27\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n            onClick: toggleColorMode,\n            variant: \"ghost\",\n            \"aria-label\": \"Toggle color mode\",\n            size: \"sm\",\n            ref: ref,\n            ...props,\n            css: {\n                _icon: {\n                    width: \"5\",\n                    height: \"5\"\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeIcon, {}, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n});\nconst LightMode = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function LightMode(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Span, {\n        color: \"fg\",\n        display: \"contents\",\n        className: \"chakra-theme light\",\n        colorPalette: \"gray\",\n        colorScheme: \"light\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 80,\n        columnNumber: 7\n    }, this);\n});\nconst DarkMode = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DarkMode(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ClientOnly_IconButton_Skeleton_Span_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Span, {\n        color: \"fg\",\n        display: \"contents\",\n        className: \"chakra-theme dark\",\n        colorPalette: \"gray\",\n        colorScheme: \"dark\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 96,\n        columnNumber: 7\n    }, this);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL3VpL2NvbG9yLW1vZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd5RTtBQUNwQjtBQUV2QjtBQUNnQjtBQUl2QyxTQUFTUyxrQkFBa0JDLEtBQTZCO0lBQzdELHFCQUNFLDhEQUFDTixzREFBYUE7UUFBQ08sV0FBVTtRQUFRQyx5QkFBeUI7UUFBRSxHQUFHRixLQUFLOzs7Ozs7QUFFeEU7QUFVTyxTQUFTRztJQUNkLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxRQUFRLEVBQUUsR0FBR1YscURBQVFBO0lBQzVDLE1BQU1XLGtCQUFrQjtRQUN0QkQsU0FBU0Qsa0JBQWtCLFNBQVMsVUFBVTtJQUNoRDtJQUNBLE9BQU87UUFDTEcsV0FBV0g7UUFDWEksY0FBY0g7UUFDZEM7SUFDRjtBQUNGO0FBRU8sU0FBU0csa0JBQXFCQyxLQUFRLEVBQUVDLElBQU87SUFDcEQsTUFBTSxFQUFFSixTQUFTLEVBQUUsR0FBR0o7SUFDdEIsT0FBT0ksY0FBYyxTQUFTSSxPQUFPRDtBQUN2QztBQUVPLFNBQVNFO0lBQ2QsTUFBTSxFQUFFTCxTQUFTLEVBQUUsR0FBR0o7SUFDdEIsT0FBT0ksY0FBYyx1QkFBUyw4REFBQ1Ysc0ZBQU1BOzs7OzZCQUFNLDhEQUFDQyxxRkFBS0E7Ozs7O0FBQ25EO0FBSU8sTUFBTWUsZ0NBQWtCakIsNkNBQWdCLENBRzdDLFNBQVNpQixnQkFBZ0JiLEtBQUssRUFBRWUsR0FBRztJQUNuQyxNQUFNLEVBQUVULGVBQWUsRUFBRSxHQUFHSDtJQUM1QixxQkFDRSw4REFBQ2Isa0hBQVVBO1FBQUMwQix3QkFBVSw4REFBQ3hCLGdIQUFRQTtZQUFDeUIsU0FBUTs7Ozs7O2tCQUN0Qyw0RUFBQzFCLGtIQUFVQTtZQUNUMkIsU0FBU1o7WUFDVGEsU0FBUTtZQUNSQyxjQUFXO1lBQ1hDLE1BQUs7WUFDTE4sS0FBS0E7WUFDSixHQUFHZixLQUFLO1lBQ1RzQixLQUFLO2dCQUNIQyxPQUFPO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO2dCQUNWO1lBQ0Y7c0JBRUEsNEVBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUFJVCxHQUFFO0FBRUssTUFBTWMsMEJBQVk5Qiw2Q0FBZ0IsQ0FDdkMsU0FBUzhCLFVBQVUxQixLQUFLLEVBQUVlLEdBQUc7SUFDM0IscUJBQ0UsOERBQUN0Qiw0R0FBSUE7UUFDSGtDLE9BQU07UUFDTkMsU0FBUTtRQUNSQyxXQUFVO1FBQ1ZDLGNBQWE7UUFDYkMsYUFBWTtRQUNaaEIsS0FBS0E7UUFDSixHQUFHZixLQUFLOzs7Ozs7QUFHZixHQUNEO0FBRU0sTUFBTWdDLHlCQUFXcEMsNkNBQWdCLENBQ3RDLFNBQVNvQyxTQUFTaEMsS0FBSyxFQUFFZSxHQUFHO0lBQzFCLHFCQUNFLDhEQUFDdEIsNEdBQUlBO1FBQ0hrQyxPQUFNO1FBQ05DLFNBQVE7UUFDUkMsV0FBVTtRQUNWQyxjQUFhO1FBQ2JDLGFBQVk7UUFDWmhCLEtBQUtBO1FBQ0osR0FBR2YsS0FBSzs7Ozs7O0FBR2YsR0FDRCIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxuYW1jaGEtYWktYXNzaXN0YW50XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcdWlcXGNvbG9yLW1vZGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB0eXBlIHsgSWNvbkJ1dHRvblByb3BzLCBTcGFuUHJvcHMgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBDbGllbnRPbmx5LCBJY29uQnV0dG9uLCBTa2VsZXRvbiwgU3BhbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCJcbmltcG9ydCB0eXBlIHsgVGhlbWVQcm92aWRlclByb3BzIH0gZnJvbSBcIm5leHQtdGhlbWVzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBMdU1vb24sIEx1U3VuIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1vZGVQcm92aWRlclByb3BzIGV4dGVuZHMgVGhlbWVQcm92aWRlclByb3BzIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvck1vZGVQcm92aWRlcihwcm9wczogQ29sb3JNb2RlUHJvdmlkZXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSB7Li4ucHJvcHN9IC8+XG4gIClcbn1cblxuZXhwb3J0IHR5cGUgQ29sb3JNb2RlID0gXCJsaWdodFwiIHwgXCJkYXJrXCJcblxuZXhwb3J0IGludGVyZmFjZSBVc2VDb2xvck1vZGVSZXR1cm4ge1xuICBjb2xvck1vZGU6IENvbG9yTW9kZVxuICBzZXRDb2xvck1vZGU6IChjb2xvck1vZGU6IENvbG9yTW9kZSkgPT4gdm9pZFxuICB0b2dnbGVDb2xvck1vZGU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbG9yTW9kZSgpOiBVc2VDb2xvck1vZGVSZXR1cm4ge1xuICBjb25zdCB7IHJlc29sdmVkVGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHRvZ2dsZUNvbG9yTW9kZSA9ICgpID0+IHtcbiAgICBzZXRUaGVtZShyZXNvbHZlZFRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sb3JNb2RlOiByZXNvbHZlZFRoZW1lIGFzIENvbG9yTW9kZSxcbiAgICBzZXRDb2xvck1vZGU6IHNldFRoZW1lLFxuICAgIHRvZ2dsZUNvbG9yTW9kZSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29sb3JNb2RlVmFsdWU8VD4obGlnaHQ6IFQsIGRhcms6IFQpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIHJldHVybiBjb2xvck1vZGUgPT09IFwiZGFya1wiID8gZGFyayA6IGxpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvck1vZGVJY29uKCkge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgcmV0dXJuIGNvbG9yTW9kZSA9PT0gXCJkYXJrXCIgPyA8THVNb29uIC8+IDogPEx1U3VuIC8+XG59XG5cbmludGVyZmFjZSBDb2xvck1vZGVCdXR0b25Qcm9wcyBleHRlbmRzIE9taXQ8SWNvbkJ1dHRvblByb3BzLCBcImFyaWEtbGFiZWxcIj4ge31cblxuZXhwb3J0IGNvbnN0IENvbG9yTW9kZUJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxCdXR0b25FbGVtZW50LFxuICBDb2xvck1vZGVCdXR0b25Qcm9wc1xuPihmdW5jdGlvbiBDb2xvck1vZGVCdXR0b24ocHJvcHMsIHJlZikge1xuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgcmV0dXJuIChcbiAgICA8Q2xpZW50T25seSBmYWxsYmFjaz17PFNrZWxldG9uIGJveFNpemU9XCI4XCIgLz59PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGNvbG9yIG1vZGVcIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBfaWNvbjoge1xuICAgICAgICAgICAgd2lkdGg6IFwiNVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29sb3JNb2RlSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvQ2xpZW50T25seT5cbiAgKVxufSlcblxuZXhwb3J0IGNvbnN0IExpZ2h0TW9kZSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFNwYW5FbGVtZW50LCBTcGFuUHJvcHM+KFxuICBmdW5jdGlvbiBMaWdodE1vZGUocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BhblxuICAgICAgICBjb2xvcj1cImZnXCJcbiAgICAgICAgZGlzcGxheT1cImNvbnRlbnRzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2hha3JhLXRoZW1lIGxpZ2h0XCJcbiAgICAgICAgY29sb3JQYWxldHRlPVwiZ3JheVwiXG4gICAgICAgIGNvbG9yU2NoZW1lPVwibGlnaHRcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4pXG5cbmV4cG9ydCBjb25zdCBEYXJrTW9kZSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFNwYW5FbGVtZW50LCBTcGFuUHJvcHM+KFxuICBmdW5jdGlvbiBEYXJrTW9kZShwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTcGFuXG4gICAgICAgIGNvbG9yPVwiZmdcIlxuICAgICAgICBkaXNwbGF5PVwiY29udGVudHNcIlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFrcmEtdGhlbWUgZGFya1wiXG4gICAgICAgIGNvbG9yUGFsZXR0ZT1cImdyYXlcIlxuICAgICAgICBjb2xvclNjaGVtZT1cImRhcmtcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH0sXG4pXG4iXSwibmFtZXMiOlsiQ2xpZW50T25seSIsIkljb25CdXR0b24iLCJTa2VsZXRvbiIsIlNwYW4iLCJUaGVtZVByb3ZpZGVyIiwidXNlVGhlbWUiLCJSZWFjdCIsIkx1TW9vbiIsIkx1U3VuIiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJwcm9wcyIsImF0dHJpYnV0ZSIsImRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2UiLCJ1c2VDb2xvck1vZGUiLCJyZXNvbHZlZFRoZW1lIiwic2V0VGhlbWUiLCJ0b2dnbGVDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImxpZ2h0IiwiZGFyayIsIkNvbG9yTW9kZUljb24iLCJDb2xvck1vZGVCdXR0b24iLCJmb3J3YXJkUmVmIiwicmVmIiwiZmFsbGJhY2siLCJib3hTaXplIiwib25DbGljayIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIiwic2l6ZSIsImNzcyIsIl9pY29uIiwid2lkdGgiLCJoZWlnaHQiLCJMaWdodE1vZGUiLCJjb2xvciIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJjb2xvclBhbGV0dGUiLCJjb2xvclNjaGVtZSIsIkRhcmtNb2RlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/ui/color-mode.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/ui/provider.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/provider.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Provider: () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChakraProvider,createSystem,defaultConfig,defineConfig!=!@chakra-ui/react */ \"(pages-dir-node)/__barrel_optimize__?names=ChakraProvider,createSystem,defaultConfig,defineConfig!=!./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _color_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-mode */ \"(pages-dir-node)/./src/components/ui/color-mode.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_color_mode__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);\n([_color_mode__WEBPACK_IMPORTED_MODULE_1__, _barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ Provider auto */ \n\n\nconst config = (0,_barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.defineConfig)({\n    globalCss: {\n        \"html, body\": {\n            margin: 0,\n            padding: 0,\n            boxSizing: \"border-box\"\n        }\n    }\n});\nconst system = (0,_barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.createSystem)(_barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.defaultConfig, config);\nfunction Provider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChakraProvider_createSystem_defaultConfig_defineConfig_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n        //value={defaultSystem}\n        value: system,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_color_mode__WEBPACK_IMPORTED_MODULE_1__.ColorModeProvider, {\n            ...props\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\provider.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\components\\\\ui\\\\provider.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL3VpL3Byb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVeUI7QUFLSjtBQUVyQixNQUFNSyxTQUF1QkYsMklBQVlBLENBQUM7SUFDeENHLFdBQVc7UUFDVCxjQUFjO1lBQ1pDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxXQUFXO1FBQ2I7SUFDRjtBQUNGO0FBRUEsTUFBTUMsU0FBd0JSLDJJQUFZQSxDQUFDRCx3SUFBYUEsRUFBRUk7QUFFbkQsU0FBU00sU0FBU0MsS0FBNkI7SUFDcEQscUJBQ0UsOERBQUNaLHlJQUFjQTtRQUNiLHVCQUF1QjtRQUN2QmEsT0FBUUg7a0JBRVIsNEVBQUNOLDBEQUFpQkE7WUFBRyxHQUFHUSxLQUFLOzs7Ozs7Ozs7OztBQUduQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxuYW1jaGEtYWktYXNzaXN0YW50XFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcdWlcXHByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQge1xuICBDaGFrcmFQcm92aWRlcixcbiAgLy9kZWZhdWx0U3lzdGVtLFxuICBkZWZhdWx0Q29uZmlnLFxuICBjcmVhdGVTeXN0ZW0sXG4gIGRlZmluZUNvbmZpZyxcbiAgU3lzdGVtQ29uZmlnLFxuICBTeXN0ZW1Db250ZXh0XG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuaW1wb3J0IHtcbiAgQ29sb3JNb2RlUHJvdmlkZXIsXG4gIHR5cGUgQ29sb3JNb2RlUHJvdmlkZXJQcm9wcyxcbn0gZnJvbSBcIi4vY29sb3ItbW9kZVwiXG5cbmNvbnN0IGNvbmZpZzogU3lzdGVtQ29uZmlnID0gZGVmaW5lQ29uZmlnKHtcbiAgZ2xvYmFsQ3NzOiB7XG4gICAgXCJodG1sLCBib2R5XCI6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBzeXN0ZW06IFN5c3RlbUNvbnRleHQgPSBjcmVhdGVTeXN0ZW0oZGVmYXVsdENvbmZpZywgY29uZmlnKVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHM6IENvbG9yTW9kZVByb3ZpZGVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXJcbiAgICAgIC8vdmFsdWU9e2RlZmF1bHRTeXN0ZW19XG4gICAgICB2YWx1ZT17IHN5c3RlbSB9XG4gICAgPlxuICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIHsgLi4ucHJvcHMgfSAvPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJkZWZhdWx0Q29uZmlnIiwiY3JlYXRlU3lzdGVtIiwiZGVmaW5lQ29uZmlnIiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJjb25maWciLCJnbG9iYWxDc3MiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwic3lzdGVtIiwiUHJvdmlkZXIiLCJwcm9wcyIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/ui/provider.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/provider */ \"(pages-dir-node)/./src/components/ui/provider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_provider__WEBPACK_IMPORTED_MODULE_1__]);\n_components_ui_provider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst App = ({ Component, pageProps })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_provider__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\namcha-ai-assistant\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUduRCxNQUFNQyxNQUFNLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksaUJBQzNDLDhEQUFDSCw2REFBUUE7a0JBQ0wsNEVBQUNFO1lBQVksR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJakMsaUVBQWVGLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcbmFtY2hhLWFpLWFzc2lzdGFudFxcY2xpZW50XFxzcmNcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcHJvdmlkZXJcIlxyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4gKFxyXG4gICAgPFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgeyAuLi5wYWdlUHJvcHMgfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=ChakraProvider,createSystem,defaultConfig,defineConfig!=!./node_modules/@chakra-ui/react/dist/esm/index.js":
/*!********************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=ChakraProvider,createSystem,defaultConfig,defineConfig!=!./node_modules/@chakra-ui/react/dist/esm/index.js ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChakraProvider: () => (/* reexport safe */ _styled_system_provider_js__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider),\n/* harmony export */   createSystem: () => (/* reexport safe */ _styled_system_system_js__WEBPACK_IMPORTED_MODULE_1__.createSystem),\n/* harmony export */   defaultConfig: () => (/* reexport safe */ _preset_js__WEBPACK_IMPORTED_MODULE_2__.defaultConfig),\n/* harmony export */   defineConfig: () => (/* reexport safe */ _styled_system_config_js__WEBPACK_IMPORTED_MODULE_3__.defineConfig)\n/* harmony export */ });\n/* harmony import */ var _styled_system_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled-system/provider.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/styled-system/provider.js\");\n/* harmony import */ var _styled_system_system_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-system/system.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/styled-system/system.js\");\n/* harmony import */ var _preset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preset.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/preset.js\");\n/* harmony import */ var _styled_system_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-system/config.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/styled-system/config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styled_system_provider_js__WEBPACK_IMPORTED_MODULE_0__, _styled_system_system_js__WEBPACK_IMPORTED_MODULE_1__, _preset_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_styled_system_provider_js__WEBPACK_IMPORTED_MODULE_0__, _styled_system_system_js__WEBPACK_IMPORTED_MODULE_1__, _preset_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUNoYWtyYVByb3ZpZGVyLGNyZWF0ZVN5c3RlbSxkZWZhdWx0Q29uZmlnLGRlZmluZUNvbmZpZyE9IS4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvcmVhY3QvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzREO0FBQ0o7QUFDYiIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxuYW1jaGEtYWktYXNzaXN0YW50XFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQGNoYWtyYS11aVxccmVhY3RcXGRpc3RcXGVzbVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCIuL3N0eWxlZC1zeXN0ZW0vcHJvdmlkZXIuanNcIlxuZXhwb3J0IHsgY3JlYXRlU3lzdGVtIH0gZnJvbSBcIi4vc3R5bGVkLXN5c3RlbS9zeXN0ZW0uanNcIlxuZXhwb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gXCIuL3ByZXNldC5qc1wiXG5leHBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwiLi9zdHlsZWQtc3lzdGVtL2NvbmZpZy5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=ChakraProvider,createSystem,defaultConfig,defineConfig!=!./node_modules/@chakra-ui/react/dist/esm/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=ClientOnly,IconButton,Skeleton,Span!=!./node_modules/@chakra-ui/react/dist/esm/index.js":
/*!*************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=ClientOnly,IconButton,Skeleton,Span!=!./node_modules/@chakra-ui/react/dist/esm/index.js ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ClientOnly: () => (/* reexport safe */ _components_client_only_client_only_js__WEBPACK_IMPORTED_MODULE_0__.ClientOnly),\n/* harmony export */   IconButton: () => (/* reexport safe */ _components_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.IconButton),\n/* harmony export */   Skeleton: () => (/* reexport safe */ _components_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__.Skeleton),\n/* harmony export */   Span: () => (/* reexport safe */ _components_box_span_js__WEBPACK_IMPORTED_MODULE_3__.Span)\n/* harmony export */ });\n/* harmony import */ var _components_client_only_client_only_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/client-only/client-only.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/components/client-only/client-only.js\");\n/* harmony import */ var _components_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/icon-button.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/components/button/icon-button.js\");\n/* harmony import */ var _components_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skeleton/skeleton.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/components/skeleton/skeleton.js\");\n/* harmony import */ var _components_box_span_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/box/span.js */ \"(pages-dir-node)/./node_modules/@chakra-ui/react/dist/esm/components/box/span.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__, _components_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__, _components_box_span_js__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__, _components_skeleton_skeleton_js__WEBPACK_IMPORTED_MODULE_2__, _components_box_span_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUNsaWVudE9ubHksSWNvbkJ1dHRvbixTa2VsZXRvbixTcGFuIT0hLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9yZWFjdC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDb0U7QUFDTDtBQUNIIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXG5hbWNoYS1haS1hc3Npc3RhbnRcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxAY2hha3JhLXVpXFxyZWFjdFxcZGlzdFxcZXNtXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IENsaWVudE9ubHkgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NsaWVudC1vbmx5L2NsaWVudC1vbmx5LmpzXCJcbmV4cG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9pY29uLWJ1dHRvbi5qc1wiXG5leHBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24uanNcIlxuZXhwb3J0IHsgU3BhbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm94L3NwYW4uanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=ClientOnly,IconButton,Skeleton,Span!=!./node_modules/@chakra-ui/react/dist/esm/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Projects_namcha_ai_assistant_client_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/lu/index.mjs */ "(pages-dir-node)/./node_modules/react-icons/lu/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in D_Projects_namcha_ai_assistant_client_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => D_Projects_namcha_ai_assistant_client_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "@ark-ui/react/accordion":
/*!******************************************!*\
  !*** external "@ark-ui/react/accordion" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/accordion");;

/***/ }),

/***/ "@ark-ui/react/anatomy":
/*!****************************************!*\
  !*** external "@ark-ui/react/anatomy" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/anatomy");;

/***/ }),

/***/ "@ark-ui/react/avatar":
/*!***************************************!*\
  !*** external "@ark-ui/react/avatar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/avatar");;

/***/ }),

/***/ "@ark-ui/react/checkbox":
/*!*****************************************!*\
  !*** external "@ark-ui/react/checkbox" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/checkbox");;

/***/ }),

/***/ "@ark-ui/react/collapsible":
/*!********************************************!*\
  !*** external "@ark-ui/react/collapsible" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/collapsible");;

/***/ }),

/***/ "@ark-ui/react/color-picker":
/*!*********************************************!*\
  !*** external "@ark-ui/react/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/color-picker");;

/***/ }),

/***/ "@ark-ui/react/dialog":
/*!***************************************!*\
  !*** external "@ark-ui/react/dialog" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/dialog");;

/***/ }),

/***/ "@ark-ui/react/editable":
/*!*****************************************!*\
  !*** external "@ark-ui/react/editable" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/editable");;

/***/ }),

/***/ "@ark-ui/react/field":
/*!**************************************!*\
  !*** external "@ark-ui/react/field" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/field");;

/***/ }),

/***/ "@ark-ui/react/fieldset":
/*!*****************************************!*\
  !*** external "@ark-ui/react/fieldset" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/fieldset");;

/***/ }),

/***/ "@ark-ui/react/file-upload":
/*!********************************************!*\
  !*** external "@ark-ui/react/file-upload" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/file-upload");;

/***/ }),

/***/ "@ark-ui/react/hover-card":
/*!*******************************************!*\
  !*** external "@ark-ui/react/hover-card" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/hover-card");;

/***/ }),

/***/ "@ark-ui/react/menu":
/*!*************************************!*\
  !*** external "@ark-ui/react/menu" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/menu");;

/***/ }),

/***/ "@ark-ui/react/number-input":
/*!*********************************************!*\
  !*** external "@ark-ui/react/number-input" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/number-input");;

/***/ }),

/***/ "@ark-ui/react/pin-input":
/*!******************************************!*\
  !*** external "@ark-ui/react/pin-input" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/pin-input");;

/***/ }),

/***/ "@ark-ui/react/popover":
/*!****************************************!*\
  !*** external "@ark-ui/react/popover" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/popover");;

/***/ }),

/***/ "@ark-ui/react/progress":
/*!*****************************************!*\
  !*** external "@ark-ui/react/progress" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/progress");;

/***/ }),

/***/ "@ark-ui/react/qr-code":
/*!****************************************!*\
  !*** external "@ark-ui/react/qr-code" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/qr-code");;

/***/ }),

/***/ "@ark-ui/react/radio-group":
/*!********************************************!*\
  !*** external "@ark-ui/react/radio-group" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/radio-group");;

/***/ }),

/***/ "@ark-ui/react/rating-group":
/*!*********************************************!*\
  !*** external "@ark-ui/react/rating-group" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/rating-group");;

/***/ }),

/***/ "@ark-ui/react/segment-group":
/*!**********************************************!*\
  !*** external "@ark-ui/react/segment-group" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/segment-group");;

/***/ }),

/***/ "@ark-ui/react/select":
/*!***************************************!*\
  !*** external "@ark-ui/react/select" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/select");;

/***/ }),

/***/ "@ark-ui/react/slider":
/*!***************************************!*\
  !*** external "@ark-ui/react/slider" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/slider");;

/***/ }),

/***/ "@ark-ui/react/switch":
/*!***************************************!*\
  !*** external "@ark-ui/react/switch" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/switch");;

/***/ }),

/***/ "@ark-ui/react/tooltip":
/*!****************************************!*\
  !*** external "@ark-ui/react/tooltip" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@ark-ui/react/tooltip");;

/***/ }),

/***/ "@emotion/is-prop-valid":
/*!*****************************************!*\
  !*** external "@emotion/is-prop-valid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@emotion/is-prop-valid");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ "@emotion/serialize":
/*!*************************************!*\
  !*** external "@emotion/serialize" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@emotion/serialize");;

/***/ }),

/***/ "@emotion/use-insertion-effect-with-fallbacks":
/*!***************************************************************!*\
  !*** external "@emotion/use-insertion-effect-with-fallbacks" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = import("@emotion/use-insertion-effect-with-fallbacks");;

/***/ }),

/***/ "@emotion/utils":
/*!*********************************!*\
  !*** external "@emotion/utils" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/utils");;

/***/ }),

/***/ "@pandacss/is-valid-prop":
/*!******************************************!*\
  !*** external "@pandacss/is-valid-prop" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@pandacss/is-valid-prop");;

/***/ }),

/***/ "fast-safe-stringify":
/*!**************************************!*\
  !*** external "fast-safe-stringify" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("fast-safe-stringify");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-themes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-icons","vendor-chunks/@chakra-ui"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();