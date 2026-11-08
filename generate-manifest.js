#!/usr/bin/env node

////////////////////////////////////////////////////////////////////////////////
// 🎬 TOMB CINEMA MANIFEST GENERATOR 🎬
//
// Scans your archive and creates manifest.json for cinema.html
//
// HOW TO USE (two ways):
//
//  A) Pass the folder and its public web address:
//       node generate-manifest.js ./files https://yoursite.org/files
//
//  B) Or edit ARCHIVE_DIR and WEB_PREFIX below and run:
//       node generate-manifest.js
//
// Options:  -o, --out <file>   output file name (default manifest.json)
//           --skip-hidden      leave out files/folders whose names start with a dot
//           --quiet            only print the final summary
//           -h, --help         show this help
//
// Then:
//  1. Upload your folder to your web host so <WEB_PREFIX>/<file> opens in a browser.
//  2. Upload manifest.json into that same folder (<WEB_PREFIX>/manifest.json).
//  3. Open Terminal Velocity OS with
//       terminal-velocity.html?manifest=<WEB_PREFIX>/manifest.json
//     or paste that address in Settings > Archive. The OS also has a Manifest
//     Maker app that does the same job in the browser, no Node needed.
//  If the OS and your files are on different websites, the files server must
//  send the header  Access-Control-Allow-Origin: *  (at least for manifest.json).
//
////////////////////////////////////////////////////////////////////////////////

// ═════════════════════════════════════════════════════════════════════════
// 👇 DEFAULTS (or pass them on the command line instead) 👇
// ═════════════════════════════════════════════════════════════════════════
let ARCHIVE_DIR = '/home/wikkkan/domains/republicka.life/public_html/files';

// All media is served from here (the public web address of that folder)
let WEB_PREFIX = 'https://republicka.life/files';

// Output file
let OUTPUT_FILE = 'manifest.json';

////////////////////////////////////////////////////////////////////////////////
// DON'T EDIT BELOW UNLESS YOU KNOW WHAT YOU'RE DOING
////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');

// Command line (optional): node generate-manifest.js <folder> <web-address> [options]
const argv = process.argv.slice(2);
const positional = [];
let SKIP_HIDDEN = false, QUIET = false;
function usage(code) {
    const src = fs.readFileSync(__filename, 'utf8').split('\n');
    const start = src.findIndex(l => l.includes('HOW TO USE'));
    const end = src.findIndex((l, i) => i > start && /^\/\/\/\/\/\//.test(l));
    console.log(src.slice(start, end).map(l => l.replace(/^\/\/ ?/, '')).join('\n'));
    process.exit(code);
}
for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') usage(0);
    else if (a === '-o' || a === '--out') OUTPUT_FILE = argv[++i];
    else if (a === '--skip-hidden') SKIP_HIDDEN = true;
    else if (a === '--quiet') QUIET = true;
    else if (a.startsWith('-')) { console.error('Unknown option: ' + a); usage(1); }
    else positional.push(a);
}
if (!OUTPUT_FILE) usage(1);
if (positional.length === 2) {
    ARCHIVE_DIR = path.resolve(positional[0]);
    WEB_PREFIX = positional[1].replace(/\/+$/, '');
} else if (positional.length !== 0) {
    console.error('Give both the folder and its web address, or neither.');
    usage(1);
}
if (!/^https?:\/\//i.test(WEB_PREFIX)) {
    console.error('The web address must start with http:// or https://  (got: ' + WEB_PREFIX + ')');
    process.exit(1);
}
const OUTPUT_ABS = path.resolve(OUTPUT_FILE);

// Video and audio extensions to count as productions
const VIDEO_EXTS = ['mp4', 'mpeg4', 'ogv', 'webm', 'avi', 'mov', 'mkv', 'm4v'];
const AUDIO_EXTS = ['mp3', 'wav', 'ogg', 'flac', 'm4a', 'aac'];

