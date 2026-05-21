(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cityring-frontend/app/components/CityringAI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityringAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CityringAI() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "ai",
            text: "Hey 👋 Need help finding your people?"
        }
    ]);
    async function sendMessage() {
        if (!input.trim() || loading) return;
        const userMessage = input;
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    text: userMessage
                }
            ]);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage
                })
            });
            const data = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "ai",
                        text: data.reply || "Couldn't find anything right now 👀"
                    }
                ]);
        } catch  {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "ai",
                        text: "Something went wrong. Try again."
                    }
                ]);
        }
        setLoading(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "   fixed bottom-6 right-6 z-50   h-16 w-16 rounded-full   bg-gradient-to-br   from-fuchsia-600   to-pink-500   text-white text-2xl   shadow-[0_0_30px_rgba(236,72,153,0.45)]   hover:scale-110   transition-all duration-300   ",
                children: "✦"
            }, void 0, false, {
                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   fixed bottom-24 right-6 z-50   h-[620px] w-[380px]   rounded-3xl   border border-white/10   bg-black/40   backdrop-blur-2xl   shadow-[0_0_40px_rgba(255,0,128,0.15)]   overflow-hidden   flex flex-col   ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   px-5 py-4   border-b border-white/10   bg-gradient-to-r   from-fuchsia-500/20   to-purple-500/10   backdrop-blur-xl   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white text-lg font-semibold tracking-wide",
                                children: "Cityring AI"
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/50 text-sm mt-1",
                                children: "Discover your circle"
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   flex-1 overflow-y-auto   px-4 py-5   space-y-4   ",
                        children: [
                            messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[85%] text-sm leading-relaxed ${msg.role === "user" ? `
                    ml-auto
                    bg-gradient-to-br
                    from-fuchsia-600
                    to-pink-500
                    text-white
                    px-4 py-3
                    rounded-2xl rounded-br-md
                    shadow-[0_0_20px_rgba(236,72,153,0.35)]
                    ` : `
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    text-white/90
                    px-4 py-3
                    rounded-2xl rounded-tl-md
                    shadow-lg
                    `}`,
                                    children: msg.text
                                }, i, false, {
                                    fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "   w-fit   bg-white/5   border border-white/10   text-white/60   px-4 py-3   rounded-2xl   animate-pulse   ",
                                children: "Thinking..."
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   p-4   border-t border-white/10   bg-black/20   backdrop-blur-xl   flex gap-3   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                },
                                placeholder: "Ask about Cityring...",
                                className: "   flex-1   bg-white/5   border border-white/10   text-white   placeholder:text-white/30   rounded-2xl   px-4 py-3   outline-none   focus:border-fuchsia-500/40   focus:bg-white/10   transition-all   "
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendMessage,
                                className: "   px-5   rounded-2xl   bg-gradient-to-r   from-fuchsia-600   to-pink-500   text-white   font-medium   hover:scale-105   transition-all   shadow-[0_0_20px_rgba(236,72,153,0.35)]   ",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cityring-frontend/app/components/CityringAI.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CityringAI, "gNBUApWmoVotnJoL7HbtmeP05Y4=");
_c = CityringAI;
var _c;
__turbopack_context__.k.register(_c, "CityringAI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cityring-frontend/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://lothxgfuxfaqwewcjkgr.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_dt8a376XT0OgHf5H6zTSsA_aspxLDMf");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        lock: async (_name, _acquireTimeout, fn)=>{
            // Bypass navigator lock to prevent 10s timeout in dev / multiple tabs
            return fn();
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cityring-frontend/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Hide on all admin pages ──────────────────────────────
    if (pathname?.startsWith("/admin")) return null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // On reset-password page: sign out immediately and never show user as logged in
            if (pathname?.startsWith("/reset-password")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                setProfile(null);
                setLoading(false);
                return;
            }
            async function loadUser() {
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session?.user) {
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("name, email").eq("email", session.user.email).maybeSingle();
                    setProfile(data ? {
                        name: data.name,
                        email: data.email
                    } : {
                        name: session.user.email.split("@")[0],
                        email: session.user.email
                    });
                } else {
                    setProfile(null);
                }
                setLoading(false);
            }
            loadUser();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "Navbar.useEffect": async (_event, session)=>{
                    // Never set profile on reset-password page regardless of auth events
                    if (pathname?.startsWith("/reset-password")) {
                        setProfile(null);
                        return;
                    }
                    if (session?.user) {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("name, email").eq("email", session.user.email).maybeSingle();
                        setProfile(data ? {
                            name: data.name,
                            email: data.email
                        } : {
                            name: session.user.email.split("@")[0],
                            email: session.user.email
                        });
                    } else {
                        setProfile(null);
                    }
                }
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>subscription.unsubscribe()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClick(e) {
                if (menuRef.current && !menuRef.current.contains(e.target)) {
                    setMenuOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    async function handleSignOut() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setProfile(null);
        setMenuOpen(false);
        setMobileMenuOpen(false);
        window.location.href = "/";
    }
    function getInitials(name) {
        return name.split(" ").map((w)=>w[0]).join("").toUpperCase().slice(0, 2);
    }
    const navLinks = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Join',
            href: '/join'
        },
        {
            label: 'Register',
            href: '/register'
        },
        {
            label: 'Exclusive',
            href: '/exclusive'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
        {
            label: 'Complaint',
            href: '/complaint'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-5f5881c97be6b01d" + " " + "border-y border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5f5881c97be6b01d" + " " + "max-w-7xl mx-auto px-3 sm:px-4 md:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-5f5881c97be6b01d" + " " + "h-14 sm:h-16 md:h-[60px] flex items-center justify-between gap-2 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5f5881c97be6b01d" + " " + "flex items-center flex-shrink-0",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5f5881c97be6b01d" + " " + "h-8 w-20 rounded-xl bg-white/5 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this) : profile ? /* ── SIGNED IN ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: menuRef,
                                            className: "jsx-5f5881c97be6b01d" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMenuOpen(!menuOpen),
                                                    className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-2 sm:px-3 py-1.5 hover:bg-white/10 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-5f5881c97be6b01d" + " " + "h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0",
                                                            children: getInitials(profile.name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-5f5881c97be6b01d" + " " + "text-xs sm:text-sm font-medium text-white/90 max-w-[80px] sm:max-w-[100px] truncate hidden xs:inline",
                                                            children: profile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            className: "jsx-5f5881c97be6b01d" + " " + `h-3 w-3 text-white/40 transition-transform hidden sm:block ${menuOpen ? "rotate-180" : ""}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2 4l4 4 4-4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "jsx-5f5881c97be6b01d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-5f5881c97be6b01d" + " " + "absolute left-0 top-full mt-2 w-48 sm:w-52 rounded-xl sm:rounded-2xl border border-white/10 bg-[#0f0f12] shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-5f5881c97be6b01d" + " " + "px-3 sm:px-4 py-2 sm:py-3 border-b border-white/5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-2 sm:gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-5f5881c97be6b01d" + " " + "h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0",
                                                                        children: getInitials(profile.name)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-5f5881c97be6b01d" + " " + "overflow-hidden",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-5f5881c97be6b01d" + " " + "text-xs sm:text-sm font-medium text-white truncate",
                                                                                children: profile.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                lineNumber: 139,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-5f5881c97be6b01d" + " " + "text-xs text-white/40 truncate",
                                                                                children: profile.email
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                lineNumber: 140,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-5f5881c97be6b01d" + " " + "py-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "/dashboard",
                                                                    onClick: ()=>setMenuOpen(false),
                                                                    className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white/70 hover:text-white hover:bg-white/5 transition",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 16 16",
                                                                            fill: "none",
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "h-4 w-4 flex-shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "2",
                                                                                    y: "2",
                                                                                    width: "5",
                                                                                    height: "5",
                                                                                    rx: "1",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "1.3",
                                                                                    className: "jsx-5f5881c97be6b01d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                    lineNumber: 147,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "9",
                                                                                    y: "2",
                                                                                    width: "5",
                                                                                    height: "5",
                                                                                    rx: "1",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "1.3",
                                                                                    className: "jsx-5f5881c97be6b01d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                    lineNumber: 148,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "2",
                                                                                    y: "9",
                                                                                    width: "5",
                                                                                    height: "5",
                                                                                    rx: "1",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "1.3",
                                                                                    className: "jsx-5f5881c97be6b01d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                    lineNumber: 149,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "9",
                                                                                    y: "9",
                                                                                    width: "5",
                                                                                    height: "5",
                                                                                    rx: "1",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "1.3",
                                                                                    className: "jsx-5f5881c97be6b01d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                    lineNumber: 150,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "hidden sm:inline",
                                                                            children: "My Dashboard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 152,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "sm:hidden",
                                                                            children: "Dashboard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 153,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleSignOut,
                                                                    className: "jsx-5f5881c97be6b01d" + " " + "w-full flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 16 16",
                                                                            fill: "none",
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "h-4 w-4 flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l3-3-3-3M13 8H6",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "1.3",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                className: "jsx-5f5881c97be6b01d"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "hidden sm:inline",
                                                                            children: "Sign out"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-5f5881c97be6b01d" + " " + "sm:hidden",
                                                                            children: "Exit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "jsx-5f5881c97be6b01d" + " " + "hidden sm:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    className: "jsx-5f5881c97be6b01d" + " " + "h-3.5 w-3.5 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l3-3-3-3M13 8H6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-5f5881c97be6b01d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                "Sign out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this) : /* ── SIGNED OUT ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/login",
                                    className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-white/70 hover:text-white hover:bg-white/10 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            className: "jsx-5f5881c97be6b01d" + " " + "h-3.5 w-3.5 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "8",
                                                    cy: "5",
                                                    r: "3",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    className: "jsx-5f5881c97be6b01d"
                                                }, void 0, false, {
                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 13c0-3 2.686-5 6-5s6 2 6 5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    strokeLinecap: "round",
                                                    className: "jsx-5f5881c97be6b01d"
                                                }, void 0, false, {
                                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        "Sign in"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5f5881c97be6b01d" + " " + "hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-6 text-xs sm:text-sm lg:text-[15px] tracking-wide text-white/80",
                                children: [
                                    navLinks.slice(0, 5).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: "jsx-5f5881c97be6b01d" + " " + "hover:text-white transition whitespace-nowrap",
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact",
                                        className: "jsx-5f5881c97be6b01d" + " " + "hover:text-white transition hidden xl:inline whitespace-nowrap",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/complaint",
                                        className: "jsx-5f5881c97be6b01d" + " " + "hover:text-white transition hidden 2xl:inline whitespace-nowrap",
                                        children: "Complaint"
                                    }, void 0, false, {
                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5f5881c97be6b01d" + " " + "flex items-center gap-1 sm:gap-2 ml-auto lg:ml-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        className: "jsx-5f5881c97be6b01d" + " " + "lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition",
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20,
                                            className: "text-white/70"
                                        }, void 0, false, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20,
                                            className: "text-white/70"
                                        }, void 0, false, {
                                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5f5881c97be6b01d" + " " + "hidden lg:block min-w-[160px]"
                                    }, void 0, false, {
                                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5f5881c97be6b01d" + " " + "lg:hidden border-b border-white/10 bg-black/80 backdrop-blur animate-in fade-in slide-in-from-top-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5f5881c97be6b01d" + " " + "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 space-y-1",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setMobileMenuOpen(false),
                            className: "jsx-5f5881c97be6b01d" + " " + "block px-3 py-2.5 text-xs sm:text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5f5881c97be6b01d" + " " + "lg:hidden fixed bottom-0 w-full border-t border-white/10 bg-black/80 backdrop-blur z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5f5881c97be6b01d" + " " + "flex items-center justify-between",
                    children: navLinks.slice(0, 4).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            className: "jsx-5f5881c97be6b01d" + " " + "flex-1 flex flex-col items-center justify-center py-3 px-1 text-xs text-white/60 hover:text-white/90 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-5f5881c97be6b01d" + " " + "text-center line-clamp-1",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cityring-frontend/app/components/Navbar.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5f5881c97be6b01d",
                children: "@media (width<=1024px){body.jsx-5f5881c97be6b01d{padding-bottom:3.5rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Navbar, "DLi6Yp0MCOBdvzKxl9tbs977tFY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cityring-frontend/app/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cityring-frontend/lib/supabaseClient.ts [app-client] (ecmascript)"); // ← CORRECTED PATH
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            async function initAuth() {
                try {
                    const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                    if (session?.user) {
                        setUser({
                            id: session.user.id,
                            email: session.user.email || "",
                            user_metadata: session.user.user_metadata
                        });
                        setIsAuthenticated(true);
                    } else {
                        setUser(null);
                        setIsAuthenticated(false);
                    }
                } catch (error) {
                    console.error("Auth initialization error:", error);
                    setUser(null);
                    setIsAuthenticated(false);
                } finally{
                    setLoading(false);
                }
            }
            initAuth();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": async (event, session)=>{
                    // PASSWORD_RECOVERY means user clicked reset link — treat as NOT logged in
                    // so navbar doesn't show them as authenticated during password reset
                    if (event === "PASSWORD_RECOVERY") {
                        setUser(null);
                        setIsAuthenticated(false);
                        return;
                    }
                    if (session?.user) {
                        setUser({
                            id: session.user.id,
                            email: session.user.email || "",
                            user_metadata: session.user.user_metadata
                        });
                        setIsAuthenticated(true);
                    } else {
                        setUser(null);
                        setIsAuthenticated(false);
                    }
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    subscription?.unsubscribe();
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    async function signOut() {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            setUser(null);
            setIsAuthenticated(false);
            router.push("/login");
        } catch (error) {
            console.error("Sign out error:", error);
        }
    }
    async function refreshSession() {
        try {
            const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (session?.user) {
                setUser({
                    id: session.user.id,
                    email: session.user.email || "",
                    user_metadata: session.user.user_metadata
                });
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Session refresh error:", error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            isAuthenticated,
            signOut,
            refreshSession
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/cityring-frontend/app/lib/auth-context.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "zGwXncPB/l8kO3OZcImhthZBHCk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cityring$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cityring-frontend_d27c647c._.js.map