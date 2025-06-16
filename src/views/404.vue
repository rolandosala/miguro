<template>
    <div class="container col-lg-12 d-flex justify-content-center align-items-center p-4 flex-column">
        <h1>Page Not Found</h1>
        <RouterLink to="/">
            <button class="btn btn-outline-success mt-3">Return Home</button>
        </RouterLink>

    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>