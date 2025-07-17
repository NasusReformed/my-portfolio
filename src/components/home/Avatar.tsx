export default function Avatar() {
  return (
    <div className="avatar align-center flex flex-col items-center justify-center p-4">
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-[110px] w-[110px] !rounded-full object-cover object-center"
      />
      <h1 className="text-xl font-bold mt-4">NasusReformed</h1>
      <p className="text-gray-600">Software Engineer | Entusiasta de la Tecnología</p>
      <p>"If you can dream it, I can create it"</p>
    </div>
  );
}