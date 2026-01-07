import Image from 'next/image'
import Link from 'next/link'
import home from '../../public/image copy 7.png'
import home1 from '../../public/image copy 8.png'
import img from "../../public/image.png"
import img1 from '../../public/image-2.png'
import img2 from '../../public/image-3.png'
import img3 from '../../public/image-4.png'
import img4 from '../../public/image copy 10.png'
import img5 from '../../public/image copy 11.png'
import icon from '../../public/image copy 4.png'
import icon1 from '../../public/image copy 5.png'
import icon2 from '../../public/image copy 6.png'
import map from '../../public/image copy 3.png'

const page = () => {
  return (
    <div>
        <Link href={'/about'}>Page1</Link>
        <main className="min-h-screen bg-white px-12 py-8">
      <header className="flex items-center justify-between mb-12">
        <nav className="flex gap-10 text-gray-600">
          <a>Booking</a>
          <a>Facilities</a>
          <a>About Us</a>
          <a>Location</a>
          <a>Contact</a>
        </nav>
        <button className="rounded-full bg-green-500 px-6 py-2 text-white">
          Login
        </button>
      </header>

      <section className="grid grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Image
            src={home}
            alt="hotel"
            width={600}
            height={450}
            className="rounded-3xl object-cover"
          />

<div className="flex items-center gap-[20px]">
          <div className="absolute -bottom-12 -left-12 w-72 rounded-2xl shadow-2xl bg-white  text-blackp-6 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={home1}
                alt="avatar"
                width={48}
                height={48}
                className="rounded-full"
                />
              <div>
                <p className="font-semibold">Milan Jack</p>
                <p className="text-sm text-gray-400">Home Seller, USA</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-green-500 text-sm font-medium">★ 4.9 Rating</p>
          </div>
        </div>
    </div>

        <div>
          <p className="text-green-500 mb-2">London NW8 7JT England</p>
          <h1 className="text-4xl font-bold mb-4">
            Danubius Hotel Regents Park
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-semibold">$200 Par Night</p>
            <p className="text-orange-400">★★★★☆</p>
            <p className="text-gray-500">4.8</p>
          </div>

          <p className="text-gray-500 leading-relaxed mb-8">
            Как уже неоднократно упомянуто, базовые сценарии поведения
            пользователей рассмотрены исключительно в разрезе маркетинговых и
            финансовых предпосылок.
          </p>

          <button className="rounded-full bg-green-500 px-10 py-4 text-white text-lg">
            To book Now
          </button>
        </div>
      </section>
    </main>
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
      <main className="mt-[100px] min-h-screen flex items-center justify-center ml-[100px] p-6">
      <section className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">
        <div className="relative h-[300px] md:h-auto">
          <Image
            src={img4}
            alt="Modern house"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-10 flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Discover our History
          </h1>

          <p className="text-gray-600 dark:text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>

          <p className="text-gray-600 dark:text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="mt-4 w-fit px-8 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition">
            Explore More
          </button>
        </div>
      </section>
    </main>
    <main>
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Frequently Asked
            <br />
            <span className="text-green-500">Questions</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-white max-w-md">
            You can book massages 7 days a week from 6 am to 11 pm, including
            public holidays.
          </p>
        </div>

        <div className="space-y-6">
          <details open className="group rounded-xl border p-6">
            <summary className="flex justify-between items-center cursor-pointer font-medium list-none">
              How Far Is Nearest Bus Station ?
              <span className="group-open:rotate-180 transition">▲</span>
            </summary>
            <p className="mt-4 text-gray-600 dark:text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </details>

          <details className="group rounded-xl border p-6">
            <summary className="flex justify-between items-center cursor-pointer font-medium list-none">
              Why this project is better than others ?
              <span className="group-open:rotate-180 transition">▲</span>
            </summary>
          </details>

          <details className="group rounded-xl border p-6">
            <summary className="flex justify-between items-center cursor-pointer font-medium list-none">
              Estimated time of completion ?
              <span className="group-open:rotate-180 transition">▲</span>
            </summary>
          </details>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-white flex items-center justify-center p-16">
            <Image
              src={img5}
              alt="Perfect Place"
              width={240}
              height={140}
            />

          
        </div>
          </div>
      </section>
    </main>
    <div className="h-screen">
  <div className="lol10 h-full w-[95%] bg-contain m-auto" style={{ backgroundImage: `url(${map})` }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d557880.2458621679!2d68.7873079872368!3d38.44369044786333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1767786214709!5m2!1sru!2s" width="1400" height="700" style={{border:'0'}} loading="lazy"></iframe>
    <p>l</p>
    <section className="px-16 py-20 mt-[-350px] relative ml-[-40px]">
      <div className="flex items-center justify-between rounded-3xl px-20 py-14">
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
    </div>
  )
}

export default page