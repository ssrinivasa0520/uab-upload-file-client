"use strict";
exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 19127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RenderIf = ({ isTrue = true, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isTrue && children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderIf);


/***/ }),

/***/ 84601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);

const baseAxios = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    timeout: 20000
});
// request interceptor
baseAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = "Bearer " + token;
    config.withCredentials = true;
    return config;
}, (error)=>{
    Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAxios);


/***/ })

};
;