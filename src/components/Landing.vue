<template>
<div class="container-fluid">
  <div class="landing">
      
      <div class="dark-overlay" style="width:100%">
        <div class="landing-inner" style="width:100% ">
            <div class="row" style="width:100%">
            <div class="col">
            <h1 class="text-center" >DARKSIDE DISCS</h1>
            </div>
            </div>
        </div>
        <h2>THE QUALITY IS STRONG WITH THIS ONE</h2>
        <button type="button" class="btn">Enter the DarkSide</button>
        </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.btn{
    color: #A01329;
    background: #000;
    border: 2px solid #A01329;
}
.btn:hover{
    background: #A01329
}
.container-fluid{
    margin: 0;
    padding: 0;
}
h1{
    margin: 0.5em;
    font-size: 5em
}
h2{
    font-size: 2rem
}

@media(min-width: 400px){
    h1{
        font-size: 3em;
        margin-top: 3rem;
    }
    h2{
        font-size: 1.2rem;
        margin-top: 0.1rem;
    }

}

@media(min-width: 630px){
    h1{
        font-size: 4em;
    }
    h2{
        font-size: 1.5rem;
        margin-top: 0.2rem
    }
}

@media(min-width: 770px){
    h1{
        font-size: 5em;
    }
}

.landing{
    position:relative;
    background: url('../assets/LandingPageBackground.png') no-repeat center center/cover;
    height: 100vh;
    
}
.landing-inner{
    color:#A01329;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    align-items: center;

}
.dark-overlay{
    color:#7C7C83;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding-bottom: 5rem;
    text-align: center;
    align-items: center;

}
button{
    margin-top: 2rem;
   
}

.button:focus
{
    font-size: 13px;
    color:orange;
}
</style>