const LoginForm = () => {
  return (
    <form className="flex flex-col gap-5 max-8xl">
      <div className="flex flex-col gap-2  max-8xl">
        <label className="font-medium">Email address</label>
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-2xl"
        />
      </div>
      <div className="flex flex-col gap-2 max-8xl">
        <label className="font-medium">Password</label>
        <input type="text" className="input input-primary w-full max-w-2xl" />
      </div>
      <button className="btn btn-primary max-w-2xl">Log In</button>
    </form>
  );
};

export default LoginForm;
