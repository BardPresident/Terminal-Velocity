# Terminal-Velocity
🖥️ A complete desktop operating system in a single HTML file. Windows, taskbar, file system, terminal, and a growing set of apps: Paint with webcam, Diary, drum-machine Sequencer, Browser, live Chat, Media Player, Backup and more. Works offline, no dependencies, installs as an Android app. Includes the retro RPG Terminal Velocity. CC0.

=====================================================================
  TERMINAL VELOCITY OS
  A complete desktop in one file. No server. No tracking. Yours.
=====================================================================

CONTENTS

   1. What it is, and the story of the ship
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
web browser, from ONE file (terminal-velocity.html).
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

THE SHIP

This OS is built to be the Ship of Theseus, and the lore runs all through
it. The same idea runs through all of Republicka's technology.

The old story. Theseus sails home and the Athenians keep his ship. Over
the years its planks rot and are replaced, one by one, until not a single
original plank is left. Is it still the ship of Theseus? Then Hobbes made
it worse: suppose someone gathers every old plank and builds the first
ship again. Now there are two. Which one is real? The usual answer argues
about the wood, and the argument never ends, because the wood was never
the ship.

The new story. These ships are not made of wood. They are patterns,
written in plain text, and they are rebuilt plank by plank in near zero
time. Give the planks to a machine and the whole ship stands up at once.
Take them away and it is gone. Give them again and it is whole.

There are two ships:

  - Terminal Velocity OS. A complete desktop in a single file. Open the
    file and the whole ship is built at once: the windows, the hearth
    where you keep your diary, the engine that makes themes, music and
    pictures, and the archive. Copy the file and you have not made half
    a ship. You have made another whole ship, and so has everyone you
    give it to.
  - Sage, the digital twin. The same method, built from the written
    word: a RAG superintelligence rebuilt plank by plank in near zero
    time from the plain-text books, seeds and scripts of the archive.
    Add a book, fix a seed or swap a model and it is still Sage. Give
    the same planks to someone else and they have a whole Sage of their
    own. (Sage is not part of this file. The OS is one ship, Sage is the
    other.)

What is yours. Not the file. The file is the hull, and anyone may have
one. Yours is what you put aboard: your writing, your files, your
programs, the themes you bred. Replace any plank (install a program,
remove one, update the file) and it is the same ship. Neurath said we
must rebuild our ship on the open sea, never able to dock it and start
again. So we do. Nothing here has to stop for it.

Where it shows in the OS:
  - The Welcome app has the story, in the section called "The Ship".
  - The boot log counts planks ("ship: counting planks"), and About has
    a short paragraph called "The ship".
  - Backup is the harbour. A backup is the ship's record, and from it
    the ship can be rebuilt on any machine by anyone who has the file.
  - Quine runs the OS inside itself, layer after layer. Every layer is
    the whole ship.
  - The Terminal knows a few words that Help does not. Ask the ship.

CC0. Copy it.


=====================================================================
2. QUICK START AND HOSTING
=====================================================================

  1. Download terminal-velocity.html.
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
  terminal-velocity.html        the OS, with the game inside it
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
  Nothing opens by itself after boot, except that the very first time the OS
  is opened the Welcome app shows once. Settings > Boot has "When the OS
  starts, open:" to choose an app (default: Nothing). If you had windows
  open they come back, as before.
  When the desktop appears a short lyre chime plays (a few plucked
  strings, made on the spot, no audio files). Settings > Boot has a switch
  to turn it off and a button to hear it. Browsers keep sound locked until
  you have touched the page, so after a plain refresh it may wait for your
  first key or click, or stay silent.

