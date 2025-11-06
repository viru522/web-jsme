// Utilities and LocalStorage DB
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function formatCurrency(n){ return '₹' + Number(n||0).toFixed(2); }
const LocalDB = {
    get(k){ return JSON.parse(localStorage.getItem(k)||'[]'); },
    set(k,v){ localStorage.setItem(k, JSON.stringify(v)); },
    add(k,item){ const arr = LocalDB.get(k); arr.push(item); LocalDB.set(k, arr); return item; },
    update(k,id,item){ const arr = LocalDB.get(k).map(x => x.id===id?item:x); LocalDB.set(k, arr); },
    remove(k,id){ const arr = LocalDB.get(k).filter(x => x.id!==id); LocalDB.set(k, arr); }
};
let DB = LocalDB;
async function initDB(){ DB = LocalDB; return DB; }
