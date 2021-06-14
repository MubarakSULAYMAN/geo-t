<template>
  <div>
    <section>
      <div class="page-image">
        <button class="page-image__label" @click="setCover">
          <img src="" alt="" />
          <span>Set cover</span>
        </button>
      </div>

      <h1>{{ title }}</h1>

      <hr class="dashed" />

      <p>{{ detail }}</p>
    </section>

    <hr class="dashed" />

    <section>
      <h3>Tags</h3>
      <div class="tags flex-row">
        <button class="plus">
          <span>+</span>
        </button>

        <div class="button-group flex-row">
          <button v-for="(tag, index) in tags" :key="tag.index">
            {{ tags[index] }}
            <span>X</span>
          </button>
        </div>
      </div>
    </section>

    <hr class="dashed" />

    <section>
      <h3>Categories</h3>
      <div class="categories flex-row">
        <div
          :class="[isSelected(index) ? 'selected-card' : '', 'category-card']"
          v-for="(category, index) in categories"
          :key="category.name"
          @click="makeSelection(index)"
        >
          <div class="category-card__icon"></div>
          <div class="category-card__name">{{ category.name }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/styles/preferredDestination.css';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: 'A walking trail of Montmartre, Paris',
      detail: `Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica,
        the leafy hilltop village of Montmartre was once the play area of Paris’s
        most famous artists, bohemians and creatures of the night. These days,
        the winding cobbled streets host chic cafes, retro boutiques and fine French
        dining but, if you look closely enough, those in search of historical secrets can still
        find traces of the old La Bohème hidden between the tourist traps…`,
      tags: ['Montmartre', 'Paris'],

      categories: [
        {
          name: 'Architecture',
          image: '',
        },
        {
          name: 'City tours',
          image: '',
        },
        {
          name: 'Cycling',
          image: '',
        },
        {
          name: 'Driving',
          image: '',
        },
        {
          name: 'Haunted',
          image: '',
        },
        {
          name: 'Food',
          image: '',
        },
        {
          name: 'Heritage',
          image: '',
        },
        {
          name: 'Nature',
          image: '',
        },
        {
          name: 'Shopping',
          image: '',
        },
        {
          name: 'Walking',
          image: '',
        },
        {
          name: 'Accessible',
          image: '',
        },
        {
          name: 'For kids',
          image: '',
        },
        {
          name: 'Rivers',
          image: '',
        },
        {
          name: 'Hotels',
          image: '',
        },
        {
          name: 'Trains',
          image: '',
        },
        {
          name: 'Described',
          image: '',
        },
        {
          name: 'Easter hunt',
          image: '',
        },
        {
          name: 'Art & Culture',
          image: '',
        },
        {
          name: 'Entertainment',
          image: '',
        },
        {
          name: 'Life journey',
          image: '',
        },
        {
          name: 'Religious',
          image: '',
        },
      ],

      selectedIndexes: [],
    };
  },

  methods: {
    makeSelection(index) {
      this.selectedIndexes.push(index);
    },

    isSelected(val) {
      return this.selectedIndexes.includes(val);
    },

    setCover() {
      this.setErrorMessage('Feature presently unavailable');
    },

    ...mapActions(['setErrorMessage']),
  },
};
</script>

<style scoped>
.page-image {
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  background-image: linear-gradient(var(--gray-hr), var(--gray)),
    url(../assets/images/background/pic.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.page-image {
  background-color: var(--gray-hr);
}

.page-image,
.page-image__label {
  border-radius: 10px;
}

.page-image__label {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: fit-content;
  width: max-content;
  padding: 10px;
  color: var(--white) !important;
  font-weight: 600;
  border: 2px solid transparent;
  transition: all 0.5s ease-in-out;
}

.page-image__label:hover,
.page-image__label:focus {
  color: var(--blue) !important;
  border-color: var(--blue);
  cursor: default;
}

h1 {
  color: var(--black);
  font-size: var(--font-xxl);
  font-weight: 700;
}

hr {
  margin: 20px 0;
}

h3 {
  margin-bottom: 20px;
}

.tags {
  flex-wrap: wrap;
}

button {
  display: flex;
  align-items: center;
  border: 1px solid var(--blue);
  border-radius: 20px;
  color: var(--gray);
  background-color: var(--blue-light);
}

button:not(:first-child) {
  margin-left: 10px;
}

button:not(.plus) {
  color: var(--gray-dark);
}

button:not(.plus) {
  padding: 5px 10px;
}

button.plus,
button span {
  border-radius: 50%;
}

button.plus {
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding: 14px;
  font-size: var(--font-xxl);
}

.button-group span {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  color: var(--white);
  font-size: var(--font-xs);
  font-weight: 500;
  background-color: var(--gray);
}

.categories {
  flex-wrap: wrap;
}

.category-card {
  width: 100px;
  height: 120px;
  margin: 10px;
  border: 1px solid var(--gray-hr);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.25s ease;
}

.category-card__icon {
  height: 80%;
  background-color: var(--gray-hr);
}

.category-card__name {
  color: var(--black);
  font-size: var(--font-sm);
  text-align: center;
}

.selected-card,
.category-card:hover {
  background-color: var(--blue);
  border-color: transparent;
  box-shadow: 0 5px 7.5px 0.5px var(--blue);
}

.category-card:hover .category-card__name {
  color: var(--white);
  cursor: default;
}

.selected-card .category-card__name {
  color: var(--white);
}

.category-card:hover .category-card__icon,
.selected-card .category-card__icon {
  background-color: transparent;
  filter: invert(64%) sepia(22%) saturate(1953%) hue-rotate(164deg)
    brightness(91%) contrast(93%);
}
</style>
