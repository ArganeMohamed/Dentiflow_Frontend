<template>
  <nav class="bg-gray-800 p-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="logo.png" alt="Logo" class="h-8 mr-4" />
      <span class="text-white text-lg font-semibold">Your App Name</span>
    </div>

    <!-- Navigation Links -->
    <ul class="flex items-center space-x-4">
      <li>
        <a href="#" class="text-white hover:text-gray-300">Home</a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300">About</a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300">Services</a>
      </li>
      <li>
        <a href="#" class="text-white hover:text-gray-300">Contact</a>
      </li>
    </ul>

    <!-- Profile and Notification Icons -->
    <div class="flex items-center">
      <a href="#" class="text-white mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      </a>
      <a href="#" class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 17v1a3 3 0 006 0v-1M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1m-6 0h6v16H6V4z"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style></style>
