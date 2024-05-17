<template>
    <div class="main body">
        <form>
            <div class="con">
                <label class="form-label">E-mail</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="con">
                <label class="form-label">Password</label>
                <input type="text" class="form-control"/>
            </div>
            <button class="submit">Submit</button>
        </form>
    </div>
</template>

<style>
    .form-label { 
        color: white;
    }
    .form-control {
        width: 350px;
        background: none;
    }
    .con {
        margin: 25px;
    }
    .submit {
        background: rgb(42, 155, 255);
        border:none;
        padding: 5px 15px;
        border-radius: 5px;
        color: white;
        margin-left: 25px;
    }
</style>