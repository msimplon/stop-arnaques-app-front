<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="bg-dark sticky-top">
    <nav class="container-xl navbar-dark navbar navbar-expand-md">
      <div class="container-fluid">
        <RouterLink :to="{ name: 'home' }" class="navbar-brand"
          >Stop Arnaque</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Admin
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink
                    :to="{ name: 'articles-edit' }"
                    class="dropdown-item"
                  >
                    Editer un article
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    :to="{ name: 'articles-create' }"
                    class="dropdown-item"
                  >
                    Nouvel article
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'life-cycle' }" class="nav-link">
                Contact
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'articles-home' }" class="nav-link">
                Actualité
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
