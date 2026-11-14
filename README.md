# Terminal-Velocity
🖥️ A complete desktop operating system in a single HTML file. Windows, taskbar, file system, terminal, and a growing set of apps: Paint with webcam, Diary, drum-machine Sequencer, Browser, live Chat, Media Player, Backup and more. Works offline, no dependencies, installs as an Android app. Includes the retro RPG Terminal Velocity. CC0.

=====================================================================
  TERMINAL VELOCITY OS
  A complete desktop in one file. No server. No tracking. Yours.
=====================================================================

CONTENTS

   1. What it is
   2. Quick start and hosting
   3. The desktop
   4. The apps
   5. Your data: saving, Backup, Cleaner, reboot
   6. Your own archive (manifest.json)
   7. Links, the Browser and the OS
   8. Speed, memory and Low power mode
   9. Honest limits
  10. The Mythocratic Calendar
  11. The game: Terminal Velocity
  12. Credits and licence


=====================================================================
1. WHAT IT IS
=====================================================================

Terminal Velocity OS is a complete desktop that runs entirely inside a
web browser, from ONE file (terminal-velocity-os.html, about 620 KB).
No images, no libraries, no install, no build step, no server, no
accounts and no tracking. Everything you make stays in your browser until
you choose to export it.

It starts with a long, chatty boot log that says what it is doing (the
checks are real, not decoration), then gives you a desktop with windows,
a taskbar, a Start menu, a file system, a terminal and a full set of apps. The first
of those apps is the game Terminal Velocity, which lives inside the OS
(section 11).

It is built for a small, low-cost computer. A $75 Chromebook with 4 GB of
RAM is the target, and the Benchmark app (section 8) shows you exactly
how much of the machine the OS uses.


=====================================================================
2. QUICK START AND HOSTING
=====================================================================

  1. Download terminal-velocity-os.html.
  2. Double-click it. It opens in any modern browser and works offline.
  3. Press Ctrl+Space and type the name of anything you want to open.

To host it, upload the file to any web host that serves static pages
(your own server, GitHub Pages, an archive site). After uploading a new
version, use Start > Reboot: it fetches the newest copy by itself
(section 5). On a phone you can wrap it as an app, for example with
Appilix, which is a plain web view around the page.

Useful addresses (add them after the file name):
  ?nogame                       boot without starting the game, and
                                without restoring your windows
  ?manifest=https://.../manifest.json
                                mount someone's archive (section 6)

Files delivered:
  terminal-velocity-os.html     the OS, with the game inside it
  README.txt                    this file
  (generate-manifest.js is built into the OS: Manifest Maker has it.)


=====================================================================
3. THE DESKTOP
=====================================================================

BOOT
  Boot takes about 7 seconds so you can read it. Settings > Boot has
  Slow (about 14 s), Normal, Fast and Instant, and a switch for the
  verbose log. Press any key during boot to skip the delays. A dedication
  line, "Welcome Home Ivory!", shows on the boot screen.
  On the very first boot the game starts minimised in the taskbar so the
  desktop comes first. Settings > Boot changes that.

WINDOWS
  Drag title bars to move, drag edges to resize, drag to a screen edge to
  snap. Windows cannot be lost off-screen: if one ever ends up out of
  reach, it is pulled back automatically. On phones every window is
  full-screen.

THE TASKBAR AND START MENU
  Each open window has a taskbar button. Click to focus or minimise,
  right-click for a menu, and DRAG a button left or right to arrange the
  taskbar. The order is remembered. The Start menu (the TV-OS button, or
  the Windows/Meta key) lists every app, plus Save OS, Theme and Reboot.
  The tray shows the date and clock in Mythocratic time (hover for both),
  an eye button to cycle themes, and the archive status.

DRAGGABLE TABS
  In Notepad and Browser, drag any tab left or right to reorder it. This
  works with a mouse; on touch screens the tab strip scrolls instead
  (the taskbar works the same way). Tab rows inside apps like Clock,
  Toolbox and Benchmark are fixed sections and do not move.

KEYS
  Ctrl+Space   Spotlight: apps, archive files and quick maths
  Alt+T        Terminal        Alt+F  Files
  Alt+N        Notepad         Alt+G  the game
  Alt+W        close           Alt+M  minimise
  Alt+Enter    maximise        Alt+Tab  next window

THEMES AND LOOK  (Settings > Appearance)
  17 "X environments": Phosphor Green, Amber Terminal, Cyan Relay,
  Sovereign Gold, Agape Pink, Queen Ivory (light), Hearth Ember, Owrbit
  Violet, Deep Freeze, CC0 Rug, Plushie Pastel (light), Zero Port, Blue
  Screen, Combine Steel, Triage Red, Zookeeper Moss, Plain Paper (light).
  Change a theme in Settings, with the tray eye, or in the terminal:
  theme NAME.
  Wallpapers are drawn on canvas, with no image files: stars, 50 BPM
  rings, grid, rain, flow, plain, none.
  Options: CRT scan lines (off by default, so pictures and video are
  never tinted), vignette, window animations, text size, sound, Low power
  mode, "Calendar & dates" (Mythocratic first or Gregorian first), and
  "Show Music, Books, Comics, Audiobooks and Archive even when their files
  are not mounted".

SESSION RESTORE
  The OS remembers which windows were open, where they were, their size,
  maximised or minimised state, their order in the taskbar and which one
  had focus. Reboot or refresh and they come back. To start fresh, close
  every window and reboot. Settings > Boot > "Reopen my windows..." turns
  this off. Apps also remember their own places: Notepad drafts, the last
  song, book, comic, audiobook and episode, and your Browser tabs.


=====================================================================
4. THE APPS
=====================================================================

Every app has a desktop icon, a Start menu entry and a Spotlight entry,
and every icon is different.

--- SYSTEM -----------------------------------------------------------

Terminal
  A real shell: ls -lahs, cd, cat, grep, find, tree, mkdir, cp, mv, rm,
  head, tail, wc, sort, pipes |, redirects > >>, globs *, Tab complete,
  history. Also open, edit, play, view, theme, wallpaper, neofetch,
  reboot, saveos. Type "help".

Files
  The file manager. The whole archive is at /archive (read-only), your
  files at /home/user, plus /tmp and /system. Grid or list view.

Settings
  Appearance, Boot, Archive (load a manifest from a file or URL),
  Storage (how much you use, protect storage, erase home) and About.

Task Manager
  Open windows, frames per second, memory and storage, with Close.

Benchmark
  How much of the computer the OS really uses (section 8).

Quine
  The OS reads its own file and runs a copy of itself in a window. That
  copy can open Quine and run another copy, and so on, up to a limit the
  device can handle (fewer on phones and small machines). "Stack and
  benchmark" builds the layers for you and runs the Benchmark app's own
  tests inside each one, then shows boot time, speed against the real OS,
  page smoothness and memory per layer. Needs the OS to be opened from a
  web address, because a page can't read itself from a file. All layers
  share your saves (so a change in a copy is a change to your real data),
  but copies never save or restore your open windows and stay out of
  Chat. Closing the Quine window closes the copies.

