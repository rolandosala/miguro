<template>
    <div class=" offcanvas offcanvas-end" tabindex="-1" id="chatwithfriendCanvas"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Chat With Friends</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="btn-group form-control" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-primary" for="btnradio1">
                    <i class="bi bi-envelope"></i>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-primary" for="btnradio2"><i class="bi bi-people"></i></label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-primary" for="btnradio3">
                    <i class="bi bi-exclamation-circle"></i>
                </label>
            </div>
            <div class="mt-4">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>User</td>
                        </tr>
                        <tr>
                            <td>User</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>