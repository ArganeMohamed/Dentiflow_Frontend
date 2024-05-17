<template>
    <nav>
        <div class="tools">
            <img src="../../assets/unnamed.png" width="50" class="img">
            <div class="links">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/patients">Patients</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="form">
            <input type="text" >
            <button>Submit</button>
        </div>
    </nav>
</template>

<style>
    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: none;
    }
    .img{
        border-radius: 30px;
        width: 45px;
    }
    .tools {
        display : flex;
        justify-content: flex-start;
        align-items: center;
    }

    .links ul{
        list-style: none;
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
    }

    li {
        margin-right: 40px;
        color: rgb(255, 255, 255);
    }

    .form{
        display: flex;
    }
    .form input {
        width: 250px;
        height: 40px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 2px solid rgb(42, 155, 255);
        background: none;
        text-align: center;
        color: white;
    }
    .form button {
        width: 100px;
        border: none;
        background-color: rgb(42, 155, 255);
        color: white;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .links a {
        text-decoration: none;
        color: white;
    }
</style>