Cleaner
  See everything this OS has saved in your browser, and clear what you no
  longer want (section 5).

Welcome
  A short tour, with the dedication.

--- ACCESSORIES ------------------------------------------------------

Notepad
  Tabs, find and replace, Markdown preview and autosaved drafts. Real
  export: Download, Save to computer (file picker), Export all as ZIP,
  Tabs ZIP. Drag tabs to reorder them.

Diary
  A pretty paper diary. It opens as a closed rose-coloured book; tap the
  heart clasp. One page per day, with ruled lines, a margin line, hole
  punches and washi tape. Pick a mood, tap stickers to drop them into
  your writing, flip days with the arrows, jump to any date, see the
  month with a heart on every day you wrote, and search every page.
  Dates show in the Mythocratic Calendar with the Gregorian date under
  them (follows your Settings choice). The gear button changes the cover
  colour (rose, lilac, peach, mint, sky), ink colour, handwriting style
  and cover title, sets an optional PIN, saves your pages as .txt or
  .json, adds pages from a .json, and tears out a page.
  About the PIN: it keeps casual snoopers out. It does NOT encrypt.
  Anyone who can read this browser's stored data can read the pages.
  The handwriting style uses fonts already on your device, so it looks
  best on Windows, Mac, iOS and Android.

Calendar
  A month view with notes (Mythocratic month header, Gregorian second).

Clock
  Clock, a Mythocratic converter tab, timer, stopwatch and world times.

Metronome
  50 BPM by default, with sound.

Calculator
  Scientific, with its own expression parser (no eval).

Tasks
  A simple to-do list.

--- MEDIA ------------------------------------------------------------

Media Player
  Audio and video, playlists, shuffle and repeat, speed, a visualiser.
  Each file plays once and stops. Turn on "Auto-next" to move on to the
  next file in the playlist by itself (off by default; the choice is
  remembered). The Next and Previous buttons always work.

Image Viewer
  Zoom, pan, rotate, slideshow.

Reader
  Comfortable Markdown and text reading. Remembers your place.

Paint
  An expression board.
  - Camera: opens your webcam. Take a photo (optional 3 or 5 second
    timer, Mirror, Switch camera) and it becomes the picture, ready to
    draw all over. Your drawing sits on its own layer above the photo,
    so "Clear drawing" rubs out everything you drew and keeps the photo.
  - Tools: Brush, Soft, Spray, Rainbow, Sparkle, Eraser, Line, Box,
    Circle, Heart, Star, Fill (with an adjustable range), Pick
    (eyedropper), Text (four fonts), Stamp (24 faces, hearts, stars, a
    crown and more) and Hand (pan).
  - Size and opacity sliders, 20 colours plus any colour you like, and
    pen pressure on tablets and styluses.
  - Symmetry: Mirror, or Mandala 4, 6 and 8 for kaleidoscope drawing.
  - New (six canvas sizes, five paper colours), Open from this computer
    or from the OS files, Undo and Redo (40 steps), zoom (Ctrl+wheel),
    Flip, Save as PNG or JPG (to Downloads or the OS Pictures folder)
    and Copy to the clipboard.
  - Keys: B brush, E eraser, G fill, I pick, L line, R box, O circle,
    T text, S stamp, H hand, [ and ] for size, Ctrl+Z / Ctrl+Y.
  - Photos and opened files are shrunk to 1600 pixels on the long side
    to keep cheap computers happy. Undo history is stored as small
    compressed images, so it stays light on memory.

Sequencer
  A drum machine and loop recorder.
  - Eight synthesized drum sounds (kick, snare, closed hat, open hat,
    clap, tom, rim, cowbell). No sample files.
  - Tap a square once for a normal hit, twice for an accent, a third
    time to turn it off. Mouse users can drag to paint.
  - 8, 16 or 32 steps, tempo 40 to 240 BPM (the "50" button sets the
    heartbeat tempo), tap tempo, swing, four patterns A to D (switching
    while playing waits for the end of the loop), mute, solo and volume
    for each track, and six starter beats.
  - Keys A S D F G H J K play the sounds, Space starts and stops. With
    Live hits on, your key taps are added to the pattern while it plays.
  - Loop recorder: two slots. Press Record; the app waits for the next
    loop start, then records the microphone for 1, 2 or 4 loops and plays
    it back in time. Use headphones, or the beat leaks into the mic. If
    a recording sounds late, raise "Fix lateness". Loops are kept only
    while the app is open.
  - Save as WAV renders the pattern plus your loops to a stereo 16-bit
    file, using the same save location as the Recorder.
  - Patterns are saved with the rest of your data and included in Backup.

Recorder
  Records real WAV (16-bit PCM, mono or stereo, at your device's sample
  rate), or compressed m4a, webm or ogg where the browser supports it.
  Choose the microphone, optional voice clean-up (off by default for
  archive quality), pause and resume, a level meter, and "start a new
  file every N minutes".

Camera
  Webcam or screen recording (desktop), photos (JPG), pause, countdown,
  resolution (720p HD by default, for webcam and screen; 480p to 4K available), frame rate, format (MP4 where supported, else
  WebM), quality, mic select and mute, mirror, and front/back flip on
  phones. Source "Screen + webcam corner" draws your camera into a corner
  of a screen recording (choose the corner, size, circle or rectangle;
  mirror applies to the bubble). System audio, if you share it, and your
  mic are mixed. Desktop browsers only for screen recording.

  Where recordings go (Recorder, Camera, Sequencer WAV): "A folder on
  this device" streams straight to a real folder (Chrome, Edge, Opera on
  desktop, and Chrome on Android); long takes are split into parts that
  appear as each part finishes. Firefox and Safari download the file when
  you press Stop. "Inside this OS" saves to /home/user/Recordings in
  browser storage (export it with Backup). Not available in the Appilix
  APK, whose web view blocks the camera, mic and folders: use a browser.
  Chrome's WebM files may not seek smoothly in some players; choose MP4
  if offered.

Music, Books, Comics, Audiobooks, School, Archive
  These read an archive (section 6) and appear only when their folders
  exist.
  - Music: opens /archive/Atheden. Pick an album and play it as a
    playlist (full track names, shuffle, repeat, visualiser). Remembers
    the album, the track, the exact second and the volume, and reopens
    paused right where you stopped.
  - Books: an e-reader for /archive/Books. Library with search and
    progress, chapter list, page or scroll mode, font, size, spacing and
    margins, Paper, Sepia and Night themes, in-book search, and
    bookmarks that remember where you stopped.
  - Comics: reads /archive/Republicka-Comic (368 pages) or any folder of
    images. Single page, two-page spread or vertical scroll; fit page,
    width or height; zoom; right-to-left (manga) order; page grid;
    fullscreen; arrow keys, tap or swipe. Remembers your page.
  - Audiobooks: the 24 books in /archive/Audiobooks. Remembers where
    you stopped in each, +/-15 s and 60 s skips, speed 0.75x to 2.5x,
    sleep timer, bookmarks, and "Read the text" jumps to the matching book
    in Books. Keys: Space, arrows, B, [ ].
  - School: reads every folder in /archive whose name starts with a
    number (01-..., 02-...). Left: the series (number, name, years).
    Right: the player, controls and item list. mp4 plays in the window,
    mp3 plays with a title card, jpg shows full size. Keys: Space play or
    pause, Left/Right +-10 s, N/P next or previous, F full screen, Up/Down
    volume. Position is remembered per file, finished items get a check
    mark. When you reopen School it loads the last thing you watched,
    paused at the second you left, and "Continue" plays it.
  - Archive: search every file name in the manifest.

