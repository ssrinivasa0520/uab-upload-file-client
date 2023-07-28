exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 61799:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 39153:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86536));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68903));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54298))

/***/ }),

/***/ 54298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ global_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/constants/routes.constants.ts
var routes_constants = __webpack_require__(94528);
// EXTERNAL MODULE: ./src/hooks/useAppSelector.ts
var useAppSelector = __webpack_require__(95887);
;// CONCATENATED MODULE: ./src/hooks/useUser.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const useUser = ()=>{
    const user = (0,useAppSelector/* useAppSelector */.C)((state)=>state.auth.user);
    return {
        user,
        isAuthenticated: Boolean(user)
    };
};
/* harmony default export */ const hooks_useUser = (useUser);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/global/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const BrandLogo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "flex items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://flowbite.com/docs/images/logo.svg",
                    className: "mr-3",
                    alt: "Logo",
                    width: 30,
                    height: 30
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
                    children: "UAB File Upload"
                })
            ]
        })
    });
};
const HamburgerButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            "data-collapse-toggle": "navbar-solid-bg",
            type: "button",
            className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
            "aria-controls": "navbar-solid-bg",
            "aria-expanded": "false",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Open main menu"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-6 h-6",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            ]
        })
    });
};
const NavbarMenuButton = ({ label, link })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: link,
            children: label
        })
    });
};
const NavbarMenu = ({ options })=>{
    const menuButtons = options.map((option)=>/*#__PURE__*/ (0,react_.createElement)(NavbarMenuButton, {
            ...option,
            key: `${option.label}-${option.link}`
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hidden w-full md:block md:w-auto",
            id: "navbar-solid-bg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700",
                children: menuButtons
            })
        })
    });
};
const Navbar = ()=>{
    const { isAuthenticated } = hooks_useUser();
    const NAVBAR_MENU_OPTIONS = isAuthenticated ? [
        {
            label: "Upload",
            link: routes_constants/* default */.Z.upload
        },
        {
            label: "Attachments",
            link: routes_constants/* default */.Z.attachments
        },
        {
            label: "Logout",
            link: routes_constants/* default */.Z.logout
        }
    ] : [
        {
            label: "Login",
            link: routes_constants/* default */.Z.login
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "border-gray-200 bg-gray-200 dark:bg-gray-800 dark:border-gray-700",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BrandLogo, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(HamburgerButton, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(NavbarMenu, {
                    options: NAVBAR_MENU_OPTIONS
                })
            ]
        })
    });
};
/* harmony default export */ const global_Navbar = (Navbar);


/***/ }),

/***/ 68903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transitions_MountTransition)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/constants/transitions.constants.ts
const Variant = {
    FADE: {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    }
};

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(34338);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(39417);
;// CONCATENATED MODULE: ./src/components/global/transitions/MountTransition.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MountTransition = (props)=>{
    const { className, children, duration = undefined } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
            layout: true,
            variants: Variant.FADE,
            initial: "hidden",
            animate: "visible",
            transition: {
                duration: duration
            },
            className: className,
            children: children
        })
    });
};
/* harmony default export */ const transitions_MountTransition = (MountTransition);


/***/ }),

/***/ 94528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   o: () => (/* binding */ API_SERVER_URL)
/* harmony export */ });
const API_SERVER_URL = "http://ec2-3-141-40-24.us-east-2.compute.amazonaws.com:3001";
const Routes = {
    login: "/login",
    logout: "/logout",
    upload: "/upload",
    attachments: "/attachments"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ }),

/***/ 86536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(10668);
// EXTERNAL MODULE: ./src/slices/auth.slice.ts
var auth_slice = __webpack_require__(23396);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/index.js
var lib = __webpack_require__(47698);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(35292);
;// CONCATENATED MODULE: ./src/store.ts




const persistConfig = {
    key: "root",
    storage: storage/* default */.Z
};
const rootReducer = (0,redux_toolkit_cjs_production_min.combineReducers)({
    [auth_slice/* default */.ZP.name]: auth_slice/* default */.ZP.reducer
});
const persistedReducer = (0,lib.persistReducer)(persistConfig, rootReducer);
const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: persistedReducer
});
const persistor = (0,lib.persistStore)(store);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(23223);
// EXTERNAL MODULE: ./node_modules/react-alert/dist/cjs/react-alert.js
var react_alert = __webpack_require__(61413);
;// CONCATENATED MODULE: ./src/context/AlertProvider.tsx



