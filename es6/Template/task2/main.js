 function html(strings, ...values) {
       console.log(strings,escapeHTML(`${values}`));


 }

const mustEscape = '<>&"';
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`);

function escapeHTML(string) {
    return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}

