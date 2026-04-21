<template>
    <div class="enhanced-home">
        <!-- 标签云 -->
        <div class="tag-cloud-wrapper">
            <div class="tag-cloud-title">
                <span class="typing-text">{{ typedText }}</span><span class="cursor">|</span>
            </div>
            <div class="tag-cloud">
                <div
                    v-for="(item, index) in tags"
                    :key="item.text"
                    class="tag-item"
                    :style="getTagStyle(index)"
                    @mouseenter="handleHover(index)"
                    @click="handleTagClick(item)"
                >
                    {{ item.text }}
                </div>
            </div>
        </div>

        <!-- 技能进度条 -->
        <div class="skills-section">
            <h3 class="section-title">💻 技术栈</h3>
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
                <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percent">{{ skill.percent }}%</span>
                </div>
                <div class="skill-bar">
                    <div
                        class="skill-progress"
                        :style="{ width: skill.percent + '%', background: skill.color }"
                    ></div>
                </div>
            </div>
        </div>

        <!-- 统计卡片 -->
        <div class="stats-container">
            <div class="stat-card" v-for="stat in stats" :key="stat.label">
                <div class="stat-icon">{{ stat.icon }}</div>
                <div class="stat-number" :data-target="stat.number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 打字机效果
const fullText = 'Stay foolish, Stay hungry.';
const typedText = ref('');
let charIndex = 0;

const typeWriter = () => {
    if (charIndex < fullText.length) {
        typedText.value += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
};

// 标签数据
const tags = ref([
    { text: 'JavaScript', color: '#f7df1e' },
    { text: 'Vue.js', color: '#42b883' },
    { text: 'React', color: '#61dafb' },
    { text: 'TypeScript', color: '#3178c6' },
    { text: 'Node.js', color: '#68a063' },
    { text: 'CSS3', color: '#264de4' },
    { text: 'HTML5', color: '#e34f26' },
    { text: 'Webpack', color: '#8dd6f9' },
    { text: 'Vite', color: '#646cff' },
    { text: 'Git', color: '#f05032' },
    { text: 'Python', color: '#3776ab' },
    { text: 'Docker', color: '#2496ed' }
]);

// 技能数据
const skills = ref([
    { name: 'Vue.js', percent: 90, color: 'linear-gradient(90deg, #42b883, #35495e)' },
    { name: 'JavaScript', percent: 88, color: 'linear-gradient(90deg, #f7df1e, #f0db4f)' },
    { name: 'React', percent: 75, color: 'linear-gradient(90deg, #61dafb, #282c34)' },
    { name: 'CSS/SCSS', percent: 85, color: 'linear-gradient(90deg, #264de4, #2965f1)' },
    { name: 'Node.js', percent: 70, color: 'linear-gradient(90deg, #68a063, #3c873a)' },
    { name: 'TypeScript', percent: 80, color: 'linear-gradient(90deg, #3178c6, #235a97)' }
]);

// 统计数据
const stats = ref([
    { icon: '📝', number: '50+', label: '文章' },
    { icon: '⭐', number: '100+', label: 'Star' },
    { icon: '🔧', number: '30+', label: '项目' },
    { icon: '☕', number: '∞', label: '咖啡' }
]);

// 获取标签样式
const getTagStyle = (index) => {
    const rotation = Math.random() * 20 - 10; // -10 到 10 度
    return {
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${index * 0.1}s`
    };
};

// 标签悬停效果
const handleHover = (index) => {
    const element = document.querySelectorAll('.tag-item')[index];
    element.style.transform = 'scale(1.2) rotate(0deg)';
    setTimeout(() => {
        element.style.transform = getTagStyle(index).transform;
    }, 300);
};

// 标签点击事件
const handleTagClick = (tag) => {
    console.log(`Clicked on ${tag.text}`);
};

onMounted(() => {
    typeWriter();
});
</script>

<style scoped>
.enhanced-home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

/* 标签云区域 */
.tag-cloud-wrapper {
    text-align: center;
    margin-bottom: 60px;
}

.tag-cloud-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    min-height: 40px;
}

.typing-text {
    background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cursor {
    animation: blink 0.7s infinite;
    -webkit-text-fill-color: #667eea;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 800px;
    margin: 0 auto;
}

.tag-item {
    padding: 10px 20px;
    background: white;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeInUp 0.5s ease-out forwards;
    opacity: 0;
}

.tag-item:nth-child(1) { animation-delay: 0.1s; }
.tag-item:nth-child(2) { animation-delay: 0.2s; }
.tag-item:nth-child(3) { animation-delay: 0.3s; }
.tag-item:nth-child(4) { animation-delay: 0.4s; }
.tag-item:nth-child(5) { animation-delay: 0.5s; }
.tag-item:nth-child(6) { animation-delay: 0.6s; }

.tag-item:hover {
    transform: translateY(-5px) scale(1.1) !important;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* 技能进度条区域 */
.skills-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 60px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.skill-item {
    margin-bottom: 25px;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.skill-name {
    font-weight: 600;
    color: #2c3e50;
}

.skill-percent {
    color: #667eea;
    font-weight: bold;
}

.skill-bar {
    height: 12px;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-progress {
    height: 100%;
    border-radius: 10px;
    transition: width 1.5s ease-out;
    position: relative;
    overflow: hidden;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* 统计卡片区域 */
.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-top: 60px;
}

.stat-card {
    background: white;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.stat-card:hover::before {
    transform: scaleX(1);
}

.stat-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
}

.stat-icon {
    font-size: 48px;
    margin-bottom: 15px;
    animation: float 3s ease-in-out infinite;
}

.stat-card:nth-child(2) .stat-icon { animation-delay: 0.5s; }
.stat-card:nth-child(3) .stat-icon { animation-delay: 1s; }
.stat-card:nth-child(4) .stat-icon { animation-delay: 1.5s; }

.stat-number {
    font-size: 36px;
    font-weight: bold;
    background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.stat-label {
    color: #666;
    font-size: 14px;
    font-weight: 500;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .tag-cloud {
        gap: 10px;
    }

    .tag-item {
        padding: 8px 15px;
        font-size: 12px;
    }

    .skills-section {
        padding: 25px;
    }

    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    .stat-card {
        padding: 20px;
    }
}
</style>
  