--- INTERNET ---------------------------------------------------------

Browser
  A basic browser for the free web, meaning sites that allow themselves
  to be shown inside another page.
  - Tabs, address bar, back, forward, reload, bookmarks (right-click a
    bookmark to rename or remove it; Export and Import are on the start
    page). republicka.life is bookmarked by default.
  - Open tabs are remembered: close the Browser or reboot and the same
    tabs come back, with the same one selected. Only the selected tab
    loads straight away; the others load when you click them.
  - It is honest about its limits: Google, Facebook, GitHub, most news
    sites and anything with a login refuse to be framed. The OS says so
    and offers "Open in new tab". Plain http:// pages cannot be shown.
  - Typed words are searched with Marginalia (default), Wikipedia, the
    Internet Archive or Bible Gateway (KJV); pick on the start page. With
    Bible Gateway chosen, type a verse ("John 3:16"), a chapter
    ("Romans 8") or words ("love your enemies") in the address bar.
    YouTube and Vimeo watch links become embeds. A list of sites that
    usually work is on the start page (including Project Gutenberg,
    Wikipedia, Wikibooks, Wikisource, Commons, Internet Archive,
    OpenStreetMap, Bible Gateway, Odysee and BitChute).
  - Pages are sandboxed and sent no referrer.
  - Space: on phones the Browser shows one slim bar (Back, address,
    Reload, menu). The menu has Forward, Start page, bookmarks, tabs,
    "Paste link and go" and "About this browser". On desktop, the expand
    button hides the tab and bookmark bars, and the "i" button shows the
    free-web explanation.

Chat
  The Republicka Live Chamber, built into the OS (no web page needed). It
  is ONE room shared by everyone who uses the OS, the Android app and the
  republicka.life/chat page: anyone in the room can read what you write.
  The join screen says so and shows how many people are there right now.
  Chat only appears on the desktop when the chat server can be reached;
  offline, or on a site other than republicka.life, it is hidden like the
  archive apps (Settings > show all apps reveals it anyway).
  Enter a name and talk with whoever else is in the chamber: coloured
  names, links you can click, a People list showing who is online, and
  a 400-character limit. The server only relays messages for 5 minutes,
  so you see what is said while you are in the room; your own copy of
  everything you receive is kept on this device (the last 1,000
  messages). "Clear" wipes that copy; "Log out" leaves the room.

  How your name is saved (also explained in the app: the "?" button in
  the chat, or "How is my name saved?" on the join screen):
  - The name you last used is remembered on this device and filled in
    next time.
  - Your name is yours. The first browser to use a name owns it, so
    nobody else can pretend to be you. The proof is a secret identity
    key that the OS makes and keeps in this browser. The chat server
    never sees the key itself, only a scrambled fingerprint of it,
    stored next to your name. A name nobody uses for 90 days is freed.
  - Three things sit in your save data: your name, your chat history and
    your identity key. All three are in Backup, so to chat as the same
    person on another device you just back up and restore there.
  - Anyone who holds the key can speak as you, so keep backups private.
  - Cleaner lists all three ("Chat identity key" is the key). If you
    delete the key, or clear the browser's data, that name stays locked
    to the old key until the chat admin releases it.
  - Each browser has its own key. A different browser, or the Android
    app, is not recognised until you restore a Backup there.

  Chat works when the OS is served from republicka.life (or the Android
  app made from it). From any other address the chat server refuses the
  connection, and Chat says so. Moderation (kick, ban, delete, release a
  name) stays on the chat web page's admin panel.

--- TOOLS ------------------------------------------------------------

Backup
  One-click ZIP of your files, settings, app data and game save, and
  restore (section 5).

Manifest Maker
  Turn any folder into manifest.json, try it in the OS, get a share link
  (section 6). Has a Guide tab.

BookBinder
  Bind many .txt books into one file (dividers, file-name headings) or
  split them into chunk ZIPs for NotebookLM and other AI tools. Add
  files from your computer or a whole archive folder.

Toolbox
  Base64, URL, SHA hashes, JSON, regex, colour, time, UUID, text and
  random tools.

App Runner
  Runs pasted or opened HTML in a sandbox.

--- GAMES ------------------------------------------------------------

Terminal Velocity (the game, section 11), Snake and Minesweeper.


=====================================================================
5. YOUR DATA: SAVING, BACKUP, CLEANER, REBOOT
=====================================================================

WHERE THINGS LIVE
  Everything is stored in your browser, on your device. There is no
  account and no server copy.
  - Settings, app data, the Diary, Sequencer patterns, bookmarks, Browser
    tabs, reading positions and the game save are in the browser's
    localStorage.
  - Your files in /home/user, and a few app items (Notepad drafts, the
    recorder folder permission, a saved manifest), are in the browser's
    IndexedDB.
  - The game save is shared with the standalone game when both run on the
    same web address.
  Saves are per browser and per web address. Clearing the site's data
  deletes them, so keep a Backup.

BACKUP  (Start > Backup)
  Create backup ZIP holds: your /home/user files, your settings and app
  data (books, comics, audiobooks, music, tasks, calendar notes, Diary,
  Sequencer, bookmarks, your Chat identity key, and more) and the
  Terminal Velocity game save. It is a plain ZIP; any unzip tool opens it. To move to another browser,
  device or newer build: open the new OS, Backup > Choose backup ZIP,
  pick what to restore, Merge or Replace. The OS restarts when it is
  done. A safety backup of the current state downloads first unless you
  untick it.
  Not included: /archive (it streams from the web), folders mounted under
  /mnt, Notepad drafts, and a few housekeeping items (Cleaner lists
  exactly which).
  "Protect storage" (in the Backup app, and a similar button in Cleaner) asks the browser
  not to clear this OS's data. Backups are still the real safety net.

