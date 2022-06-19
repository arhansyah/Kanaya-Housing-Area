import Navbar from '../Komponen/Navbar'
import inter1 from '../Assets/r.tamu.jpeg'
import inter2 from '../Assets/r.keluarga.jpeg'
import inter3 from '../Assets/r.dapur.jpeg'

// import foto1 from '../Assets'
const callouts = [
    {
      name: 'Ruang Tamu yang minimalis ini adalah bagian dari tujuan pembuatan perumahan GREEN KANAYA yang bisa digunakan customer untuk bertemu orang penting.',
      description: 'RUANG TAMU RUMAH GRAND KANAYA ',
      imageSrc: inter1,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'Iphone11promax',
    },
    {
      name: 'Ruang Keluarga yang dibuat dengan desain yang elegant tentu bisa membuat keharmonisan pada saat berkumpul keluarga.',
      description: 'RUANG KELUARGA RUMAH GRAND KANAYA',
      imageSrc: inter2,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'Iphone11',
    },
    {
      name: 'Ruang Dapur yang di desain rapih untuk membuat customer lebih nyaman saat memasak dan kerapian tempat untuk meletakan alat dapur.',
      description: 'RUANG DAPUR RUMAH GRAND KANAYA',
      imageSrc: inter3,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Example() {
    return (
    <>
        <Navbar />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">IPHONE</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
  