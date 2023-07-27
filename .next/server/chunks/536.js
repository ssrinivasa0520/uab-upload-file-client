exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 25881:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4033))

/***/ }),

/***/ 4033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95887);
/* harmony import */ var _global_RenderIf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19127);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_routes_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94528);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const AuthLayout = (props)=>{
    const { children } = props;
    const user = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.auth.user, react_redux__WEBPACK_IMPORTED_MODULE_6__.shallowEqual);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (!user) {
            router.replace(_constants_routes_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.login);
        }
    }, [
        user,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_global_RenderIf__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        isTrue: Boolean(user),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);


/***/ }),

/***/ 88474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/components/layouts/AuthLayout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/agnivon/The Rewera Project/Colud Computing/file_upload/client/src/components/layouts/AuthLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AuthLayout = (__default__);
;// CONCATENATED MODULE: ./src/app/(protected)/layout.tsx


function ProtectedLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthLayout, {
        children: children
    });
}


/***/ })

};
;