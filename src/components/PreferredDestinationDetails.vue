<template>
  <div>
    <h1>
      <span>1</span>
      Abbesses Metro Station
    </h1>

    <p>
      Paris’s larger and more well-known cemeteries might be the eternal resting
      place of many recent famous name, but the Cimetière de Montmartre is home
      to more than...
    </p>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Location</h3>
        <span>Location Icon</span>
      </div>

      <figure>
        <img src="../assets/images/background/map.png" alt="Map" />
        <figcaption>15–19 Place Saint-Pierre, 75018 Paris, France</figcaption>
      </figure>
    </article>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Audio</h3>
        <span>Audio Icon</span>
      </div>

      <section v-for="(item, index) in audio" :key="item.name">
        <div class="heading grid">
          <h5>{{ item.name }}</h5>
          <time>{{ item.duration }}</time>
          <span class="more">•••</span>
        </div>

        <div class="details">
          <address>{{ item.address }}</address>
          <span class="dot">·</span>
          <time datetime="">{{ item.date }}</time>
        </div>

        <hr class="stroke" v-if="index < audio.length - 1" />
      </section>
    </article>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Photos</h3>
        <span>Photos Icon</span>
      </div>

      <section class="img-group">
        <button class="left" @click="enableScroll">
          <img src="../assets/images/icons/arrow_left.png" alt="" />
        </button>

        <div
          class="img-group__wrapper flex-row"
          :style="[scrollable ? { overflowX: 'auto' } : '']"
        >
          <div class="img-group__col grid">
            <div class="img-col" v-for="x in 2" :key="x"></div>
          </div>

          <div class="img-group__row flex-col">
            <div class="img-row" v-for="x in 6" :key="x"></div>
          </div>
        </div>

        <button class="right" @click="enableScroll">
          <img src="../assets/images/icons/arrow_right.png" alt="" />
        </button>
      </section>
    </article>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Tips</h3>
        <span>Tips Icon</span>
      </div>

      <ul v-for="tip in tips" :key="tip.value">
        <li>{{ tip.value }}</li>
      </ul>
    </article>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Links</h3>
        <span>Links Icon</span>
      </div>

      <section class="card-group flex-row flex-wrap">
        <div class="links-card" v-for="link in links" :key="link.title">
          <div
            class="links-card__image"
            :style="{ backgroundImage: 'address' }"
          ></div>
          <div class="links-card__description">
            <h5>{{ link.title }}</h5>
            <p>{{ link.description }}</p>
            <address>
              <a href="http://">{{ link.url }}</a>
            </address>
          </div>
        </div>
      </section>
    </article>

    <hr class="dashed" />

    <article>
      <div class="sub-section__head">
        <h3>Events</h3>
        <span>Events Icon</span>
      </div>

      <section class="card-group flex-row flex-wrap">
        <div
          class="events-card flex-row"
          v-for="event in events"
          :key="event.title"
        >
          <div
            class="events-card__image"
            :style="{ backgroundImage: 'address' }"
          ></div>
          <div class="events-card__description">
            <time datetime="">{{ event.date }}</time>
            <h5>{{ event.title }}</h5>
            <p>{{ event.tag }}</p>
          </div>
        </div>
      </section>
    </article>

    <hr class="dashed" />

    <article class="qr-code">
      <div class="sub-section__head">
        <h3>QR Code</h3>
        <span>QR Code Icon</span>
      </div>

      <p>
        This point can be activated by scanning QR code or entering numeric
        code. Print it or share.
      </p>

      <section class="flex-row">
        <div class="image"></div>
        <!-- <img src="" alt=""> -->
      </section>
    </article>
  </div>
</template>

<script>
import '@/assets/styles/preferredDestination.css';

