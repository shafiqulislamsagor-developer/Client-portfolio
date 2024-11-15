import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer h-[220px] rounded-lg overflow-hidden group">
          <Image
            src="https://fakeimg.pl/250x100/"
            alt="logo"
            width={50}
            height={50}
            className="w-full rounded-lg h-[220px]"
          />
          <div className="w-ful group-hover:-translate-y-full transition-all duration-500 rounded-lg h-[220px] bg-primary-2/30 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold text-slate-800">
              {" "}
              Youtube SEO{" "}
            </h1>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Project Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&lsquo;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div></div>
        <DialogFooter>
          <Link href={"https://www.facebook.com/"}>
            <Button className="bg-primary-2 hover:scale-105 hover:bg-primary-2 duration-500 transition-all">
              <DialogClose className="bg-transparent">Visit Now</DialogClose>
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
