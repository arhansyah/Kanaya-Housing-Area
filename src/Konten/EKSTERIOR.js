import Navbar from '../Komponen/Navbar'
import Footer from '../Komponen/Footer'
import ekster1 from '../Assets/hlmn.dpn.jpeg'
import ekster2 from '../Assets/bag.depan.jpeg'
import ekster3 from '../Assets/taman.mini.jpeg'
  export default function Example() {
    return (
    
    <>
    <Navbar />

    <div className='grid grid-cols-3 gap-4 p-20 -mt-5'>
    <div class="flex justify-center ">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={ekster1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">HALAMAN RUMAH GRAND KANAYA</h5>
      <p class="text-gray-700 text-base mb-4">
      Halaman yang sengaja dibuat untuk kebutuhan opsional bagi peminat ini bisa digunakan sebagai garasi atau dijadikan tempat bermain dan mengobrol bersama keluarga dan tetangga.
      </p>
      {/* <a href="./iphone" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy Now</a> */}
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={ekster2} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">BAGIAN DEPAN RUMAH GRAND KANAYA</h5>
      <p class="text-gray-700 text-base mb-4">
        Bagian depan ini terlihat dengan style minimalis seperti perumahan pada umumnya, namun dengan desain bagian eksterior yang cukuo mewah, jadi tidak terlalu terfokus pada interiornya.
      </p>
      {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shad-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy Now</button> */}
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={ekster3} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">TAMAN MINI RUMAH GRAND KANAYA</h5>
      <p class="text-gray-700 text-base mb-4">
        Dengan membuat taman mini pada bagian belakang rumah tentu memperkuat bahwa perumahan dengan style minimalis harus memiliki eksterior yang memadai dan terlihat elegant.
      </p>
      {/* <a href="./iphone" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy Now</a> */}
    </div>
  </div>
</div>
</div>
<Footer/>
    </>
    
    )
  }
  