// Русские названия сур
const surahNames = [
    "Аль-Фатиха", "Аль-Бакара", "Аль Имран", "Ан-Ниса", "Аль-Маида", "Аль-Анам", "Аль-Араф",
    "Аль-Анфаль", "Ат-Тауба", "Юнус", "Худ", "Юсуф", "Ар-Раад", "Ибрахим", "Аль-Хиджр",
    "Ан-Нахль", "Аль-Исра", "Аль-Кахф", "Марьям", "Та Ха", "Аль-Анбия", "Аль-Хадж", "Аль-Муминун",
    "Ан-Нур", "Аль-Фуркан", "Аш-Шуара", "Ан-Намль", "Аль-Касас", "Аль-Анкабут", "Ар-Рум",
    "Лукман", "Ас-Саджда", "Аль-Ахзаб", "Саба", "Фатыр", "Йа Син", "Ас-Саффат", "Сад",
    "Аз-Зумар", "Гафир", "Фуссылат", "Аш-Шура", "Аз-Зухруф", "Ад-Духан", "Аль-Джасия",
    "Аль-Ахкаф", "Мухаммад", "Аль-Фатх", "Аль-Худжурат", "Каф", "Аз-Зарият", "Ат-Тур",
    "Ан-Наджм", "Аль-Камар", "Ар-Рахман", "Аль-Вакиа", "Аль-Хадид", "Аль-Муджадиля", "Аль-Хашр",
    "Аль-Мумтахана", "Ас-Сафф", "Аль-Джумуа", "Аль-Мунафикун", "Ат-Тагабун", "Ат-Таляк", "Ат-Тахрим",
    "Аль-Мульк", "Аль-Калям", "Аль-Хакка", "Аль-Мааридж", "Нух", "Аль-Джинн", "Аль-Муззаммиль", "Аль-Муддассир",
    "Аль-Кияма", "Аль-Инсан", "Аль-Мурсалят", "Ан-Наба", "Ан-Назиат", "Абаса", "Ат-Таквир",
    "Аль-Инфитар", "Аль-Мутаффифин", "Аль-Иншикак", "Аль-Бурудж", "Ат-Тарик", "Аль-Аля", "Аль-Гашия",
    "Аль-Фаджр", "Аль-Баляд", "Аш-Шамс", "Аль-Лейл", "Ад-Духа", "Аш-Шарх", "Ат-Тин", "Аль-Аляк",
    "Аль-Кадр", "Аль-Баййина", "Аз-Зальзаля", "Аль-Адийат", "Аль-Кариа", "Ат-Такасур", "Аль-Аср",
    "Аль-Хумаза", "Аль-Филь", "Курайш", "Аль-Маун", "Аль-Каусар", "Аль-Кафирун", "Ан-Наср",
    "Аль-Масад", "Аль-Ихлас", "Аль-Фаляк", "Ан-Нас"
];

// Арабские названия для отображения
const surahNamesArabic = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف",
    "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر",
    "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون",
    "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص",
    "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية",
    "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور",
    "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر",
    "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم",
    "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر",
    "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس", "التكوير",
    "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية",
    "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق",
    "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر",
    "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
    "المسد", "الإخلاص", "الفلق", "الناس"
];

