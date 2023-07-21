<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              active-class="active-link"
              aria-current="page"
              to="/"
              >Vista Tabellare</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              active-class="active-link"
              aria-current="page"
              to="/vue-dataset"
              >Componente Vue Dataset</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              active-class="active-link"
              aria-current="page"
              to="/cards"
              >Vista Cards griglia</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style>
/* Define the style for the active link */
.active-link {
  background-color: #00aaff; /* Replace with your desired background color */
  color: #fff; /* Optionally, you can change the text color to make it more prominent */
}
</style>
