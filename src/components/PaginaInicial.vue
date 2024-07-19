<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Porsche</title>
      <link rel="stylesheet" href="css/index.css" />
      <link
        rel="shortcut icon"
        href="../assets/img/Porsche-Logo.png"
        type="image/x-icon"
      />
    </head>

    <body>
      <main>
        <h1>Porsche 911</h1>
        <h2>The perfect car doesn't exis...</h2>
        <ImagensInciais />
        <h2>Cars for sale</h2>
        <TabelaVendas />
      </main>
    </body>
  </html>
</template>

<script>
import ImagensInciais from "./ImagensInciais.vue";
import TabelaVendas from "./TabelaVendas.vue";

export default {
  name: "PaginaPrincipal",
  components: {
    ImagensInciais,
    TabelaVendas,
  },
};
</script>

<style scoped>
/*--------------------------------------------------Fontes*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

/*--------------------------------------------------Configuração Padrão*/
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

/*--------------------------------------------------Scroll bar*/
body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-track {
  background: rgb(226, 226, 226);
}

body::-webkit-scrollbar-thumb {
  background-color: #333333;
  border-radius: 100px;
  border: 10px solid #333333;
}

h1 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 5vw;
  line-height: 4vh;
}

h2 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2.5vw;
  line-height: 0.5vh;
}

@media (min-width: 1920px) {
  #container {
    width: 1200px;
  }

  h1 {
    font-size: 7vw;
    line-height: 4vh;
  }

  h2 {
    font-size: 20px;
    line-height: 0.5vh;
  }
}

@media (max-width: 800px) {
  #container {
    width: 92%;
  }
}
</style>
