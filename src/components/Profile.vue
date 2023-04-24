<template>
  <div>
    <div class="row justify-content-center">
      <Navbar></Navbar>
      <div class="col-lg-8">
        <div class="card my-4">
          <div class="card-header">
            <h4>User Profile</h4>
          </div>
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-md-4">
                <div class="text-center">
                  <img :src="user.avatar" class="rounded-circle img-thumbnail" alt="user profile image">
                  <h2 class="mt-2">{{user.name}}</h2>
                  <p>{{user.email}}</p>
                </div>
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item">
                    <strong>Bio: </strong>{{user.bio}}
                  </li>
                  <li class="list-group-item">
                    <strong>Location: </strong>{{user.location}}
                  </li>
                  <li class="list-group-item">
                    <strong>Website: </strong>{{user.website}}
                  </li>
                  <li class="list-group-item">
                    <strong>Member since: </strong>{{user.created_at}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12">
                <hr>
                <h3>User Posts</h3>
                <div class="row">
                   
                    <div class="card my-2">
                      <div class="card-body">
                        
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://placeimg.com/400/400/people',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        location: 'California',
        website: 'https://example.com',
        created_at: '2019-01-01',
    
      }
    }
  }
}
</script>
<style>
.img-thumbnail {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>