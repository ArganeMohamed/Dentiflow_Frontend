<template>
    <div class="main body home">
        <div class="content">
            <h1>DentiFlow</h1>
            <b>Cabinet Dentaire</b>
            <br><br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos pariatur consequatur libero quam eum?</p>
        </div>
        <img src="../assets/unnamed.png" class="main-img">
    </div>
</template>

<style>
    .main {
        width: 100%;
        min-height: 645px;
        background-image: linear-gradient(to bottom, rgb(22, 22, 238), rgba(20, 13, 53, 0.327)), url("../assets/Dentiflow.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .body { 
        width: 100%;
        min-height: 645px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .main-img {
        width: 400px;
        border-radius: 100%;
    }
    .content {
        width:500px;
        color: white;
    }
    @media screen and (max-width : 950px) {
        .home { 
            display: block;
            text-align: center;
            margin-top: 50px;
        }
        .content {
            margin: auto;
        }
        .main-img {
            margin-top: 10px;
        }
    }
</style>