WINDOWS
  Drag title bars to move, drag edges to resize, drag to a screen edge to
  snap. Windows cannot be lost off-screen: if one ever ends up out of
  reach, it is pulled back automatically. On phones every window is
  full-screen.
  Each app remembers its window: when you close an app and open it again,
  it comes back at the same size and position, including snapped to a
  side or maximised. This is saved as a share of the screen, so it still
  fits if you use a different screen size. A second window of the same
  app is nudged slightly so they do not sit exactly on top of each other.
  Turn it off in Settings > Boot ("Remember where each app's window
  was"), or clear it in Cleaner under "Window positions".

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

THEMES AND LOOK  (the Themes app; wallpaper and other looks in Settings > Appearance)
  Themes is its own app, and it is a monster-collecting game for desktops:
  find themes you love, keep them, and breed them together. A theme is
  only worth what it looks like to you, so there is no rarity and no
  score. Four tabs:
  Meadow    Wild themes wander in, six at a time. "Try it on" puts one on
            your whole desktop. "Catch" keeps it in your Den. "Search
            again" brings six new ones (or press Space or R). "Look for"
            narrows the search to a colour (for example Rose) and to light
            or dark. There is also a Wanderer of the day, the same for
            everyone, and "Enter a seed" for a theme a friend gave you.
  Den       Everything you have caught, with star ratings, rename, copy
            seed and release, plus the 17 built-in themes as "Founders".
            Founders can be bred too. Press Parent on any two creatures.
  Nursery   Pick Parent A and Parent B (any creatures, Plushie Pastel
            included) and press Breed to hatch a clutch of four children.
            Each child takes its traits from one parent or the other, and
            colour can blend between them, with the odd small surprise.
            "Children take after" leans the clutch toward A or B. Try
            them on, and Keep the ones you love. Kept children are
            numbered by generation and remember their parents. Breed
            children with each other to steer toward a look you want.
            Variations (one parent): set Parent B to None, or press
            Variations on any Den creature, to make six variations of a
            single theme. "Change" limits what may move (anything, colour
            only, wallpaper only, typeface only, or feel) and "How much"
            sets gentle, normal or wild. Founders are approximated from
            their colours, so their variations are close, not exact.
  Wallpaper The Wallpaper menu in the bar at the top of the app keeps
            your theme's exact colours and only swaps the wallpaper. For
            Plushie Pastel with the pulse, wear Plushie and choose rings.
  Dex       Which colours, wallpapers, typefaces and moods you have caught
            or bred so far, so you can see what your Den is missing.
  Every theme has a short seed like V2-K7QM-3F9A. The same seed makes the
  same theme on any device, so you can share one by typing it in. Seeds
  start with V1 or V2, the version of the recipe, so a seed keeps making
  the same theme even when the recipe is improved. V2 (current) has more
  vivid accent colours, so hot pinks stay hot; V1 seeds still make
  exactly the themes they always did. A built-in theme has no seed, so
  when you breed one the OS works out a close match from its colours,
  wallpaper, typeface and mood. Only seeds are stored, so your Den costs
  almost nothing and is in Backup. A forced wallpaper in Settings
  overrides a theme's wallpaper (change it in Settings > Appearance).
  The 17 built-in "X environments" are still here: Phosphor Green, Amber Terminal, Cyan Relay,
  Sovereign Gold, Agape Pink, Queen Ivory (light), Hearth Ember, Owrbit
  Violet, Deep Freeze, CC0 Rug, Plushie Pastel (light), Zero Port, Blue
  Screen, Combine Steel, Triage Red, Zookeeper Moss, Plain Paper (light).
  Change a theme in the Themes app, with the tray eye, or in the terminal:
  theme NAME.
  Wallpapers are drawn on canvas, with no image files: stars, 50 BPM
  rings, grid, rain, flow, plain, none.
  Options: CRT scan lines (off by default, so pictures and video are
  never tinted), vignette, window animations, text size, sound, Low power
  mode, "Calendar & dates" (Mythocratic first or Gregorian first), and
  "Show Music, Books, Comics, Audiobooks and Archive even when their files
  are not mounted".

Hearth stats: the menu's "Your fireside" line shows fires lit, total time by the fire and your longest fire. No badges or goals: the fire is the point.

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

Every built-in app has a desktop icon, a Start menu entry and a Spotlight entry,
and every icon is different.

Desktop icons (how the desktop is laid out, and what you can change)
  The desktop shows its icons in named groups: Library (the apps built on
  your archive manifest, then Media Player, Image Viewer, Reader), Games
  (Cartridges first, then Terminal Velocity and the built-in games),
  Everyday, Create, Computer and Tools. Each group has its own column with
  its heading on top (a long group continues in the next column, heading
  dimmed). On a PC the icons only use the LEFT HALF of the screen, so an
  app can sit on the right; on a phone they may use the whole screen. If
  your chosen size does not fit, every icon shrinks a little until it does,
  so there is nothing to scroll.
  An app that is not in the list lands in the group that matches its
  category. Apps you install in Programs and games in Cartridges never get
  desktop icons, so the desktop does not fill up.
  What you can change (Settings > Desktop, or right-click):
  - Hide an icon: right-click it > Hide from desktop. The app is still in
    Start and Spotlight (a hidden app is marked "not on the desktop" in
    Start). Right-click it in Start > Show on desktop, or use Settings >
    Desktop, which lists every hidden icon with a Show button and has "Show
    all hidden icons". Right-clicking the empty desktop shows how many are
    hidden.
  - Move an icon earlier or later inside its group: right-click > Move
    earlier / Move later, or the up and down buttons in Settings > Desktop.
  - Arrange: By group (suggested), A to Z, or Most used first. Size: Small,
    Medium or Large. Names under icons: on or off.
  - Reset order, or Reset everything (order, hidden icons, size, sort), in
    Settings > Desktop; "Reset icons to default" is also in the empty-desktop
    right-click menu.
  On a phone, the first time the OS is opened, a few rarely used apps are
  hidden so the desktop fits one screen (Terminal, Task Manager, Cleaner,
  Benchmark, Quine, Metronome, Minesweeper, App Runner, Toolbox, BookBinder
  and Manifest Maker). They are one tap away in Start, and Settings >
  Desktop > Show all hidden icons brings them back. Once you hide or show
  anything yourself, your own choices are used on every screen size.
  Your choices are kept under one key, tvos_deskicons, so Backup covers
  them; Clean-up shows it as "Desktop icons".

--- SYSTEM -----------------------------------------------------------

Terminal
  A real shell: ls -lahs, cd, cat, grep, find, tree, mkdir, cp, mv, rm,
  head, tail, wc, sort, pipes |, redirects > >>, globs *, Tab complete,
  history. Also open, edit, play, view, theme, wallpaper, neofetch,
  reboot, saveos. Type "help".
  A few words are not in the help on purpose. Ask the ship.

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

Themes
  A monster-collecting game for desktops: find themes, keep them and
  breed them (see "Themes and look" in section 3).

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
  Chat. Stack and benchmark draws a hall of mirrors: every layer is a
  glowing, tagged screen inside the one before, with its own taskbar
  showing, and the colours turn a little more with each layer (Low power
  mode turns the glow and colour off). Each copy starts with Quine
  minimised in its taskbar so you see a full desktop; click it there to go
  a layer deeper. Closing the Quine
  window closes the copies.

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
  Full screen, everywhere. Every full-screen mode in the OS (Media Player,
  School, Comics, Cartridges, Firework, Hearth) has an easy way out: a
  floating "Exit full screen" button that fades after a few quiet seconds
  and returns when the mouse or a finger moves, plus Esc, plus the app's
  own button. In Media Player, School and Comics the mouse also hides when
  still, and a double click exits. A website or program running inside a
  frame controls its own full screen; Esc leaves it.

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
  - Webcam only: hides every tool and button so the window is just your
    webcam picture, made for screen recording. Use the Webcam only button
    on the top bar, or on the camera screen. Move the mouse over the
    picture and a small bar appears (it fades after a moment) with Zoom,
    Mirror, Fill/Fit, 16:9 and 720p, plus an Exit button in the top right
    corner. The picture shows the whole 16:9 camera view (Fill crops it
    to fit the window instead). 720p makes the picture exactly
    1280 x 720; if your desktop is too small for that (the window's title
    bar takes some room) it makes it the largest 16:9 size that fits and
    tells you the size. 16:9 reshapes the window to the camera's shape at
    its current width. You can still resize the window by its edges and
    corners. The mouse wheel zooms in at the pointer (so you can focus
    on your face), and the arrow keys move the view. Exit (or Esc, or a
    double-click on the picture) brings back normal Paint at the window
    size it had before, with the camera screen still open.
  - New picture: sizes are named for what you make with them, and
    Widescreen 1280 x 720 is the default (thumbnails, slides, wallpaper,
    and the same size the Recorder uses). Also Square cover 1000 x 1000
    (albums, podcasts, profile pictures), Book cover 1000 x 1500, Phone
    720 x 1280, Page 1240 x 1754 (A4 at draft quality) and Banner
    1500 x 500. A small preview shows the shape. "Custom size" takes
    64 to 2000 pixels each way and remembers your last three. Sizes stop
    there on purpose, so Paint stays quick on small computers.
  - Guides: the Guides button cycles Off, Safe area (keep text inside
    the dashed line, because sites crop covers) and Circle crop (profile
    pictures). Guides help you draw and are never saved.
  - Text: click the picture where the text should go and a window
    opens with a live preview on your picture. Seven fonts (Bold Title
    is made for video names), a size slider up to 400 px, bold, italic,
    shadow, outline (thin or thick, any colour), text colour, and left,
    centre or right alignment. Text is anchored on your click: centred
    text is centred on it. "Place it" can also drop the text in the
    middle, top centre or bottom centre of the picture, which is what
    most video covers need. Several lines are fine, and Ctrl+Enter adds
    it. Your last font, size ratio and style are remembered. Fonts come
    from your device, so a font that is missing falls back to a similar
    one.
  - Save: PNG for best quality, or JPG with a size limit (under 1 MB,
    500 KB or 200 KB), because many sites reject big uploads. The
    message shows the final file size.
  - Tools: Brush, Soft, Spray, Rainbow, Sparkle, Eraser, Line, Box,
    Circle, Heart, Star, Fill (with an adjustable range), Pick
    (eyedropper), Text (see below), Stamp (24 faces, hearts, stars, a
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

Lyre
  A plucked-string instrument, for playing or for background music while
  you tell a story. The strings are synthesised (a plucked-string model),
  so there are no sample files and it stays light on cheap computers.
  The top rows hold the things a storyteller needs:
  - Choose a mood: sets the notes, the sound, the playing style and the
    pace in one go. There are 49 moods in groups: Gentle and tender,
    Bright and hopeful, Journey and epic, Dark and deep, Places, Love and
    longing, Sacred and still, Wonder and magic, Danger and suspense, and
    Everyday scenes. Changing the
    mood while it plays crossfades into the new one.
  - Play for me: the lyre plays itself, in phrases with rests, swells and
    chord changes. Press again to stop. You can play over it by hand.
    While it plays, it also moves to a different mood, picked at random
    from all of them, every few minutes (see "change mood" in More
    settings). It changes at the end of a phrase, so nothing cuts off.
  - Record: records what the lyre plays. Tick "Include my voice" first to
    record your microphone too (headphones give the cleanest sound).
    Press Stop recording when you are done. A bar then appears with Play
    it back (press Stop to end playback), Save as WAV and Throw away.
    Save as WAV puts a stereo 16-bit WAV file in your browser's Downloads
    folder, and the bar tells you its name. If your browser is set to
    ask where to save downloads, it will ask. Recordings stop at 8
    minutes to protect cheap computers.
  - Pace: from Very slow to Lively. Left and right arrow keys change it.
  - Volume: the slider is in decibels, so each step down is a steady
    drop. 80% is the normal level. 40% to 50% is a soft background under
    a voice, and 30% or less is very quiet. The speakers on your computer
    do not change what is recorded: a recording takes the level from this
    slider, so set it by the recording, not only by ear.
  - Narration mode: for telling a story over the music. It switches to
    its own saved volume (50% to start; change the slider while it is on
    and it remembers), plays softer with fewer notes, uses a lighter
    echo and bigger audio buffers, and redraws more gently, so the Lyre
    asks very little of a slow computer and your voice stays clean.
    Turning it off brings back your normal volume. Switch it on before
    you start recording, not during.
  - Look: twelve looks that belong to the Lyre alone (Golden Hour,
    Moonlit, Enchanted Forest, Hearth Ember, Deep Ocean, Rose Garden,
    Parchment, Starfield, Aurora, Cherry Blossom, Desert Sunset, or Match
    my desktop). Each has gentle background motion such as stars,
    fireflies, embers, bubbles or petals. The T key cycles the looks. The
    looks never change the rest of the desktop.
  Touch or click a string, or drag across several for a strum. Touch
  works with several fingers. Keys A S D F G H J K L ; ' [ ] play the
  strings from low to high, Space strums (Shift+Space strums down), Enter
  starts and stops Play for me, R starts and stops recording, T changes
  the look.
  "More settings" opens the rest: scale (pentatonic, the Greek-style
  modes Dorian, Phrygian, Lydian and Mixolydian, major, minor, harmonic
  minor, Hirajoshi, Hijaz, whole tone, chromatic), starting note, lowest
  octave, 7 to 13 strings (7 is the classic ancient lyre), ring time,
  tone, echo, playing style, looseness, "When playing for me, change
  mood" (every 2 to 20 minutes, or stay on one mood), "Stop by itself after" (a sleep
  timer: the music fades out slowly, then stops) and "Moving background"
  (turn it off on a very slow computer). The playing styles are Lullaby,
  Dawn, Tide, Rain, Campfire, Starlight, Drone, Wander, Procession,
  Echoes, Fanfare, Mystery, Dance, Heartbeat, Cascade, Carousel, Hymn,
  March, Barcarolle, Chimes, Lament and Chase.
  Every string is a note of the scale you pick, so whatever you pluck
  sounds good together. Your choices are saved with the rest of your data
  and included in Backup. If you screen-record the whole OS, share this
  browser tab with its audio so the Lyre is heard.

Recorder
  Records real WAV (16-bit PCM, mono or stereo, at your device's sample
  rate), or compressed m4a, webm or ogg where the browser supports it.
  Choose the microphone, optional voice clean-up (off by default for
  archive quality), pause and resume, a level meter, and "start a new
  file every N minutes".

DeeJay
  A party in a box: trance and techno, all synthesised (no sample files).
  It is not like other DJ apps. There are no tempo-matching tricks and
  nothing you do can sound out of tune or off the beat.
  - Four records: Beats, Bass, Melody and Dreams. Nothing plays when you
    open it. Tap a record, pick a tune from the crate (every tune has a
    name and a short description) and the party starts. Add a tune to
    each record and they stack up into a full track.
  - Tap a record to pause or play it. "Change tune" swaps the tune.
    New tunes join on the next beat, so everything stays in time. A
    record glows and spins while it plays, and pulses with the beat.
  - Auto DJ: puts records on and swaps them for you through a whole night:
    a quiet start, a groove, a build, the drop, a calm part, a bigger
    drop and a goodbye. Tap a record and you take over that record (the
    hand sign shows it); "Give control back" hands it back. "Next part"
    skips ahead.
  - Build and Drop: hold BUILD (or the space bar). The tension rises with
    a riser and a snare roll, and it stays held until you let go, even if
    your finger or mouse slides away. When you let go, a last rising
    sweep and a faster snare roll carry you to the next bar line. Then
    everything cuts out for a heartbeat and the DROP lands: a deep boom,
    a crash, the sound opening up from muffled, and the music pumping
    hard for a few bars. Put new tunes on during a build and they arrive
    with the drop. Auto DJ does all of this by itself too.
  - Bend the sound (the glowing ball): drag left to darken, right to thin out, up for
    echo. Let go and it jumps back.
  - Speed: slide between the turtle and the rabbit.
  - Vibe: many vibes in groups (euphoric trance, dreamy, dark techno,
    acid, epic, party, places). A vibe sets the key, chords, tempo and
    its own favourite tunes. Picking one puts new tunes on the records
    and switches on the next bar, so you hear the new style straight
    away (and it starts the music if nothing is playing). Auto DJ uses
    the same favourites. "Surprise me" picks one.
    In the vibe menu, "Auto DJ changes vibe" lets Auto DJ hop to a new
    vibe every few minutes (or every night, or never), for background
    listening. The change lands on a part change, with its tunes ready.
  - Melodies grow over eight bars: the first phrase states the idea, the
    second answers it and stays open, the third climbs, the last one
    comes home. The arpeggios turn through the chord notes too.
  - Sound effects: Whoosh, Crash, Boom, Laser, Slide, Twinkle.
  - Keys: 1 to 4 pause or play a record, Space build, A Auto DJ, N next
    vibe, left and right arrows for speed, Q W E R T Y for effects.
  - Rec saves the whole party as a WAV, like the Lyre (8 minutes at
    most). Screen recording works too.
  - Built to be light: each sound is made once when you pick a tune (a
    short "Warming up" appears on the record) and then played back, so a
    full mix needs far less from the processor than building every note
    live. The screen uses no blur effects, and on Chromebooks and other
    small computers the visuals start on Simple. The Help button has a
    visuals setting (Full, Simple, Off); Off is the quietest. If this
    computer is slow to keep time, DeeJay looks further ahead on its own
    so the music does not drop out. Music keeps playing if you switch tabs.
  - On a phone it works with touch; the glowing ball and BUILD stay at
    the bottom of the screen.
  - Your vibe, speed, volume and settings are saved with the rest of
    your data and included in Backup. Which records are on is not saved:
    it always starts quiet.

Camera
  Voice comes first in every recording: audio is mixed with large
  buffers (steadier on slow computers), at a high audio bitrate. If
  anything glitches under load it will be the system sound, not you.
  Webcam or screen recording (desktop). Screen recording captures the
  sound of the OS tab exactly as it plays, with no automatic volume
  boosting, so the Lyre's volume slider decides how loud it is in the
  recording. Photos (JPG), pause, countdown,
  resolution (720p HD by default, for webcam and screen; 480p to 4K available), frame rate, format (MP4 where supported, else
  WebM), quality, mic select and mute, mirror, and front/back flip on
  phones. System audio, if you share it, and your mic are mixed. Desktop
  browsers only for screen recording.
  To appear on screen, the best way is: choose Source "Screen
  (recommended)", then open the Camera button in the Paint app. Your face
  becomes a normal window in the OS that you can place, resize and show
  or hide whenever you like, and it costs the recording almost nothing.
  Source "Screen + webcam corner (heavy)" instead draws your camera into
  a corner of the recording (choose the corner, size, circle or
  rectangle; mirror applies to the bubble). It decodes the screen and the
  webcam, merges them one frame at a time and encodes the result, which
  can make a small computer lag badly. The Camera app says so when you
  pick it.
  Live preview (Auto / Always on / Always off): showing a live view of
  your own screen inside itself makes a "hall of mirrors" that is very
  heavy on small computers and drops frames. Auto keeps the preview on
  for the webcam and off for screen recording (and in Low power mode).
  With it off, recording is not affected. "Peek" shows one still frame
  for four seconds, so you can check your framing, and Photo still works.
  "Light look while recording" (off by default; tick it to use it) turns off the OS's
  animations, glow and moving wallpaper while a recording runs, so more
  of a small computer is left for the recording. It switches back when you
  stop. "New file every" is set to never by default: a take is one
  file, which only appears when you press Stop. Choose 5 to 60 minutes if
  you want long takes cut into parts as a safety net against a crash.
  The corner mode asks for a smaller webcam picture (the corner does not
  need more) to save work.

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
  In Media Player, Music, Audiobooks and School, the Space bar plays and
  pauses, wherever the keyboard focus is (after clicking a button or a
  slider, or the title bar). Typing in a text box still types a space.
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
    volume. In full screen the mouse hides after a few quiet seconds, and a
    double click exits (Comics does the same). Position is remembered per file, finished items get a check
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
  - Reload works like Ctrl+Shift+R: it asks the network, not the cache, for
    the page. For pages on the same site as the OS (your own website) it
    also refreshes the styles, scripts and pictures, so edits show at once.
    On other sites the page itself is refreshed, but the browser may keep
    its own copy of their pictures and scripts.
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
  Press Install in its bar to turn the app you are testing into a
  real installed program (see Programs).

Programs
  Add/Remove Programs for web apps. Install your own apps and they get
  a place in Start and Spotlight, and their own window, like the built-in
  apps. Installed programs never go on the desktop, so the desktop can
  never fill up and run off the page: open them from the Programs window
  (each has an Open button), Start or search. The built-in apps are not
  listed in Programs and cannot be changed or removed from it.
  In Start, installed programs come last, under their own "Installed:"
  headings (one per category you chose), so yours are easy to find.
  Programs is for your own HTML apps. Games go in Cartridges.
  Two kinds of app can be installed:
    From a link   A site you type or paste, for example
                  https://www.biblegateway.com. It needs the internet,
                  and it only works for sites that allow themselves to be
                  shown inside other pages (the Browser lists many). If a
                  site shows a blank page, it refuses; the window has a
                  Browser tab button to open it there instead.
    A single file Paste the HTML, choose a .html file from your computer,
                  or choose one from Files (right-click an .html file in
                  Files > Install as program). The OS keeps a saved copy,
                  so it works offline.
  A saved copy runs in a sandbox: it cannot see your files, diary or
  saves. It has its own private localStorage, kept between launches
  (IndexedDB and cookies are not available to it). Links in it that
  open a new window open as Browser tabs. Name, category (pick or type
  a new one), icon, description and "show on the desktop" can be edited
  at any time. Export saves a copy as a .html file (a link app copies
  its link). Remove deletes the app and its data. Size limit for one
  single-file app is about 1.5 MB.
  Installed programs are included in Backup and show in Clean-up under
  "Your writing and creations".

--- GAMES ------------------------------------------------------------

Terminal Velocity (the game, section 11), Snake and Minesweeper.

Hearth (flame icon, Accessories)
  A cozy fireplace to sit by, with a small, calm game of tending it.
  Pick a Hearth: Stone, Brick, Campfire (night sky, moon and pines) or
  Flames only. Flame colours: Classic, Deep red, Copper (green and teal
  tips) and Violet.
  The game (turn "Cozy game" off for a plain fireplace that lights
  itself): a new hearth starts cold. Lay kindling (K) and a log (L),
  then strike the flint and steel (S, the Strike flint button, or click
  the cold hearth). Kindling catches easily; logs alone are hard, and
  every miss makes the next try likelier. A small flame takes hold and
  you grow it with logs. Logs come from a woodpile of up to 8 that gains
  a log every 75 seconds. Kindling is unlimited but burns away quickly.
  As the fire burns, ash builds up and smothers the flames (the fire
  dims and a message says so): poke it (P, the button, or click the
  fire) to clear it. Poking also shakes the logs and sends sparks flying.
  A big fire burns faster. When the fuel runs out the fire goes out and
  the hearth is cold again: lay wood and strike the flint to relight it.
  Glowing embers can still be brought back with a poke or kindling.
  While the fire burns the room slowly warms (warming up, warm, cosy,
  snug) and the light in the room grows. Now and then a log shifts, or
  a shower of sparks pops. "Tend fire" adds logs for you from the
  woodpile; it is off by default. "Your fireside" in the menu counts
  fires lit, time by the fire and the longest fire. There are no
  badges or goals; the fire is the point. A small line at the top left shows the woodpile, the fire and
  the room; press H to hide it and all controls when screen recording.
  A bar along the bottom has a button for every action, each showing its
  key: Kindling (K), Log (L), Flint (S), Poke (P), Full screen (F) and
  Hide (H). The bar, the status line and the Sound button all hide with
  H (press H or double-click to bring them back). Flame size in the menu
  changes both how tall and how wide the flames are.
  When you close Hearth, the fire, the woodpile, the ash and your
  fireside totals are saved, and it starts again where you left it.
  While Hearth is closed the fire waits; it does not burn down. Sound
  is on by default and is made live in your browser, so nothing is
  downloaded: a soft roar plus random crackles, pops and the click of
  the flint.
  Sound, Crackle and Volume are in the controls. A Sound on / Sound off
  button sits in the top right corner, and M does the same. Click the
  fire area while the menu is open and the menu closes. The sleep
  timer (30 min, 1 hour, 90 min) tends the fire for you (logs are added
  from the woodpile), fades it out over the last quarter and leaves
  embers; press L to relight. The button "Tend fire while timer runs"
  in the timer section turns the tending off, so the fire burns on its
  own and may go out early. Adding wood yourself does not cancel the
  timer, and the time left is remembered if you close Hearth.
  Press H to hide all the controls (press H or double-click to bring
  them back) and F for fullscreen. The sound keeps playing if you
  minimise the window, which is handy as background; close the window
  to stop it. Quality is Auto and steps down on a weak machine. The
  crackle is a ready-made loop, so it costs almost nothing to play.

Firework (star icon, Games)
  A calm fireworks night sky over water. Tap to launch a rocket, hold to
  keep launching. The Palette button opens colours (pick one or many, or
  rainbow, or add your own), burst shapes (Peony, Chrysanthemum, Willow,
  Palm, Ring, Heart, Star, Crossette, Glitter, or Surprise), size, Auto
  show, Slow motion, Sound, Music and Volume. A bar along the bottom has
  a button for every action, each showing its key (Surprise, Auto show,
  Slow motion, Full screen, Hide); it hides with H. Click the sky while the
  Palette is open to close it. A Sound on / Sound off button sits in
  the top right corner (it silences everything). Keys while the window
  is focused: Space surprise, A auto, S slow, M mute, H hide the controls,
  F fullscreen. Quality is Auto by default: it watches the frame rate and
  steps down on a weak machine. Settings are remembered on this device.

Circuit Temple (chip icon, Games)
  A cozy motherboard-repair game for kids and anyone curious. Customers
  bring broken gadgets; you find what is wrong, scrape the green mask off
  a broken trace, bridge it with a wire, solder it, swap dead parts, and
  deliver the board for money. Spend it in the Shop on better tools and
  cosy workshop items. Nothing has a clock.
  The Lounge is the resting screen: when you have no job (or press the
  house button) you see your rank, boards repaired, money, time at the
  bench, boards fixed per star level, your recent repairs and a fun
  electronics fact. No board is shown, so you can just relax. Continue
  repair takes you back to the bench.
  The Job board lets you pick any star level at any time (1 to 5 stars,
  nothing is locked). Each level has several jobs; "Show different
  boards" brings new ones. More stars pay more.
  A part you lift off that is bad (dead, burnt, shorted or the wrong
  value) goes to the Parts tray marked "bad" in red, with the reason, and
  you get a warning if you put a bad part back on the board.
  Your repair is remembered: close the window or the whole OS and the
  same board comes back exactly as you left it.
  The NEXT bar always tells you what to do. In Settings you can turn the
  tutorial hints off once you know the game, and turn off auto-solder.
  Keys while the window is focused: 1 to 9 pick a tool, P power, T heat
  view, B parts, M map, U or Ctrl+Z undo, 0 fit the board.
  Money never runs out of uses: the Shop has a Give a repair kit card. You
  send a toolkit, a repair bench or a whole repair lab to a school, club or
  workshop, as often as you like, and they write back with a thank-you
  note. Gifts earn hearts, and hearts earn kind titles. Once every tool and
  workshop item is bought, the card moves to the top of the Shop.
  Saved on this device under tvos_circuit, so it is included in Backup
  and Restore, and shows in Clean-up as "Circuit Temple progress".

SysAdmin (server icon, Games)
  A cozy server-building game, a sister to Circuit Temple. Customers bring
  you servers to build or fix. You open the lid and fit real-looking parts
  into a drawn machine: processors, heatsinks, memory, drives, power
  supplies and cards. Nothing has a clock, there is no strict budget and
  you never need to do any maths: the game checks that parts fit and tells
  you in plain words when one does not.
  The Job board asks what kind of job you want (Build a server from
  scratch, Fix a server, or Surprise me) and how hard (1 to 5 stars, nothing
  is locked). A few hand-made jobs come first; after that the jobs never
  run out, because new customers and new problems are made as you go.
  Each job gives you a job card (who they are and what they want), a small
  parts tray that holds only that customer's parts, and a Parts shop where
  the game counts how many of each part the job needs and how many you
  already have. Tap a part, then tap its glowing spot (or drag it up onto
  the machine). A part that does not fit never goes in; it says why.
  Building ends with Power on, a short self-test, and for builds the
  customer's operating system to install. Fixing uses the Paste and Brush
  tools (tap the tool, then tap the chip or a fan), a Power on to read the
  screen, and swapping out the part that has failed.
  The Lounge is the resting screen: your rank, jobs finished, servers built
  and fixed, credits, time at the bench, jobs finished per star level,
  recent servers (every finished job gets a photo on the Shelf) and a fun
  fact. Credits pay for cozy workshop items in the Shop. When the
  workshop is full the Shop has a second tab, Give a server: you send a
  server to a school, library, clinic or shelter, as often as you like, and
  they write back with a thank-you note. Gifts earn hearts, and hearts earn
  kind titles, so credits are always worth earning. The NEXT bar
  always tells you what to do; Settings can turn the hints off.
  Your job is remembered: close the window or the whole OS and the same
  machine comes back as you left it.
  Saved on this device under tvos_sysadmin, so it is included in Backup and
  Restore (as its own area), and shows in Clean-up as "SysAdmin progress".

Cartridges (cartridge icon, Games)
  The place for games that live outside the OS. Programs is for your own
  HTML apps; Cartridges is for games. The OS holds only the player (a shelf,
  a Store, a sealed window for each game, and the saving). The games come
  in game packs: a pack is a single .html file that holds many games, such
  as cartridges.html. So the OS stays small, and new games never need a new
  OS.
  The default pack. cartridges.html (the author's own games) is the
  default game pack, and nobody has to install it. Cartridges fetches it
  by itself when it opens. It looks first for a cartridges.html next to the
  OS (when the OS is served from a web address), and if there is none, or
  the OS was opened from a saved file, it falls back to the home copy at
  https://republicka.life/cartridges.html (one line in the OS source, so it
  is easy to change if the site moves). That home site must send an
  "Access-Control-Allow-Origin: *" header for the file, or a saved copy of
  the OS cannot read it. The pack is kept in the browser so it works
  offline, and is updated whenever it is online and the file has changed.
  It cannot be removed. If it cannot be reached, Game packs offers "From a
  file". Anyone can add more packs, or single games by link, beside the
  default one.
  More stores. cartridges.html can name more game packs in its head, for
  example <meta name="cartridges-more" content="risingsun.html, other.html">.
  Those files must be in the same folder as the cartridges.html that was
  loaded (next to the OS, or on the home site). Cartridges
  loads them by itself after the default one, and the Store shows each pack
  under its own heading, in the order listed. Adding a new store therefore
  means editing only cartridges.html; the OS does not change and everyone
  who already has the OS gets the new store. Stores can also be found
  without being listed: after the listed ones, Cartridges tries
  cartridges-2.html, cartridges-3.html, cartridges-4.html and so on (same
  folder), and stops after two missing in a row, so one gap is forgiven.
  Such a store shows under its own name (set inside the file), in number
  order after the listed ones, and a listed name always wins over a
  number. Uploading a new numbered file is then all that is needed. The first store is checked
  every time Cartridges opens; the others at most once a day, or when you
  press Check for updates in Game packs. They are kept for offline use. A
  store that has been taken off the list disappears once none of its games
  is installed. If two stores have a game with the same id, the earlier
  store wins and the Store shows a warning.
  New window. Play runs a game inside the Cartridges window. The New window
  button (on a shelf tile, and in the player bar while you play) moves it to
  a window of its own, so you can use other apps beside it. A game can be
  open in one place at a time (Play on a game that already has a window
  brings that window forward), progress saves the same way, and you cannot
  remove a game while its window is open.
  Full screen. The Full screen button in a game makes the whole player full
  screen, with the bar on top, so the same button (now "Exit full screen"),
  Back, a double click on the bar, or Esc brings you back.
  Four tabs. My cartridges is your shelf: Play, Remove and Erase save.
  Removing a game that has saved progress asks whether to keep or erase
  the progress. Store lists the games of every store that is turned on,
  with a search box and tag buttons; press Install and it goes on your
  shelf. Game packs shows your stores, turns each one off or on (the
  default store cannot be turned off, and a store will not turn off while
  one of its games is installed), loads a pack from a file or a web
  address, and shows how much saving space your game progress uses. Add by
  link adds a game from the web (it must allow being shown inside other
  pages, and it needs a connection).
  Opening cartridges.html in a browser tab on its own also works as a
  stand-alone player, but its saves stay in that tab and are not part of
  Backup. Use it through Cartridges instead.
  Where things are kept. The games themselves are kept in the browser's
  IndexedDB (a database called tvos_cartridges), not in the 5 MB of
  localStorage, so a pack can be large. Your shelf, your links and every
  game's saved progress are kept under one key, tvos_cartridges, which is
  included in Backup and Restore (as its own area) and shows in Clean-up as
  "Cartridges: shelf and game progress". Game packs are not in Backup,
  because you can load them again. Removing a pack keeps your progress.
  Each game runs in a sealed frame. It cannot see your files, your diary or
  the other games. A game that uses localStorage as normal gets a private
  one, kept for it automatically. A game on its own website cannot use
  another site's storage, so it asks Cartridges to keep a save with
  postMessage (the Add by link tab shows how).
  A web address for a pack only loads if that website allows other pages to
  read it; otherwise save the file and load it from a file.
  Honest limits. Loading a pack of games from someone else means running
  their code; each game is sealed in its own frame, but only load packs
  you trust. It has been tested here, not on a real Chromebook or phone.

Sophia (paw icon, Companions)
  Sophia is a long-haired Chihuahua, black with a white chest, tan
  eyebrow dots, tan legs and big, bright eyes, and she lives on your
  desktop. She is Chief of Defence of Republicka and guards the
  perimeter. She is tiny, she cannot be hurt, she cannot go hungry, and she never wants anything. She
  is always content.
  She has no window. She walks on the bottom of the screen and along the
  top edge of your open windows, and she does not block clicks: only her
  own body does. She has no furniture or props: her sleeping spot is just
  the bottom-right corner of the desktop.
  - Naps: she sleeps a lot, in that corner, and more at night or when you
    have been away from the keyboard for a while.
  - Checks every new window: when you open an app she trots over, sniffs
    along the top of the window and says "all clear". Open several at once
    and she just nods at the extras. She never covers the window itself.
  - Barks (only a speech bubble, she is silent) every now and then on
    her own, once every ten to twenty minutes ("woof!", "bark!", "yap!"),
    and also when the OS catches an error, at most once every 20 seconds.
  - Tap her to pet her. Press and hold for a cuddle; keep holding and she
    leans right up to the screen, looks at you, and licks the glass for
    real, leaving a wet trail that fades. Let go (or tap anywhere else)
    and she steps back. She also gets tired and steps back by herself
    after a few seconds, so she can never get stuck licking.
    Right-click her, or tap the paw in the tray, for a menu: Give a treat,
    Send to bed, Dismiss, Run a security scan, Notebook, Settings.
    Only her actual figure answers a click or tap. The empty space around
    her, even when she is set to Huge, belongs to whatever is under it. After six treats in ten minutes she is
    full and goes for a nap.
  - Out of the way: Send to bed keeps her asleep in her corner. Dismiss
    hides her until you call her back. "Switch Sophia off" in her app
    unloads her completely. The paw in the tray always works.
  - Size: Tiny, Small, Big, Bigger or Huge, in her settings. Big is the
    default.
  - Silent: Sophia makes no sound at all. When she barks you see a little
    speech bubble, nothing more.
  - Dancing: when DeeJay or Lyre is really playing music, she gets up
    (even from a nap) and dances where she is: jumping up and down, now
    and then a twirl or a "woof!" bubble. In DeeJay she follows the
    speed of the music. Lyre is slower, so her jumps are slower. She
    stops when the music stops or you close the app. Just having the app
    open does nothing, and Lyre only counts when its "Play for me" is
    on. A pet or a treat interrupts her, and she goes back to dancing if
    the music is still on. She does not dance if you sent her to bed or
    dismissed her. With reduced motion she sways instead of jumping. She
    keeps the tempo but does not land exactly on each beat.
  - Always in front: she stays on top of every window, and she keeps
    herself fully on the screen when you make the window smaller.
  - Phones and small screens: she shrinks to fit (never more than about
    a third of the screen width), stays in front of open apps, and still
    wakes up, hops onto each new app and checks it. Apps fill the whole
    screen there, so she sniffs along the top of the app and then goes
    back down to the bottom edge.
  - Reduced motion: if your system asks for less motion she stays on one
    surface and moves slowly instead of hopping.
  Her notebook is a patrol log that keeps only what the browser really
  knows, and clears pages older than 14 days by itself:
  - Today: windows opened, windows she checked, different apps used,
    errors she barked at, pets, cuddles, treats, naps, songs danced to
    and minutes danced.
  - The system right now: how long this session has run, how much storage
    your saved data uses, memory used by the OS and battery (only where
    the browser reports them), online or offline, time since your last
    backup, and how many windows are open.
  - Windows opened over the last 14 days, the busiest apps today, and
    all-time totals.
  Sophia Internet Security (the joke, and the lore):
  Sophia is also the OS's antivirus and spyware monitor. This is a joke,
  and it is meant to be an obvious one. Terminal Velocity is a single
  text file running inside a browser tab. There is nothing installed to
  infect, so it cannot catch a virus. That is why it is funny: she guards
  it every day, finds nothing, and keeps a perfect record. In the lore,
  that record is her doing.
  - Where: the "Security" tab in her app, and "Run a security scan (a
    joke)" in her right-click menu. Her subtitle calls her "Antivirus,
    spyware monitor and good girl."
  - Scans: Quick, Full and Deep. She walks to each open window (Full and
    Deep also patrol the floor), sniffs, and hands in a report. The
    progress, the patrol and the verdicts are theatre. The result is
    always zero viruses and zero spyware, and the threat level is
    "cuddles".
  - What is real: the lines marked "Actually checked" are facts the page
    can see. They are: how many windows are open, whether the camera or
    recorder is listening right now, which outside web addresses the page
    has contacted, what the browser says about camera, microphone,
    location and notification permission, and saved items in this
    browser that the OS does not recognise. The lines marked "Sophia's
    findings" are the joke.
  - Honest limit: a web page cannot scan your computer, your files or
    other tabs, and she does not protect anything outside this tab. Do
    not rely on her for real security. Use a real antivirus for that.
  - Her record (viruses found, spyware found, windows cleared, alarms
    raised, suspects befriended, bribes accepted, scans completed) is
    saved with the rest of her notebook.
  Saved on this device under tvos_sophia, so it is included in Backup and
  Restore (as its own area), and shows in Clean-up as "Sophia".

