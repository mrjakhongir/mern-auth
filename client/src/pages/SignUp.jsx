import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-slate-100 p-3 rounded-lg"
          autoComplete="off"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SIGN UP
        </button>
        {/* <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          CONTINUE WITH GOOGLE
        </button> */}
      </form>
      <p className="mt-5">
        Have an account?{' '}
        <Link className="text-blue-500" to="/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  )
}
