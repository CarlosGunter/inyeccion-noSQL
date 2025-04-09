
export default function LogIn() {
  return (
    <form action="" className="flex flex-col gap-6 border border-white p-8 rounded-xl">
      <label className="flex flex-col gap-2">
        <span>Username</span>
        <input
        type="text"
        name="user"
        placeholder="admin"
        className="border border-white rounded-xl p-2"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span>Password</span>
        <input
        type="password"
        name="password"
        placeholder="password"
        className="border border-white rounded-xl p-2"
        />
      </label>
      <button type="submit" className="bg-bg-primary rounded-lg p-2">Log In</button>
    </form>
  )
}
