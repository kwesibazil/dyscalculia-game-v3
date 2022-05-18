<template>
  <form class="bg-white h-100 p-4 mt-2 mb-3">
    <div class="mb-5">
      <div class="input-group input-group-lg">
        <span class="inputIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person opacity-50" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        </span>
        <input type="email"  name="email" class="form-control transparentInput px-5 fs-6 rounded-2"  autocomplete="username" placeholder="email"  required>
      </div><!-- email input-group ends here -->
    </div><!-- email container ends here -->
      <div>
        <div class="input-group input-group-lg">
          <span class="inputIcon">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7.022 9.217" width="16" height="16" fill="currentColor" class="bi opacity-50" >
              <path id="ic_lock_outline_24px" d="M7.511,8.022a.878.878,0,1,0-.878-.878A.88.88,0,0,0,7.511,8.022Zm2.633-3.95H9.706V3.194a2.194,2.194,0,1,0-4.389,0v.878H4.878A.88.88,0,0,0,4,4.95V9.339a.88.88,0,0,0,.878.878h5.267a.88.88,0,0,0,.878-.878V4.95A.88.88,0,0,0,10.145,4.072ZM6.151,3.194a1.361,1.361,0,0,1,2.721,0v.878H6.151Zm3.994,6.145H4.878V4.95h5.267Z" transform="translate(-4 -1)"/>
            </svg>
          </span>
          <input type="inputType"  name="password"  class="form-control transparentInput px-5 fs-6 rounded-2"  autocomplete="current-password"  placeholder="password" pattern="^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{8,30}$" required>
        </div><!-- password input-group ends here -->
        <div class="text-end"><button type="button" class="text-primary opacity-75 btn btn-link btn-sm px-0 mt-2">forgot password?</button></div>
      </div><!-- password container ends here -->
      <div>
        <div class="text-center">
          <button class="btn btn-lg text-white py-1 mt-3 fs-6 btn-primary">Login</button>
        </div>
        <div class="text-center">
          <span class="text-dark fs-8 opacity-75 me-1">Need an account?</span>
          <button type="button" class="text-warning text-decoration-none btn btn-link btn-sm px-0 my-xl-2 no-glow">Sign up</button>
        </div>
      </div><!-- login btn ends here -->
    </form><!-- login form ends here -->
</template>


<script>
export default {
  name: 'signInForm'
}
</script>


<style scoped>

</style>