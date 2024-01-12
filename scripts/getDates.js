const date = new Date();
let copywrite = date.getFullYear();
let lastmodified = new Date(document.lastModified);
let lastmod = lastmodified.toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
console.log(lastmod)
document.querySelector('#copywrite').textContent = `\xA9${copywrite} \u2022 Spencer Quiner \u2022 Spain`;
document.querySelector('#lastmod').textContent = `Last Modified: ${lastmod}`;