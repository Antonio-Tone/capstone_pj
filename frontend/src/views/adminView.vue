<template >
    <div>
    <h1>Users</h1>
    <addUser />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>surname</th>
            <th>age</th>
            <th>gender</th>
            <th>role</th>
            <th>email address</th>
            <th>profile image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.Name.userName}}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <img
                :src="user.userProfile"
                :alt="user.firstName"
                loading="lazy"
                class="img-fluid image"
              />
            </td>
            <td>
              <updateUser :user="user" /><button
                class="btn"
                @click="deleteUser(user.userID)"
              >
                delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
    </div>
    <div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>