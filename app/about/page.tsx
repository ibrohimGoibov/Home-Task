import Image from "next/image"
import img from "../../public/image.png"
import img1 from '../../public/image-2.png'
import img2 from '../../public/image-3.png'
import img3 from '../../public/image-4.png'
import img4 from '../../public/workspace 1.png'
import about from '../../public/image copy.png'
import person from '../../public/image copy 2.png'
import map from '../../public/image copy 3.png'
import icon from '../../public/image copy 4.png'
import icon1 from '../../public/image copy 5.png'
import icon2 from '../../public/image copy 6.png'
import Link from "next/link"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between px-16 py-6">
        <nav className="flex gap-10 text-gray-600 dark:text-white">
          <Link href={'/about2'}>
          Booking
          </Link>
          <a href="#">Facilities</a>
          <a href="#">About Us</a>
          <a href="#">Location</a>
          <a href="#">Contact</a>
        <AnimatedThemeToggler />
        </nav>
        <button className="rounded-full bg-emerald-500 px-6 py-2 text-white">
          Login
        </button>

      </header>

      <section className="mx-12 mt-6 grid grid-cols-2 overflow-hidden rounded-[48px] dark: text-black bg-emerald-50 dark: bg-black">
        <div className="flex flex-col justify-center px-16">
          <h1 className="text-6xl font-bold leading-tight">
            Find your perfect<br />place to stay
          </h1>
          <p className="mt-6 max-w-md text-gray-600 underline decoration-purple-500 decoration-2 underline-offset-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              ▶
            </div>
            <span className="text-lg">Watch video</span>
          </div>
        </div>

        <div className="relative">
          <Image
            src={img}
            alt="House"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <div className="relative mx-24 -mt-12 top-[-90px] rounded-full bg-white px-10 dark:bg-black py-6 shadow-lg">
        <div className="grid grid-cols-5 items-center gap-6">
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p>United States</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Check in</p>
            <p>10 Jun 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Check out</p>
            <p>15 Jun 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Rooms for</p>
            <p>1 room, 2 guests</p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-white">
            Search...
          </button>
        </div>
      </div>
      <section className="px-16 py-20">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-white">Popular Hotels</h2>
          <p className="mt-2 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <button className="rounded-full bg-emerald-500 px-6 py-3 text-white">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-black dark:shadow-2xl dark:shadow-white">
          <div className="relative h-72">
            <Image src={img1} alt="" fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-sm text-emerald-500">London NW8 7JT England</p>
            <h3 className="mt-2 text-xl font-semibold">Danubius Hotel Regents Park</h3>
            <div className="mt-4 flex items-center justify-between">
              <span>$200 Par Night</span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">★★★★★</span>
                <span>4.8</span>
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white dark:bg-black dark:shadow-2xl dark:shadow-white">
          <div className="relative h-72">
            <Image src={img2} alt="" fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-sm text-emerald-500">London NW8 7JT England</p>
            <h3 className="mt-2 text-xl font-semibold">The Resident Soho</h3>
            <div className="mt-4 flex items-center justify-between">
              <span>$200 Par Night</span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">★★★★★</span>
                <span>4.8</span>
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white dark:bg-black dark:shadow-2xl dark:shadow-white">
          <div className="relative h-72">
            <Image src={img3} alt="" fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-sm text-emerald-500">London NW8 7JT England</p>
            <h3 className="mt-2 text-xl font-semibold">London Bridge Hotel</h3>
            <div className="mt-4 flex items-center justify-between">
              <span>$200 Par Night</span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">★★★★★</span>
                <span>4.8</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main>
      <div className="flex items-center justify-center gap-[30px]">
        <div className="num1">
          <h1 className="text-[40px] w-[411px] font-[700]">We do our best facilities provide you</h1>
          <p className="w-[386px] text-[gray]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          <button className="px-[20px] py-[10px] rounded-[50px] bg-[#24AB70] text-white mt-[20px]">Contact Now</button>
        </div>
        <div className="num flex items-center flex-col gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
          <div className="num1 border-[#E8E8E8] border rounded-[10px] shadow-2xl p-[30px] py-[40px] flex items-center flex-col justify-center gap-[10px]">
            <Image src={img4} alt="" />
            <p className="text-[17px]">Private Workspace</p>
          </div>
        </div>
      </div>
    </div>
    </main>
    <section className="flex min-h-screen bg-[#f4faf6] dark:bg-black dark:bg-black dark:text-white mt-[100px]">
      <div className="w-1/2">
        <Image
          src={about}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold text-black mb-6">
          Discover our History
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
        </p>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>

        <button className="w-fit rounded-full bg-green-500 px-8 py-4 text-white font-medium">
          Explore More
        </button>
      </div>
    </section>
    <section className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-black">
      <div className="relative flex w-[90%] max-w-7xl rounded-3xl bg-white dark:bg-black dark:text-white overflow-hidden">
        <button className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white dark:bg-black shadow flex items-center justify-center text-green-500">
          ‹
        </button>

        <div className="w-2/3 px-20 py-16">
          <p className="text-gray-600 dark:text-white leading-relaxed mb-12 relative">
            <span className="text-green-500 text-4xl absolute -left-8 -top-4">“</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
            <span className="text-green-500 text-4xl ml-2">”</span>
          </p>

          <h3 className="text-xl font-semibold text-black dark:text-white">
            Alexandr Ivchenko
          </h3>
          <p className="text-gray-500">
            Businessman
          </p>
        </div>

        <div className="w-1/3 bg-gray-50 dark:bg-black flex items-center justify-center">
          <Image
            src={person}
            alt=""
            className="h-full object-cover"
          />
        </div>

        <button className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white  shadow flex items-center justify-center text-green-500">
          ›
        </button>
      </div>
    </section>
    <div className="h-screen">
  <div className="lol10 h-full w-[95%] bg-contain m-auto" style={{ backgroundImage: `url(${map})` }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d557880.2458621679!2d68.7873079872368!3d38.44369044786333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1767786214709!5m2!1sru!2s" width="1400" height="700" style={{border:'0'}} loading="lazy"></iframe>
    <p>l</p>
    <section className="px-16 py-20 mt-[-350px] relative ml-[-40px]">
      <div className="flex items-center justify-between rounded-3xl bg-white px-20 py-14">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Location of our Hotelos
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-6 py-4 outline-none text-gray-600 w-72"
          />
          <button className="bg-green-500 px-10 py-4 text-white font-medium rounded-full">
            Contact
          </button>
        </div>
      </div>
    </section>
  </div>
</div>
<footer>
  <div className="flex items-start justify-evenly mt-[100px]">
    <div className="num1">
      <p className="w-[264px] text-[grey] text-[17px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex items-center gap-[20px]">
        <Image className="w-[30px] mt-[20px]" src={icon} alt="" />
        <Image className="w-[30px] mt-[20px]" src={icon1} alt="" />
        <Image className="w-[30px] mt-[20px]" src={icon2} alt="" />
      </div>
    </div>
    <div className="num2">
      <p className="text-[25px]">Home</p>
      <p className="mt-[10px]">Booking</p>
      <p className="mt-[10px]">Facilities</p>
      <p className="mt-[10px]">Location</p>
      <p className="mt-[10px]">Contact</p>
    </div>
    <div className="num2">
      <p className="text-[25px]">Help</p>
      <p className="mt-[10px]">About Us</p>
      <p className="mt-[10px]">Help center</p>
      <p className="mt-[10px]">Privacy policy</p>
      <p className="mt-[10px]">FAQs</p>
    </div>
    <div className="num2">
      <p className="text-[25px]">Get the app</p>
      <p className="mt-[10px]">iOS app</p>
      <p className="mt-[10px]">Android app</p>
    </div>
  </div>
</footer>
    </main>
  )
}
