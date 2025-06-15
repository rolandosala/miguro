<template>
    <div class="modal fade" v-for="data in content" :id="data.id" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ data.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center align-items-center flex-column" >
                        <h1 class="" style="font-size: 4em;">{{ kanji }}</h1>
                        <div class="col-12 d-flex justify-content-center p-4 align-items-center mt-3 flex-wrap">
                                <button class="btn btn-outline-primary col-5 m-1" @click="next">Next</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!--  <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open
                        second modal</button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Array,
        },
        next: {
            type: Function,
        },
        kanji: {
            type: String
        }
    },
}
</script>