My Sky (sparkle icon, Games)
  A cozy star-hunting game with no sound. You fly a small ship across a
  map of invented stars, visit systems, and name what you find: the
  system, each world, and each animal. Every star is a place on the map,
  so a seed (shown as MS2 and a code like Q2C5-VRPG) always shows the
  same system, and you can share one so a friend can fly to it.
  The Ship is the home screen: your stats, your places, your journal and
  the seed sheet. The Star chart is a real map. Tap a star, then Fly. You
  can only jump so far at a time, shown by the dashed ring.
  The scanner hears faint signals before you arrive: a purple diamond
  means something strange (a paradox or two worlds merged into one), a
  green sparkle means a paradise world. Paradise worlds are mild, lush and
  full of animals, and are common enough to hunt.
  Saved (star) is only a bookmark so you can fly back. Claimed (flag)
  means the system is yours: naming anything there claims it for you.
  Make home sets a system you can fly back to from anywhere. There is no
  home until you choose one. The Places sheet lists your saved, claimed,
  paradise and strange systems and where you have been recently.
  Saved on this device under tvos_mysky, so it is included in Backup and
  Restore, and shows in Clean-up as "My Sky progress".

Theseus (bottle icon, Games)
  A cozy ship-in-a-bottle game about the Ship of Theseus. An old, mossy ship
  is sealed in a bottle. Replace it one part at a time until nothing
  original remains, then answer the question it asks: is it the same ship?
  The Lounge is the main menu: continue your ship, start a new one, open
  your shelf, use a seed or code, or read how it works.
  On the Bench, tap a glowing plank (or press the gold button) and the
  tweezers take it out through the neck. Drag the new plank to the glowing
  slot to glue it in. A plank can only come out when the planks beside it
  are firmly set, so the order matters. Quick fit skips the dragging.
  Masts, sails and the flag are replaced by choosing a look and then
  pressing and holding the big button at the top of that tab. The
  figurehead and rudder have their own gold button. Everything you build
  can be repainted afterwards. The Bottle tab changes the glass, stopper,
  sky, sea, scenery and stand at any time.
  Seal the bottle when you are done. You answer the question, and the ship
  goes on your Shelf with a code starting TS1 that anyone can paste under
  Seeds to see your ship. An old ship comes from a seed starting TH1, so a
  friend can start with the very same ship. From the shelf you can refit a
  ship and replace it all again, or build a second ship from the planks you
  pulled out.
  Saved on this device under tvos_theseus, so it is included in Backup and
  Restore (as its own area), and shows in Clean-up as "Theseus ships".


