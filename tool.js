function money(n){return Number.isFinite(n)?n.toLocaleString('en-IN',{maximumFractionDigits:2}):'—'}
function out(id,text){document.getElementById(id).textContent=text}
function field(label,id,type='number',value=''){return `<label>${label}<input id="${id}" type="${type}" value="${value}" inputmode="decimal"></label>`}
