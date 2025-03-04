"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./src/features/speech_recognition.tsx":
/*!*********************************************!*\
  !*** ./src/features/speech_recognition.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SpeechRecognition {\n    constructor(textarea, setIsConnected){\n        this.isStarted = false;\n        this.isConnected = false;\n        this.beforSendTime = ()=>{\n            clearTimeout(this.sendTimeOut);\n            this.sendTimeOut = setTimeout(()=>{\n                //console.log(\"Send to server.\")\n                if (this.textarea.value != \"\") {\n                    //console.log(this.textarea.value)\n                    if (this.socket) {\n                        const data = {\n                            typedf: \"request_openai\",\n                            text: this.textarea.value\n                        };\n                        this.socket.send(JSON.stringify(data));\n                    }\n                    this.textarea.value = \"\";\n                    this.speechRecognition.stop();\n                }\n                this.beforSendTime();\n            }, 3000);\n        };\n        this.onResult = (e)=>{\n            const results = e.results;\n            let transcript = \"\";\n            Array.from(results).forEach((result)=>{\n                const alternative = result[0];\n                transcript += alternative.transcript;\n            });\n            //console.log(transcript)\n            this.textarea.value = transcript;\n            this.beforSendTime();\n        };\n        this.onEnd = ()=>{\n            //this.textarea.value = \"\"\n            if (this.isStarted) this.speechRecognition.start();\n        };\n        this.start = ()=>{\n            if (!this.isStarted) this.speechRecognition.start();\n            this.isStarted = true;\n            this.beforSendTime();\n            this.textarea.value = \"\";\n        };\n        this.stop = ()=>{\n            if (this.isStarted) this.speechRecognition.stop();\n            this.isStarted = false;\n            clearTimeout(this.sendTimeOut);\n            this.textarea.value = \"\";\n        };\n        this.getAudioDevice = async ()=>{\n            const devices = await navigator.mediaDevices.enumerateDevices();\n            return devices.filter((mdi)=>mdi.kind == \"audioinput\");\n        };\n        this.switchAudioInputDevice = async (deviceId)=>{\n            const newMediaStream = await navigator.mediaDevices.getUserMedia({\n                audio: {\n                    deviceId: {\n                        exact: deviceId\n                    }\n                },\n                video: false\n            });\n            this.mediaStream = newMediaStream;\n        };\n        this.mediaChange = (deviceId)=>{\n            console.log(deviceId);\n            this.switchAudioInputDevice(deviceId);\n        };\n        this.connectWebSocket = ()=>{\n            if (this.socket == undefined) {\n                this.socket = new WebSocket(\"ws://localhost:6336\");\n                this.socket.onopen = ()=>{\n                    console.log(\"WebSocket connected.\");\n                    this.setIsConnected(true);\n                };\n                this.socket.onmessage = (e)=>{\n                    console.log(e.data);\n                };\n                this.socket.onclose = ()=>{\n                    console.log(\"WebSocket closed.\");\n                    this.isConnected = false;\n                    this.setIsConnected(false);\n                };\n                this.socket.onerror = (e)=>{\n                    console.error(e);\n                };\n            } else {\n                this.socket.close();\n                this.socket = undefined;\n            }\n        };\n        this.textarea = textarea;\n        this.setIsConnected = setIsConnected;\n        this.speechRecognition = new (window['SpeechRecognition'] || window['webkitSpeechRecognition'])();\n        this.mediaStream = null;\n        if (this.speechRecognition) {\n            console.log(\"SpeechRecognition started.\");\n            this.speechRecognition.lang = \"th-TH\";\n            this.speechRecognition.continuous = true;\n            this.speechRecognition.interimResults = true;\n            this.speechRecognition.onresult = this.onResult;\n            this.speechRecognition.onend = this.onEnd;\n        } else {\n            console.log(\"This Browser does not support SpeechRecognition.\");\n        }\n        navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: false\n        }).then((ms)=>this.mediaStream = ms).catch(console.error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeechRecognition);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9zcGVlY2hfcmVjb2duaXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFVQSxNQUFNQTtJQVdGQyxZQUNJQyxRQUE2QixFQUM3QkMsY0FBaUQsQ0FDbkQ7YUFWTUMsWUFBcUI7YUFJckJDLGNBQXVCO2FBZ0N2QkMsZ0JBQWdCO1lBQ3BCQyxhQUFhLElBQUksQ0FBQ0MsV0FBVztZQUU3QixJQUFJLENBQUNBLFdBQVcsR0FBR0MsV0FBVztnQkFDMUIsZ0NBQWdDO2dCQUVoQyxJQUFJLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxLQUFLLElBQUksSUFBSTtvQkFDM0Isa0NBQWtDO29CQUVsQyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxFQUFFO3dCQUNiLE1BQU1DLE9BQU87NEJBQ1RDLFFBQVE7NEJBQ1JDLE1BQU0sSUFBSSxDQUFDWixRQUFRLENBQUNRLEtBQUs7d0JBQzdCO3dCQUVBLElBQUksQ0FBQ0MsTUFBTSxDQUFDSSxJQUFJLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ0w7b0JBQ3BDO29CQUVBLElBQUksQ0FBQ1YsUUFBUSxDQUFDUSxLQUFLLEdBQUc7b0JBRXRCLElBQUksQ0FBQ1EsaUJBQWlCLENBQUNDLElBQUk7Z0JBQy9CO2dCQUVBLElBQUksQ0FBQ2IsYUFBYTtZQUN0QixHQUFHO1FBQ1A7YUFFUWMsV0FBVyxDQUFDQztZQUNoQixNQUFNQyxVQUF1Q0QsRUFBRUMsT0FBTztZQUN0RCxJQUFJQyxhQUFxQjtZQUV6QkMsTUFBTUMsSUFBSSxDQUFDSCxTQUFTSSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3pCLE1BQU1DLGNBQTRDRCxNQUFNLENBQUMsRUFBRTtnQkFDM0RKLGNBQWNLLFlBQVlMLFVBQVU7WUFDeEM7WUFFQSx5QkFBeUI7WUFDekIsSUFBSSxDQUFDckIsUUFBUSxDQUFDUSxLQUFLLEdBQUdhO1lBQ3RCLElBQUksQ0FBQ2pCLGFBQWE7UUFDdEI7YUFFUXVCLFFBQVE7WUFDWiwwQkFBMEI7WUFDMUIs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Q25DLEtBQUs7UUFDN0MsT0FBTztZQUNIbUIsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBRUFoQixVQUFVQyxZQUFZLENBQUNRLFlBQVksQ0FBQztZQUFFQyxPQUFPO1lBQU1FLE9BQU87UUFBTSxHQUMvRG9CLElBQUksQ0FBQyxDQUFDQyxLQUFvQixJQUFJLENBQUNwQixXQUFXLEdBQUdvQixJQUM3Q0MsS0FBSyxDQUFDbkIsUUFBUVMsS0FBSztJQUN4QjtBQThHSjtBQUVBLGlFQUFlekQsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXG5hbWNoYS1haS1hc3Npc3RhbnRcXGNsaWVudFxcc3JjXFxmZWF0dXJlc1xcc3BlZWNoX3JlY29nbml0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlzcGF0Y2gsXHJcbiAgICBTZXRTdGF0ZUFjdGlvblxyXG59IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbnRlcmZhY2UgQVBJRGF0YSB7XHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY2xhc3MgU3BlZWNoUmVjb2duaXRpb24ge1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hSZWNvZ25pdGlvbjogYW55XHJcbiAgICBwcml2YXRlIG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbSB8IG51bGxcclxuICAgIHByaXZhdGUgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnRcclxuICAgIHByaXZhdGUgaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgc2VuZFRpbWVPdXQ6IE5vZGVKUy5UaW1lb3V0XHJcblxyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldFxyXG4gICAgcHJpdmF0ZSBpc0Nvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIHNldElzQ29ubmVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCxcclxuICAgICAgICBzZXRJc0Nvbm5lY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRleHRhcmVhID0gdGV4dGFyZWFcclxuICAgICAgICB0aGlzLnNldElzQ29ubmVjdGVkID0gc2V0SXNDb25uZWN0ZWRcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbiA9IG5ldyAoKHdpbmRvdyBhcyBhbnkpWydTcGVlY2hSZWNvZ25pdGlvbiddIHx8ICh3aW5kb3cgYXMgYW55KVsnd2Via2l0U3BlZWNoUmVjb2duaXRpb24nXSkoKVxyXG5cclxuICAgICAgICB0aGlzLm1lZGlhU3RyZWFtID0gbnVsbFxyXG5cclxuICAgICAgICBpZiAodGhpcy5zcGVlY2hSZWNvZ25pdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwZWVjaFJlY29nbml0aW9uIHN0YXJ0ZWQuXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmxhbmcgPSBcInRoLVRIXCJcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5jb250aW51b3VzID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbnJlc3VsdCA9IHRoaXMub25SZXN1bHRcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbmVuZCA9IHRoaXMub25FbmRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFNwZWVjaFJlY29nbml0aW9uLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH0pXHJcbiAgICAgICAgLnRoZW4oKG1zOiBNZWRpYVN0cmVhbSkgPT4gdGhpcy5tZWRpYVN0cmVhbSA9IG1zKVxyXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmVmb3JTZW5kVGltZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZW5kVGltZU91dClcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kVGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2VuZCB0byBzZXJ2ZXIuXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0YXJlYS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dGFyZWEudmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWRmOiBcInJlcXVlc3Rfb3BlbmFpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dGFyZWEudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYS52YWx1ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJlZm9yU2VuZFRpbWUoKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlc3VsdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0czogU3BlZWNoUmVjb2duaXRpb25SZXN1bHRMaXN0ID0gZS5yZXN1bHRzXHJcbiAgICAgICAgbGV0IHRyYW5zY3JpcHQ6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShyZXN1bHRzKS5mb3JFYWNoKChyZXN1bHQ6IFNwZWVjaFJlY29nbml0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlOiBTcGVlY2hSZWNvZ25pdGlvbkFsdGVybmF0aXZlID0gcmVzdWx0WzBdXHJcbiAgICAgICAgICAgIHRyYW5zY3JpcHQgKz0gYWx0ZXJuYXRpdmUudHJhbnNjcmlwdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codHJhbnNjcmlwdClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gdHJhbnNjcmlwdFxyXG4gICAgICAgIHRoaXMuYmVmb3JTZW5kVGltZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvL3RoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTdGFydGVkKSB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0KClcclxuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWVcclxuICAgICAgICB0aGlzLmJlZm9yU2VuZFRpbWUoKVxyXG4gICAgICAgIHRoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RvcCgpXHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZVxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlbmRUaW1lT3V0KVxyXG4gICAgICAgIHRoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXVkaW9EZXZpY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGV2aWNlczogQXJyYXk8TWVkaWFEZXZpY2VJbmZvPiA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXHJcbiAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKChtZGk6IE1lZGlhRGV2aWNlSW5mbykgPT4gbWRpLmtpbmQgPT0gXCJhdWRpb2lucHV0XCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzd2l0Y2hBdWRpb0lucHV0RGV2aWNlID0gYXN5bmMgKGRldmljZUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNZWRpYVN0cmVhbTogTWVkaWFTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICAgIGF1ZGlvOiB7IGRldmljZUlkOiB7IGV4YWN0OiBkZXZpY2VJZCB9IH0sXHJcbiAgICAgICAgICAgIHZpZGVvOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubWVkaWFTdHJlYW0gPSBuZXdNZWRpYVN0cmVhbVxyXG4gICAgfVxyXG5cclxuICAgIG1lZGlhQ2hhbmdlID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZXZpY2VJZClcclxuICAgICAgICB0aGlzLnN3aXRjaEF1ZGlvSW5wdXREZXZpY2UoZGV2aWNlSWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdFdlYlNvY2tldCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjYzMzZcIilcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNvbm5lY3RlZC5cIilcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldElzQ29ubmVjdGVkKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNsb3NlZC5cIilcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXNDb25uZWN0ZWQoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKClcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWVjaFJlY29nbml0aW9uIl0sIm5hbWVzIjpbIlNwZWVjaFJlY29nbml0aW9uIiwiY29uc3RydWN0b3IiLCJ0ZXh0YXJlYSIsInNldElzQ29ubmVjdGVkIiwiaXNTdGFydGVkIiwiaXNDb25uZWN0ZWQiLCJiZWZvclNlbmRUaW1lIiwiY2xlYXJUaW1lb3V0Iiwic2VuZFRpbWVPdXQiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJzb2NrZXQiLCJkYXRhIiwidHlwZWRmIiwidGV4dCIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3BlZWNoUmVjb2duaXRpb24iLCJzdG9wIiwib25SZXN1bHQiLCJlIiwicmVzdWx0cyIsInRyYW5zY3JpcHQiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwicmVzdWx0IiwiYWx0ZXJuYXRpdmUiLCJvbkVuZCIsInN0YXJ0IiwiZ2V0QXVkaW9EZXZpY2UiLCJkZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImZpbHRlciIsIm1kaSIsImtpbmQiLCJzd2l0Y2hBdWRpb0lucHV0RGV2aWNlIiwiZGV2aWNlSWQiLCJuZXdNZWRpYVN0cmVhbSIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiZXhhY3QiLCJ2aWRlbyIsIm1lZGlhU3RyZWFtIiwibWVkaWFDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdFdlYlNvY2tldCIsInVuZGVmaW5lZCIsIldlYlNvY2tldCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsIm9uY2xvc2UiLCJvbmVycm9yIiwiZXJyb3IiLCJjbG9zZSIsIndpbmRvdyIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsIm9uZW5kIiwidGhlbiIsIm1zIiwiY2F0Y2giXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/features/speech_recognition.tsx\n"));

/***/ })

});