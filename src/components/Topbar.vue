<script setup lang="ts">
import ChatWithFriend from './ChatWithFriend.vue';
import ChatWithMiguro from './ChatWithMiguro.vue';
import Sidebar from './Responsive/Sidebar.vue';
</script>

<template>
    <div class="container col-sm-12 col-lg-11 p-2 rounded-4 shadow d-flex justify-content-between align-items-center position-sticky top-0 bg-light z-3 p-4"
        style="height: 4em;">
        <div class="col-sm-12 col-lg-6 d-flex ">
           <!--  <img class="rounded-circle border border-danger border-2" src="/avatar.jpg" alt="" style="width: 3em;"> -->
            <h4>Miguro.com</h4>
            <div class="row mx-3">

                <!-- <span class="text-left">miguro@gmail.com</span>
                <span class="col-12 rounded-2 bg-primary"></span>
                <div></div> -->
            </div>
        </div>
        <div class="col-6 d-flex justify-content-end d-none">
            <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#chatwithmiguroCanvas"
                aria-controls="offcanvasResponsive">Chat with Miguro</button>
            <button class="btn btn-outline-success mx-2" data-bs-toggle="offcanvas"
                data-bs-target="#chatwithfriendCanvas" aria-controls="offcanvasResponsive">Chat with Friend</button>
        </div>
        <div class="col-sm-4 d-flex justify-content-center align-items-center d-sm-flex d-lg-none ">
            <button class="btn btn-outline-success form-control" data-bs-toggle="offcanvas"
                data-bs-target="#menusidebar" aria-controls="offcanvasResponsive">Menu</button>
        </div>
    </div>
    <ChatWithMiguro />
    <ChatWithFriend />
    <Sidebar />
</template>