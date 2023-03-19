<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            stickers: []
        }
    },
    methods: {
        async initStickers() {
            const resp = await this.$http.get('/stickers');
            this.stickers = resp.body;
        }
    },
    beforeMount() {
        this.initStickers();
    }
}



// let cadre = document.getElementById("carouselExampleControls");

// cadre.style.width = "30vw";

// let lst = document.querySelectorAll("#versionjs > div");
// listNode = Array.from(lst);

// let intervalId = setInterval(carousel, 2000);

// function carousel() {
//     element = listNode.shift();
//     element.style.opacity = '0';
//     element.style.transitionDuration = '1s'
//     listNode.push(element);
//     listNode[0].style.opacity = '1'
// }

// versionjs.addEventListener("mouseover", pause);

// function pause() {
//     clearInterval(intervalId);
// }

// versionjs.addEventListener("mouseout", restart);

// function restart() {
//     intervalId = setInterval(carousel, 2000);
// }

</script>
<template>
    <h1>Our stickers</h1>

        <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="sticker in stickers">
            <div class="p-3"><img :src="baseUrl + sticker.imageUrl" class="card-img-top"></div>
            </div> 
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->

    <div class="row row-cols-1 row-cols-md-4 g-3 mb-3">
        <div class="col" v-for="sticker in stickers">
            <div class="card shadow-sm h-100">
                <div class="p-3"><img :src="baseUrl + sticker.imageUrl" class="card-img-top" :alt="sticker.name"></div>
                <div class="card-body">
                    <h5 class="card-title">{{ sticker.name }}</h5>
                    <div class="d-flex align-items-center">
                        <span class="m-0 fs-2">€&nbsp;{{ sticker.price }}</span>
                        <RouterLink :to="{ name: 'sticker-detail', params: { id: sticker.id } }" class="ms-auto"
                            title="Details...">
                            <i class="bi bi-three-dots fs-5 text-primary"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} */

main {
    display:flex ;  
    flex-direction: column;
    align-items: center;
}

/* carousel-inner {
    width: 100%;
} */

/* #versionjs{
    width: 30vw;
    height: 20vw;
    position: relative;
}

carousel-inner {
    width: 100%;
}

#versionjs div {
    position: absolute;
} */ 

</style>