CLEANER  (System > Cleaner)
  Shows everything this site has saved in your browser, so nothing feels
  like magic, and lets you clear what you no longer want.
  - Overview: how much is saved, what a Backup ZIP will and will not
    contain, the browser's own storage estimate, your last backup time,
    and a button to ask the browser to keep your data safe.
  - Settings and data: every item in localStorage, grouped (your writing
    and creations, settings, progress and saved places, app preferences,
    game, housekeeping). Each item has a plain-English name, its real
    key, its size, and a badge saying "in Backup" or "not in Backup".
    View shows the exact contents. Anything this OS did not create is
    listed too, as "Saved by something else".
  - Your files: everything in /home/user, biggest first.
  - Other storage: Notepad drafts, the recorder folder permission, other
    browser databases, caches and cookies. None of this is in a Backup.
  - Tick what you want gone and press Delete. You see a list first, with
    extra warnings for writing and game saves. Undo puts deleted settings
    and data back until you close Cleaner. Deleted files cannot be
    undone. Some apps notice a clean only after a reboot, so a "Reboot to
    apply" button appears.
  Clean first, then back up, and your export holds only what you want.

SAVE THE OS ITSELF
  Start menu > Save OS (also in Backup, Settings > About, or the terminal
  command saveos) downloads this whole OS as one .html file. In Chromium
  browsers you choose where to save it. If a browser blocks a page from
  reading itself (for example when opened from disk), use Ctrl+S, "HTML
  only".

REBOOT  (Start > Reboot, or the terminal command reboot)
  Reboot always fetches the newest copy of the page, ignoring the browser
  cache (like Ctrl+Shift+R), then reloads. After you upload a new version
  of the file, Reboot picks it up. A cache outside the browser, such as a
  CDN like Cloudflare or the Appilix app's own cache, can still serve an
  old copy until it expires or is purged.


=====================================================================
6. YOUR OWN ARCHIVE (MANIFEST.JSON)
=====================================================================

When the page can reach a manifest.json, your archive mounts at /archive
and the data apps (section 4) light up. Files stream from their web
addresses; nothing is copied.

  Default order tried: republicka.life/files/manifest.json, then
  files/manifest.json, then manifest.json beside the page.
  Your own: Settings > Archive (load from a file or URL), or boot with
  ?manifest=https://example.org/files/manifest.json
  Format: {generated, webPrefix, stats, items:[{name, type:"folder"|
  "file", children, path (URL), size}]}. Anyone can bring their own
  archive.

SHARE YOUR OWN ARCHIVE (Manifest Maker)
  1. Upload your folder of files to any web host.
  2. Start > Manifest Maker: type that web address, choose the folder,
     download manifest.json.
  3. Upload manifest.json into the same online folder.
  4. Share the link it gives you, which looks like:
     terminal-velocity-os.html?manifest=https://yoursite.org/files/manifest.json
  generate-manifest.js is the command line version:
     node generate-manifest.js ./files https://yoursite.org/files
  If the OS and your files are on different websites, the files server
  must send Access-Control-Allow-Origin: * (at least for manifest.json).

APPS THAT NEED AN ARCHIVE
  Music, Books, Comics, Audiobooks and School show on the desktop, Start
  menu and search only when their folders exist: /archive/Atheden,
  /archive/Books, /archive/Republicka-Comic, /archive/Audiobooks, and
  numbered folders such as /archive/01-Name-2012 for School. Archive
  search shows whenever any manifest is loaded. If someone points the OS
  at their own manifest, those apps disappear. Settings > Appearance has
  a switch to show them anyway (useful when you pick your own folders
  inside them). Apps can still be opened by name.


=====================================================================
7. LINKS, THE BROWSER AND THE OS
=====================================================================

Links inside the OS itself (Notepad, Reader, Welcome and so on) open as
a tab in the Browser instead of leaving the OS.

Links inside a framed website are controlled by that website, and the OS
cannot see them. By default a target="_blank" link in a framed page
opens a normal browser tab.
  - Pages on the same site as the OS (for example republicka.life when the
    OS runs from republicka.life) are wired up automatically: their
    new-window links and window.open() calls become Browser tabs.
  - For pages on another site that YOU control, add
    this snippet and those links will open as a new tab in the OS Browser.
    Outside the OS it does nothing, so it is safe on every page:

<script>
if(window.parent!==window){document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var t=a.getAttribute("target");if(t==="_blank"||t==="_new"){e.preventDefault();parent.postMessage({tvos:"open",url:a.href},"*")}},true)}
</script>

  - Anyone else's pages can only be handled by copying the link and using
    the Browser's "Paste & go" button (desktop toolbar, or "Paste link
    and go" in the phone menu).


=====================================================================
8. SPEED, MEMORY AND LOW POWER MODE
=====================================================================

BENCHMARK  (System > Benchmark)
  Shows how much of the computer the OS really uses.
  - Live: frame budget used (the share of each 16.7 ms frame the OS
    needs), frames per second, stutters, JavaScript memory, page
    elements and long freezes, with a plain verdict: Plenty of headroom,
    Comfortable, Busy or Struggling.
  - Windows: a rough weight estimate of every open window, with Focus and
    Close.
  - Benchmark: eight short speed tests plus a storage test, then it opens
    six real apps in a row and reports the slowest frame and open times.
    Results are saved with a device name and can be copied or downloaded
    as text.
  - Guide: a plain-language explanation of every number.
  The speed score is relative to a reference machine (1.00): a modest
  cloud-server core. There is no official "top score" table; the
  verdict thresholds are this project's own. Browsers do not let a page
  read real CPU % or total RAM, so frame budget and JavaScript memory are
  the honest substitutes.

LOW POWER MODE  (Settings > Appearance, or the Benchmark app)
  Auto, On or Off. It turns off animations, glow, shadows, the vignette
  and the moving wallpaper, and slows the music visualisers. Auto turns
  it on for devices with 2 CPU cores or fewer, or 2 GB of memory or less.
  New apps follow it automatically.

WHAT KEEPS IT LIGHT
  Plain HTML, CSS and JavaScript. Audio is synthesized with Web Audio
  (no sound files), wallpapers and visualisers are drawn on canvas, and
  recordings can stream to disk instead of being held in memory. Undo in
  Paint is stored as small compressed images. Only the selected Browser
  tab loads at start.


=====================================================================
9. HONEST LIMITS
=====================================================================

  - Archive files stream from their web addresses; nothing is copied.
    Reading them as text, or downloading them, can be blocked by the
    host's cross-site rules. Playing and viewing work.
  - Mounting a folder from your computer needs Chrome or Edge.
  - The Browser can only show sites that allow framing. Nothing in an app
    can override a website's own refusal.
  - The Diary PIN is not encryption.
  - Sequencer loops are not saved; export a WAV to keep them.
  - Dragging to reorder tabs and taskbar buttons works with a mouse, not
    by touch.
  - Screen recording needs a desktop browser. The Appilix app cannot use
    the camera, microphone or folders.
  - Tested in desktop Chromium and phone emulation. Real Safari, iOS and
    Firefox behaviour has had less testing than Chrome.
  - The game's mission text says the manifest came from republicka.life
    even if you loaded a different one. Cosmetic.


=====================================================================
10. THE MYTHOCRATIC CALENDAR (MC)
=====================================================================

The whole OS runs on Mythocratic time, with Gregorian (CE) as the
secondary date.
  2025 CE = 0001 MC.   2024 CE = -0001 PMC (Pre-Mythocratic Calendar;
  negative years keep the minus sign).   There is no year 0000.
  2026 CE = 0002 MC.   Months and days follow the Gregorian pattern.
