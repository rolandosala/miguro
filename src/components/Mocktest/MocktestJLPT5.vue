<template>
    <h1>Mock Test JLPT 5</h1>
    <button class="btn btn-outline-success col-2" data-bs-dismiss="modal" data-bs-target="#previewResult"
        data-bs-toggle="modal">Start Mock Test</button>
    <div class="modal fade" id="previewResult" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">00:00</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <p><b>Direction: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error
                                numquam soluta? Dolore explicabo sed temporibus quia sequi nisi, dicta quos vel
                                voluptate asperiores, corrupti modi eaque veritatis amet iure.</p>
                        </div>
                        <div class="col-12">
                            <div class="question-container">
                                <p>1. Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit.</p>
                            </div>
                            <div class="choices-container p-3 d-flex justify-content-evenly flex-column">
                                <button class="btn btn-outline-primary mt-3">Choice 1</button>
                                <button class="btn btn-outline-primary mt-3">Choice 1</button>
                                <button class="btn btn-outline-primary mt-3">Choice 1</button>
                                <button class="btn btn-outline-primary mt-3">Choice 1</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer  d-flex justify-content-center align-items-center">
                    <!--  <button class="btn btn-danger col-4" data-bs-dismiss="modal" @click="">Close</button> -->
                </div>
            </div>
        </div>
    </div>
</template>