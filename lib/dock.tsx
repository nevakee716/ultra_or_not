
import {
  IconBrandGithub,
  IconBrandX,
  IconCamera,
  IconHome,
  IconDeviceGamepad2,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function MainDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Games",
      icon: (
        <IconDeviceGamepad2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/games",
    },
    {
      title: "Photography",
      icon: (
        <IconCamera className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mpfauwadel.fr",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Nevakee716/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/nevakee716",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}