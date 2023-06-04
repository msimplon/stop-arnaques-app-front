<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      baseUrl: import.meta.env.VITE_IMG_BASE_URL,
      articles: [],
    };
  },
  methods: {
    async initArticles() {
      const resp = await this.$http.get("/articles/list-articles");
      this.articles = resp.body;
    },
  },

  beforeMount() {
    this.initArticles();
  },
};
</script>

<template>
  <div id="myCarousel" class="carousel slide mt-3" data-bs-ride="carousel">
    <a href="#" class="to-top">
      <i class="fas fa-chevron-up"></i>
    </a>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
        class="btn btn-primary btn-sm"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/new.png" class="d-block w-100 rounded" alt="..." />
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>
              test1
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/project.png" class="d-block w-100 rounded" alt="..." />
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              test 2
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/e-commerce.png" class="d-block w-100 rounded" alt="..." />
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              test 3
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container marketing mt-4">
    <hr class="featurette-divider" />
    <div class="row-featurette" v-for="article in articles">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          {{ article.title }}
          <h3>{{ article.subTitle }}</h3>
        </h2>
        <p class="lead">
          {{ article.description }}
          <a href="#" class="stretched-link">Continue reading</a>
        </p>
        <p>
          {{ article.actor }}
        </p>
        <p>
          {{ article.date }}
        </p>
        <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="ms-auto" title="Details...">
          <i class="bi bi-three-dots fs-5 text-primary"></i>
        </RouterLink>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <!-- <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">
          Oh yeah, it’s that good.
          <span class="text-body-secondary">See for yourself.</span>
        </h2>
        <p class="lead">
          echouer -->
    <!-- {{ article.description }} -->
    <!-- <a href="#" class="stretched-link">Continue reading</a>
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
        </svg>
      </div>
    </div> -->

    <!-- <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          And lastly, this one.
          <span class="text-body-secondary">Checkmate.</span>
        </h2>
        <p class="lead">
          echouer 2
          <a href="#" class="stretched-link">Continue reading</a>
        </p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div> -->

    <!-- <hr class="featurette-divider" />
    </div>
    <div class="row mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">
              {{ article.description }}
            </p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">Post title</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">
              {{ article.description }}
            </p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 mb-3 bg-light rounded-3">
      <div class="container-fluid py-1">
        <h4>Custom jumbotron</h4>
        <p class="col-md-12">
          {{ article.description }}
        </p>
        <button class="btn btn-outline-secondary" type="button">
          Example button
        </button>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h4>Change the background</h4>
          <p>
            {{ article.description }}
          </p>
          <button class="btn btn-outline-light" type="button">
            Example button
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h4>Add borders</h4>
          <p>
            {{ article.description }}
          </p>
          <button class="btn btn-outline-secondary" type="button">
            Example button
          </button>
        </div>
      </div> -->
    <!-- </div>
</div> -->
  </div>
</template>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.row-featurette {
  justify-content: space-around
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

/* .fs-4 {
  font-size: 20px !important;
} */

.fw-bold {
  font-size: 20px !important;
}

.to-top {
  background: white;
  position: fixed;
  bottom: 16px;
  right: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #1f1f1f;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
}

.to-top.active {
  bottom: 32px;
  pointer-events: auto;
  opacity: 1;
}

/* p,
.text {
  font-family: "Raleway", sans-serif !important;
} */
</style>
