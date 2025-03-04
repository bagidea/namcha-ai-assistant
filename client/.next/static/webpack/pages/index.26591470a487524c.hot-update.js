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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SpeechRecognition {\n    constructor(textarea, textareaOutput, setIsConnected, setFacialExpression, setAnimation){\n        this.isStarted = false;\n        this.isConnected = false;\n        this.isSent = false;\n        this.audioChecked = true;\n        this.beforSendTime = ()=>{\n            clearTimeout(this.sendTimeOut);\n            this.sendTimeOut = setTimeout(()=>{\n                //console.log(\"Send to server.\")\n                if (this.textarea.value != \"\" && !this.isSent) {\n                    //console.log(this.textarea.value)\n                    if (this.socket) {\n                        const data = {\n                            type: \"request_openai\",\n                            text: this.textarea.value\n                        };\n                        this.socket.send(JSON.stringify(data));\n                        this.isSent = true;\n                    }\n                    //this.textarea.value = \"\"\n                    this.speechRecognition.stop();\n                }\n                this.beforSendTime();\n            }, 3000);\n        };\n        this.onResult = (e)=>{\n            const results = e.results;\n            let transcript = \"\";\n            Array.from(results).forEach((result)=>{\n                const alternative = result[0];\n                transcript += alternative.transcript;\n            });\n            //console.log(transcript)\n            this.textarea.value = transcript;\n            this.beforSendTime();\n        };\n        this.onEnd = ()=>{\n            //this.textarea.value = \"\"\n            if (this.isStarted && !this.isSent) this.speechRecognition.start();\n        };\n        this.start = ()=>{\n            if (!this.isStarted) this.speechRecognition.start();\n            this.isStarted = true;\n            this.beforSendTime();\n            this.textarea.value = \"\";\n        };\n        this.stop = ()=>{\n            if (this.isStarted) this.speechRecognition.stop();\n            this.isStarted = false;\n            clearTimeout(this.sendTimeOut);\n            this.textarea.value = \"\";\n            console.log(\"TEST\");\n        };\n        this.getAudioDevice = async ()=>{\n            const devices = await navigator.mediaDevices.enumerateDevices();\n            return devices.filter((mdi)=>mdi.kind == \"audioinput\");\n        };\n        this.switchAudioInputDevice = async (deviceId)=>{\n            const newMediaStream = await navigator.mediaDevices.getUserMedia({\n                audio: {\n                    deviceId: {\n                        exact: deviceId\n                    }\n                },\n                video: false\n            });\n            this.mediaStream = newMediaStream;\n        };\n        this.mediaChange = (deviceId)=>{\n            console.log(deviceId);\n            this.switchAudioInputDevice(deviceId);\n        };\n        this.connectWebSocket = ()=>{\n            if (this.socket == undefined) {\n                this.socket = new WebSocket(\"ws://localhost:6336\");\n                this.socket.onopen = ()=>{\n                    console.log(\"WebSocket connected.\");\n                    this.setIsConnected(true);\n                };\n                this.socket.onmessage = (e)=>{\n                    console.log(e.data);\n                    const json = JSON.parse(e.data);\n                    //console.log(\"facialExpression: \"+json.facialExpression)\n                    //console.log(\"animation: \"+json.animation)\n                    //console.log(\"text: \"+json.text)\n                    this.setFacialExpression(json.facialExpression);\n                    this.setAnimation(json.animation);\n                    this.textareaOutput.value = json.text;\n                    this.isSent = true;\n                    if (this.audioChecked) {\n                        const audioBlob = new Blob([\n                            Uint8Array.from(atob(json.audio), (c)=>c.charCodeAt(0))\n                        ], {\n                            type: 'audio/mp3'\n                        });\n                        const audioUrl = URL.createObjectURL(audioBlob);\n                        const audio = new Audio(audioUrl);\n                        audio.play();\n                    }\n                    if (this.isStarted && !this.isSent) this.speechRecognition.start();\n                };\n                this.socket.onclose = ()=>{\n                    console.log(\"WebSocket closed.\");\n                    this.isConnected = false;\n                    this.isSent = false;\n                    this.setIsConnected(false);\n                    this.stop();\n                };\n                this.socket.onerror = (e)=>{\n                    console.error(e);\n                };\n            } else {\n                this.socket.close();\n                this.socket = undefined;\n            }\n        };\n        this.textarea = textarea;\n        this.textareaOutput = textareaOutput;\n        this.setIsConnected = setIsConnected;\n        this.setFacialExpression = setFacialExpression;\n        this.setAnimation = setAnimation;\n        this.speechRecognition = new (window['SpeechRecognition'] || window['webkitSpeechRecognition'])();\n        this.mediaStream = null;\n        if (this.speechRecognition) {\n            console.log(\"SpeechRecognition started.\");\n            this.speechRecognition.lang = \"th-TH\";\n            this.speechRecognition.continuous = true;\n            this.speechRecognition.interimResults = true;\n            this.speechRecognition.onresult = this.onResult;\n            this.speechRecognition.onend = this.onEnd;\n        } else {\n            console.log(\"This Browser does not support SpeechRecognition.\");\n        }\n        navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: false\n        }).then((ms)=>this.mediaStream = ms).catch(console.error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeechRecognition);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9zcGVlY2hfcmVjb2duaXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFVQSxNQUFNQTtJQWlCRkMsWUFDSUMsUUFBNkIsRUFDN0JDLGNBQW1DLEVBQ25DQyxjQUFpRCxFQUNqREMsbUJBQXFELEVBQ3JEQyxZQUE4QyxDQUNoRDthQWxCTUMsWUFBcUI7YUFJckJDLGNBQXVCO2FBSXZCQyxTQUFrQjthQUUxQkMsZUFBd0I7YUFxQ2hCQyxnQkFBZ0I7WUFDcEJDLGFBQWEsSUFBSSxDQUFDQyxXQUFXO1lBRTdCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQyxXQUFXO2dCQUMxQixnQ0FBZ0M7Z0JBRWhDLElBQUksSUFBSSxDQUFDWixRQUFRLENBQUNhLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDTixNQUFNLEVBQUU7b0JBQzNDLGtDQUFrQztvQkFFbEMsSUFBSSxJQUFJLENBQUNPLE1BQU0sRUFBRTt3QkFDYixNQUFNQyxPQUFnQjs0QkFDbEJDLE1BQU07NEJBQ05DLE1BQU0sSUFBSSxDQUFDakIsUUFBUSxDQUFDYSxLQUFLO3dCQUM3Qjt3QkFFQSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUNMO3dCQUNoQyxJQUFJLENBQUNSLE1BQU0sR0FBRztvQkFDbEI7b0JBRUEsMEJBQTBCO29CQUUxQixJQUFJLENBQUNjLGlCQUFpQixDQUFDQyxJQUFJO2dCQUMvQjtnQkFFQSxJQUFJLENBQUNiLGFBQWE7WUFDdEIsR0FBRztRQUNQO2FBRVFjLFdBQVcsQ0FBQ0M7WUFDaEIsTUFBTUMsVUFBdUNELEVBQUVDLE9BQU87WUFDdEQsSUFBSUMsYUFBcUI7WUFFekJDLE1BQU1DLElBQUksQ0FBQ0gsU0FBU0ksT0FBTyxDQUFDLENBQUNDO2dCQUN6QixNQUFNQyxjQUE0Q0QsTUFBTSxDQUFDLEVBQUU7Z0JBQzNESixjQUFjSyxZQUFZTCxVQUFVO1lBQ3hDO1lBRUEseUJBQXlC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QUFJLENBQUNsRCxLQUFLO1FBQzdDLE9BQU87WUFDSEUsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBRUFHLFVBQVVDLFlBQVksQ0FBQ1EsWUFBWSxDQUFDO1lBQUVDLE9BQU87WUFBTUUsT0FBTztRQUFNLEdBQy9EaUMsSUFBSSxDQUFDLENBQUNDLEtBQW9CLElBQUksQ0FBQ2pDLFdBQVcsR0FBR2lDLElBQzdDQyxLQUFLLENBQUNuRCxRQUFReUMsS0FBSztJQUN4QjtBQXlJSjtBQUVBLGlFQUFlN0UsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXG5hbWNoYS1haS1hc3Npc3RhbnRcXGNsaWVudFxcc3JjXFxmZWF0dXJlc1xcc3BlZWNoX3JlY29nbml0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlzcGF0Y2gsXHJcbiAgICBTZXRTdGF0ZUFjdGlvblxyXG59IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbnRlcmZhY2UgQVBJRGF0YSB7XHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY2xhc3MgU3BlZWNoUmVjb2duaXRpb24ge1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hSZWNvZ25pdGlvbjogYW55XHJcbiAgICBwcml2YXRlIG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbSB8IG51bGxcclxuICAgIHByaXZhdGUgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnRcclxuICAgIHByaXZhdGUgdGV4dGFyZWFPdXRwdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnRcclxuICAgIHByaXZhdGUgaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgc2VuZFRpbWVPdXQ6IE5vZGVKUy5UaW1lb3V0XHJcblxyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldFxyXG4gICAgcHJpdmF0ZSBpc0Nvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIHNldElzQ29ubmVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cclxuICAgIHByaXZhdGUgc2V0RmFjaWFsRXhwcmVzc2lvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cclxuICAgIHByaXZhdGUgc2V0QW5pbWF0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxyXG4gICAgcHJpdmF0ZSBpc1NlbnQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGF1ZGlvQ2hlY2tlZDogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCxcclxuICAgICAgICB0ZXh0YXJlYU91dHB1dDogSFRNTFRleHRBcmVhRWxlbWVudCxcclxuICAgICAgICBzZXRJc0Nvbm5lY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG4gICAgICAgIHNldEZhY2lhbEV4cHJlc3Npb246IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxyXG4gICAgICAgIHNldEFuaW1hdGlvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGV4dGFyZWEgPSB0ZXh0YXJlYVxyXG4gICAgICAgIHRoaXMudGV4dGFyZWFPdXRwdXQgPSB0ZXh0YXJlYU91dHB1dFxyXG4gICAgICAgIHRoaXMuc2V0SXNDb25uZWN0ZWQgPSBzZXRJc0Nvbm5lY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0RmFjaWFsRXhwcmVzc2lvbiA9IHNldEZhY2lhbEV4cHJlc3Npb25cclxuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbiA9IHNldEFuaW1hdGlvblxyXG5cclxuICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uID0gbmV3ICgod2luZG93IGFzIGFueSlbJ1NwZWVjaFJlY29nbml0aW9uJ10gfHwgKHdpbmRvdyBhcyBhbnkpWyd3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiddKSgpXHJcblxyXG4gICAgICAgIHRoaXMubWVkaWFTdHJlYW0gPSBudWxsXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNwZWVjaFJlY29nbml0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BlZWNoUmVjb2duaXRpb24gc3RhcnRlZC5cIilcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ubGFuZyA9IFwidGgtVEhcIlxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLm9ucmVzdWx0ID0gdGhpcy5vblJlc3VsdFxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLm9uZW5kID0gdGhpcy5vbkVuZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgU3BlZWNoUmVjb2duaXRpb24uXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlLCB2aWRlbzogZmFsc2UgfSlcclxuICAgICAgICAudGhlbigobXM6IE1lZGlhU3RyZWFtKSA9PiB0aGlzLm1lZGlhU3RyZWFtID0gbXMpXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiZWZvclNlbmRUaW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlbmRUaW1lT3V0KVxyXG5cclxuICAgICAgICB0aGlzLnNlbmRUaW1lT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTZW5kIHRvIHNlcnZlci5cIilcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRhcmVhLnZhbHVlICE9IFwiXCIgJiYgIXRoaXMuaXNTZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dGFyZWEudmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogQVBJRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZXF1ZXN0X29wZW5haVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHRhcmVhLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZW50ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy50ZXh0YXJlYS52YWx1ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJlZm9yU2VuZFRpbWUoKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlc3VsdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0czogU3BlZWNoUmVjb2duaXRpb25SZXN1bHRMaXN0ID0gZS5yZXN1bHRzXHJcbiAgICAgICAgbGV0IHRyYW5zY3JpcHQ6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShyZXN1bHRzKS5mb3JFYWNoKChyZXN1bHQ6IFNwZWVjaFJlY29nbml0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlOiBTcGVlY2hSZWNvZ25pdGlvbkFsdGVybmF0aXZlID0gcmVzdWx0WzBdXHJcbiAgICAgICAgICAgIHRyYW5zY3JpcHQgKz0gYWx0ZXJuYXRpdmUudHJhbnNjcmlwdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codHJhbnNjcmlwdClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gdHJhbnNjcmlwdFxyXG4gICAgICAgIHRoaXMuYmVmb3JTZW5kVGltZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvL3RoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkICYmICF0aGlzLmlzU2VudCkgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCkgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5iZWZvclNlbmRUaW1lKClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKVxyXG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2VcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZW5kVGltZU91dClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF1ZGlvRGV2aWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRldmljZXM6IEFycmF5PE1lZGlhRGV2aWNlSW5mbz4gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxyXG4gICAgICAgIHJldHVybiBkZXZpY2VzLmZpbHRlcigobWRpOiBNZWRpYURldmljZUluZm8pID0+IG1kaS5raW5kID09IFwiYXVkaW9pbnB1dFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3dpdGNoQXVkaW9JbnB1dERldmljZSA9IGFzeW5jIChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICBhdWRpbzogeyBkZXZpY2VJZDogeyBleGFjdDogZGV2aWNlSWQgfSB9LFxyXG4gICAgICAgICAgICB2aWRlbzogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm1lZGlhU3RyZWFtID0gbmV3TWVkaWFTdHJlYW1cclxuICAgIH1cclxuXHJcbiAgICBtZWRpYUNoYW5nZSA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGV2aWNlSWQpXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hBdWRpb0lucHV0RGV2aWNlKGRldmljZUlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RXZWJTb2NrZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo2MzM2XCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBjb25uZWN0ZWQuXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJc0Nvbm5lY3RlZCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmYWNpYWxFeHByZXNzaW9uOiBcIitqc29uLmZhY2lhbEV4cHJlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYW5pbWF0aW9uOiBcIitqc29uLmFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXh0OiBcIitqc29uLnRleHQpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGYWNpYWxFeHByZXNzaW9uKGpzb24uZmFjaWFsRXhwcmVzc2lvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbWF0aW9uKGpzb24uYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYU91dHB1dC52YWx1ZSA9IGpzb24udGV4dFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZW50ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYjogQmxvYiA9IG5ldyBCbG9iKFtVaW50OEFycmF5LmZyb20oYXRvYihqc29uLmF1ZGlvKSwgYyA9PiBjLmNoYXJDb2RlQXQoMCkpXSwgeyB0eXBlOiAnYXVkaW8vbXAzJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb1VybDogc3RyaW5nID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50ID0gbmV3IEF1ZGlvKGF1ZGlvVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCAmJiAhdGhpcy5pc1NlbnQpIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY2xvc2VkLlwiKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJc0Nvbm5lY3RlZChmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVlY2hSZWNvZ25pdGlvbiJdLCJuYW1lcyI6WyJTcGVlY2hSZWNvZ25pdGlvbiIsImNvbnN0cnVjdG9yIiwidGV4dGFyZWEiLCJ0ZXh0YXJlYU91dHB1dCIsInNldElzQ29ubmVjdGVkIiwic2V0RmFjaWFsRXhwcmVzc2lvbiIsInNldEFuaW1hdGlvbiIsImlzU3RhcnRlZCIsImlzQ29ubmVjdGVkIiwiaXNTZW50IiwiYXVkaW9DaGVja2VkIiwiYmVmb3JTZW5kVGltZSIsImNsZWFyVGltZW91dCIsInNlbmRUaW1lT3V0Iiwic2V0VGltZW91dCIsInZhbHVlIiwic29ja2V0IiwiZGF0YSIsInR5cGUiLCJ0ZXh0Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzcGVlY2hSZWNvZ25pdGlvbiIsInN0b3AiLCJvblJlc3VsdCIsImUiLCJyZXN1bHRzIiwidHJhbnNjcmlwdCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJyZXN1bHQiLCJhbHRlcm5hdGl2ZSIsIm9uRW5kIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXVkaW9EZXZpY2UiLCJkZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImZpbHRlciIsIm1kaSIsImtpbmQiLCJzd2l0Y2hBdWRpb0lucHV0RGV2aWNlIiwiZGV2aWNlSWQiLCJuZXdNZWRpYVN0cmVhbSIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiZXhhY3QiLCJ2aWRlbyIsIm1lZGlhU3RyZWFtIiwibWVkaWFDaGFuZ2UiLCJjb25uZWN0V2ViU29ja2V0IiwidW5kZWZpbmVkIiwiV2ViU29ja2V0Iiwib25vcGVuIiwib25tZXNzYWdlIiwianNvbiIsInBhcnNlIiwiZmFjaWFsRXhwcmVzc2lvbiIsImFuaW1hdGlvbiIsImF1ZGlvQmxvYiIsIkJsb2IiLCJVaW50OEFycmF5IiwiYXRvYiIsImMiLCJjaGFyQ29kZUF0IiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJBdWRpbyIsInBsYXkiLCJvbmNsb3NlIiwib25lcnJvciIsImVycm9yIiwiY2xvc2UiLCJ3aW5kb3ciLCJsYW5nIiwiY29udGludW91cyIsImludGVyaW1SZXN1bHRzIiwib25yZXN1bHQiLCJvbmVuZCIsInRoZW4iLCJtcyIsImNhdGNoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/features/speech_recognition.tsx\n"));

/***/ })

});