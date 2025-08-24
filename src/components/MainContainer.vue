<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
import Footer from './Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container-fluid p-3">
        <div class="row">
            <div class="col-sm-12 col-lg-2">
                <Sidebar />
            </div> 
            <div class="col-sm-12  col-lg-10">
                <div class="row">
                    <Topbar />
                    <div class="container-fluid col-sm-12 col-lg-11 rounded-4 shadow d-flex mt-4 flex-column p-4">
                        <RouterView />
                        <Footer />
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>