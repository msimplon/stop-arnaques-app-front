<!-- <script>
export default {
    setup() {
        const key = import.meta.env.VITE_MAPS_EMBED_API_KEY;
        return {
            mapsUrl: `https://www.google.com/maps/d/embed?mid=1Y6HKzkNIVyigGu9vJQxB32zLLUBn5xo&ehbc=2E312F`
        }
    }
};
</script>


<template>
    <h1 class="text-center m-5">Carte de géocalisation de la Guyane Française</h1>
    <div class="col-6">
        <div class="ratio ratio-16x9 border rounded-2 shadow-sm">
            <iframe loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen :src="mapsUrl" title="Carte de géolocalisation">
            </iframe>
        </div>
    </div>
</template> -->



<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 4.9370748, lng: -52.3346534 };

        return { center };
    },
});
</script>

<template>
    <div class="col-12">
        <div class="ratio ratio-16x9 border rounded-2 shadow-sm">
            <!-- <iframe src="https://www.google.com/maps/d/embed?mid=1Y6HKzkNIVyigGu9vJQxB32zLLUBn5xo&ehbc=2E312F" width="640" height="480"></iframe> -->


            <iframe api-key="`https://www.google.com/maps/d/embed?mid=1Y6HKzkNIVyigGu9vJQxB32zLLUBn5xo&ehbc=2E312F`"
                style="width: 100%; height: 500px" :center="center" :zoom="15">
                <Marker :options="{ position: center }" />
            </iframe>
        </div>
    </div>
</template>



<!-- <template>
    <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template> -->
<!-- <script>

export default {
    name: 'Brouillon',
    data() {
        return {
            center: { lat: 51.093048, lng: 6.842120 },
            markers: [
                {
                    position: {
                        lat: 51.093048, lng: 6.842120
                    },
                }
                , 
            ]
        }
    }
}
</script> -->