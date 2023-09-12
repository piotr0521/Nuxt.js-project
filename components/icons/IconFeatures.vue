<template>
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="iconLabel === 'mobile'">
      <path opacity="0.2" d="M27 8.375H9V28.625H27V8.375Z" fill="white" />
      <path
        d="M24.75 3.875H11.25C10.0074 3.875 9 4.88236 9 6.125V30.875C9 32.1176 10.0074 33.125 11.25 33.125H24.75C25.9926 33.125 27 32.1176 27 30.875V6.125C27 4.88236 25.9926 3.875 24.75 3.875Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 8.375H27"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 28.625H27"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-if="iconLabel === 'respondents'">
      <path
        opacity="0.2"
        d="M11.25 28.625C13.7353 28.625 15.75 26.6103 15.75 24.125C15.75 21.6397 13.7353 19.625 11.25 19.625C8.76472 19.625 6.75 21.6397 6.75 24.125C6.75 26.6103 8.76472 28.625 11.25 28.625Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M11.25 14C13.7353 14 15.75 11.9853 15.75 9.5C15.75 7.01472 13.7353 5 11.25 5C8.76472 5 6.75 7.01472 6.75 9.5C6.75 11.9853 8.76472 14 11.25 14Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M24.75 28.625C27.2353 28.625 29.25 26.6103 29.25 24.125C29.25 21.6397 27.2353 19.625 24.75 19.625C22.2647 19.625 20.25 21.6397 20.25 24.125C20.25 26.6103 22.2647 28.625 24.75 28.625Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M24.75 14C27.2353 14 29.25 11.9853 29.25 9.5C29.25 7.01472 27.2353 5 24.75 5C22.2647 5 20.25 7.01472 20.25 9.5C20.25 11.9853 22.2647 14 24.75 14Z"
        fill="white"
      />
      <path
        d="M11.25 28.625C13.7353 28.625 15.75 26.6103 15.75 24.125C15.75 21.6397 13.7353 19.625 11.25 19.625C8.76472 19.625 6.75 21.6397 6.75 24.125C6.75 26.6103 8.76472 28.625 11.25 28.625Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 32C5.28593 30.9521 6.30504 30.1016 7.47664 29.5158C8.64823 28.93 9.94012 28.625 11.25 28.625C12.5599 28.625 13.8518 28.93 15.0234 29.5158C16.195 30.1016 17.2141 30.9521 18 32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 14C13.7353 14 15.75 11.9853 15.75 9.5C15.75 7.01472 13.7353 5 11.25 5C8.76472 5 6.75 7.01472 6.75 9.5C6.75 11.9853 8.76472 14 11.25 14Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 17.375C5.28593 16.3271 6.30504 15.4766 7.47664 14.8908C8.64823 14.305 9.94012 14 11.25 14C12.5599 14 13.8518 14.305 15.0234 14.8908C16.195 15.4766 17.2141 16.3271 18 17.375"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.75 28.625C27.2353 28.625 29.25 26.6103 29.25 24.125C29.25 21.6397 27.2353 19.625 24.75 19.625C22.2647 19.625 20.25 21.6397 20.25 24.125C20.25 26.6103 22.2647 28.625 24.75 28.625Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 32C18.7859 30.9521 19.805 30.1016 20.9766 29.5158C22.1482 28.93 23.4401 28.625 24.75 28.625C26.0599 28.625 27.3518 28.93 28.5234 29.5158C29.695 30.1016 30.7141 30.9521 31.5 32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.75 14C27.2353 14 29.25 11.9853 29.25 9.5C29.25 7.01472 27.2353 5 24.75 5C22.2647 5 20.25 7.01472 20.25 9.5C20.25 11.9853 22.2647 14 24.75 14Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 17.375C18.7859 16.3271 19.805 15.4766 20.9766 14.8908C22.1482 14.305 23.4401 14 24.75 14C26.0599 14 27.3518 14.305 28.5234 14.8908C29.695 15.4766 30.7141 16.3271 31.5 17.375"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
  </svg>
</template>

<script>
export default {
  props: {
    iconLabel: {
      type: String,
      required: true,
    },
  },
};
</script>
