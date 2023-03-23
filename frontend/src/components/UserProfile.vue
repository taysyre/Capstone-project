<template>
    <div class="user-profile">
      <h1>{{ user.name }}</h1>
      <img v-bind:src="user.profilePictureUrl" alt="Profile Picture">
      <p>Email: {{ user.email }}</p>
      <div v-if="loading">Loading...</div>
      <div v-if="!loading">
        <h2>Recent Activity</h2>
        <ul>
          <li v-for="activity in user.recentActivity">{{ activity }}</li>
        </ul>
        <button @click="editProfile">Edit Profile</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        user: {},
        loading: true,
      };
    },
    mounted() {
      // Make API request to fetch user profile data
      axios.get('/api/user/profile')
        .then(response => {
          this.user = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    methods: {
      editProfile() {
        // Navigate to the edit profile page
        this.$router.push('/user/edit');
      },
    },
  };
  </script>
  