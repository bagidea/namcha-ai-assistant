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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SpeechRecognition {\n    constructor(textarea, textareaOutput, setIsStarted, setIsConnected, setFacialExpression, setAnimation){\n        this.isStarted = false;\n        this.isConnected = false;\n        this.isSent = false;\n        this.audioChecked = true;\n        this.beforSendTime = ()=>{\n            clearTimeout(this.sendTimeOut);\n            this.sendTimeOut = setTimeout(()=>{\n                //console.log(\"Send to server.\")\n                if (this.textarea.value != \"\" && !this.isSent) {\n                    //console.log(this.textarea.value)\n                    if (this.socket) {\n                        const data = {\n                            type: \"request_openai\",\n                            text: this.textarea.value\n                        };\n                        this.socket.send(JSON.stringify(data));\n                        this.isSent = true;\n                    }\n                    //this.textarea.value = \"\"\n                    this.setFacialExpression(\"-\");\n                    this.setAnimation(\"-\");\n                    this.textareaOutput.value = \"Sending...\";\n                    this.speechRecognition.stop();\n                }\n                this.beforSendTime();\n            }, 3000);\n        };\n        this.onResult = (e)=>{\n            const results = e.results;\n            let transcript = \"\";\n            Array.from(results).forEach((result)=>{\n                const alternative = result[0];\n                transcript += alternative.transcript;\n            });\n            //console.log(transcript)\n            this.textarea.value = transcript;\n            this.beforSendTime();\n        };\n        this.onEnd = ()=>{\n            //this.textarea.value = \"\"\n            if (this.isStarted && !this.isSent) this.speechRecognition.start();\n        };\n        this.start = ()=>{\n            if (!this.isStarted) this.speechRecognition.start();\n            this.isStarted = true;\n            this.setIsStarted(this.isStarted);\n            this.beforSendTime();\n            this.textarea.value = \"\";\n        };\n        this.stop = ()=>{\n            if (this.isStarted) this.speechRecognition.stop();\n            this.isStarted = false;\n            this.setIsStarted(this.isStarted);\n            clearTimeout(this.sendTimeOut);\n            this.textarea.value = \"\";\n        };\n        this.getAudioDevice = async ()=>{\n            const devices = await navigator.mediaDevices.enumerateDevices();\n            return devices.filter((mdi)=>mdi.kind == \"audioinput\");\n        };\n        this.switchAudioInputDevice = async (deviceId)=>{\n            const newMediaStream = await navigator.mediaDevices.getUserMedia({\n                audio: {\n                    deviceId: {\n                        exact: deviceId\n                    }\n                },\n                video: false\n            });\n            this.mediaStream = newMediaStream;\n        };\n        this.mediaChange = (deviceId)=>{\n            console.log(deviceId);\n            this.switchAudioInputDevice(deviceId);\n        };\n        this.connectWebSocket = ()=>{\n            if (this.socket == undefined) {\n                this.socket = new WebSocket(\"ws://localhost:6336\");\n                this.socket.onopen = ()=>{\n                    console.log(\"WebSocket connected.\");\n                    this.setIsConnected(true);\n                };\n                this.socket.onmessage = (e)=>{\n                    console.log(e.data);\n                    const json = JSON.parse(e.data);\n                    //console.log(\"facialExpression: \"+json.facialExpression)\n                    //console.log(\"animation: \"+json.animation)\n                    //console.log(\"text: \"+json.text)\n                    this.setFacialExpression(json.facialExpression);\n                    this.setAnimation(json.animation);\n                    this.textareaOutput.value = json.text;\n                    this.isSent = false;\n                    if (this.audioChecked) {\n                        const audioBlob = new Blob([\n                            Uint8Array.from(atob(json.audio), (c)=>c.charCodeAt(0))\n                        ], {\n                            type: 'audio/mp3'\n                        });\n                        const audioUrl = URL.createObjectURL(audioBlob);\n                        const audio = new Audio(audioUrl);\n                        audio.play();\n                    }\n                    if (this.isStarted && !this.isSent) {\n                        this.textarea.value = \"\";\n                        this.speechRecognition.start();\n                    }\n                };\n                this.socket.onclose = ()=>{\n                    console.log(\"WebSocket closed.\");\n                    this.isConnected = false;\n                    this.isSent = false;\n                    this.setIsConnected(false);\n                    this.stop();\n                };\n                this.socket.onerror = (e)=>{\n                    console.error(e);\n                };\n            } else {\n                this.socket.close();\n                this.socket = undefined;\n            }\n        };\n        this.textarea = textarea;\n        this.textareaOutput = textareaOutput;\n        this.setIsStarted = setIsStarted;\n        this.setIsConnected = setIsConnected;\n        this.setFacialExpression = setFacialExpression;\n        this.setAnimation = setAnimation;\n        this.speechRecognition = new (window['SpeechRecognition'] || window['webkitSpeechRecognition'])();\n        this.mediaStream = null;\n        if (this.speechRecognition) {\n            console.log(\"SpeechRecognition started.\");\n            this.speechRecognition.lang = \"th-TH\";\n            this.speechRecognition.continuous = true;\n            this.speechRecognition.interimResults = true;\n            this.speechRecognition.onresult = this.onResult;\n            this.speechRecognition.onend = this.onEnd;\n        } else {\n            console.log(\"This Browser does not support SpeechRecognition.\");\n        }\n        navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: false\n        }).then((ms)=>this.mediaStream = ms).catch(console.error);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeechRecognition);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9zcGVlY2hfcmVjb2duaXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFVQSxNQUFNQTtJQWtCRkMsWUFDSUMsUUFBNkIsRUFDN0JDLGNBQW1DLEVBQ25DQyxZQUErQyxFQUMvQ0MsY0FBaUQsRUFDakRDLG1CQUFxRCxFQUNyREMsWUFBOEMsQ0FDaEQ7YUFwQk1DLFlBQXFCO2FBSXJCQyxjQUF1QjthQUt2QkMsU0FBa0I7YUFFMUJDLGVBQXdCO2FBdUNoQkMsZ0JBQWdCO1lBQ3BCQyxhQUFhLElBQUksQ0FBQ0MsV0FBVztZQUU3QixJQUFJLENBQUNBLFdBQVcsR0FBR0MsV0FBVztnQkFDMUIsZ0NBQWdDO2dCQUVoQyxJQUFJLElBQUksQ0FBQ2IsUUFBUSxDQUFDYyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQ04sTUFBTSxFQUFFO29CQUMzQyxrQ0FBa0M7b0JBRWxDLElBQUksSUFBSSxDQUFDTyxNQUFNLEVBQUU7d0JBQ2IsTUFBTUMsT0FBZ0I7NEJBQ2xCQyxNQUFNOzRCQUNOQyxNQUFNLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ2MsS0FBSzt3QkFDN0I7d0JBRUEsSUFBSSxDQUFDQyxNQUFNLENBQUNJLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDTDt3QkFDaEMsSUFBSSxDQUFDUixNQUFNLEdBQUc7b0JBQ2xCO29CQUVBLDBCQUEwQjtvQkFFMUIsSUFBSSxDQUFDSixtQkFBbUIsQ0FBQztvQkFDekIsSUFBSSxDQUFDQyxZQUFZLENBQUM7b0JBQ2xCLElBQUksQ0FBQ0osY0FBYyxDQUFDYSxLQUFLLEdBQUc7b0JBRTVCLElBQUksQ0FBQ1EsaUJBQWlCLENBQUNDLElBQUk7Z0JBQy9CO2dCQUVBLElBQUksQ0FBQ2IsYUFBYTtZQUN0QixHQUFHO1FBQ1A7YUFFUWMsV0FBVyxDQUFDQztZQUNoQixNQUFNQyxVQUF1Q0QsRUFBRUMsT0FBTztZQUN0RCxJQUFJQyxhQUFxQjtZQUV6QkMsTUFBTUMs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aUIsRUFBRTtZQUN4QjhCLFFBQVFDLEdBQUcsQ0FBQztZQUVaLElBQUksQ0FBQy9CLGlCQUFpQixDQUFDeUQsSUFBSSxHQUFHO1lBQzlCLElBQUksQ0FBQ3pELGlCQUFpQixDQUFDMEQsVUFBVSxHQUFHO1lBQ3BDLElBQUksQ0FBQzFELGlCQUFpQixDQUFDMkQsY0FBYyxHQUFHO1lBRXhDLElBQUksQ0FBQzNELGlCQUFpQixDQUFDNEQsUUFBUSxHQUFHLElBQUksQ0FBQzFELFFBQVE7WUFDL0MsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQzZELEtBQUssR0FBRyxJQUFJLENBQUNsRCxLQUFLO1FBQzdDLE9BQU87WUFDSG1CLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUVBaEIsVUFBVUMsWUFBWSxDQUFDUSxZQUFZLENBQUM7WUFBRUMsT0FBTztZQUFNRSxPQUFPO1FBQU0sR0FDL0RtQyxJQUFJLENBQUMsQ0FBQ0MsS0FBb0IsSUFBSSxDQUFDbkMsV0FBVyxHQUFHbUMsSUFDN0NDLEtBQUssQ0FBQ2xDLFFBQVF3QixLQUFLO0lBQ3hCO0FBaUpKO0FBRUEsaUVBQWU5RSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcbmFtY2hhLWFpLWFzc2lzdGFudFxcY2xpZW50XFxzcmNcXGZlYXR1cmVzXFxzcGVlY2hfcmVjb2duaXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXNwYXRjaCxcclxuICAgIFNldFN0YXRlQWN0aW9uXHJcbn0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmludGVyZmFjZSBBUElEYXRhIHtcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHRleHQ6IHN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBTcGVlY2hSZWNvZ25pdGlvbiB7XHJcbiAgICBwcml2YXRlIHNwZWVjaFJlY29nbml0aW9uOiBhbnlcclxuICAgIHByaXZhdGUgbWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtIHwgbnVsbFxyXG4gICAgcHJpdmF0ZSB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudFxyXG4gICAgcHJpdmF0ZSB0ZXh0YXJlYU91dHB1dDogSFRNTFRleHRBcmVhRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBpc1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBzZW5kVGltZU91dDogTm9kZUpTLlRpbWVvdXRcclxuXHJcbiAgICBwcml2YXRlIHNvY2tldDogV2ViU29ja2V0XHJcbiAgICBwcml2YXRlIGlzQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgc2V0SXNTdGFydGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cclxuICAgIHByaXZhdGUgc2V0SXNDb25uZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxyXG4gICAgcHJpdmF0ZSBzZXRGYWNpYWxFeHByZXNzaW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxyXG4gICAgcHJpdmF0ZSBzZXRBbmltYXRpb246IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XHJcbiAgICBwcml2YXRlIGlzU2VudDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgYXVkaW9DaGVja2VkOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50LFxyXG4gICAgICAgIHRleHRhcmVhT3V0cHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50LFxyXG4gICAgICAgIHNldElzU3RhcnRlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG4gICAgICAgIHNldElzQ29ubmVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbiAgICAgICAgc2V0RmFjaWFsRXhwcmVzc2lvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYSA9IHRleHRhcmVhXHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYU91dHB1dCA9IHRleHRhcmVhT3V0cHV0XHJcbiAgICAgICAgdGhpcy5zZXRJc1N0YXJ0ZWQgPSBzZXRJc1N0YXJ0ZWRcclxuICAgICAgICB0aGlzLnNldElzQ29ubmVjdGVkID0gc2V0SXNDb25uZWN0ZWRcclxuICAgICAgICB0aGlzLnNldEZhY2lhbEV4cHJlc3Npb24gPSBzZXRGYWNpYWxFeHByZXNzaW9uXHJcbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb24gPSBzZXRBbmltYXRpb25cclxuXHJcbiAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbiA9IG5ldyAoKHdpbmRvdyBhcyBhbnkpWydTcGVlY2hSZWNvZ25pdGlvbiddIHx8ICh3aW5kb3cgYXMgYW55KVsnd2Via2l0U3BlZWNoUmVjb2duaXRpb24nXSkoKVxyXG5cclxuICAgICAgICB0aGlzLm1lZGlhU3RyZWFtID0gbnVsbFxyXG5cclxuICAgICAgICBpZiAodGhpcy5zcGVlY2hSZWNvZ25pdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNwZWVjaFJlY29nbml0aW9uIHN0YXJ0ZWQuXCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmxhbmcgPSBcInRoLVRIXCJcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5jb250aW51b3VzID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbnJlc3VsdCA9IHRoaXMub25SZXN1bHRcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbmVuZCA9IHRoaXMub25FbmRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFNwZWVjaFJlY29nbml0aW9uLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH0pXHJcbiAgICAgICAgLnRoZW4oKG1zOiBNZWRpYVN0cmVhbSkgPT4gdGhpcy5tZWRpYVN0cmVhbSA9IG1zKVxyXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmVmb3JTZW5kVGltZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZW5kVGltZU91dClcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kVGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2VuZCB0byBzZXJ2ZXIuXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0YXJlYS52YWx1ZSAhPSBcIlwiICYmICF0aGlzLmlzU2VudCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRleHRhcmVhLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IEFQSURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVxdWVzdF9vcGVuYWlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0YXJlYS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VudCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGYWNpYWxFeHByZXNzaW9uKFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltYXRpb24oXCItXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRhcmVhT3V0cHV0LnZhbHVlID0gXCJTZW5kaW5nLi4uXCJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJlZm9yU2VuZFRpbWUoKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlc3VsdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0czogU3BlZWNoUmVjb2duaXRpb25SZXN1bHRMaXN0ID0gZS5yZXN1bHRzXHJcbiAgICAgICAgbGV0IHRyYW5zY3JpcHQ6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShyZXN1bHRzKS5mb3JFYWNoKChyZXN1bHQ6IFNwZWVjaFJlY29nbml0aW9uUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlOiBTcGVlY2hSZWNvZ25pdGlvbkFsdGVybmF0aXZlID0gcmVzdWx0WzBdXHJcbiAgICAgICAgICAgIHRyYW5zY3JpcHQgKz0gYWx0ZXJuYXRpdmUudHJhbnNjcmlwdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codHJhbnNjcmlwdClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gdHJhbnNjcmlwdFxyXG4gICAgICAgIHRoaXMuYmVmb3JTZW5kVGltZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvL3RoaXMudGV4dGFyZWEudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkICYmICF0aGlzLmlzU2VudCkgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCkgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydCgpXHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRJc1N0YXJ0ZWQodGhpcy5pc1N0YXJ0ZWQpXHJcbiAgICAgICAgdGhpcy5iZWZvclNlbmRUaW1lKClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKVxyXG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNldElzU3RhcnRlZCh0aGlzLmlzU3RhcnRlZClcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZW5kVGltZU91dClcclxuICAgICAgICB0aGlzLnRleHRhcmVhLnZhbHVlID0gXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIGdldEF1ZGlvRGV2aWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRldmljZXM6IEFycmF5PE1lZGlhRGV2aWNlSW5mbz4gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxyXG4gICAgICAgIHJldHVybiBkZXZpY2VzLmZpbHRlcigobWRpOiBNZWRpYURldmljZUluZm8pID0+IG1kaS5raW5kID09IFwiYXVkaW9pbnB1dFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3dpdGNoQXVkaW9JbnB1dERldmljZSA9IGFzeW5jIChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICBhdWRpbzogeyBkZXZpY2VJZDogeyBleGFjdDogZGV2aWNlSWQgfSB9LFxyXG4gICAgICAgICAgICB2aWRlbzogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm1lZGlhU3RyZWFtID0gbmV3TWVkaWFTdHJlYW1cclxuICAgIH1cclxuXHJcbiAgICBtZWRpYUNoYW5nZSA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGV2aWNlSWQpXHJcbiAgICAgICAgdGhpcy5zd2l0Y2hBdWRpb0lucHV0RGV2aWNlKGRldmljZUlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RXZWJTb2NrZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo2MzM2XCIpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBjb25uZWN0ZWQuXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJc0Nvbm5lY3RlZCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGEpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmYWNpYWxFeHByZXNzaW9uOiBcIitqc29uLmZhY2lhbEV4cHJlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYW5pbWF0aW9uOiBcIitqc29uLmFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXh0OiBcIitqc29uLnRleHQpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGYWNpYWxFeHByZXNzaW9uKGpzb24uZmFjaWFsRXhwcmVzc2lvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbWF0aW9uKGpzb24uYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYU91dHB1dC52YWx1ZSA9IGpzb24udGV4dFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZW50ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0Jsb2I6IEJsb2IgPSBuZXcgQmxvYihbVWludDhBcnJheS5mcm9tKGF0b2IoanNvbi5hdWRpbyksIGMgPT4gYy5jaGFyQ29kZUF0KDApKV0sIHsgdHlwZTogJ2F1ZGlvL21wMycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW9Vcmw6IHN0cmluZyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCA9IG5ldyBBdWRpbyhhdWRpb1VybClcclxuICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQgJiYgIXRoaXMuaXNTZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNsb3NlZC5cIilcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXNDb25uZWN0ZWQoZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlZWNoUmVjb2duaXRpb24iXSwibmFtZXMiOlsiU3BlZWNoUmVjb2duaXRpb24iLCJjb25zdHJ1Y3RvciIsInRleHRhcmVhIiwidGV4dGFyZWFPdXRwdXQiLCJzZXRJc1N0YXJ0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsInNldEZhY2lhbEV4cHJlc3Npb24iLCJzZXRBbmltYXRpb24iLCJpc1N0YXJ0ZWQiLCJpc0Nvbm5lY3RlZCIsImlzU2VudCIsImF1ZGlvQ2hlY2tlZCIsImJlZm9yU2VuZFRpbWUiLCJjbGVhclRpbWVvdXQiLCJzZW5kVGltZU91dCIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsInNvY2tldCIsImRhdGEiLCJ0eXBlIiwidGV4dCIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3BlZWNoUmVjb2duaXRpb24iLCJzdG9wIiwib25SZXN1bHQiLCJlIiwicmVzdWx0cyIsInRyYW5zY3JpcHQiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwicmVzdWx0IiwiYWx0ZXJuYXRpdmUiLCJvbkVuZCIsInN0YXJ0IiwiZ2V0QXVkaW9EZXZpY2UiLCJkZXZpY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImZpbHRlciIsIm1kaSIsImtpbmQiLCJzd2l0Y2hBdWRpb0lucHV0RGV2aWNlIiwiZGV2aWNlSWQiLCJuZXdNZWRpYVN0cmVhbSIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiZXhhY3QiLCJ2aWRlbyIsIm1lZGlhU3RyZWFtIiwibWVkaWFDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdFdlYlNvY2tldCIsInVuZGVmaW5lZCIsIldlYlNvY2tldCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsImpzb24iLCJwYXJzZSIsImZhY2lhbEV4cHJlc3Npb24iLCJhbmltYXRpb24iLCJhdWRpb0Jsb2IiLCJCbG9iIiwiVWludDhBcnJheSIsImF0b2IiLCJjIiwiY2hhckNvZGVBdCIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJwbGF5Iiwib25jbG9zZSIsIm9uZXJyb3IiLCJlcnJvciIsImNsb3NlIiwid2luZG93IiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIm9ucmVzdWx0Iiwib25lbmQiLCJ0aGVuIiwibXMiLCJjYXRjaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/features/speech_recognition.tsx\n"));

/***/ })

});