export default function About() {
  return (
    <div className="flex justify-center gap-14 my-20">
      <img
        src="/profile.jpg"
        alt="profile pic"
        className="size-52 rounded-full border border-black"
      />
      <div>
        <p className="text-4xl">About me</p>
      </div>
    </div>
  );
}
