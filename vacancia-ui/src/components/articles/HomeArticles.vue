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
      const resp = await this.$http.get("/articles");
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
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/images/comedy_club.jpg"
          class="d-block w-100 rounded"
          alt="..."
        />
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="/images/comedy_club.jpg"
          class="d-block w-100 rounded"
          alt="..."
        />
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="/images/comedy_club.jpg"
          class="d-block w-100 rounded"
          alt="..."
        />
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container marketing mt-4 ms-5 px-5">
    <div class="row">
      <div class="col-lg-4">
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 class="fw-normal">Heading</h2>
        <p>
          Some representative placeholder content for the three columns of text
          below the carousel. This is the first column.
        </p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 class="fw-normal">Heading</h2>
        <p>
          Another exciting bit of representative placeholder content. This time,
          we've moved on to the second column.
        </p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 class="fw-normal">Heading</h2>
        <p>
          Another exciting bit of representative placeholder content. This time,
          we've moved on to the second column.
        </p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          First featurette heading.
          <span class="text-body-secondary">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
      </div>
      <div class="col-md-5">
        <svg
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">
          Oh yeah, it’s that good.
          <span class="text-body-secondary">See for yourself.</span>
        </h2>
        <p class="lead">
          Another featurette? Of course. More placeholder content here to give
          you an idea of how this layout would work with some actual real-world
          content in place.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          And lastly, this one.
          <span class="text-body-secondary">Checkmate.</span>
        </h2>
        <p class="lead">
          And yes, this is the last block of representative placeholder content.
          Again, not really intended to be actually read, simply here to give
          you a better view of what this would look like with some actual
          content. Your content.
        </p>
      </div>
      <div class="col-md-5">
        <svg
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg
            class="bd-placeholder-img"
            width="200"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg
            class="bd-placeholder-img"
            width="200"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>
        </div>
      </div>
    </div>
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
</style>
