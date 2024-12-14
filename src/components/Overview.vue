<template>
  <section id="overview" class="container anim-2">
    <div>
        <h2>Overview</h2>
        <div class="main-grid">
            <div class="total-reach item">
                <h1>240K</h1>
                <p>Total Reach Across All Media & Platforms</p>
            </div>
            <div class="social-media item">
                <div class="media-grid">
                    <div class="media-item" v-for="item in media" :key="item.name">
                        <div class="media-wrap">
                            <div class="media-icon">
                                <img :src="item.img" :alt="item.name">
                            </div>
                            <div class="media-info">
                                <h5>{{ formatNumber(item.followers) }}</h5>
                                <p>Followers</p>
                            </div>
                        </div>
                        <a :href="item.link" class="link">{{ cleanLink(item.link) }}</a>
                    </div>
                </div>
            </div>
        </div>
        <span class="recorded-date">Data recorded 1st January, 2030.</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import formatNumber from '@/composables/formatNumber.js';
import cleanLink from '@/composables/cleanLink.js';

const media = ref([]);

const fetchMedia = async () => {
    try {
        const response = await fetch('social-media/data.json');
        media.value = await response.json();
    } catch (error) {
        console.error('error: ', error);
    }
};

onMounted(() => {
    fetchMedia();
});

</script>

<style lang="scss" scoped>
@use '../assets/style/main';

h2 {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    &::after {
        content: '';
        width: 100px;
        height: 100px;
        display: inline-block;
        margin-left: 30px;
        background-image: url('../assets/img/icons/eyes.png');
        background-size: contain;
        background-position: center;
    }
}

.recorded-date {
    display: block;
    margin-top: 20px;
    font-size: var(--text-small);
    color: var(--text-color);
    opacity: 0.5;
    font-style: italic;
    float: right;
}

.main-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 15px;
    .item {
        border-radius: var(--border-radius);
        padding: 50px;
        overflow: hidden;
    }
    .total-reach {
        grid-column: span 2 / span 2;
        grid-row: span 4 / span 4;

        background-color: var(--highlight-color-4);
        color: var(--background-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            margin-bottom: 10px;
        }
        p {
            font-family: var(--font-family-semi-bold);
            font-size: var(--text-medium);
            text-align: center;
            max-width: 90%;
        }
    }
    .social-media {
        grid-column: span 5 / span 5;
        grid-row: span 4 / span 4;
        grid-column-start: 3;

        background-color: var(--dark-color);
        .media-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 60px;

            .media-item {
                .media-wrap {
                    display: flex;
                    align-items: center;
                    .media-icon {
                        width: 100px;
                        height: 100px;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        margin-right: 20px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .media-info {
                        h5 {
                            margin-bottom: 5px;
                        }
                        p {
                            font-size: var(--text-medium);
                        }
                    }
                }
                a.link {
                    display: block;
                    margin-top: 10px;
                    margin-left: 5px;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>