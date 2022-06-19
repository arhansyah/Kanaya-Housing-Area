import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PaperClipIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Navbar from '../Komponen/Navbar'
import imgprofil from '../Assets/myprof.jpg'
import imgprofil2 from '../Assets/yvnda.jpeg'

const people = [
    {
      name: 'Alif Arhansyah',
      title: 'MANAGER',
      // department: 'Optimization',
      role: 'Owner',
      email: 'arhansyah140103@gmail.com',
      image: imgprofil,
    },
    // More people...
    {
      name: 'Yovanda Sabian Devita',
      title: 'SEKRETARIS',
      // department: 'Optimization',
      role: 'Support System',
      email: 'yovandasd031707@gmail.com',
      image: imgprofil2,
    },
    // More people...
  ]
  

export default function Example() {
    return (
        <>
        <Navbar />

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}
            {/* /End replace */}

            {/* About Me */}

            <div className="flex flex-row -mt-5">
              <div className="relative px-5">
                <img src={imgprofil} width="700px" height="700px" className="" />
              </div>
                <div className="text-justify relative px-10 mt-9 ">
                  <span className="text-stone-500">
                  Alif Arhansyah, pemilik Perumahan Green Kanaya kelahiran Purbalingga, 14 Januari 2003 ini memulai bisnisnya ketika mendapat saran dari pemborong dan melalui adaptasinya saya mendapat keuntungan pada bisnis tersebut, tidak berfikir panjang saya langsung menekuni dan bertekad akan menjadi pemilik suatu perumahan. Semangat bisnis di dunia properti didapat Alif lantaran keluarga juga mensupport.
                
                  <br />
                  <br />
                  Alif menyumbangkan strategi bisnis tersendiri dalam memenangkan persaingan di bidang bisnis real estate, misalnya dengan membidik lokasi-lokasi strategis di perkotaan yang belum banyak dijangkau para pesaing.
                  
                  </span>
                </div>
            </div>

                          
            <div className="text-justify relative px-5 mt-3 text-stone-500">
                <span >
                Selain itu juga membangun lokasi tersebut dengan akses transportasi umum dan lingkungan yang nyaman sehingga memancing ketertarikan para pelanggan dan investor.

                Hingga saat ini, Alif dan dibantu tiga karyawan untuk mengembangkan usaha yang dirintisnya. Meski sudah mempunyai karyawan, namun Tomi tetap terjun langsung menangani beberapa pekerjaan, mulai dari konsep, model dan desain.
                
                </span>
            </div>
            

            <div className="flex flex-col mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500 ">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

          </div>
        </main>

        </>
    )
}