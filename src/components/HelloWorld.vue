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
        <div id="images">
          <div id="container">
            <div id="box01">
              <div id="img1">
                <img class="porscheImage" src="../assets/img/porsche01.jpg" />
              </div>
            </div>
            <div id="box02">
              <div id="img2">
                <img class="porscheImage" src="../assets/img/porsche02.jpg" />
              </div>
              <div id="img3">
                <img class="porscheImage" src="../assets/img/porsche03.jpg" />
              </div>
            </div>
            <div id="box03">
              <div id="vid1">
                <iframe
                  id="porscheVideo"
                  src="https://www.youtube.com/embed/-GiOZ7jfZjc"
                  title="The Perfect car doesn&#39;t exi..."
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <h2>Cars for sale</h2>
        <div id="table">
          <table id="product-table">
            <thead>
              <tr>
                <th class="product-header" data-th="ITEM">Item</th>
                <th class="product-header" data-th="NOME PODUTO">Model Name</th>
                <th class="product-header" data-th="IMAGEM PRODUTO">
                  Model Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="product-cell">1</td>
                <td class="product-cell">Porsche 911 Carrera</td>
                <td class="product-cell">
                  <img
                    id="carSale"
                    src="../assets/img/porsche-thumbwhite.webp"
                  />
                </td>
              </tr>
              <tr>
                <td class="product-cell">2</td>
                <td class="product-cell">Porsche 911 Turbo</td>
                <td class="product-cell">
                  <img
                    id="carSale"
                    src="../assets/img/porsche-thumbwhite (1).webp"
                  />
                </td>
              </tr>
              <tr>
                <td class="product-cell">3</td>
                <td class="product-cell">Porsche 911 RS</td>
                <td class="product-cell">
                  <img
                    id="carSale"
                    src="../assets/img/porsche-thumbwhite (2).webp"
                  />
                </td>
              </tr>
              <tr>
                <td class="product-cell">4</td>
                <td class="product-cell">Porsche 911 S/T</td>
                <td class="product-cell">
                  <img
                    id="carSale"
                    src="../assets/img/porsche-thumbwhite (3).webp"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </body>
  </html>
</template>

<script>
export default {
  name: "HelloWorld",
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

.porscheImage {
  width: 100%;
}

#porscheVideo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
#vid1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
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

#images {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

#container {
  display: flex;
  flex-direction: column;
  width: 70%;
}

#box01 {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

#box02 {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

#box03 {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}

#img2,
#img3 {
  width: 50%;
}

#img2 {
  margin-right: 10px;
}

#img3 {
  margin-left: 10px;
}

#img1,
#img2,
#img3 {
  margin-bottom: -4px;
}

#table {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

#product-table {
  border-collapse: collapse;
  width: 70%;
}

.product-header,
.product-cell {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.product-header {
  position: relative;
  background-color: #f2f2f2;
}

.product-header::before {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 8px;
  text-align: left;
  font-weight: bold;
}

#product-table,
#product-table thead,
#product-table tbody,
#product-table th,
#product-table td,
#product-table tr {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

@media (max-width: 800px) {
  #product-table,
  #product-table thead,
  #product-table tbody,
  #product-table th,
  #product-table td,
  #product-table tr {
    text-align: center;
    display: block;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  #product-table {
    width: 100%;
  }

  h1 {
    font-size: 7vw;
    line-height: 4vh;
  }

  h2 {
    font-size: 20px;
    line-height: 0.5vh;
  }

  #carSale {
    width: 80%;
  }

  .product-header,
  .product-cell {
    padding: 8px;
  }

  #img2,
  #img3 {
    width: 100%;
  }

  #container {
    width: 92%;
  }

  #box01 {
    margin-bottom: 0;
  }

  #box02 {
    display: block;
    width: 100%;
    margin-top: 0;
  }

  #img2 {
    margin-top: 20px;
    margin-right: 0px;
  }

  #img3 {
    margin-top: 20px;
    margin-left: 0px;
  }
}

@media (min-width: 1920px) {
  #container {
    width: 1200px;
  }
}
</style>