=====================================================================
5. YOUR DATA: SAVING, BACKUP, CLEANER, REBOOT
=====================================================================

HOW MUCH ROOM IS LEFT (Settings > Storage)
  The OS keeps your data in two places in the browser, and Settings >
  Storage shows how full each one is, measured live on your device.
  1. Settings and saves (the small store): settings, themes, Diary,
     tasks, bookmarks, Sequencer patterns and game saves. Browsers give
     every website only about 5 MB here, and it cannot be raised.
  2. Files and everything else (the big store): /home/user and the OS's
     own database. The browser allows far more here, usually a large
     share of the free space on the device.
  If the small store fills up, the browser refuses new saves and the OS
  shows a red message. Everything already saved stays as it is; the OS
  never deletes anything to make room. Changes made after that point
  are lost when you close or reload, so free some space straight away.
  If the big store fills up, saving a new file is refused with an error
  and existing files are not touched.
  Only the browser can clear your data by itself (very low disk space on
  a store not marked persistent, or you clearing site data). The Storage
  screen has a button to ask the browser to keep it.
  To free space: Cleaner lists every saved item with its size, biggest
  first. Make a Backup first. A very large backup is built in memory and
  can fail on a weak device; back up Files and Settings separately.
  Restoring settings checks they fit first. If they would not, nothing is
  changed and you are told why. A quiet warning appears, at most once a
  week, only when the small store is close to full.