export default {
  data() {
    return {
      scrollable: false,

      audio: [
        {
          name: 'Some recording',
          duration: '13:24',
          address: '15-19 Place Saint-Pierre, Paris',
          date: '17 Dec, 13:45',
        },
        {
          name: 'Rec 4',
          duration: '01:12:47',
          address: '7 Rue Livingstone, Paris',
          date: '15 Dec, 22:06',
        },
      ],

      tips: [
        {
          value: 'Bring a lot of water',
        },
        {
          value: 'Very crowded on weekends and holidays',
        },
        {
          value: 'Look for ancient carving on the main door',
        },
      ],

      links: [
        {
          title: 'MoMA',
          description:
            'MoMA is a place that fuels creativity, ignites minds, and provides inspiration.',
          url: 'moma.org',
        },
      ],

      events: [
        {
          date: 'FRI / NOVEMBER 17 10:45–11:45 A.M.',
          title: 'La mer ton avenir! Forum des metiers de la mer',
          tag: 'Free with Museum admission',
        },
        {
          date: 'FRI / NOVEMBER 17 10:45–11:45 A.M.',
          title: 'Masterpieces of the Middle Ages',
          tag: 'Free with Museum admission',
        },
      ],
    };
  },

  async created() {
    this.showItem = true;
    window.addEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.showItem = top < 325;
      this.$store.commit('SET_AVATAR_STATUS', !this.showItem);
    },

    enableScroll() {
      this.scrollable = true;
    },
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
h1 {
  color: var(--black);
  font-size: var(--font-xxl);
  font-weight: 500;
}

h1 span {
  color: var(--gray);
}

.sub-section__head {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding-right: 10px;
}

.heading time {
  color: var(--black);
}

.heading .more {
  margin-right: 10px;
}

figure {
  position: relative;
  height: 300px;
}

figure,
.links-card,
.events-card {
  border-radius: 10px;
  border: 1px solid var(--gray-hr);
  overflow: hidden;
}

figure img {
  width: 100%;
}

figcaption {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: var(--white);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

h3,
h5 {
  color: var(--black);
  font-size: var(--font-md);
  font-weight: 700;
}

h5 {
  font-weight: 400;
}

.heading {
  grid-template-columns: 10fr 3fr 1fr;
  margin: 10px 0;
}

.heading time,
.heading span {
  text-align: right;
}

.details {
  display: flex;
  margin-bottom: 10px;
  font-size: var(--font-sm);
}

.dot {
  margin: 0 5px;
}

.img-group {
  position: relative;
  height: 250px;
  border-radius: 10px;
}

.img-group__wrapper {
  height: 250px;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 10px;
}

.img-group__wrapper::-webkit-scrollbar {
  display: none;
}

.img-group__wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.img-group button {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: var(--white);
  transform: translateY(-50%);
}

button.left {
  left: -25px;
  box-shadow: -2px 0 10px 0.5px var(--gray);
}

button.right {
  right: -25px;
  box-shadow: 2px 0 10px 0.5px var(--gray);
}

.img-group button:hover,
.img-group button:focus {
  box-shadow: 0 2px 10px 0.5px var(--blue);
}

.img-group__col,
.img-group__row {
  flex-shrink: 0;
  height: 100%;
}

.img-group__col {
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px 5px;
  padding-left: 0;
}

.img-group__row {
  width: fit-content;
  flex-wrap: wrap;
  padding: 5px 0;
}

[class*='img-group__'] div {
  flex-shrink: 0;
  border-radius: 10px;
  border: 0 !important;
}

.img-group__col div {
  width: calc(300px - 10px);
  height: 100%;
}

.img-group__row div {
  width: 125px;
  height: calc(50% - 10px);
  margin: 5px;
}

ul {
  color: var(--black);
  line-height: 1.5;
  list-style-position: inside;
}

.links-card,
.events-card {
  margin: 5px;
}

.links-card {
  width: 250px;
  height: 200px;
}

.links-card__image,
.links-card__description {
  height: 50%;
}

.links-card__image {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

[class*='img-group__'] .img-col,
[class*='img-group__'] .img-row,
.links-card__image,
.events-card__image,
.qr-code .image {
  background-color: var(--gray-hr);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.links-card__description {
  padding: 10px;
  font-size: var(--font-sm);
}

.links-card__description h5,
.events-card__description time,
.links-card__description p,
.events-card__description p {
  font-size: var(--font-sm);
}

.links-card__description h5,
.events-card__description h5,
.links-card__description a {
  color: var(--black);
}

.links-card__description h5,
.events-card__description h5 {
  font-weight: 700;
}

.links-card__description a {
  text-decoration: none;
}

.events-card {
  width: 350px;
  height: 100px;
}

.events-card__image {
  width: 20%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.events-card__description {
  width: 80%;
  padding: 10px;
}

.qr-code {
  color: var(--black);
}

.qr-code .image {
  width: 200px;
  height: 200px;
  margin: 50px auto 0;
}
</style>