// Stats
let stats = {
    folders: 0,
    productions: 0, // videos + audio
    total: 0,
    totalSize: 0
};

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(color, message) {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// Header
console.log('');
log('cyan', '╔════════════════════════════════════════════════════════════╗');
log('cyan', '║     💀 TOMB CINEMA MANIFEST GENERATOR 💀                  ║');
log('cyan', '║     "Where tears become pixels"                          ║');
log('cyan', '╚════════════════════════════════════════════════════════════╝');
console.log('');

// Check if directory exists
if (!fs.existsSync(ARCHIVE_DIR)) {
    log('red', '❌ ERROR: Directory not found: ' + ARCHIVE_DIR);
    log('yellow', '💡 Pass the folder on the command line, or edit ARCHIVE_DIR in this script');
    process.exit(1);
}

log('green', '📁 Scanning: ' + ARCHIVE_DIR);
log('blue',  '🌐 Web prefix (canonical media origin): ' + WEB_PREFIX);
console.log('');
log('yellow', '🔮 Summoning files from the void...');
console.log('');

// Process directory recursively
function processDir(dirPath, relativePath = '', indent = '') {
    const items = [];

    log('cyan', `${indent}📂 ${relativePath || 'Root'}`);

    let entries;
    try {
        entries = fs.readdirSync(dirPath);
    } catch (error) {
        log('red', `${indent}  ❌ Cannot read directory: ${error.message}`);
        return items;
    }

    // Sort entries: folders first, then files
    const folders = [];
    const files = [];

    entries.forEach(entry => {
        const fullPath = path.join(dirPath, entry);
        if (SKIP_HIDDEN && entry.startsWith('.')) return;
        if (fullPath === OUTPUT_ABS) return; // never list the manifest itself
        let stat;

        try {
            stat = fs.statSync(fullPath);
        } catch (error) {
            return; // Skip files we can't access
        }

        if (stat.isDirectory()) {
            folders.push({ name: entry, stat });
        } else if (stat.isFile()) {
            files.push({ name: entry, stat });
        }
    });

    // Process folders
    folders.sort((a, b) => a.name.localeCompare(b.name));
    folders.forEach(({ name }) => {
        const fullPath = path.join(dirPath, name);
        const newRelative = relativePath ? `${relativePath}/${name}` : name;

        stats.folders++;

        const children = processDir(fullPath, newRelative, indent + '  ');

        items.push({
            name,
            type: 'folder',
            children
        });
    });

    // Process files
    files.sort((a, b) => a.name.localeCompare(b.name));
    files.forEach(({ name, stat }) => {
        const fullPath = path.join(dirPath, name);
        const relPathPart = relativePath ? `${relativePath}/` : '';
        const webPath = `${WEB_PREFIX}/${(relativePath ? relativePath.split('/') : []).concat(name).map(encodeURIComponent).join('/')}`;
        const size = stat.size;
        const ext = path.extname(name).substring(1).toLowerCase();

        stats.total++;
        stats.totalSize += size;

        if (VIDEO_EXTS.includes(ext) || AUDIO_EXTS.includes(ext)) {
            stats.productions++;
            const icon = VIDEO_EXTS.includes(ext) ? '🎬' : '🎵';
            log('blue', `${indent}  ${icon} ${name}`);
        } else {
            console.log(`${indent}  📄 ${name}`);
        }

        items.push({
            name,
            type: 'file',
            path: webPath,
            size
        });
    });

    return items;
}

// Scan the directory
const realLog = console.log;
if (QUIET) console.log = () => {};
const items = processDir(ARCHIVE_DIR);
console.log = realLog;

// Create manifest
const manifest = {
    generated: new Date().toISOString(),
    archiveDir: path.basename(ARCHIVE_DIR) || ARCHIVE_DIR,
    webPrefix: WEB_PREFIX,
    stats: {
        folders: stats.folders,
        productions: stats.productions,
        total: stats.total,
        totalSize: stats.totalSize
    },
    items
};

// Write manifest file
try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
} catch (error) {
    log('red', '❌ ERROR: Cannot write manifest file: ' + error.message);
    process.exit(1);
}

// Success!
const sizeGB = (stats.totalSize / 1024 / 1024 / 1024).toFixed(2);

console.log('');
log('green', '╔════════════════════════════════════════════════════════════╗');
log('green', '║                    ✅ SUCCESS! ✅                          ║');
log('green', '╚════════════════════════════════════════════════════════════╝');
console.log('');
log('cyan', '📊 ARCHIVE STATS:');
console.log(`   📁 Folders:        ${colors.yellow}${stats.folders}${colors.reset}`);
console.log(`   🎬 Productions:    ${colors.yellow}${stats.productions}${colors.reset}`);
console.log(`   📦 Total Files:    ${colors.yellow}${stats.total}${colors.reset}`);
console.log(`   💾 Archive Size:   ${colors.yellow}${sizeGB} GB${colors.reset}`);
console.log('');
log('cyan', '📝 Output file:     ' + colors.yellow + OUTPUT_FILE);
console.log('');
log('green', '🚀 NEXT STEPS:');
console.log(`   1. Make sure the files in ${colors.yellow}${ARCHIVE_DIR}${colors.reset} are web-accessible at ${colors.yellow}${WEB_PREFIX}${colors.reset}`);
console.log(`   2. Upload ${colors.yellow}${OUTPUT_FILE}${colors.reset} to ${colors.yellow}${WEB_PREFIX}/manifest.json${colors.reset}`);
console.log(`   3. Open Terminal Velocity OS with ${colors.yellow}terminal-velocity.html?manifest=${WEB_PREFIX}/manifest.json${colors.reset}`);
console.log('   4. Share that link. 🎬');
console.log('');
log('cyan', '💀 Built in detention. Watched forever. 💀');
console.log('');