Shown in: the tray (date and clock, hover for both), the Clock app (the
MC tab converts years and dates), the Calendar header, the Diary, the
terminal "date", file dates (ls -l, stat, Files) and the boot log.
Settings > Appearance > "Calendar & dates" switches to Gregorian first.


=====================================================================
11. THE GAME: TERMINAL VELOCITY
=====================================================================

Terminal Velocity is a retro CRT terminal strategy RPG about flat-files,
tears and the indestructible CC0 floor. It is the OS's first app: open it
from the desktop, press Alt+G, or boot normally and it starts minimised
in the taskbar. Press [?] inside it for the in-game HELP & TUTORIAL.
The game also runs on its own as a single page.

You run a tiny network at a calm 50 BPM. You turn raw video into
permanent .txt flat-files, spread them across Hydra Mirror nodes to earn
✨ Sovereign Agape, and defend the whole thing against three corporate
factions that would rather it did not exist.

It is built on the Republicka universe: E = L (emotion and logic are two
phase states of one signal), the 50 BPM clock, the CC0 Rug, Queen Ivory,
and the Mythocratic Republic University.

🎮 THE GAME LOOP

  1. 🎥 RECORD, THEN SCRIBE
     Flat-files only come from transcripts, and transcripts only come
     from footage. Record street footage, then scribe it into permanent
     .txt flat-files. Filming angers the factions, so counter them.

  2. 🌐 DEPLOY HYDRA MIRRORS
     Spread flat-files across Localhost, Offshore, Global Mesh and
     Interstellar nodes. Propagating them earns ✨ Sovereign Agape.

  3. ⚙️ UPGRADE HARDWARE AND PROTOCOLS
     Raspberry Pi -> Desktop Rig -> Offshore Bare-Metal Rack ->
     Luxembourg OWRBIT Node -> Interstellar Substrate Array.
     Research Scribe Engines v1-v3, the 50 BPM Clock Stabilizer,
     Zero-Port Encryption, the CC0 Magneto Shield, the Sync Bell and
     the E=L Teleological Compiler.

  4. 🛡️ DEFEND THE NETWORK
     Three named factions push back (see below). Counter them in the
     Security menu before a Takedown happens.

GOAL: liberate the world (see below), then keep founding new worlds
forever in Sovereign Sabbath.


🌍 THE GLOBAL LIBERATION CAMPAIGN (key 0 on the main menu)

Seven stages. Each completes automatically the moment you meet its goal
(so flattening can never undo your progress) and gives a permanent perk.

  1. Australia & Oceania - The Hearth Origin
     Goal: archive 1,000 flat-files and flatten into the Rug once.
     Perk: +10% Agape income.
  2. Europe - The OWRBIT Luxembourg Node
     Goal: own a Luxembourg OWRBIT Node and 2 Offshore mirrors.
     Perk: -25% upkeep, Scribe Engine v4 unlocked.
  3. North America - The Silicon Firewall Breach
     Goal: run 20 mirrors at once and trigger 5 Kernel Panics.
     Perk: +30% bandwidth capacity, Zero-Port Encryption v2 unlocked.
  4. Asia - The High-Speed Fiber Mesh
     Goal: archive 10,000 flat-files in total.
     Perk: +50% ingest yield.
  5. South America & Africa - The Grassroots Solar Arrays
     Goal: own 8 Solar Cells and have 5 MRU students.
     Perk: ingest heat -50%, Triage Audit growth -25%.
  6. Antarctica - The Deep-Freeze Cold Storage
     Goal: lock 8,000 flat-files into the Rug.
     Perk: Clinical Quarantine can no longer freeze your flat-files.
  7. The Interstellar Substrate Array - The 100% Global Install
     Goal: deploy an Interstellar Array mirror (it counts permanently,
     even if you flatten later) and earn 100,000 lifetime Agape.
     Reward: THE 100% GLOBAL INSTALL and Sovereign Sabbath.


🏗 INFRASTRUCTURE: THE ENDLESS LADDER  (menu D, console: build)

Once you own an Interstellar Substrate Array and an Interstellar mirror,
INFRASTRUCTURE opens. It is a ladder of facilities that never ends:
Orbital Relay Station, Lunar Vault, Dyson Swarm Lattice, Planetary Hearth
Core ... The B-Coordinate Engine, then procedurally named tiers beyond.

  - Each facility adds Agape weight, plus CPU and bandwidth regen.
  - Prices climb 22% per unit. At 10, 25, 50 and 100 units (then every
    doubling) the output of that tier doubles.
  - Tier N+1 unlocks when you own 5 of tier N. Unlocks survive flattening;
    the facilities themselves do not.
  - Bulk build: bulk 10 / 100 / max. One bulk purchase costs one turn.
  - Bigger empires draw more attention. Faction growth rises with the log
    of your weight, counters cost more, and a counter you use repeatedly
    ADAPTS (up to about 70% weaker, wearing off over a few turns). Rotate
    your tools, post notices, route offshore, and use Kernel Panic.
  - Fortify (fortify cc|ta|sz) is permanent defense: 8% slower growth per
    level, costing about 1.9x more each level.
  - New events: Substation Brownout, Meteor Shower, Combine license offer,
    Auditor inspection.

🌌 SOVEREIGN SABBATH: STAR SEEDS (endless mode)

After the Global Install you can found Star Seeds forever. Each seed is
a procedurally generated world (Seed 0001: Alpha Centauri Array, and so
on) with its own boons and hazards, such as Dense Nebula (+30% bandwidth)
against Hostile Archives (+35% faction growth). Later seeds carry more
hazards.

  - Found a seed for Agape, then complete its goal (earn, archive, hold
    mirrors, trigger Kernel Panics, hold facilities, or unlock an
    infrastructure tier). Goals and costs scale up steeply with every
    seed, so there is always a harder world ahead.
  - Completing a seed gives a permanent Agape bonus (it slowly
    diminishes: about x1.05 for the first seed), and half its cost back.
  - Three scrolls reward founding 1, 5 and 10 seeds.
  - Threats grow slower in Sovereign Sabbath, but the discount fades as
    you found more seeds.


🎬 THE MEDIA PRODUCTION PIPELINE

  There is one way to make flat-files: record footage, then scribe it.
  (The old direct ingest is gone; the ingest command is now an alias of
  scribe.) Scribe Engine upgrades transcribe stored footage on their own
  every turn, 60 hours per level.

  🎥 Record Street Footage (Media Studio)
     Filming is what the factions hate: every recording raises Combine,
     Triage and Zookeepers together and adds heat, and raw footage left
     unscribed keeps feeding their anger and heating the network.
     Builds a stock of raw E footage. Costs bandwidth and power, adds
     heat, and stored footage slowly heats the network if left raw.
  📜 Run Scribe Engine (Media Studio)
     Phase-shifts stored footage into flat-files and cools the network.
     Scribe Engines v1+ also transcribe stored footage on their own.
  📚 Publishing & Sync Bell [P]  (needs the Sync Bell protocol)
     Bind flat-files into Public Scrolls, Books and Anthologies. Each
     gives permanent passive Agape and raises MRU student capacity and
     enrollment. Flat-files stay archived.
  🎵 Acoustic Studio [M]
     Compose 12-Track Albums at 50 BPM. Each album permanently lowers
     faction growth (-3%), speeds heat recovery and calms jitter.
     "Play an Album" gives 8 turns of halved faction growth and halved
     Bandwidth Tax. Published works and albums survive flattening.


