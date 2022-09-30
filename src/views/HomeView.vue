<template>
  <div class="home">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" id="home">标题</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <div class="select">
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                筛选
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">漫画</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">真人</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">色图度</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                顺序
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">正序</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">倒序</a></li>
              </ul>
            </div>
          </div>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
    <div class="setuList">
      <waterfall :data="setuList" :col="column">
        <template>
          <div v-for="(item, index) of setuList" :key="index">
            <div class="pictureCard" @click="chooseSetu(item)"  data-toggle="modal" data-target="#myModal">
              <img :src="item.url" alt="...">
              <div class="describe">
               <div class="date"><p>日期</p><h5>{{ item.time }}</h5></div>
               <div class="likes"><p>赞</p><h5>12<span class="glyphicon glyphicon-heart" aria-hidden="true"></span></h5></div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" @click="clickPictureModel">
  <div class="modal-dialog modalAll" role="document">
        <img :src="choosePictureCard.bigurl" alt="">
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setuList: [],
      column: 0,
      choosePictureCard: {}
    }
  },
  mounted() {
    this.axios.get('setu').then(
      res => {
        this.setuList = res.data
      }
    )
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		if (flag) {
			this.column = 2
		} else {
      this.detectScreenSize();
		}
		
		window.onresize = () => {
			this.detectScreenSize();
		}
  },
  methods:{
    chooseSetu(e){
      this.choosePictureCard = e
    },
    clickPictureModel(){
      $('#myModal').modal('toggle')
    },
    detectScreenSize() {
      if(document.body.clientWidth < 660){
				this.column = 2
      }
			else if (document.body.clientWidth < 970) {
				this.column = 4
			} else {
				this.column = 6
			}
		}
  }
}
</script>
<style scoped>

.select {
  display: flex;
  width: 10vw;
  margin-right: 10vw;
  align-items: center;
  justify-content: space-around;
}
.setuList{
  margin-top: 7vh;
}
.pictureCard img{
height: auto;
width: 100%;
}
.pictureCard{
  margin: 1rem 1.5rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: .5rem;
}
.date,.likes{
display: flex;
align-items: center;
justify-content: space-between;
}
.doubleCentering{
  display: flex;
  align-items: center;
  justify-content: center
}
.describe{
  margin-top:1vh;
}
.date p , .likes p{
  width: 50%;
  text-align: right;
  margin-bottom: 0;
}
.date h5 , .likes h5{
  width: 50%;
  text-align: left;
}
.modalAll{
  height: 100vh;
  width: 100vw;
}
.modalAll img{
  height: 100%;
}
</style>
<style>

.navbar {
  margin-bottom: 0px !important;
}

.nav,
.select {
  height: 7vh !important;
}
nav{
  padding: 0 !important;
  
}
@media screen and (max-width:970px) {
  .container-fluid {
    display: flex;
    justify-content: space-between;
  }
  .navbar-right{
    display: none;
  }
}
</style>