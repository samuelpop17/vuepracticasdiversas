<template>
  <div>
    <h1>Tabla de Multiplicar</h1>
    <label>Introduce un número</label>
    <input type="number" v-model="numero">
    <button @click="generarTabla()">
      Generar Tabla de multiplicar
    </button>
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result,index) in multiplicador" :key="index">
          <td>{{ numero }} x {{index+1}}</td>
          <td>{{ result }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <input type="number" v-model="num">
    
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ num }} x {{i}}</td>
          <td>{{ num*i }}</td>
        </tr>
      </tbody>
    </table>
    <hr>

    <label>Introduce un número</label>
    <input type="number" v-model="numero">
    <button @click="generarTabla()">
      Generar Tabla de multiplicar
    </button>
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="num in 10" :key="num">
          <td>{{ numero }} x {{index+1}}</td>
          <td>{{ result }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      multiplicador: [],
      num:0
      
    };
  },
  methods: {
    generarTabla() {
      this.multiplicador = [];
      for (let index = 1; index <= 10; index++) {
        this.multiplicador.push(this.numero * index);
        
      }
    }
  },
  
};
</script>
