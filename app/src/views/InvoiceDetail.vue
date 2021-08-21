<template>
  <div>
    <div class="mt-9">
      <router-link :to="{ name: 'Invoices' }">
        <button class="flex items-center">
          <svg
            class="h-5 w-5 mr-3 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Back
        </button>
      </router-link>
    </div>
    <div class="flex items-center mt-5 justify-between flex-wrap">
      <div class="flex items-center gap-x-3">
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <p class="text-base text-gray-800">Pending</p>
      </div>
      <!-- Delete, Edit, Paid buttons -->
      <div class="flex items-center">
        <button class="px-3 py-2">
          <svg
            class="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <button class="px-3 py-2">
          <svg
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button
          class="
            flex
            items-center
            gap-x-2
            px-3
            py-2
            ml-3
            text-white
            rounded-md
            shadow-lg
            bg-gray-800
          "
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Mark as Paid</p>
        </button>
      </div>
    </div>
    <!-- Download button -->
    <div class="mt-8 flex flex-1 justify-end">
      <button class="flex items-center gap-x-2 font-bold text-gray-800">
        <p>Download</p>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>
    </div>
    <!-- Invoice Info -->
    <div class="mt-7">
      <div class="flex justify-between">
        <div class="text-gray-800">
          <h2 class="font-semibold text-xl">#693TW</h2>
          <p class="text-base">Product Description</p>
        </div>
        <div class="text-right text-gray-800 text-sm">
          <p>123 Test Address</p>
          <p>Bihac</p>
          <p>77000</p>
          <p>Bosna i Hercegovina</p>
        </div>
      </div>
      <div class="mt-11 flex">
        <div class="flex-1 text-gray-800">
          <span class="text-sm">Invoice Date</span>
          <p class="font-semibold text-lg">Jun 2, 2021</p>
        </div>
        <div class="flex-1">
          <span class="text-sm">Payment Date</span>
          <p class="font-semibold text-lg">Jun 2, 2021</p>
        </div>
      </div>
      <div class="mt-8 flex">
        <div class="flex-1 text-gray-800">
          <span class="text-sm">Bill To</span>
          <p class="font-semibold text-lg">John Doe</p>
          <ul class="text-sm mt-2">
            <li>123 Test Address</li>
            <li>Bihac</li>
            <li>77000</li>
            <li>Bosna i Hercegovina</li>
          </ul>
        </div>
        <div class="flex-1">
          <span class="text-sm">Sent To</span>
          <p class="font-semibold text-lg">john.doe@gmail.com</p>
        </div>
      </div>
      <!-- Invoices item list details -->
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="overflow-hidden shadow rounded-tl-lg rounded-tr-lg pb-2 bg-gray-100">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        pt-6
                        pb-2
                        text-left text-base
                        font-bold
                        tracking-wider
                      "
                    >
                      Item Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        pt-6
                        pb-2
                        text-left text-base
                        font-bold
                        tracking-wider
                      "
                    >
                      QTY.
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        pt-6
                        pb-2
                        text-left text-base
                        font-bold
                        tracking-wider
                      "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        pt-6
                        pb-2
                        text-left text-base
                        font-bold
                        tracking-wider
                      "
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>Designing</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>5</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>300.00</p>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <p>1500</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>Programing</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>5</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>600</p>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <p>3000</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>Programing & Designing</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>5</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p>300.00</p>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <p>1500</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="
            bg-gray-700
            flex
            items-center
            justify-between
            px-6
            py-6
            rounded
            text-white
            font-semibold
            text-lg
          "
        >
          <h3>Amount Due</h3>
          <h3>$4200</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>