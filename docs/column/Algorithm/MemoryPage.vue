<template>
    <div>
        <div id="hearts-container"></div>
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
                    <div class="photo-card">
                        <img src="/photos/p1.jpg" alt="情侣对戒" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">情侣对戒</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p2.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">给大家介绍一下,这是我的老婆</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p3.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">我们在夕阳下热吻</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p4.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">那天老婆笑得好美呀</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p5.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">Wink的老婆也好美,是谁眼光这么好,买的东西这么好看呀</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p6.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">你往我的心脏开了一枪,我心动了</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p7.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">拿着我们的合照,记录下属于我们的时刻</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p8.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">老婆,你好香呀</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p9.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">幸福的一家五口</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p10.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">我想成为你的依靠</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p11.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">那天阳光正好</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p12.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">可可爱爱,没有脑袋</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p13.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">这张超级可爱,是我的聊天背景呢</div>
                    </div>
                    <div class="photo-card">
                        <img src="/photos/p14.jpg" alt="love" style="width: 100%; height: 200px; object-fit: contain;">
                        <div class="photo-caption">这是咱俩才知道的舌吻 哈哈</div>
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
let heartInterval = null;
let timeInterval = null;

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
    heartInterval = setInterval(createHeart, 300);

    // 立即更新一次时间
    updateTime();
    // 每秒更新一次时间
    timeInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (heartInterval) {
        clearInterval(heartInterval);
    }
    if (timeInterval) {
        clearInterval(timeInterval);
    }
});
</script>