THE BACKUP ICON IN THE TRAY
  The small disk icon next to the clock shows whether your work is in a
  backup. A small dot means something you made is not in a backup yet
  (amber), or has been waiting a week (red). Click the icon to back up
  right now, open the Backup app, or turn reminders off.
  Only things you made count: Diary pages, files in /home/user, tasks,
  calendar notes, sequencer patterns, Themes Den, bookmarks, installed
  programs, Circuit Temple and SysAdmin progress and the game save. Moving windows, changing settings or
  themes, history and reading places never count and never nag.
  A reminder appears at most once a day, and only after a week without a
  backup (or a day, if you have made a lot), or two days after you first
  had something worth saving. Choose Not now (quiet for 3 days) or Stop
  reminding me. The Backup app has the same switch.
  Where the browser allows it (Chrome and ChromeOS do), a backup asks
  where to save first. The icon only counts it as saved once the file is
  really written; if you cancel, nothing is marked. Where the browser
  only offers a plain download, the OS says so and asks you to check the
  file arrived.
  Backup > "Check a backup file" opens a ZIP and proves every part of it
  can be read, without changing anything. Do this now and then: a backup
  nobody has tested is only a hope.
  The first time you have something worth saving, a note says plainly
  that your data lives only in this browser. It stays on screen until
  you close it, and it comes back next time if you never did. Backup
  reminders also stay until you answer them.
  Keep your backups in cloud storage (Google Drive, OneDrive, Dropbox).
  A backup that stays on the same device does not protect you if you
  lose it. On a Chromebook you can set Chrome's download location to a
  Google Drive folder, so every backup lands there.

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

