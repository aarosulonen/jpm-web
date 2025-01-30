import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>jpm pikkujoulut</p>
      <Image
            aria-hidden
            src="/villisikaboom.jpg"
            alt="Villisika"
            width={1000}
            height={1000}
          />
    </div>
  );
}
