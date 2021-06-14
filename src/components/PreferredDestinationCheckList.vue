<template>
  <div class="card">
    <h3>Check List</h3>
    <ul>
      <span class="li-wrapper flex-row" v-for="task in tasks" :key="task.name">
        <li :style="[task.completed ? { color: 'var(--black)' } : '']">
          {{ task.name }}
        </li>
        <span>
          <img
            src="../assets/images/icons/Badge_Success.png"
            alt=""
            v-if="task.completed"
          />
        </span>
      </span>
    </ul>

    <button
      v-for="btn in buttons"
      :key="btn.name"
      @click="processChanges(btn.name)"
    >
      {{ btn.name }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      tasks: [
        {
          name: 'Name',
          completed: true,
        },
        {
          name: 'Description',
          completed: true,
        },
        {
          name: 'Cover photo',
          completed: true,
        },
        {
          name: 'At least 1 point',
          completed: true,
        },
        {
          name: 'Narration',
          completed: false,
        },
        {
          name: 'Category',
          completed: false,
        },
      ],

      buttons: [
        {
          name: 'Preview',
        },

        {
          name: 'Publish',
        },
      ],
    };
  },

  methods: {
    processChanges(name) {
      switch (name) {
        case 'Preview':
          this.setErrorMessage(`"${name}" presently unavailable`);
          break;
        case 'Publish':
          this.setErrorMessage(`"${name}" presently unavailable`);
          break;
        default:
      }
    },

    ...mapActions(['setErrorMessage']),
  },
};
</script>

<style scoped>
.card {
  width: 180px;
  margin: 80px auto;
  padding: 20px;
  line-height: 2;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 0.5px var(--gray-hr);
}

h3 {
  margin-bottom: 10px;
  color: var(--black);
  font-size: var(--font-lg);
  font-weight: 700;
}

ul {
  margin: 0;
  padding: 0;
  font-weight: 500;
  list-style-type: none;
}

.li-wrapper {
  justify-content: space-between;
}

.li-wrapper span img {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  color: var(--blue);
  border: 1px solid var(--blue);
  background-color: var(--blue-light);
  transition: all 0.3s ease-in-out;
}

button:hover,
button:focus {
  color: var(--white);
  background-color: var(--blue);
}
</style>
