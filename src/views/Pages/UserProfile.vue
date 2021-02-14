<template>
  <div class="bg-white">

  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-white">
  </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card></user-card>
        </b-col>
        <b-col xl="12" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  // import UserCard from './UserProfile/UserCard.vue';

  export default {
    components: {
      EditProfileForm
      // UserCard
    }
  };
</script>
<style>
</style>