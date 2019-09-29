  <template>
 
              <div class="container-fluid" style="padding:0">
                  <div class="container-fluid" style="padding:0">
                      <div class="row">
                          <div class="col">
                     <button type="button" class="close is-pulled-right" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
                      </div>
                      </div>
                      <div class="row">
                          <img src="../../assets/movieImages/SW_VI_BR.png" class="vue-logo">
                          <div class="media-body" style="margin-left:1.2rem">
                              <div >
                              <strong>Star Wars IV</strong>
                              </div>
                              <p>Empire Strikes Back (DVD)</p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                          <div style="margin-top:0.3rem">
                              <p style="margin-left:1.1rem;"> <strong>Quantity</strong> </p>
                              <div class="input-group" style="padding-top:0.3rem">
                                  <input type="button" value="-" class="button-minus" data-field="quantity">
                                  <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field">
                                  <input type="button" value="+" class="button-plus" data-field="quantity">

                              </div>
                          </div>
                      </div>
                      <div class="col">
                          <div style="text-align:left;margin-top:5px">
                              <p> <strong>Price</strong> </p>
                              <div class="input-group"
                                  style="justify-content:left;margin-left:5px;padding-top:0.3rem">
                                  $25
                              </div>
                          </div>
                      </div>
                  </div>
   
      </div>
  </template>


  <script>
      export default {

      }
  </script>

  <style>
      .vue-logo {
          height: 80px;
          width: 100px;
          border-radius: 5px;
          background-size: 100px;
          margin-top: 0.3rem;
      }

      .media-body {
          height: 100%;
          padding: 0;
          margin: 0;
      }

      .form-control {
          width: 25%;
          height: 25px;
          font-size: 12px;
          text-align: center;
          padding: 2px;
      }

      input,
      textarea {
          border: 1px solid #eeeeee;
          box-sizing: border-box;
          margin: 0;
          outline: none;

      }

      input[type="button"] {
          -webkit-appearance: button;
          cursor: pointer;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
          -webkit-appearance: none;
      }

      .input-group {
          clear: both;
          margin: 0px 0;
          position: relative;
      }

      .input-group input[type='button'] {
          background-color: #eeeeee;
          min-width: 25px;
          width: auto;
          transition: all 300ms ease;
      }

      .input-group .button-minus,
      .input-group .button-plus {
          font-weight: bold;
          height: 30px;
          padding: 0;
          margin-right: 0.2rem;
          width: 20px;
          position: relative;
      }

      .input-group .quantity-field {
          position: relative;
          height: 30px;
          left: -5px;
          text-align: center;
          width: 55px;
          display: inline-block;
          font-size: 13px;
          margin: 0 0 5px;
          resize: vertical;
      }

      .button-plus {
          left: -5px;
      }

      input[type="number"] {
          -moz-appearance: textfield;
          -webkit-appearance: none;
      }

      .col {
          margin: 0;
          padding: 0;
      }
  </style>