<template>
    <div>
        <div id="hearts-container"></div>
        <div id="sakura-container"></div>

        <!-- 图片预览模态框 -->
        <div v-if="previewImage" class="image-preview-overlay" @click="closePreview">
            <div class="image-preview-content" @click.stop>
                <img :src="previewImage" alt="预览图片" class="preview-image">
                <button class="close-button" @click="closePreview">&times;</button>
                <div class="preview-caption">{{ previewCaption }}</div>
            </div>
        </div>

        <div class="memory-container">
            <div class="memory-hero">
                <h1>💕 我爱你 💕</h1>
                <div class="days-counter">
                    我们在一起已经<br>
                    <span class="number">{{ days }}</span> 天
                    <div class="current-time">
                        现在是 <span class="time">{{ currentTime }}</span>
                    </div>
                </div>
                <p class="subtitle">520快乐,我的公主</p>
                <p style="margin-top: 20px; font-size: 1.1em;">
                    从相遇的那一刻起<br>
                    每一天都因为有你而变得特别
                </p>
            </div>
            <div class="gallery-section">
                <h2 class="section-title">📸 我们的甜蜜瞬间</h2>
                <div class="gallery">
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p1.jpg" alt="情侣对戒" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">情侣对戒</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p2.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">给大家介绍一下,这是我的老婆</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p3.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">我们在夕阳下热吻</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p4.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">那天老婆笑得好美呀</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p5.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">Wink的老婆也好美,是谁眼光这么好,买的东西这么好看呀</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p6.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">你往我的心脏开了一枪,我心动了</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p7.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">拿着我们的合照,记录下属于我们的时刻</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p8.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">老婆,你好香呀</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p9.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">幸福的一家五口</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p10.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">我想成为你的依靠</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p11.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">那天阳光正好</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p12.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">可可爱爱,没有脑袋</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p13.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">这张超级可爱,是我的聊天背景呢</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p14.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">这是咱俩才知道的舌吻 哈哈</div>
                    </div>
                    <div class="photo-card" @click="openPreview($event)">
                        <img src="/photos/p15.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">这是一个在阳光下熠熠生辉的梧桐叶</div>
                    </div>
                </div>
            </div>

            <div class="timeline-section">
                <h2 class="section-title">💝 我们的故事 💝</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2025年7月</div>
                        <div class="timeline-content">那个夏天,我们相遇了,命运的齿轮开始转动</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">第100天</div>
                        <div class="timeline-content">第一个100天,给你录了"第几个100天",从此这首歌有了新的含义</div>
                    </div>
                       <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">第200天</div>
                        <div class="timeline-content">第二个100天,我们更加相爱,有争吵,有开心,有爱情的酸甜苦辣</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">第300天 · 520</div>
                        <div class="timeline-content">第三个100天,这100天好难呀,幸好,我们还在一起</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">未完待续</div>
                        <div class="timeline-content">我们还会有好多的100天!</div>
                    </div>
                </div>
            </div>

            <div class="love-letter">
                <p>宝宝,乖乖,钰儿,小小乖,公主,香小喵,钰宝,老婆,性感小野猫:</p>
                <p>今天是520,也是我们在一起的第300天。这个日子对我们来说,有着双倍的特殊意义。</p>
                <p>300天前,我遇见了世界上最美腻可爱的你。从那时起,我的生活因为有你而变得完整。</p>
                <p>还记得我们的第一次约会吗？记得我们第一次牵手时的悸动吗？记得每一次你对我微笑时,我心中的那份悸动吗？</p>
                <p>这些300天里,有欢笑,有感动,有争吵,有和解。但最重要的是,我们一起经历了所有。每一天,你都在用你的方式爱着我,而我,也在用我的全部爱着你。</p>
                <p>未来的路还很长,但我相信,只要我们在一起,就没有什么能够阻挡我们。因为,最好的爱情,不是没有争吵,而是争吵后依然选择彼此。</p>
                <p>520快乐,我的公主。未来的每一天,我都想和你一起度过。</p>
                <p>愿君心似我心,定不负相思意。</p>
                <p class="signature">永远爱你的,<br>臭小汪</p>
            </div>

            <div class="memory-footer">
                <span class="heart-icon">❤️</span>
                <p>我们在一起的第 {{ days }} 天</p>
                <p style="font-size: 0.9em; margin-top: 10px;">版权所有 © 我的心只属于你</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref(300);
const currentTime = ref('');
const previewImage = ref(null);
const previewCaption = ref('');
let heartInterval = null;
let sakuraInterval = null;
let timeInterval = null;

// 打开图片预览
const openPreview = (event) => {
    // 从点击的元素中找到 img 和 caption 标签
    const clickedElement = event.currentTarget;
    const imgElement = clickedElement.querySelector('img');
    const captionElement = clickedElement.querySelector('.photo-caption');

    if (imgElement && imgElement.src) {
        // 使用原始图片的完整 src 路径
        previewImage.value = imgElement.src;

        // 获取图片说明文字
        if (captionElement) {
            previewCaption.value = captionElement.textContent.trim();
        }

        // 阻止页面滚动
        document.body.style.overflow = 'hidden';
    }
};

// 关闭图片预览
const closePreview = () => {
    previewImage.value = null;
    previewCaption.value = '';

    // 恢复页面滚动
    document.body.style.overflow = '';
};

const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const nicknames = [
        '❤️宝宝❤️',
        '❤️乖乖❤️',
        '❤️钰儿❤️',
        '❤️小小乖❤️',
        '❤️公主❤️',
        '❤️香小喵❤️',
        '❤️钰宝❤️',
        '❤️老婆❤️',
        '❤️性感小野猫❤️',
    ];

    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    heart.innerHTML = randomNickname;

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    const container = document.getElementById('hearts-container');
    if (container) {
        container.appendChild(heart);
    }

    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 7000);
};

