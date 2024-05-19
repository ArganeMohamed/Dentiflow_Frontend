<template>
    <div class="login mt-5">
      <form @submit.prevent="login" class="form w-75 m-auto">
        <div class="mb-3">
          <label class="form-label">E-mail</label>
          <input type="email" v-model="email" class="form-control" required>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" required>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Role</label>
          <select v-model="role" class="form-control w-25 text-center">
            <option value="admin">Admin</option>
            <option value="Medecin">Medecin</option>
            <option value="assistant">Assistant</option>
          </select>
        </div>
  
        <input type="submit" value="Login" class="btn btn-primary mt-2">
        
        <div v-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: 'admin', 
        error: null
      };
    },
    methods: {
      login() {
        axios.post('http://localhost:8000/api/auth', {
          email: this.email,
          password: this.password,
          role: this.role
        })
        .then(response => {
          if (response.data.state) {
            alert('Login successful!');
          } else {
            this.error = 'Invalid email or password.';
          }
        })
        .catch(error => {
          console.error(error);
          this.error = 'An error occurred. Please try again.';
        });
      }
    }
  };
  </script>
  