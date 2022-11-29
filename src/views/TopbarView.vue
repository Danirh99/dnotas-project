<template>

    <nav class="navbar navbar-expand-lg topbar py-4 navbar-dark bgd-dark ">
        <div class="container-fluid justify-content-between">
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar"
                        aria-label="Buscar">
                    <button class="btn btn-primary btn-blue-light" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <a href="/create-note"><button class="btn btn-primary btn-blue-light"><b>New Note</b></button></a>
        </div>
    </nav>

</template>