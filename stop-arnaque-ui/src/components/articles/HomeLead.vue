<template>
    <div id="header" class="container-xxl ">

        <h1 class="text-center demotext">ARRÊTEZ LES ARNAQUES<br>DANS LEUR ÉLAN <strong>AVEC
                STOP
                ARNAQUE</strong>
        </h1>

        <!-- <p class="text-center slogan m-3 "> Stop arnaque est une application qui fait
            référence à la diversité du territoire guyanais. Un pays pluriculturel où se mélange différentes communautés
            (des
            Amérindiens, des Hmongs, des Brésiliens, des Chinois, des Guyanais, des Businengés…). <br>
            Ce pays méconnu et ayant parfois une mauvaise réputation se révèle comme une terre accueillante offrant une
            expérience exceptionnelle et mémorable. <br>
            <br>Que vous soyez seul, en famille ou entre amis, <span class="medium">Tout Koulèr Mélanjé</span> a pour
            objectif
            de vous faire découvrir ou redécouvrir la richesse de la Guyane Française à travers différentes activités. Avec
            un
            carnet à votre disposition, vous pourrez ajouter dans votre liste de favoris les activités souhaitées, prendre
            contact avec les organisateurs, obtenir les informations nécessaires et échanger vos expériences inoubliables
            entre
            abonnés.
        </p> -->

        <div>
            <p class="text-center activity-list">
                <RouterLink to="signUp" class="btn search-button col-2 bg-primary text-light ">
                    S'inscrire
                </RouterLink>
            </p>
        </div>
    </div>
</template>


<style>
#header {
    background-image: url("/images/project.png");
    height: 250px;

}

.align-items-center {

    background-size: cover;

}

@media (min-width: 1400px) {
    .container-xxl {
        max-width: 1900px;

    }
}

/* p,
.text {
    font-family: 'Raleway', sans-serif !important;

} */

.slogan {
    color: #ffffff
}

/* .text-light {

    text-align: center !important;
} */

/* .search-button {
    background: rgb(0, 119, 255);
    border: 20px;
    color: #fff;
    transition: 0.4s;
    line-height: 30.5px;
}


.search-button:hover {
    box-shadow: 10px 5px 5px #887766;
} */

.demotext {
    font-size: xx-large;
    color: #ffffff;

    text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
    color: #444444;
}
</style>