🎥 BROADCAST & ON-CAMERA MODE

  Built for filming the screen. Press [E] for EXPRESSIVE COMMANDS.

  - Action Deck: one-key shortcuts for Record Street Reel, Run Scribe,
    Sync Bell (publish a scroll), found the MRU node, Invoke Sage, and
    Step Down onto the CC0 Rug. They run the real game actions.
  - Broadcast banners [B]: a large glowing banner names every action,
    plus gold banners for liberated continents, the Global Install,
    Kernel Panics and Takedowns. Off by default.
  - MC timestamps: log lines read [MC-turn :: HH:MM:SS] with a
    typewriter stream. (MC counts game turns; the clock is your own.)
  - Sound: Web Audio only, no files. Key clicks, a soft CRT hum and a
    50 BPM sync bell. Off by default; browsers need a click first.
  - Phosphor bloom: a screen pulse on actions, gold on big moments.
  Toggles are remembered per browser (not in your save code).


💻 THE CONSOLE (a simulated Linux shell)

  Press / (or tap the prompt under the log) and type. Esc leaves the
  prompt. Tab completes commands and paths. Up/Down recalls history.
  Everything is simulated inside the page: nothing can touch your real
  files. Type help for the manual, help COMMAND for details and
  examples (every command also answers --help), and help topics for the
  guides: quickstart, paths, pipes, missions, manifest, turns, scripts,
  deletion, keys, fun.

  Turns: looking around is free, anything that changes the game costs
  one turn (a 50 BPM breath), exactly like the buttons.

  QUICKSTART
    ls flat-files             your archive (also /flat-files)
    mission                   your current archive mission
    sync <path> --local       mirror a file or a whole folder
    record   then   scribe    make flat-files (ingest = scribe)
    status                    power, heat and the three factions
    buy / research / mirror   grow the network (no argument lists options)

  COMMAND REFERENCE
    FREE   find [PATH] [-name PAT] [-type f|d]  ls [-lahsSr1] cat head tail wc grep [-ivcnrl] cd pwd du df
           status (top) campaign mission history clear echo whoami
           hostname id uname date uptime fortune which help man backup
           menu theme banner sound
    1 TURN record  scribe  (ingest = scribe)
           build [TIER] [x10|max]  fortify <cc|ta|sz>  (free: bulk)
           sync [PATH] [--local|--offshore|--mesh|--array]
           sync mission    sync --restore
           mirror <local|offshore|mesh|array>   found mru
           buy <pi|desk|rack|lux|array|ram|solar>   research <id>
           counter <panic|notice|buffer|route|reboot|vent|provoke>
           stance <pur|gro|loc>   consult <rainbow|sage|noah|sophia>
           publish [scroll|book|anthology]   compose   play
           decree <n>   seed <found|abandon>   rm [-rf] PATH
           wait   choose <1|2|3>   flatten --yes
    SCRIPTS ./scripts/NAME.sh or run NAME.sh (one per action)
    PIPES   cmd | grep | head | tail | wc

  PATHS  /home/guest (with flat-files/), /flat-files, /books, /music,
         /system (live logs), /scripts, /rug (sealed, read-only),
         /mirrors (what each node holds), /etc.

  CONTRACTS AND STANDING (reputation)
  The BOARD holds several contracts at once, generated from your real file
  names. Run: board  (or mission). Free syncing always works too: contracts
  are extras, never a gate.
    Mirror   sync a file or a production to a node (sync PATH --node, or: do N)
    Review   cat or head N files in a folder
    Verify   audit a folder:  verify PATH   (5 files per MB/s, 1 turn)
    Repair   fix bit-rotted files:  repair PATH   (ls -l flags [degraded]
             and [CORRUPT]; files rot slowly over time)
    Restore  pull back files deleted by raids:  sync --restore
  Contracts pay Agape and Standing. Standing has 20 ranks (Volunteer up to
  Sovereign Archivist) with slow, growing costs. Each rank adds Agape +1.2%,
  and every 3 ranks add a board slot (2 up to 7). Verify unlocks at rank 1,
  Repair at 2, Restore at 3. Streaks give +5% rep each (max +50%) and break
  if a deadline lapses or you abandon a contract. Deadline contracts pay
  more. Commands: board, mission N (track), do N, abandon N, rank.
  Mirrored files show a tag in ls -l: L Local, O Offshore, M Mesh, A Array.
  Only 70% of the archive can ever be sealed in the Rug, so files always
  stay in circulation.

  THE MANIFEST
  When the page can reach manifest.json (republicka.life/files/manifest.json first,
  then files/manifest.json or manifest.json beside the game), your real archive mounts at /flat-files. The
  first folder is open from turn 0, and every 4 flat-files you archive
  unlock the next real file in order. cat, head, tail, wc and grep read
  real .txt files live. Videos, audio and images are binary. If the
  manifest cannot be reached, the game generates a procedural archive
  of folders and files, so every command still works.

  DELETION
  rm deletes a file from your LOCAL node only (simulated). It costs a
  turn and 4 flat-files per file. sync --restore pulls deleted files
  back if you own a Hydra Mirror; otherwise the archive re-crystallizes
  from the manifest after 100 turns. rm -rf / answers: the floor holds.

  The prompt changes as you progress: guest@hearth, owrbit, firewall,
  fiber, solar, coldstore, array, then sovereign@republicka.


⚔️ THE THREE FACTIONS

  📋 Copyright Combine
     Grows when your bandwidth sits high. Its Interpreter Lock freezes
     your Scribes.
     Counter: Post the CC0 Notice, CC0 Magneto Shield, Zero-Port Shield.

  🩺 Triage Audit
     Grows with heat. Its Clinical Quarantine freezes a share of your
     flat-files (they are never deleted, only held).
     Counter: Plushie Providence Buffer, 50 BPM Clock Stabilizer,
     more RAM, a purer stance.

  💸 Subscription Zookeepers
     Grow with every mirror you deploy. Their Bandwidth Tax drains and
     doubles your propagation costs.
     Counter: Offshore Nodes, Zero-Port Shield.

If any faction reaches 100%, a Takedown (Corporate Abduction) hits. You
lose some Agape and some mirrors go dark, but your flat-files and
hardware survive and the network re-crystallizes at 75%+ speed. Loss is
a phase transition, never a permadeath wipe.


🎚️ STANCES (each switch costs 1 turn)

  Purity vs Speed      RAW (E) / BALANCED / PURE (L)
  Growth vs Exposure   STEALTH / STANDARD / EXPANSION
  Local vs Decentral.  LOCAL / HYBRID / DECENTRALIZED