const ALERT_TEMPLATE_CONTAINER_COLOR_CLASSES = {
    info: "text-blue-800 border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
    success: "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
    error: "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
};
const ALERT_TEMPLATE_CLOSE_BUTTON_COLOR_CLASSES = {
    info: "bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700",
    success: "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700",
    error: "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
};
const AlertTemplate = ({ style, options, message, close })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: style,
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (0,utils/* classNames */.A)("flex p-4 mb-4 text-sm rounded-lg border", ALERT_TEMPLATE_CONTAINER_COLOR_CLASSES[options.type || "info"]),
            role: "alert",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    className: "flex-shrink-0 inline w-5 h-5 mr-3",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                        clipRule: "evenodd"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: options.type
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mr-3 text-sm font-medium",
                    children: message
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    className: (0,utils/* classNames */.A)("ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8", ALERT_TEMPLATE_CLOSE_BUTTON_COLOR_CLASSES[options.type || "info"]),
                    "aria-label": "Close",
                    onClick: close,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Close"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            "aria-hidden": "true",
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const options = {
    // you can also just use 'bottom center'
    position: react_alert/* positions */.m7.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: react_alert/* transitions */.pB.SCALE
};
const AlertProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_alert/* Provider */.zt, {
        ...options,
        template: AlertTemplate,
        children: children
    });
};
/* harmony default export */ const context_AlertProvider = (AlertProvider);

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs + 4 modules
var lib_queryClient = __webpack_require__(88591);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(98417);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var react = __webpack_require__(57370);
;// CONCATENATED MODULE: ./src/context/AppProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function AppProvider({ children }) {
    const queryClient = new lib_queryClient/* QueryClient */.S({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(react_redux_lib.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react/* PersistGate */.r, {
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime_.jsx(QueryClientProvider/* QueryClientProvider */.aH, {
                client: queryClient,
                children: /*#__PURE__*/ jsx_runtime_.jsx(context_AlertProvider, {
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 95887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 23396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports authSlice, setUser */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            console.log(action.payload);
            state.user = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setUser } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice);


/***/ }),

/***/ 23223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ classNames),
/* harmony export */   i: () => (/* binding */ getFormattedLocalDateTime)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17370);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function getFormattedLocalDateTime(date) {
    try {
        return moment__WEBPACK_IMPORTED_MODULE_0___default().utc(date).local().format("MMMM Do YYYY, h:mm:ss a");
    } catch  {
        return "Not Available";
    }
}


/***/ }),

/***/ 95776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(70398);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/components/global/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/agnivon/The Rewera Project/Colud Computing/file_upload/client/src/components/global/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment_moment = __webpack_require__(31946);
;// CONCATENATED MODULE: ./src/utils/index.ts

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function getFormattedLocalDateTime(date) {
    try {
        return moment.utc(date).local().format("MMMM Do YYYY, h:mm:ss a");
    } catch  {
        return "Not Available";
    }
}

;// CONCATENATED MODULE: ./src/components/global/transitions/MountTransition.tsx

const MountTransition_proxy = (0,module_proxy.createProxy)(String.raw`/home/agnivon/The Rewera Project/Colud Computing/file_upload/client/src/components/global/transitions/MountTransition.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MountTransition_esModule, $$typeof: MountTransition_$$typeof } = MountTransition_proxy;
const MountTransition_default_ = MountTransition_proxy.default;


/* harmony default export */ const MountTransition = (MountTransition_default_);
;// CONCATENATED MODULE: ./src/components/layouts/BaseLayout.tsx




function BaseLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MountTransition, {
        className: classNames("h-screen w-full min-w-fit overflow-auto"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "w-full min-h-full bg-gray-50 dark:bg-gray-900 text-black dark:text-white",
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/rsuite/dist/rsuite-no-reset.min.css
var rsuite_no_reset_min = __webpack_require__(35632);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
;// CONCATENATED MODULE: ./src/context/AppProvider.tsx

const AppProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/agnivon/The Rewera Project/Colud Computing/file_upload/client/src/context/AppProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AppProvider_esModule, $$typeof: AppProvider_$$typeof } = AppProvider_proxy;
const AppProvider_default_ = AppProvider_proxy.default;


/* harmony default export */ const AppProvider = (AppProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "UAB FILE UPLOAD",
    description: "UAB Cloud Computing Project for uploading files to Amazon S3"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(AppProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(BaseLayout, {
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;