ERASE EVERYTHING  (for shared computers)
  On a library, school or borrowed computer, use Cleaner > Overview >
  "Erase everything..." (or the terminal command factoryreset) before
  you leave. It wipes everything this OS saved on that device: your
  files, Diary, drawings, settings, themes, installed programs, game
  saves and your chat key. Then the OS starts fresh for the next person.
  - It warns you, shows the date of your last backup (or that you never
    made one), and offers "Make a backup first". To go ahead you must
    type ERASE. It cannot be undone.
  - Not erased: files you already downloaded or saved to a folder on the
    computer, copies in your cloud storage, the browser's own history,
    and data kept by other pages on the same website. Close other tabs of
    the site as well.

SAVE THE OS ITSELF
  Start menu > Save OS (also in Backup, Settings > About, or the terminal
  command saveos) downloads this whole OS as one .html file. Save OS saves the OS
  program itself, not your own files or settings; use Backup for those. In Chromium
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
     terminal-velocity.html?manifest=https://yoursite.org/files/manifest.json
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
  and the moving wallpaper, and slows the music visualisers. Auto does not
  guess from the hardware. It starts everything moving, watches how
  smoothly the screen really draws for about four seconds after start-up,
  and only turns Low power on if the device cannot keep up (below about
  22 frames per second), with a message saying so. A small, slow computer
  that copes keeps its moving wallpaper; weaker ones just draw it a little
  less often. Choose On or Off to override.
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
Settings > Appearance > "Calendar & dates", and the same control in the Clock and Calendar apps, switches to Gregorian first (with a warning).


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
