<!-- 
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
            <GoogleMap
                api-key="`https://www.google.com/maps/embed/v1/view?key=${key}&center= 4.9370748,-52.3346534&zoom=15&language=fr`"
                style="width: 100%; height: 500px" :center="center" :zoom="15">
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </div>
    </div>
</template>
 -->


<template>
    <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template>
<script>

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
                , // Along list of clusters
            ]
        }
    }
}
</script>