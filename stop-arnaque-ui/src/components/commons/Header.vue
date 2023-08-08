<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="bg-light sticky-top">
    <nav class="container-xl navbar-light navbar navbar-expand-md">
      <div class="container-fluid">
        <RouterLink :to="{ name: 'articles-home' }" class="navbar-brand">Stop Arnaque</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Admin
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink :to="{ name: 'articles-edit' }" class="dropdown-item">
                    Editer un article
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'articles-create' }" class="dropdown-item">
                    Nouvel article
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Actualités
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink :to="{ name: 'dgccrf' }" class="dropdown-item">
                    Site de la DGCCRF
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'conso' }" class="dropdown-item">
                    Dernières actu
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'contact' }" class="nav-link">
                Contact
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'inscription-connexion' }" class="nav-link">
                Connexion/inscription
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="locale-changer">
        <select v-model="$i18n.locale" class="rounded">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div> -->
    </nav>
  </header>
</template>

