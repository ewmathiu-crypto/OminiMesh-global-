import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-auto w-48" }: LogoProps) {
  return (
    <Image
      src="/omnimesh-logo.svg"
      alt="OminiMesh Global logo"
      width={1200}
      height={360}
      className={className}
    />
  );
}
