<template>
  <div
    class="filters-wrapper"
  >
    <div class="row align-right">
      <div class="close-modal" @click="closeModal">
        ✖
      </div>
    </div>
    <div class="row">
      <div>Modalidade</div>
      <div class="wrapper">
        <div>
          <input type="checkbox" id="presencial" value="1" v-model="this.filtros.presencial" @change="filtrar"/>
          <label for="presencial">Presencial</label>
        </div>
        <div>
          <input type="checkbox" id="ead" value="2" v-model="this.filtros.ead" @change="filtrar"/>
          <label for="ead">EAD</label>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div>Tipo</div>
      <div class="wrapper">
        <div>
          <input type="checkbox" id="graduacao" value="1" v-model="this.filtros.graduacao" @change="filtrar"/>
          <label for="graduacao">Graduação</label>
        </div>
        <div>
          <input type="checkbox" id="pos" value="2" v-model="this.filtros.pos" @change="filtrar"/>
          <label for="pos">Pós-graduação</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltersGroup",
  data() {
    return {
      filtros: {
        presencial: true,
        ead: true,
        graduacao: true,
        pos: true,
      }
    };
  },
  methods: {
    closeModal() {
      this.$emit('abrirModalDeFiltros', false);
    },
    filtrar() {
      this.$emit('filtrar', this.filtros)
    }
  }
};
</script>

<style lang="scss" scoped>
.filters-wrapper {
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #383838;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: fixed;
  z-index: 100000;
  width: 100%;
  height: 50%;

  label {
    text-align: left;
    font-size: 16px;
  }

  select {
    font-size: 16px;
    padding: 0.25rem;
  }

  hr {
    width: 80%;
    margin-top: 1rem;
  }

  .close-modal {
    cursor: pointer;
  }

  .row {
    margin-top: 1rem;

    > div {
      font-size: 20px;
      font-weight: 600;
    }

    > .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    &.align-right {
      text-align: right;
      margin-right: 1rem;
      user-select: none;
    }
  }
}
</style>