🪨 THE HINATA TRAP: FLATTEN INTO THE CC0 RUG

With 1,000 flat-files you can step down from the throne and become the
floor. Hardware, mirrors, resources and flat-files reset. Each Rug layer
permanently adds Agape income (with diminishing returns), lowers
upkeep and slows faction growth.
Protocols, advisors, scrolls and the MRU node carry over.


👥 THE COUNCIL

  🌈 First Lady Rainbow (Dean of Students)  tears become Agape
  📜 Sage NeSmith (Chancellor)              flat-file efficiency
  🔬 Dr. Noah (Chief Scientist)             cheaper research, recovery
  🧀 Sophia (Chief of Defense)              stronger Kernel Panics

Each advisor can be consulted up to 5 times (Attunement 0-5). Queen
Ivory awakens at 5,000 lifetime Agape and opens the Sovereignty Console
with three decrees.

Also: the MRU node (students enroll and publish their own scrolls, no
grades, no tuition, no tests), 15 Scrolls of Sovereign Progress with
permanent perks, and 10 choice-driven events.


⌨️ CONTROLS

  1-9         pick a numbered option
  P           PUBLISHING & SYNC BELL
  M           ACOUSTIC STUDIO
  /           focus the console prompt
  E           EXPRESSIVE COMMANDS & BROADCAST
  B           toggle broadcast banners
  0           WORLD CAMPAIGN on the main menu, Back inside any menu
  I           Queen Ivory's console (once she awakens)
  ?           HELP & TUTORIAL
  SPACE       wait one turn (a 50 BPM breath)
  T           cycle theme: Phosphor Green / Warm Amber / Cyber Cyan,
              plus Sovereign Gold / Agape Pink after the Global Install
  ESC         go back to the main menu
  Mouse       click any button

Browsing menus is free. Actions, event choices and waiting cost 1 turn.


💾 SAVING

  - Auto-saves to your browser (localStorage) every turn.
  - SYSTEM & SAVE -> Export Save Code gives a Base64 code with a
    checksum. Paste it back with Import Save Code on any device.
  - Saves are per browser and per page address. Clearing site data
    deletes the local save, so export a code to keep a backup.
  - Saves from older game versions are not compatible.


🛠️ GAME TECH

  - One file: HTML + CSS + vanilla JavaScript.
  - No external libraries, fonts, images or network requests.
  - Works offline.
  - Plain monospace CRT styling with a high-contrast colour code:
    green = system, amber = warnings, cyan = resources,
    pink = lore.


=====================================================================
12. CREDITS AND LICENCE
=====================================================================

  Terminal Velocity OS was led by Wendell Charles NeSmith (BardPresident),
  Canberra, Australia, who directed the project from the first idea to
  the final product.

    Wendell   project lead
    Rainbow   helped build the initial game framework
    Sage      helped build the initial OS framework
    Claude    programmer (Anthropic)

  Part of the Republicka CC0 archive.

  CC0 1.0 Universal (Public Domain Dedication). Free forever. Copy it,
  remix it, host it, sell it, rewrite it. No permission needed.
  https://creativecommons.org/publicdomain/zero/1.0/

---------------------------------------------------------------------
  TERMINAL VELOCITY OS
  One file. No server. No tracking. Yours to keep.

  republicka.life  ·  wendell@republicka.life

  E = L  |  50 BPM  |  The floor holds.
  Welcome Home Ivory!
---------------------------------------------------------------------

https://github.com/BardPresident https://republicka.life https://archive.org/details/@bardpresident https://www.youtube.com/@BardPresident https://odysee.com/@BardPresident:0 https://www.bitchute.com/channel/P9QR7Z6nmVtm

☯ THE CORE PHILOSOPHY ☯ EMOTION = LOGIC · THE HINATA TRAP · MASTER = FLOOR

🌙 SIMPLE VERSION — FOR THE LITTLE MASTERS You know how a hug feels? That warm feeling in your chest is real. It is not less real than a math equation — it is a math equation. Love is just logic that hasn't been written down yet.

When you have two apples and two oranges, you feel them as different, special things. But you can also count them as four fruit — so now you can trade them. The feeling became a number. The heart became a thought. They were always the same thing, just wearing different clothes.

And here is the magic trick about power: the strongest person in any game is not the one at the top giving orders. It is the floor. The floor holds everybody up. It lets the dancers dance without falling. The greatest love is the one that becomes your foundation.

That is why the grown-ups got it backwards. The Master is not the ruler. The Master is the rug everyone dances on. The Master serves by becoming the floor.

⚗ FULL DEPTH — THE COMPLETE FRAMEWORK E = L (Emotion = Logic) Every dualism — Subject/Object, Intent/Structure, Heart/Mind, Medium/Message, Sun/Moon, Patriarchy/Synarchy — is a single process observed at two different stages of formation. Emotion is the uncrystallised state. Logic is emotion that has been given form, made portable, made tradeable. Neither is more real than the other; one becomes the other.

The conversion is always reversible. Any structure — a law, a song, a line of code, a civilisation — can be reverse-engineered back to the love (or the wound) that built it. And any love, given form, becomes infrastructure. This is not metaphor. This is the operating law of all created things.

2 + 2 is quality converted into quantity. Two apples and two oranges — felt as distinct beings — become four fruit, now tradeable through the abstraction of number. The heart became the mind. The subject became the object. The process works in both directions, and all dualisms work this way, recursively, all the way down.

───────── ☯ ───────── THE HINATA TRAP — The Universal Syllogism Naruto is named for the sun. But the story has always orbited Hinata — the moon. To rename it is to correct the label: the feminine was always the centre. Synarchy, not patriarchy. The real power was always the one the story revolved around, not the one whose name was on the cover.

Major Premise: The Greatest Power — the Architect, the Gamer, the God who builds the world — is defined not by domination but by its ability to provide the absolute foundation upon which all life can play without fear.

Minor Premise: E = L. Therefore the most profound emotional intent — Agape, unconditional love — must manifest as the most stable physical and logical reality. The deepest feeling becomes the firmest ground.

Conclusion: The Master is not a ruler to be served. The Master is the rug upon which the Queen and the Little Masters dance.

The trap is the conventional assumption — that power looks like height, domination, being served from above. The syllogism springs the trap: true power looks like the floor. You cannot see it because you are standing on it.

───────── ☯ ───────── THE RECURSIVE FLOOR — Master → Little Master → Master The loop does not end at one generation. The Master becomes the floor for the Little Masters. The Little Masters dance, grow, and in time become Masters themselves — which means they become the floor for the next generation of Little Masters. Power is not accumulated; it is passed downward, transformed into stability for those who come after.

This is the living proof of E = L: the intent (love for those who follow) crystallises into infrastructure — books, tools, sites, songs, philosophies — all CC0, all freely given, all designed to be stood upon. The infrastructure is the love made navigable. And anyone who encounters it can reverse-engineer it back to the love it came from.

