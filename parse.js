const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'C:/Users/naman/.gemini/antigravity-ide/brain/44f2186b-22ce-4533-b585-0b8c58d71c9b/scratch/screens';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

function parseElement($, el, depth = 0) {
    const indent = '  '.repeat(depth);
    const tag = el.tagName;
    const classes = $(el).attr('class') || '';
    const src = $(el).attr('src') || '';
    
    if (tag === 'img') {
        console.log(`${indent}<img src="${src}" class="${classes}">`);
    } else if (/^h[1-6]$/.test(tag)) {
        console.log(`${indent}<${tag} class="${classes}">${$(el).text().trim().substring(0, 50)}</${tag}>`);
    } else if (tag === 'p' || tag === 'a' || tag === 'button') {
        console.log(`${indent}<${tag} class="${classes}">${$(el).text().trim().substring(0, 50)}</${tag}>`);
    } else {
        console.log(`${indent}<${tag} class="${classes}">`);
        $(el).children().each((i, child) => {
            parseElement($, child, depth + 1);
        });
        console.log(`${indent}</${tag}>`);
    }
}

for (const file of files) {
    console.log(`\n=== ${file} ===\n`);
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html);
    
    // Config
    const script = $('#tailwind-config').text();
    if (script) {
        console.log("Tailwind Config found (first 500 chars):", script.trim().substring(0, 500));
        fs.writeFileSync(path.join(dir, 'tailwind_config.json'), script);
    }
    
    // Body structure
    const body = $('body');
    body.children('section, nav, header, footer, main, div').each((i, el) => {
        parseElement($, el, 0);
    });
}
