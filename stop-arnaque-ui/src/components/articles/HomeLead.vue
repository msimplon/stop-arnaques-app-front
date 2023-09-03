<template>
    <section class="container-xxl bg-light mb-6 ">
        <div class="row align-items-center">
            <div class="col-12 col-lg-7">
                <h1 class="display-4 text-center mb-4 demotext">ARRÊTEZ LES ARNAQUES<br>DANS LEUR ÉLAN <strong>AVEC
                        STOP
                        ARNAQUE</strong>
                </h1>
                <RouterLink to="signUp" class="btn search-button col-3 bg-primary text-light fw-bolder fs-6 mb-4">
                    S'inscrire
                </RouterLink>
            </div>
            <div class="d-flex col-12 col-lg-5 justify-content-center">
                <img src="/images/project.png" class="img-fluid rounded-3" alt="Créativité">
            </div>
        </div>
    </section>
</template>


<style>
.align-items-center {

    background-size: cover;

}

@media (min-width: 1400px) {
    .container-xxl {
        max-width: 1900px;

    }
}

.text-light {

    text-align: center !important;
}

.search-button {

    margin-right: 10px;
    margin-left: 250px;
    /* display: flex;
    display: center; */
    background: rgb(0, 119, 255);
    border: 20px;
    /* padding: 10px 10px; */
    color: #fff;
    transition: 0.4s;
    line-height: 30.5px;
}

.demotext {
    color: #444444;

    text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
    color: #444444;
}

.img-fluid {
    max-width: 90%;
    max-height: 70%;
}
</style>