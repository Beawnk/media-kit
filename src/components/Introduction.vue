<template>
  <section id="introduction" class="container">
    <div class="grid anim-1">
      <div class="media-kit item">
        <h3>Your Name</h3>
        <h1>Media Kit</h1>
        <p>Write something about yourself here. Keep it short, simple and include a bit of your personality!</p>
      </div>
      <div class="picture item">
        <img src="../assets/img/photo.png" alt="photo">
      </div>
      <div class="emote item">
        <img src="../assets/img/icons/waving-hand.png" alt="Waving hand">
      </div>
      <div class="color-1 item"></div>
      <div class="color-2 item"></div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '../assets/style/main.scss' as v;

#introduction::before {
    content: '';
    width: var(--side);
    height: var(--side);
    position: absolute;
    top: var(--top);
    left: calc(var(--side) / -2);
    border-radius: var(--border-radius);
    background-color: var(--highlight-color-4);
}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 25px;
    .item {
        border-radius: var(--border-radius);
        overflow: hidden;
    }
    .media-kit {
        grid-column: span 3 / span 3;
        grid-row: span 6 / span 6;

        padding: 100px;
        background-color: var(--dark-color);
        @include v.media('1440px') {
            padding: 80px;
        }
        @include v.media('1366px') {
            padding: 50px;
        }
        h3 {
            color: var(--highlight-color-4);
            margin-bottom: 60px;
        }
        h1 {
            margin-bottom: 70px;
        }
        p {
            font-size: var(--text-big);
        }
    }

    .picture {
        grid-column: span 2 / span 2;
        grid-row: span 4 / span 4;
        grid-column-start: 4;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .emote {
        grid-row: span 2 / span 2;
        grid-column-start: 4;
        grid-row-start: 5;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--highlight-color-3);
        img {
            width: 100px;
            height: 100px;
        }
    }

    .color-1 {
        grid-column: span 2 / span 2;
        grid-row: span 2 / span 2;
        grid-column-start: 5;
        grid-row-start: 5;

        background-color: var(--highlight-color-2);
    }

    .color-2 {
        grid-row: span 4 / span 4;
        grid-column-start: 6;
        grid-row-start: 1;

        background-color: var(--highlight-color);
    }
}

</style>