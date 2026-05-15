const songsData = [
    { title: "Erangi Vandhu", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830830/Erangi-Vandhu_pq2r7y.mp3" },
    { title: "Aasa Kooda", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830831/Aasa_Kooda_vyvedg.mp3" },
    { title: "Enna Sugam", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830841/Enna_Sugam_sywees.mp3" },
    { title: "Aathadi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830840/Aathadi-MassTamilan.org_id48dh.mp3" },
    { title: "Vennilavu Saaral", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778831009/Vennilavu_Saaral_rfuepk.mp3" },
    { title: "Vizhi Veekura", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778831008/Vizhi_Veekura_j31cgk.mp3" },
    { title: "Veyyon Silli", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778831007/Veyyon-Silli-MassTamilan.io_eusdak.mp3" },
    { title: "Yumabaibesa", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778831006/Yumabaibesa_bpi6u8.mp3" },
    { title: "Va Va Va Vannila", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778831000/Va-Va-Va-Vannila-MassTamilan.fm_aqout4.mp3" },
    { title: "Yen Paattan Saami Varum", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830997/Yen_Paattan_Saami_Varum_figbsc.mp3" },
    { title: "Singari", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830994/Singari_mcecri.mp3" },
    { title: "Vengamavan", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830987/Vengamavan-MassTamilan.org_o2ufej.mp3" },
    { title: "Pazhagikalam", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830987/Pazhagikalam-MassTamilan.fm_hgzaa8.mp3" },
    { title: "The One", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830982/The_One_vkt1w8.mp3" },
    { title: "Sithira Puthiri", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830980/Sithira-Puthiri-MassTamilan.dev_kejwzj.mp3" },
    { title: "Vaane Vaane", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830977/Vaane_Vaane_dmn92r.mp3" },
    { title: "Usurey", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830976/Usurey-MassTamilan.io_mnubqf.mp3" },
    { title: "Uyirey", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830965/Uyirey_vw5l8b.mp3" },
    { title: "Single Pasanga", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830954/Single-Pasanga-MassTamilan.org_heesmr.mp3" },
    { title: "Sooravali", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830951/Sooravali-MassTamilan.io_oy0ahk.mp3" },
    { title: "Pudichiruka Illa Pudikalaya", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830948/Pudichiruka-Illa-Pudikalaya-MassTamilan.com_ef32pn.mp3" },
    { title: "Naalu Nimisham", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830943/Naalu-Nimisham-MassTamilan.io_rmh1lu.mp3" },
    { title: "Oru Kuchi Oru Kulfi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830943/Oru-Kuchi-Oru-Kulfi-MassTamilan.com_psryn2.mp3" },
    { title: "Oliyum Oliyum", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830939/Oliyum-Oliyum-MassTamilan.org_pbcm7s.mp3" },
    { title: "Oorum Blood", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830930/Oorum_Blood_t5cj9a.mp3" },
    { title: "My Heartu Spinning", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830929/My_Heartu_Spinning_l8hkyc.mp3" },
    { title: "Nallaru Po", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830924/Nallaru_Po_shmsxi.mp3" },
    { title: "Kayilae Aagasam", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830916/Kayilae-Aagasam-MassTamilan.io_hjkt21.mp3" },
    { title: "Morattu Single", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830910/Morattu-Single-MassTamilan.org_lv0js6.mp3" },
    { title: "Madras To Madurai", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830908/Madras-To-Madurai-MassTamilan.fm_yyjp8f.mp3" },
    { title: "Mannurunda", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830907/Mannurunda-MassTamilan.io_a9tk49.mp3" },
    { title: "Maara Theme", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830907/Maara-Theme-MassTamilan.io_cqedst.mp3" },
    { title: "Kerala Song", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830907/Kerala-Song-MassTamilan.org_bsugxn.mp3" },
    { title: "Karakudi Ilavarasi En Nenja", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830894/Karakudi-Ilavarasi-En-Nenja-MassTamilan.com_fb9xnk.mp3" },
    { title: "Katchi Sera", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830890/Katchi_Sera_ngzd0c.mp3" },
    { title: "Kulasamy Kaaval Kaaka", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830886/Kulasamy_Kaaval_Kaaka_mfxjef.mp3" },
    { title: "Ethana Saami", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830878/Ethana_Saami_napbzw.mp3" },
    { title: "Kaiya Pudicha Thaarumaaru", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830878/Kaiya-Pudicha-Thaarumaaru-MassTamilan.com_otqiqq.mp3" },
    { title: "Kanimaa", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830877/Kanimaa_ymdw4s.mp3" },
    { title: "Kaattu Payale", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830876/Kaattu-Payale-MassTamilan.io_moqa8u.mp3" },
    { title: "Aye Aye Aye", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830868/Aye-Aye-Aye-MassTamilan.fm_lza8vv.mp3" },
    { title: "Hey Minnale", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830867/Hey_Minnale_wr34gb.mp3" },
    { title: "Hi Sonna Pothum", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830859/Hi-Sonna-Pothum-MassTamilan.org_ecmxcv.mp3" },
    { title: "Enjaami Thandhaane", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830854/Enjaami_Thandhaane_anfyum.mp3" },
    { title: "Aagasam", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830853/Aagasam-MassTamilan.io_kj3kbm.mp3" },
    { title: "Azhage", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778830843/Azhage_e0fdhs.mp3" },
    { title: "Pavazha Malli", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814536/Pavazha_Malli_cmyjg7.mp3" },
    { title: "Pavazha Malli", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814536/Pavazha_Malli_cmyjg7.mp3" },
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
    { title: "Neelothi", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814498/Neelothi_mimotg.mp3" },
    { title: "Marandhu Poche", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814497/Marandhu_Poche_p7yubd.mp3" },
    { title: "Paranthene Penne", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814497/Paranthene_Penne_zgetne.mp3" },
    { title: "Nerungatta", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814496/Nerungatta_e19qyw.mp3" },
    { title: "Oar Thoorale", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814492/Oar_Thoorale_x7p9ej.mp3" },
    { title: "Neel Vaaname", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814484/Neel_Vaaname_hqy5jg.mp3" },
    { title: "Mutta Kalakki", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814480/Mutta_Kalakki_apicut.mp3" },
    { title: "Monica", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814480/Monica_q7mhfo.mp3" },
    { title: "Nee Naan", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814479/Nee_Naan_ruwqmm.mp3" },
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
    { title: "Inikkum Bandham", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814433/Inikkum_Bandham_y8x8nd.mp3" },
    { title: "Kaadhal Kadhai", url: "https://res.cloudinary.com/da7phrtoa/video/upload/v1778814436/Kaadhal_Kadhai_cwcdk3.mp3" },
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