// 创建樱花飘落效果
const createSakura = () => {
    const sakura = document.createElement('div');
    sakura.className = 'sakura-petal';

    const flowers = ['🌸', '🌺', '🏵️', '💮', '🌼'];
    sakura.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    // 随机起始位置 - 可以从顶部、左侧、右侧甚至屏幕中间出现
    const startSide = Math.random();
    if (startSide < 0.4) {
        // 从顶部降落 (40%)
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.top = '-30px';
    } else if (startSide < 0.7) {
        // 从左侧飘入 (30%)
        sakura.style.left = '-30px';
        sakura.style.top = Math.random() * 60 + 'vh';
    } else {
        // 从右侧飘入 (30%)
        sakura.style.right = '-30px';
        sakura.style.top = Math.random() * 60 + 'vh';
    }

    const size = Math.random() * 22 + 12;
    sakura.style.fontSize = size + 'px';

    const duration = Math.random() * 10 + 10;
    const sway = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 1080;

    sakura.style.setProperty('--duration', duration + 's');
    sakura.style.setProperty('--sway', sway + 'px');
    sakura.style.setProperty('--rotation', rotation + 'deg');
    sakura.style.setProperty('--rotation-speed', rotationSpeed + 'deg');
    sakura.style.setProperty('--start-opacity', Math.random() * 0.2 + 0.3);

    const container = document.getElementById('sakura-container');
    if (container) {
        container.appendChild(sakura);
    }

    setTimeout(() => {
        if (sakura.parentNode) {
            sakura.style.transition = 'opacity 1.5s';
            sakura.style.opacity = '0';
            setTimeout(() => sakura.remove(), 1500);
        }
    }, duration * 1000);
};

// 更新时间函数
const updateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];

    currentTime.value = `${year}年${month}月${day}日 ${weekDay} ${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
    // 天数计算 - 根据实际开始日期调整,包含当天
    const startDate = new Date('2025-07-25');
    const today = new Date();

    // 统一重置时间为当天的0点，避免时分秒影响计算
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    days.value = Math.floor((todayOnly - startDateOnly) / (1000 * 60 * 60 * 24)) + 1;

    // 每300ms创建一个心形
    heartInterval = setInterval(createHeart, 500);

    // 每150ms创建一个樱花
    sakuraInterval = setInterval(createSakura, 500);

    // 立即更新一次时间
    updateTime();
    // 每秒更新一次时间
    timeInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (heartInterval) {
        clearInterval(heartInterval);
    }
    if (sakuraInterval) {
        clearInterval(sakuraInterval);
    }
    if (timeInterval) {
        clearInterval(timeInterval);
    }
});
</script>

<style>
/* 图片预览模态框 */
.image-preview-overlay {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background-color: rgba(0, 0, 0, 0.9) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 10000 !important;
    cursor: pointer !important;
    padding: 20px;
    box-sizing: border-box;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.image-preview-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-image {
    max-width: 100%;
    max-height: 85vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    background: white;
    display: block;
}

.preview-caption {
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
    padding: 10px 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    border-radius: 0 0 8px 8px;
    text-shadow:
        0 1px 3px rgba(0, 0, 0, 1),
        0 0 10px rgba(0, 0, 0, 0.8),
        0 0 20px rgba(0, 0, 0, 0.6);
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    font-size: 24px;
    line-height: 1;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-weight: bold;
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(90deg);
}

/* 照片卡片样式 */
.photo-card {
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.photo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.photo-card img {
    pointer-events: none;
}

/* 主内容区域 - 确保在樱花上方 */
.memory-container {
    position: relative;
    z-index: 10;
}

/* 心形容器 */
#hearts-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

/* 心形飘落动画 */
.heart {
    position: fixed;
    top: -50px;
    animation: fall linear forwards;
    pointer-events: none;
}

@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
    }
}

/* 樱花飘落动画 */
#sakura-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.sakura-petal {
    position: absolute;
    pointer-events: none;
    animation: sakura-fall var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
               sakura-sway 3s ease-in-out infinite,
               sakura-flicker 4s ease-in-out infinite;
    will-change: transform, opacity;
    filter: blur(0.5px) drop-shadow(0 2px 4px rgba(255, 192, 203, 0.3));
    text-shadow: 0 0 10px rgba(255, 192, 203, 0.5);
    opacity: var(--start-opacity);
}

@keyframes sakura-fall {
    0% {
        transform: translateX(0) translateY(0) rotate(var(--rotation)) scale(0.6);
        opacity: 0;
    }
    10% {
        opacity: var(--start-opacity);
        transform: translateX(20px) translateY(10vh) rotate(calc(var(--rotation) + 60deg)) scale(1);
    }
    50% {
        opacity: calc(var(--start-opacity) * 0.7);
    }
    80% {
        opacity: var(--start-opacity);
    }
    100% {
        transform: translateX(var(--sway)) translateY(110vh) rotate(calc(var(--rotation) + var(--rotation-speed))) scale(0.8);
        opacity: 0;
    }
}

@keyframes sakura-sway {
    0%, 100% {
        margin-left: 0px;
    }
    25% {
        margin-left: 50px;
    }
    50% {
        margin-left: -30px;
    }
    75% {
        margin-left: 40px;
    }
}

@keyframes sakura-flicker {
    0%, 100% {
        opacity: var(--start-opacity);
    }
    50% {
        opacity: calc(var(--start-opacity) * 0.4);
    }
}
</style>
