import React from 'react'

const FormBoxOnImage = () => {
    return (
    <div className="bg-img">
  <form action="/action_page.php" className="container-five">
    <h1>Login</h1>
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <button type="submit" className="btn">Login</button>
  </form>
</div>
    )
}

export default FormBoxOnImage
