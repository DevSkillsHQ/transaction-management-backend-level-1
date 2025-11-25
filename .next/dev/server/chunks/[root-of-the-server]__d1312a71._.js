module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/sqlite3 [external] (sqlite3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("sqlite3", () => require("sqlite3"));

module.exports = mod;
}),
"[project]/pages/api/transactions/[transaction_id].js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$sqlite3__$5b$external$5d$__$28$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/sqlite3 [external] (sqlite3, cjs)");
;
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$sqlite3__$5b$external$5d$__$28$sqlite3$2c$__cjs$29$__["default"].Database('./database.sqlite');
const isValidUUID = (uuid)=>{
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
};
async function handler(req, res) {
    const { transaction_id } = req.query;
    if (req.method !== 'GET') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    if (!transaction_id || !isValidUUID(transaction_id)) {
        return res.status(400).json({
            error: 'Invalid transaction_id format'
        });
    }
    try {
        const transaction = await new Promise((resolve, reject)=>{
            db.get('SELECT transaction_id, account_id, amount, created_at FROM transactions WHERE transaction_id = ?', [
                transaction_id
            ], (err, row)=>{
                if (err) reject(err);
                else if (!row) reject(new Error('Transaction not found'));
                else resolve(row);
            });
        });
        res.status(200).json(transaction);
    } catch (error) {
        if (error.message === 'Transaction not found') {
            return res.status(404).json({
                error: 'Transaction not found'
            });
        }
        console.error('Error getting transaction:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d1312a71._.js.map