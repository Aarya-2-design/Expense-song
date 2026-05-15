const songsData = [
    { title: "Pavazha Malli", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814536/Pavazha_Malli_cmyjg7.mp3" },
    { title: "Mannichiru", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814534/Mannichiru_syfn1j.mp3" },
    { title: "Verappa Extended", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814532/Verappa---Extended-MassTamilan.dev_re8qc7.mp3" },
    { title: "Verappa", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814530/Verappa-MassTamilan.dev_l3npgq.mp3" },
    { title: "Powerhouse", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814530/Powerhouse_meqwix.mp3" },
    { title: "Ulavum Dhegam", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814528/Ulavum_Dhegam_frjgir.mp3" },
    { title: "Tabaahi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814521/Tabaahi_tr2dff.mp3" },
    { title: "Raathu Raasan", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814520/Raathu-Raasan-MassTamilan.dev_wde2cw.mp3" },
    { title: "Thanga Magan", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814516/Thanga_Magan_blzva6.mp3" },
    { title: "Ponmaaney", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814503/Ponmaaney_mdjgq0.mp3" },
    { title: "Poga Poga", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814503/Poga_Poga_aiv5yt.mp3" },
    { title: "Powerhouse Vibe", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814503/Powerhouse-Vibe-MassTamilan.dev_qdro16.mp3" },
    { title: "Neelothi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814498/Neelothi_mimotg.mp3" },
    { title: "Marandhu Poche", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814497/Marandhu_Poche_p7yubd.mp3" },
    { title: "Paranthene Penne", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814497/Paranthene_Penne_zgetne.mp3" },
    { title: "Nerungatta", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814496/Nerungatta_e19qyw.mp3" },
    { title: "Oar Thoorale", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814492/Oar_Thoorale_x7p9ej.mp3" },
    { title: "Neel Vaaname", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814484/Neel_Vaaname_hqy5jg.mp3" },
    { title: "Mutta Kalakki", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814480/Mutta_Kalakki_apicut.mp3" },
    { title: "Monica", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814480/Monica_q7mhfo.mp3" },
    { title: "Nee Naan", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814479/Nee_Naan_ruwqmm.mp3" },
    { title: "Morattu Muttal", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814474/Morattu_Muttal_zrdsdh.mp3" },
    { title: "Minnu Vattaam Poochi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814470/Minnu_Vattaam_Poochi_ycjxqa.mp3" },
    { title: "Maara Makka", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814469/Maara_Makka_tpa3dl.mp3" },
    { title: "Mobsta", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814469/Mobsta_bsrkln.mp3" },
    { title: "Kathara Kathara", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814464/Kathara_Kathara_kzwhwb.mp3" },
    { title: "Loveah Sollitalea", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814461/Loveah_Sollitalea_d3hjqo.mp3" },
    { title: "Kannae Kanmaniye", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814458/Kannae_Kanmaniye_s77mtt.mp3" },
    { title: "Chikitu", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814458/Chikitu_og62tk.mp3" },
    { title: "Jilpanso", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814458/Jilpanso_r8hoob.mp3" },
    { title: "Kanne Kalangadha", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814457/Kanne_Kalangadha_ldos14.mp3" },
    { title: "Karuppa Kooda Va", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814454/Karuppa-Kooda-Va-MassTamilan.dev_q3p7z7.mp3" },
    { title: "God Mode", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814447/God-Mode-MassTamilan.dev_vcrqwk.mp3" },
    { title: "Kannamma En Kannamma", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814447/Kannamma_En_Kannamma_rlptlc.mp3" },
    { title: "I Am The Danger", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814442/I_Am_The_Danger_husfa2.mp3" },
    { title: "Kanaa Kai Serum", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814441/Kanaa_Kai_Serum_ndskru.mp3" },
    { title: "Kaadhal Kadhai", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814436/Kaadhal_Kadhai_cwcdk3.mp3" },
    { title: "Inikkum Bandham", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814433/Inikkum_Bandham_y8x8nd.mp3" },
    { title: "Enakenna Yaarum Illaye", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814432/Enakenna_Yaarum_Illaye_sa0pgw.mp3" },
    { title: "Coolie Disco", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814430/Coolie_Disco_e3h2nm.mp3" },
    { title: "Ennai Polave", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814429/Ennai_Polave_mqfyr5.mp3" },
    { title: "Chinnaware", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814427/Chinnaware_osjfol.mp3" },
    { title: "Aiyo Kadhaley", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814426/Aiyo_Kadhaley_kdvygs.mp3" },
    { title: "Edhukku Dhan Indha Kaadhal", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814424/Edhukku_Dhan_Indha_Kaadhal_pznnmi.mp3" },
    { title: "Alapuzha Sandhayila", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814419/Alapuzha_Sandhayila_izt642.mp3" },
    { title: "Adaavadi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814417/Adaavadi_yp06xk.mp3" },
    { title: "Aasa Pulla", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814414/Aasa_Pulla_alh4rc.mp3" }
];

// Clean up and embellish data
const songs = songsData.map((song, index) => {
    // Generate a pseudo-random color for the cover based on title length
    const hue1 = (song.title.length * 15) % 360;
    const hue2 = (hue1 + 60) % 360;
    
    return {
        id: index,
        title: song.title,
        artist: "Various Artists",
        album: "Mass Tamilan Hits",
        dateAdded: "May 15, 2026",
        url: song.url,
        coverStyle: `linear-gradient(135deg, hsl(${hue1}, 60%, 40%), hsl(${hue2}, 80%, 60%))`
    };
});

// DOM Elements
const songsListEl = document.getElementById('songs-list');
const audioElement = document.getElementById('audio-element');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const mainPlayBtn = document.getElementById('main-play-btn');

const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerCover = document.getElementById('player-cover');

const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');

const volumeContainer = document.getElementById('volume-container');
const volumeFill = document.getElementById('volume-fill');
const btnMute = document.getElementById('btn-mute');

let currentSongIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// Format time in M:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// Render Songs
function renderSongs() {
    songsListEl.innerHTML = '';
    songs.forEach((song, index) => {
        const row = document.createElement('div');
        row.className = 'song-row';
        row.dataset.index = index;
        
        row.innerHTML = `
            <div class="song-number">
                <span>${index + 1}</span>
                <i class="fa-solid fa-play"></i>
            </div>
            <div class="song-info">
                <div class="song-cover" style="background: ${song.coverStyle}"></div>
                <div class="song-title-artist">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
            </div>
            <div class="song-album">${song.album}</div>
            <div class="song-date">${song.dateAdded}</div>
            <div class="song-duration">-:--</div>
        `;
        
        row.addEventListener('click', () => {
            if (currentSongIndex === index) {
                togglePlay();
            } else {
                loadSong(index);
                playSong();
            }
        });
        
        songsListEl.appendChild(row);
    });
    
    document.getElementById('total-songs-count').textContent = `• ${songs.length} songs`;
}

// Load Song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    audioElement.src = song.url;
    audioElement.load();
    
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerCover.style.background = song.coverStyle;
    
    // Update active class in list
    document.querySelectorAll('.song-row').forEach(row => {
        row.classList.remove('playing');
        row.querySelector('.song-number i').className = 'fa-solid fa-play';
    });
    
    const activeRow = document.querySelector(`.song-row[data-index="${index}"]`);
    if (activeRow) {
        activeRow.classList.add('playing');
        if (isPlaying) {
            activeRow.querySelector('.song-number i').className = 'fa-solid fa-pause';
        }
    }
}

// Play/Pause
function playSong() {
    isPlaying = true;
    audioElement.play();
    btnPlay.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    mainPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    
    const activeRow = document.querySelector(`.song-row.playing`);
    if (activeRow) {
        activeRow.querySelector('.song-number i').className = 'fa-solid fa-pause';
    }
}

function pauseSong() {
    isPlaying = false;
    audioElement.pause();
    btnPlay.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    mainPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    
    const activeRow = document.querySelector(`.song-row.playing`);
    if (activeRow) {
        activeRow.querySelector('.song-number i').className = 'fa-solid fa-play';
    }
}

function togglePlay() {
    if (currentSongIndex === -1) {
        loadSong(0);
    }
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Next/Prev
function nextSong() {
    if (isShuffle) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === currentSongIndex);
        loadSong(newIndex);
    } else {
        loadSong((currentSongIndex + 1) % songs.length);
    }
    playSong();
}

function prevSong() {
    if (audioElement.currentTime > 3) {
        audioElement.currentTime = 0;
    } else {
        loadSong((currentSongIndex - 1 + songs.length) % songs.length);
        playSong();
    }
}

// Event Listeners
btnPlay.addEventListener('click', togglePlay);
mainPlayBtn.addEventListener('click', togglePlay);
btnNext.addEventListener('click', nextSong);
btnPrev.addEventListener('click', prevSong);

btnShuffle.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active', isShuffle);
});

btnRepeat.addEventListener('click', () => {
    isRepeat = !isRepeat;
    btnRepeat.classList.toggle('active', isRepeat);
    audioElement.loop = isRepeat;
});

// Audio Events
audioElement.addEventListener('timeupdate', () => {
    const current = audioElement.currentTime;
    const duration = audioElement.duration;
    
    timeCurrent.textContent = formatTime(current);
    if (!isNaN(duration)) {
        timeTotal.textContent = formatTime(duration);
        const progressPercent = (current / duration) * 100;
        progressFill.style.width = `${progressPercent}%`;
        progressContainer.style.setProperty('--fill-width', `${progressPercent}%`);
    }
});

audioElement.addEventListener('ended', () => {
    if (!isRepeat) {
        nextSong();
    }
});

audioElement.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(audioElement.duration);
    
    // Attempt to update duration in the list if it's the first time loaded
    const activeRow = document.querySelector(`.song-row.playing .song-duration`);
    if (activeRow && activeRow.textContent === '-:--') {
        activeRow.textContent = formatTime(audioElement.duration);
    }
});

// Progress Bar Click
progressContainer.addEventListener('click', (e) => {
    if (currentSongIndex === -1) return;
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration;
    
    audioElement.currentTime = (clickX / width) * duration;
});

// Volume Control
audioElement.volume = 0.5;
volumeFill.style.width = '50%';
volumeContainer.style.setProperty('--fill-width', '50%');

volumeContainer.addEventListener('click', (e) => {
    const width = volumeContainer.clientWidth;
    const clickX = e.offsetX;
    const volume = clickX / width;
    
    audioElement.volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
    volumeContainer.style.setProperty('--fill-width', `${volume * 100}%`);
    
    if (volume === 0) {
        btnMute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else if (volume < 0.5) {
        btnMute.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    } else {
        btnMute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
});

btnMute.addEventListener('click', () => {
    if (audioElement.volume > 0) {
        audioElement.dataset.lastVolume = audioElement.volume;
        audioElement.volume = 0;
        volumeFill.style.width = '0%';
        volumeContainer.style.setProperty('--fill-width', '0%');
        btnMute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        const lastVol = audioElement.dataset.lastVolume || 0.5;
        audioElement.volume = lastVol;
        volumeFill.style.width = `${lastVol * 100}%`;
        volumeContainer.style.setProperty('--fill-width', `${lastVol * 100}%`);
        btnMute.innerHTML = lastVol < 0.5 ? '<i class="fa-solid fa-volume-low"></i>' : '<i class="fa-solid fa-volume-high"></i>';
    }
});

// Initialize
renderSongs();
