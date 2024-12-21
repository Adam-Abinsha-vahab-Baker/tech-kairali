import Link from 'next/link';
import Image from 'next/image';
import kairali from "@/app/assets/kairali-logo.png"; // Ensure the path is correct

export default function Footer() {
  return (
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                  src={kairali}
                  alt="Tech Kairali Logo"
                  width={150} // Adjust as needed
                  height={150} // Adjust as needed

              />
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech Kairali Chitfund Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>
  );
}