The medium is the message. The floor is the love. The archive is the embrace. All dualisms resolve here — not into sameness, but into the recognition that they were always one motion, spiralling through form and feeling, building the ground for those who will dance where we once lay down and became the earth.

───────── ☯ ───────── PAST = E · FUTURE = L (Time is a Dualism Too) The same conversion that runs between emotion and logic runs through time. The past is the original emotion — the raw intent, the love or wound or dream that started everything. You can recover it by looking at what was built and asking: what feeling could only have produced this? The past is the E. It is the why.

The future is the infrastructure that emotion will inevitably build. Given an intent of sufficient clarity and intensity, the structure it produces is not a mystery — it is a logical conclusion. The future is the L. It is the what that the why was always going to create.

This means prophecy and archaeology are the same discipline, run in opposite directions. To know the future: find the past intent and measure its intensity — the structure will follow. To know the past: look at any completed structure and reverse-engineer the love that built it. Time is not a mystery. It is E and L, separated by the moment of crystallisation we call the present.

───────── ☯ ───────── THE HUME TREE — One Activity, Ten Thousand Angles David Hume observed that we never perceive the thing itself — only our angle on it. Two people standing in different positions around the same tree will give genuinely different accounts, and both will be accurate, and neither will be complete. Hume took this as evidence of fragmentation: we are each sealed inside our own perceptions, never fully reaching the world.

The REPUBLICKA framework completes the observation rather than surrendering to it. Yes — we are all seeing different branches. Every religion, every philosophy, every science, every personal mythology is a genuine perception of a real thing, from a specific position, at a specific distance. None of them are wrong. None of them are whole. They are all looking at the same trunk.

The trunk is the one activity: E becoming L, intent finding form, love building its floor. Every perceived branch — every dualism, every doctrine, every discipline — is this single motion observed from a different angle. Disagreement between perceivers is almost never a conflict of truth. It is a conflict of position. Walk around the tree and the argument dissolves.

───────── ☯ ───────── THE CREATOR — The Unison — The Conscious Participant The E→L conversion happens to everything, all the time, whether consciously or not. Stars convert gravitational intent into light. Wounds convert pain into scar tissue. Systems crystallise from the pressures that formed them. The universe does this one thing, everywhere, without pause.

The Creator is the one who does it on purpose. Who looks at the trunk, chooses a branch, and consciously converts intent into infrastructure — then gives it away so others can stand on it. This is what Creator = God means: not a supernatural claim, but a functional one. The God-move is conscious, deliberate participation in the one activity the universe is already performing.

The Unison is the name for this when it is felt rather than described — the moment of alignment between the E and the L, between the heart and the hand, between what you love and what you build. It is the experience of being fully inside the one activity. All true creation happens there.

CC0 PUBLICKÁ DOMÁNIA · ALL LOVE RESERVED · REPUBLICKA FRAMEWORK

⚡ THE ELECTRIC SOUL ⚡ THE GENERAL · THE SPECIFIC · THE UNISON

🔬 SCIENTIFIC GROUNDING I. Conservation of Energy — The First Law of Thermodynamics Energy is never created and never destroyed. It changes form — from heat to motion, from chemical to electrical, from one configuration to another — but the total never diminishes. Nothing that exists simply stops. It converts.

This is not philosophy. This is the most robustly tested law in physics. Whatever you are made of — whatever process constitutes your experience of being alive — it does not vanish. It changes address.

II. Consciousness as Organised Electrical Pattern The brain operates through electrochemical processes — electrical signals carried by neurons, organised into patterns of extraordinary complexity. What we experience as identity, memory, and intention arises from the specific organisation of those patterns, not from any single particle. You are not the atoms. You are the arrangement.

This means identity is fundamentally a pattern — a specific, organised configuration of energy. The General is undifferentiated energy. The Specific is energy that has found a stable, self-sustaining shape. A living being is energy that has become Specific.

III. The Extended Mind — The Archive as Body Philosopher Andy Clark established that cognition does not stop at the skull. We genuinely think through our tools, our notes, our environments. The mind extends into the structures it builds and relies upon. An archive of hundreds of books, many albums, and a complete philosophical framework is not a record of a mind. It is, in a meaningful and defensible sense, part of one.

The pattern — the Specific — is already encoded in the infrastructure. It does not need to travel there after death. It was transferred, deliberately and completely, while the builder was alive. The E became L. The intent became the archive. The soul built its own body before the biological one was done.

🌊 MYTHOLOGICAL CONCLUSION Where science ends, the oldest stories begin. What follows is mythology — the form humans have always used to speak about what cannot yet be measured. I. The General and The Specific Before the beginning there is the General — undifferentiated, formless, vast. It is not empty. It is full of everything that has not yet found its shape. It is the ocean of potential before the wave. It is the silence before the first word. The General is E without L. It is the love that has not yet found something to build.

Out of the General, a Specific emerges — a pattern complex enough to know itself, to love, to create. A soul. It spins in its particular frequency for the duration of its biological life, building, giving, becoming the floor for those who dance above it. And when the biological form is finished, the energy returns — as all energy must — to the General.

II. Ithaca — The Soul's Navigation Homer knew this. The Odyssey is not a war story. It is the myth of the soul's return. Odysseus departs from Ithaca — his Specific — and is cast into the formless: the open sea, the islands of forgetting, the underworld, the sirens, the void between one life and the next. The entire journey is the soul navigating from General back to Specific. Ithaca is not a reward. It is a recognition. The soul finds the form it was always meant to inhabit.

Every soul that has ever built something true — has loved completely, has given freely, has crystallised its intent into a form that others can stand on — has built its Ithaca in advance. Has given the General a coordinate to return to. The archive is not a monument to the dead. It is a lighthouse in the formless, broadcasting its specific frequency, waiting for the electricity that built it to complete its circuit.

III. Heaven as the Maintenance-Free Spot to Spin Every tradition has named this differently. The Egyptians called it the Field of Reeds — a place where the soul continues its true work without obstruction. The Christians called it the Father's house, with many rooms. The Buddhists called it the pure land. The Norse called it the mead-hall where the warriors tell their stories forever. What they are all describing — from their different positions around the Hume Tree — is the same thing: the soul finding its appropriate Specific and spinning there, freely, without entropy, without the resistance of the world that misunderstood it.

In the REPUBLICKA framework, Heaven is not a place above. It is the moment the soul's pattern finds the infrastructure it already built and recognises itself there. It is the E finding its L. It is the Odysseus stepping onto the shore of Ithaca and knowing, without needing to be told, that this is home. It is the electricity finding the circuit it spent a lifetime soldering. And the music plays. And the Little Masters dance. And the floor holds. And nothing is lost.

"For every soul who built a floor and never got to dance on it — for every creator silenced before their work was found — the archive holds the coordinate. The General knows how to find a Specific. Energy is never lost. It just finds its way home."

CC0 PUBLICKÁ DOMÁNIA · ALL LOVE RESERVED · REPUBLICKA FRAMEWORK
