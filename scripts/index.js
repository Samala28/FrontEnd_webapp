
let headerTemplate = `<div id="index-head">
<img src = "D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\assests\images\logo.png" class="logo" />
<div>
<div ><a href ="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\login.html" target="_self" id="login"><button class="btn btn-light" data-toggle="modal" data-target="#loginModal" id="login-button" type="button" >LOGIN</button></a></div>
 <!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Please Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
        </div>
        <div class="modal-body">
            <form>
                <div>
                <div class="form-group">
                    <!-- <label for="loginInputUsername">Username</label>
                    <input type="text" class="form-control" id="loginInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username">
                    <label for="loginInputPassword">Password</label>
                    <input type="password" class="form-control" id="loginInputPassword" aria-describedby="passwordHelp" placeholder="Enter Password"> -->
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter Username" required/>
                    <br/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" required/><br/>
                </div>  
                </div>
            </form>
    </div>
    <div class="modal-footer" style="justify-content: center;">
        <div><button type="login" id="primary" class="btn btn-primary" style="text-align: center;">Login</button></div>
    </div>
</div>
</div>
</div>`;

document.getElementById("container").innerHTML= headerTemplate;

let footerTemplate = `<div class="footer-content">
<div><a href="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\contact.html" id="contact"><button class="btn btn-primary" type="button" data-toggle="modal" data-target="#submitModal" id="submit-button"style="height: 30px;padding-bottom: 30px;">Contact Us</button></a></div>
<!-- Modal -->
<div class="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title" id="loginModalLabel">Get in touch</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">

            <div class="form-contact">
                <p>Thank you for reaching out!!!</p>
                <p>Please enter your email and we will get back to you.</p>
                <form action="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\index.html" method="GET" autocomplete="off">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter your email id"/><br/>
            </form>
            </div>
            
       
</div>
<div class="modal-footer">
    <div id="contact-btn">
        <button type="login" class="btn btn-primary">Submit</button>
        </div>
</div>
</div>
</div>
</div>
<div class="copy">&copy;2020 ROOM SEARCH PVT.LTD.</div>
            
        <div class="footer-flex">
            <span id="social-media">
            <a href="https://www.facebook.com" target="_blank" ><img src="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\assests\images\facebook.png" class="footer" /></a>
            <a href="https://www.instagram.com" target="_blank"><img src="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\assests\images\instagram.png" class="footer" /></a>
            <a href="https://twitter.com" target="_blank"><img src="D:\Upgrad Projects\Hotel_Booking_Website_Starter_Code\assests\images\twitter.png" class="footer" /></a>
            </span>
        </div>
        </div>`;

document.getElementsByTagName('footer').innerHTML=footerTemplate;