// Элементы DOM
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSurahTitle = document.getElementById('current-surah-title');
const currentSurahDesc = document.getElementById('current-surah-desc');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const progressFill = document.getElementById('progress-fill');
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');
const surahsGrid = document.getElementById('surahs-grid');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const speedButtons = document.querySelectorAll('.speed-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const viewButtons = document.querySelectorAll('.view-btn');

// Состояние
let currentSurahIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeated = false;
let currentSpeed = 1;

// Инициализация сетки сур
function initSurahsGrid() {
    surahsGrid.innerHTML = '';
    
    surahNames.forEach((name, index) => {
        const surahCard = document.createElement('div');
        surahCard.className = 'surah-card';
        surahCard.dataset.index = index;
        surahCard.style.setProperty('--index', index);
        
        const arabicName = surahNamesArabic[index];
        const surahNumber = index + 1;
        
        surahCard.innerHTML = `
            <div class="surah-number">${surahNumber}</div>
            <div class="surah-name">${arabicName}</div>
            <div class="surah-name-english">${name}</div>
            <div class="surah-translation">${getSurahTranslation(index)}</div>
            <div class="surah-info">
                <span>${getSurahType(index)}</span>
                <span>${getAyahCount(index)} аятов</span>
            </div>
            <div class="surah-actions">
                <button class="surah-action-btn" onclick="playSurah(${index})">
                    <i class="fas fa-play"></i> Слушать
                </button>
                <button class="surah-action-btn" onclick="addToFavorites(${index})">
                    <i class="far fa-heart"></i> В избранное
                </button>
            </div>
        `;
        
        surahCard.addEventListener('click', (e) => {
            if (!e.target.closest('.surah-action-btn')) {
                playSurah(index);
            }
        });
        
        surahsGrid.appendChild(surahCard);
    });
}

// Вспомогательные функции
function getSurahTranslation(index) {
    const translations = [
        "Открывающая", "Корова", "Семейство Имрана", "Женщины", "Трапеза",
        "Скот", "Ограды", "Трофеи", "Покаяние", "Юнус", "Худ", "Юсуф",
        "Гром", "Ибрахим", "Хиджр", "Пчёлы", "Ночной перенос", "Пещера",
        "Марьям", "Та Ха", "Пророки", "Паломничество", "Верующие", "Свет",
        "Различение", "Поэты", "Муравьи", "Рассказ", "Паук", "Римляне",
        "Лукман", "Земной поклон", "Союзники", "Саба", "Творец", "Йа Син",
        "Стоящие в ряд", "Сад", "Толпы", "Прощающий", "Разъяснены", "Совет",
        "Украшения", "Дым", "Коленопреклонённые", "Барханы", "Мухаммад",
        "Победа", "Комнаты", "Каф", "Рассеивающие", "Гора", "Звезда",
        "Луна", "Милостивый", "Событие", "Железо", "Препирающаяся", "Собрание",
        "Испытуемая", "Ряды", "Собрание", "Лицемеры", "Обделение", "Развод",
        "Запрещение", "Власть", "Письменная трость", "Неминуемое", "Ступени",
        "Нух", "Джинны", "Закутавшийся", "Завернувшийся", "Воскресение",
        "Человек", "Посылаемые", "Весть", "Исторгающие", "Нахмурился",
        "Скручивание", "Раскалывание", "Обвешивающие", "Разверзнется", "Созвездия",
        "Ночной путник", "Всевышний", "Покрывающее", "Заря", "Город",
        "Солнце", "Ночь", "Утро", "Раскрытие", "Смоковница", "Сгусток",
        "Предопределение", "Ясное знамение", "Сотрясение", "Скачущие", "Великое бедствие",
        "Страсть к приумножению", "Предвечернее время", "Хулитель", "Слон",
        "Курайш", "Подаяние", "Изобилие", "Неверующие", "Помощь",
        "Пальмовые волокна", "Очищение", "Рассвет", "Люди"
    ];
    
    return translations[index] || "Священная сура";
}

function getSurahType(index) {
    // Мекканские и Мединские суры (упрощённо)
    const meccan = [1, 6, 7, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 30, 
                   31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 56, 
                   67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 
                   89, 90, 91, 92, 93, 94, 95, 96, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 
                   112, 113, 114];
    
    return meccan.includes(index + 1) ? "Мекканская" : "Мединская";
}

function getAyahCount(index) {
    const ayahs = [
        7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 
        78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 
        35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 
        28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 
        19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
    ];
    
    return ayahs[index] || 0;
}

// Загрузка суры
function loadSurah(index) {
    if (index < 0 || index >= surahNames.length) return;
    
    // Обновляем активную карточку
    document.querySelectorAll('.surah-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.querySelector(`.surah-card[data-index="${index}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Обновляем информацию
    currentSurahIndex = index;
    currentSurahTitle.textContent = surahNames[index];
    currentSurahDesc.textContent = getSurahTranslation(index);
    
    // Загружаем аудио
    const surahNumber = (index + 1).toString().padStart(3, '0');
    audioPlayer.src = `audio/${surahNumber}.mp3`;
    
    // Сбрасываем прогресс
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    
    // Обновляем общее время
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    }, { once: true });
}

