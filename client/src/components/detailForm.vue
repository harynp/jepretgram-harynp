<template lang="html">
  <div class="row">
    <div class="col-md-4">
      <form class="form-horizontal" @click.prevent="postPhoto(add)">
          <div class="form-group">
            <label for="inputTitle" class="col-lg-2 control-label">Title</label>
            <div class="col-lg-10">
              <input v-model="add.title" class="form-control" id="inputTitle" placeholder="Title . . " type="text">
            </div>
          </div>

          <div class="form-group">
            <label for="inputCaption" class="col-lg-2 control-label">Caption</label>
            <div class="col-lg-10">
              <input v-model="add.caption" class="form-control" id="inputCaption" placeholder="Caption . . " type="text">
            </div>
          </div>

          <div class="form-group">
            <label for="inputimgUrl" class="col-lg-2 control-label">imgUrl</label>
            <div class="col-lg-10">
              <input v-model="add.imgUrl" class="form-control" id="inputimgUrl" placeholder="imgUrl . . " type="text">
            </div>
          </div>

          <!-- <div class="form-group">
            <label for="inputCaption" class="col-lg-2 control-label">Photo</label>
            <div class="col-lg-10">
              <input v-model="add.imgUrl" class="form-control" id="inputCaption" placeholder="Photo . . " type="file" @change="onFileChange">
            </div>
          </div> -->

          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button type="reset" class="btn btn-default">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
      </form>
    </div>
    <div class="col-md-8">

    <div class="thumbnail" v-for="foto in photo">
      <img :src="foto.imgUrl" alt="...">
      <div class="caption">
        <h3>{{foto.title}}</h3>
        <p>{{foto.caption}}</p>
        <p><a href="#" class="btn btn-primary" role="button">Delete</a> <a href="#" class="btn btn-default" role="button">Like</a></p>
      </div>
    </div>
    </div>
    </div>
  </div>

</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      add: {
        title: '',
        caption: '',
        imgUrl: ''
      }
    }
  },
  computed: {
    ...mapState([
      'photo'
    ])
  },
  methods: {
    ...mapActions([
      'getJepret',
      'postJepret'
    ]),
    	onFileChange(e) {
	      var files = e.target.files || e.dataTransfer.files;
	      if (!files.length)
	        return;
	      this.createImage(files[0]);
	    },

	    createImage(file) {
	      var image = new Image();
	      var reader = new FileReader();
	      var vm = this;

	     reader.onload = (e) => {
	        vm.add.imgUrl = e.target.result;
	      };

	      this.imgFile = file
	      reader.readAsDataURL(file);
	    }
  },
  created () {
    this.getJepret()
  }
}
</script>

<style lang="css">
</style>