// Воспроизведение
function playSurah(index = currentSurahIndex) {
    loadSurah(index);
    audioPlayer.play().then(() => {
        isPlaying = true;
        playIcon.className = 'fas fa-pause';
        playBtn.title = 'Пауза';
    }).catch(e => {
        console.log("Ошибка воспроизведения:", e);
    });
}

function togglePlay() {
    if (!audioPlayer.src) {
        playSurah(0);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.className = 'fas fa-play';
        playBtn.title = 'Воспроизвести';
    } else {
        audioPlayer.play();
        isPlaying = true;
        playIcon.className = 'fas fa-pause';
        playBtn.title = 'Пауза';
    }
}

// Навигация
function prevSurah() {
    let newIndex = currentSurahIndex - 1;
    if (newIndex < 0) newIndex = surahNames.length - 1;
    playSurah(newIndex);
}

function nextSurah() {
    let newIndex = currentSurahIndex + 1;
    if (newIndex >= surahNames.length) newIndex = 0;
    
    if (isRepeated) {
        playSurah(currentSurahIndex);
    } else {
        playSurah(newIndex);
    }
}

// Форматирование времени
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Обновление прогресса
function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    currentTimeEl.textContent = formatTime(currentTime);
    
    // Автопереход при завершении
    if (currentTime >= duration - 0.5 && duration > 0) {
        setTimeout(() => {
            nextSurah();
        }, 500);
    }
}

// Установка прогресса
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    if (isNaN(duration)) return;
    
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Управление громкостью
function setVolume() {
    const volume = volumeSlider.value / 100;
    audioPlayer.volume = volume;
    
    // Обновляем иконку
    if (volume === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Управление скоростью
function setPlaybackSpeed(speed) {
    currentSpeed = speed;
    audioPlayer.playbackRate = speed;
    
    // Обновляем активную кнопку
    speedButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseFloat(btn.dataset.speed) === speed) {
            btn.classList.add('active');
        }
    });
}

// Перемешивание
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
}

// Повтор
function toggleRepeat() {
    isRepeated = !isRepeated;
    repeatBtn.classList.toggle('active', isRepeated);
}

// Фильтрация
function setFilter(filter) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    // Здесь можно добавить логику фильтрации
}

// Переключение вида
function setView(view) {
    viewButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (view === 'list') {
        surahsGrid.style.gridTemplateColumns = '1fr';
    } else {
        surahsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    }
}

// Избранное
function addToFavorites(index) {
    const btn = event.target.closest('.surah-action-btn');
    const icon = btn.querySelector('i');
    
    if (icon.classList.contains('far')) {
        icon.className = 'fas fa-heart';
        btn.innerHTML = '<i class="fas fa-heart"></i> В избранном';
    } else {
        icon.className = 'far fa-heart';
        btn.innerHTML = '<i class="far fa-heart"></i> В избранное';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем сетку сур
    initSurahsGrid();
    
    // Загружаем первую суру
    loadSurah(0);
    
    // Назначаем обработчики
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevSurah);
    nextBtn.addEventListener('click', nextSurah);
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', nextSurah);
    
    progressBar.addEventListener('click', setProgress);
    volumeSlider.addEventListener('input', setVolume);
    
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setPlaybackSpeed(parseFloat(btn.dataset.speed));
        });
    });
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.textContent));
    });
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => setView(btn.dataset.view));
    });
    
    // Мобильное меню
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Инициализация громкости
    setVolume();
});

// Глобальные функции
window.playSurah = playSurah;
window.addToFavorites = addToFavorites;