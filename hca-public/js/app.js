var app = angular.module('hcaApp', [
  'ngRoute', 'ui.bootstrap', 'ngAnimate', 'uiGmapgoogle-maps',
]);


$('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

/**
 * Configure the Routes
 */
app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider, $window) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", activetab: "home"})
    // Pages
    .when("/home", {templateUrl: "views/home.html", activetab: "home", controller: 'mainController'})
    .when("/about", {templateUrl: "views/about.html", activetab: "about", controller: 'mainController'})
    .when("/classes", {templateUrl: "views/classes.html", activetab: "classes", controller: 'mainController'})
    .when("/fees_and_uniform", {templateUrl: "views/fees_and_uniform.html", activetab: "fees_and_uniform", controller: 'feesController'})
    .when("/sport", {templateUrl: "views/sport.html", activetab: "sport", controller: 'mainController'})
    .when("/calendar", {templateUrl: "views/calendar.html", activetab: "calendar", controller: 'mainController'})
    .when("/gallery", {templateUrl: "views/gallery.html", activetab: "gallery", controller: 'galleryController'})
    .when("/parents", {templateUrl: "views/parents.html", activetab: "parents", controller: 'mainController'})
    .when("/parentalGradeLeaders", {templateUrl: "views/parentalGradeLeaders.html", activetab: "parents", controller: 'mainController'})
    .when("/parentTeachersAssociation", {templateUrl: "views/parentTeachersAssociation.html", activetab: "parents", controller: 'mainController'})
    .when("/contact", {templateUrl: "views/contact.html", activetab: "contact", controller: 'contactController'})
    .when("/blog", {templateUrl: "views/blog.html", activetab: "blog", controller: 'blogController'})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}]);

app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});
app.controller('galleryController', function($scope) {
    $scope.pageClass = 'page-gallery';
});
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

app.controller('feesController', function($scope) {
  $scope.pageClass = 'page-fees';
	$scope.uniforms = [
    {
      name:'GIRLS SCOTCHED DRESS',
      ageAndPrice: {
        sixToSeven: 'R230',
        eightToNine: 'R250',
        tenToEleven: 'R270',
        twelveToThirteen: 'R290',
        highSchool: ''
      }
    },
    {
      name:'BLAZER',
      ageAndPrice: {
        sixToSeven: 'R670',
        eightToNine: 'R695',
        tenToEleven: 'R710',
        twelveToThirteen: 'R720',
        highSchool: 'R750-R800'
      }
    },
    {
      name:'TRACKSUITS',
      ageAndPrice: {
        sixToSeven: 'R380',
        eightToNine: 'R400',
        tenToEleven: 'R440',
        twelveToThirteen: 'R480',
        highSchool: 'R500-550'
      }
    },
    {
      name:'V-NECK JERSEY',
      ageAndPrice: {
        sixToSeven: 'R185',
        eightToNine: 'R190',
        tenToEleven: 'R210',
        twelveToThirteen: 'R220',
        highSchool: 'R250-R280'
      }
    },
    {
      name:'WHITE SHORT SLEEVED SHIRT',
      ageAndPrice: {
        sixToSeven: 'R150',
        eightToNine: 'R160',
        tenToEleven: 'R170',
        twelveToThirteen: 'R180',
        highSchool: 'R200'
      }
    },
    {
      name:'WHITE LONG SLEEVED SHIRT',
      ageAndPrice: {
        sixToSeven: 'R160',
        eightToNine: 'R165',
        tenToEleven: 'R180',
        twelveToThirteen: 'R195',
        highSchool: 'R210'
      }
    },
    {
      name:'GIRLS FLOPPY HATS',
      ageAndPrice: {
        sixToSeven: 'R90',
        eightToNine: 'R90',
        tenToEleven: 'R90',
        twelveToThirteen: 'R90',
        highSchool: ''
      }
    },
    {
      name:'BOYS CAP',
      ageAndPrice: {
        sixToSeven: 'R100',
        eightToNine: 'R100',
        tenToEleven: 'R100',
        twelveToThirteen: 'R100',
        highSchool: ''
      }
    },
    {
      name:'BOYS KHAKHI SHORTS',
      ageAndPrice: {
        sixToSeven: 'R110',
        eightToNine: 'R110',
        tenToEleven: 'R120',
        twelveToThirteen: 'R120',
        highSchool: ''
      }
    },
    {
      name:'SCHOOL TIE',
      ageAndPrice: {
        sixToSeven: 'R45',
        eightToNine: 'R45',
        tenToEleven: 'R45',
        twelveToThirteen: 'R45',
        highSchool:'R60' 
      }
    },
    {
      name:'SOCKS',
      ageAndPrice: {
        sixToSeven: 'R50',
        eightToNine: 'R50',
        tenToEleven: 'R60',
        twelveToThirteen: 'R60',
        highSchool: 'R75'
      }
    },
    {
      name:'SCHOOL T-SHIRT',
      ageAndPrice: {
        sixToSeven: 'R180',
        eightToNine: 'R185',
        tenToEleven: 'R190',
        twelveToThirteen: 'R195',
        highSchool: 'R210'
      }
    },
    {
      name:'SPORTS T-SHIRT',
      ageAndPrice: {
        sixToSeven: 'R135',
        eightToNine: 'R135',
        tenToEleven: 'R145',
        twelveToThirteen: 'R145',
        highSchool: 'R165'
      }
    },
    {
      name:'SCHOOL BAG',
      ageAndPrice: {
        sixToSeven: 'R190',
        eightToNine: 'R190',
        tenToEleven: 'R190',
        twelveToThirteen: 'R190',
        highSchool: ''
      }
    },
    {
      name:'SKIRTS',
      ageAndPrice: {
        sixToSeven: 'R160',
        eightToNine: 'R160',
        tenToEleven: 'R175',
        twelveToThirteen: 'R190',
        highSchool: 'R200'
      }
    },
    {
      name:'TROUSER',
      ageAndPrice: {
        sixToSeven: 'R150',
        eightToNine: 'R160',
        tenToEleven: 'R170',
        twelveToThirteen: 'R185',
        highSchool: 'R190'
      }
    },
    {
      name:'BLACK BLAZER',
      ageAndPrice: {
        sixToSeven: '',
        eightToNine: '',
        tenToEleven: '',
        twelveToThirteen: '',
        highSchool: 'R750'
      }
    },
    {
      name:'RED JUNIOR BLAZER WITH WHITE RIBBON',
      ageAndPrice: {
        sixToSeven: '',
        eightToNine: '',
        tenToEleven: 'R750',
        twelveToThirteen: '',
        highSchool: ''
      }
    },
    {
      name:'PREFECT WHITE JERSEY',
      ageAndPrice: {
        sixToSeven: '',
        eightToNine: '',
        tenToEleven: 'R160',
        twelveToThirteen: '',
        highSchool: 'R230'
      }
    },
    {
      name:'SHORT SKIRT WITH SHORT',
      ageAndPrice: {
        sixToSeven: 'R170',
        eightToNine: 'R170',
        tenToEleven: '',
        twelveToThirteen: '',
        highSchool: ''
      }
    }
  ]
});

// 					
// 					
// 					
					


app.controller('blogController', function($scope, $http, $sce) {
  $scope.pageClass = 'page-blog';

  $http.get("https://www.googleapis.com/blogger/v3/blogs/901273335394161518/posts?fetchImages=true&key=AIzaSyDCYAK4iQqFAOUrSiNsMdedZrSVBRktY1U").then(function(response) {
    $scope.status = response.status;
    $scope.blog = response.data;
    console.log($scope.blog);
  }, function(response) {
    $scope.blog = response.data || 'Request failed';
    $scope.status = response.status;
});
});

app.controller('jukeboxCtrl', function($scope, $rootScope) {
    var $ctrl = this;
    $ctrl.play = function(song)
    {
      console.log($("#jukebox"));
      $("#jukebox").empty();
      $("#jukebox").append("<audio id='player' controls controlsList='nodownload'>");
      $("#jukebox audio").append("<source src='music/"+song+".mp3' type='audio/mpeg'/>");
      $("#jukebox audio").append("<source src='music/"+song+".ogg' type='audio/ogg'/>");
      $("#jukebox").append("</audio>");
      $("#player")[0].play();
      $("#jukebox").prop('loop', false);
    }
});

app.filter('to_trusted', ['$sce', function($sce){
  return function(text) {
    // console.log(text);
       var doc = new DOMParser().parseFromString(text, "text/html");
       var   rval= doc.documentElement.textContent;
      console.log(rval)
      return $sce.trustAsHtml(rval)
  };
}]);

app.config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            libraries: 'places'
        });
    }]
);

app.run(function ($rootScope, $route, $window) {
    $rootScope.$route = $route;
    $rootScope.active=0;
    $rootScope.album=''; 
    $rootScope.$on('$routeChangeSuccess', function () {
      if (document.readyState == 'complete' && $window.pageYOffset > 600) {
        $('html,body').animate({scrollTop:0},400);
      }else{
      }
      $("#player").remove();
      $("#jukebox").empty();
    });
  // Your web app's Firebase configuration
    $rootScope.firebaseConfig = {
    apiKey: "AIzaSyDCYAK4iQqFAOUrSiNsMdedZrSVBRktY1U",
    authDomain: "hillcrestacademy.firebaseapp.com",
    databaseURL: "https://hillcrestacademy-default-rtdb.firebaseio.com",
    projectId: "hillcrestacademy",
    storageBucket: "hillcrestacademy.appspot.com",
    messagingSenderId: "558265908031",
    appId: "1:558265908031:web:7b28c7b8cefda2b8f0318a"
  };

  firebase.initializeApp($rootScope.firebaseConfig);
});



app.controller('ModalCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, template, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: template,
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

  };
});

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.controller('galleryCtrl', function($scope, $rootScope){
    $scope.noWrapSlides = false;
    $scope.activeAlbum = "";
    $scope.activeAlbumList = [];
    $scope.albumList = [];
    $scope.loading = false;
  $scope.getAlbumList = function() {
    $scope.loading = true;
    var galleryRef = firebase.firestore().collection("Gallery")
    setTimeout(function() {
      galleryRef.get().then(function(res){
          res.docs.forEach(function(album){
            $scope.$apply(function(){$scope.albumList.push(album.data())});
          });

          $scope.getFromFirebase($scope.albumList[0].name);
          $scope.activeAlbum = $scope.albumList[0].name;
        });
        $scope.loading = false;
    }, 1000);
  }

  $scope.getFromFirebase = function(album){
    $scope.loading = true;
    $scope.activeAlbumList = [];
    var storage = firebase.storage();
    var storageRef = storage.ref();

      setTimeout(function() {
        storageRef.child(album+'/').listAll().then(function(result){
          result.items.forEach(function(item){
             item.getDownloadURL().then(function(img){
              $scope.$apply(function(){$scope.activeAlbumList.push(img)});
             })
            });
        });
        $scope.loading = false;
      }, 1000);
  }

  if($scope.activeAlbum !== ""){
    $scope.getFromFirebase('test');
  }

  console.log(' list:', $scope.albumList.length);
    $scope.getAlbumList();

  $scope.setActiveAlbum = function(album){
    $scope.activeAlbum = album;
    $scope.getFromFirebase(album);
  }
    
  $scope.setActive = function(id, album){
    $('html,body').animate({scrollTop:590},400);
    $scope.activeAlbum = album;
    $rootScope.active = id;
    $rootScope.album = album;
  };



  $scope.gallery = [{id:0,name:"1",src:"img/gallery/hca_launch/1.jpg", desc:"Madam R. Murandu Academic Director-Principal showing some of the teaching-learning resources at HCA"},
                    {id:1,name:"2",src:"img/gallery/hca_launch/2.jpg", desc:"Pastor Jiriji: AFM Church Roodeport blesses the project with a word of prayer"},
                    {id:2,name:"3",src:"img/gallery/hca_launch/3.jpg", desc:"Resources at HCA"},
                    {id:3,name:"4",src:"img/gallery/hca_launch/4.jpg", desc:"ON LAUNCH DAY: Some guests and prospective parents peruse through some textbooks resources."},
                    {id:4,name:"5",src:"img/gallery/hca_launch/5.jpg", desc:"Mr P. Lyson Administrative and Strategic Director giving a speech on launch day"},
                    {id:5,name:"6",src:"img/gallery/hca_launch/6.jpg", desc:"Madam R Murandu giving a speech on launch day"},
                    {id:6,name:"7",src:"img/gallery/hca_launch/7.jpg", desc:"A showcase of some of the learning and teaching resources at HCA"},
                    {id:7,name:"8",src:"img/gallery/hca_launch/8.jpg", desc:"Learning and teaching resources at HCA"},
                    {id:8,name:"9",src:"img/gallery/hca_launch/9.jpg", desc:""},
                    {id:9,name:"10",src:"img/gallery/hca_launch/22.jpg", desc:"HCA Uniform"},
                    {id:10,name:"11",src:"img/gallery/hca_launch/23.jpg", desc:"HCA Uniform"},
                    {id:11,name:"12",src:"img/gallery/hca_launch/12.jpg", desc:"HCA Uniform"},
                    {id:12,name:"13",src:"img/gallery/hca_launch/13.jpg", desc:""},
                    {id:13,name:"14",src:"img/gallery/hca_launch/14.jpg", desc:""},
                    {id:14,name:"15",src:"img/gallery/hca_launch/15.jpg", desc:""},
                    {id:15,name:"16",src:"img/gallery/hca_launch/16.jpg", desc:""},
                    {id:16,name:"17",src:"img/gallery/hca_launch/17.jpg", desc:"HCA Uniform"},
                    {id:17,name:"18",src:"img/gallery/hca_launch/18.jpg", desc:"HCA Uniform"},
                    {id:18,name:"19",src:"img/gallery/hca_launch/19.jpg", desc:"HCA Uniform"},
                    {id:19,name:"20",src:"img/gallery/hca_launch/20.jpg", desc:"HCA Uniform"},
                    {id:20,name:"21",src:"img/gallery/hca_launch/21.jpg", desc:"HCA Uniform"},
                    {id:21,name:"22",src:"img/gallery/hca_launch/10.jpg", desc:"Rev Jiriji, Madam R. Murandu with Mr and Mrs Magaya"},
                    {id:22,name:"23",src:"img/gallery/hca_launch/11.jpg", desc:"Madam S. Masondo; Co-Director shows the HCA Uniform on launch day"},
                    {id:23,name:"24",src:"img/gallery/hca_launch/24.jpg", desc:""},
                    {id:24,name:"25",src:"img/gallery/hca_launch/25.jpg", desc:""},
                    {id:25,name:"26",src:"img/gallery/hca_launch/26.jpg", desc:""}];

  $scope.galleryGrade1Opening = [{id:0,name:"op1",src:"img/gallery/hca_openingweek2017/1.jpg", desc:"Learning begins at HCA: Art Lesson"},
                                  {id:1,name:"op2",src:"img/gallery/hca_openingweek2017/2.jpg",desc:"Conducive classrooms"}];

  $scope.galleryTimeforart = [{id:0,name:"ar1",src:"img/gallery/hca_timeforart/3.jpg"},
                                  {id:1,name:"ar2",src:"img/gallery/hca_timeforart/2.jpg"},
                                  {id:2,name:"ar3",src:"img/gallery/hca_timeforart/1.jpg"}];

  $scope.galleryGymnastics = [{id:0,name:"gym1",src:"img/gallery/hca_gymnastics/1.jpg"},
                                  {id:1,name:"gym2",src:"img/gallery/hca_gymnastics/2.jpg"},
                                  {id:2,name:"gym3",src:"img/gallery/hca_gymnastics/3.jpg"},
                                  {id:3,name:"gym4",src:"img/gallery/hca_gymnastics/4.jpg"},
                                  {id:4,name:"gym5",src:"img/gallery/hca_gymnastics/5.jpg"},
                                  {id:5,name:"gym6",src:"img/gallery/hca_gymnastics/6.jpg"},
                                  {id:6,name:"gym7",src:"img/gallery/hca_gymnastics/7.jpg"},
                                  {id:7,name:"gym8",src:"img/gallery/hca_gymnastics/8.jpg"},
                                  {id:8,name:"gym9",src:"img/gallery/hca_gymnastics/9.jpg"},
                                  {id:9,name:"gym10",src:"img/gallery/hca_gymnastics/10.jpg"},
                                  {id:10,name:"gym11",src:"img/gallery/hca_gymnastics/11.jpg"}];

  $scope.galleryBirthday = [{id:0,name:"celebrations1",src:"img/gallery/birthdayCelebrations/1.jpg"},
                            {id:1,name:"celebrations2",src:"img/gallery/birthdayCelebrations/2.jpg"},
                            {id:2,name:"celebrations3",src:"img/gallery/birthdayCelebrations/3.jpg"},
                            {id:3,name:"celebrations4",src:"img/gallery/birthdayCelebrations/4.jpg"},
                            {id:4,name:"celebrations5",src:"img/gallery/birthdayCelebrations/5.jpg"},
                            {id:5,name:"celebrations6",src:"img/gallery/birthdayCelebrations/6.jpg"},
                            {id:6,name:"celebrations7",src:"img/gallery/birthdayCelebrations/7.jpg"}];

  $scope.galleryFriends = [{id:0,name:"friends1",src:"img/gallery/friends/1.jpg"},
                            {id:1,name:"friends2",src:"img/gallery/friends/2.jpg"},
                            {id:2,name:"friends3",src:"img/gallery/friends/3.jpg"},
                            {id:3,name:"friends4",src:"img/gallery/friends/4.jpg"},
                            {id:4,name:"friends5",src:"img/gallery/friends/5.jpg"},
                            {id:5,name:"friends6",src:"img/gallery/friends/6.jpg"},
                            {id:6,name:"friends7",src:"img/gallery/friends/7.jpg"},
                            {id:7,name:"friends8",src:"img/gallery/friends/8.jpg"},
                            {id:8,name:"friends9",src:"img/gallery/friends/9.jpg"}];

  $scope.galleryIT = [{id:0,name:"ITLessons1",src:"img/gallery/ITLessons/1.jpg"},
                            {id:1,name:"ITLessons2",src:"img/gallery/ITLessons/2.jpg"},
                            {id:2,name:"ITLessons3",src:"img/gallery/ITLessons/3.jpg"},
                            {id:3,name:"ITLessons4",src:"img/gallery/ITLessons/4.jpg"},
                            {id:4,name:"ITLessons5",src:"img/gallery/ITLessons/5.jpg"},
                            {id:5,name:"ITLessons6",src:"img/gallery/ITLessons/6.jpg"},
                            {id:6,name:"ITLessons7",src:"img/gallery/ITLessons/7.jpg"},
                            {id:7,name:"ITLessons8",src:"img/gallery/ITLessons/8.jpg"},
                            {id:8,name:"ITLessons9",src:"img/gallery/ITLessons/9.jpg"},
                            {id:9,name:"ITLessons10",src:"img/gallery/ITLessons/10.jpg"},
                            {id:10,name:"ITLessons11",src:"img/gallery/ITLessons/11.jpg"},
                            {id:11,name:"ITLessons12",src:"img/gallery/ITLessons/12.jpg"}];

  $scope.gallerySongAndDance = [{id:0,name:"SongAndDance1",src:"img/gallery/SongAndDance/2.jpg"},
                            {id:1,name:"SongAndDance2",src:"img/gallery/SongAndDance/3.jpg"},
                            {id:2,name:"SongAndDance3",src:"img/gallery/SongAndDance/7.jpg"},
                            {id:3,name:"SongAndDance4",src:"img/gallery/SongAndDance/4.jpg"},
                            {id:4,name:"SongAndDance5",src:"img/gallery/SongAndDance/1.jpg"},
                            {id:5,name:"SongAndDance6",src:"img/gallery/SongAndDance/5.jpg"},
                            {id:6,name:"SongAndDance7",src:"img/gallery/SongAndDance/6.jpg"}];

  $scope.galleryVolleyball = [{id:0,name:"Volleyball1",src:"img/gallery/Volleyball/1.jpg"},
                            {id:1,name:"Volleyball2",src:"img/gallery/Volleyball/2.jpg"},
                            {id:2,name:"Volleyball3",src:"img/gallery/Volleyball/3.jpg"},
                            {id:3,name:"Volleyball4",src:"img/gallery/Volleyball/4.jpg"},
                            {id:4,name:"Volleyball5",src:"img/gallery/Volleyball/5.jpg"},
                            {id:5,name:"Volleyball6",src:"img/gallery/Volleyball/6.jpg"},
                            {id:6,name:"Volleyball7",src:"img/gallery/Volleyball/7.jpg"},
                            {id:7,name:"Volleyball8",src:"img/gallery/Volleyball/8.jpg"}];

  $scope.getAlbum = function(){
  var album = $rootScope.album;
    if(album == 'gallery'){
      return $scope.gallery;
    }
    if(album == 'galleryGrade1Opening')
      {
        return $scope.galleryGrade1Opening;
        } 
    if(album == 'galleryTimeforart')
      {
        return $scope.galleryTimeforart;
      }
    if(album == 'galleryGymnastics')
      {
        return $scope.galleryGymnastics;
      }
    if(album == 'galleryBirthday')
      {
        return $scope.galleryBirthday;
      }
    if(album == 'galleryFriends')
      {
        return $scope.galleryFriends;
      }
      if(album == 'galleryIT')
      {
        return $scope.galleryIT;
      }
      if(album == 'gallerySongAndDance')
      {
        return $scope.gallerySongAndDance;
      }
      if(album == 'galleryVolleyball')
      {
        return $scope.galleryVolleyball;
      }
    }; 

});


// contact forms
app.controller("regCtrl", ['$scope', '$http', function($scope, $http) {
        
         $scope.url = 'mail/reg-pos.php';
        
        $scope.clearForm = function(){
          $(".alert").addClass("hidden");
          $('#regForm').find("input, textarea").val("");
          $('#submitRegButton').show();
        };

        $scope.formsubmit = function(isValid) {
            if (isValid) {
              // console.log({"parentName": $scope.parentName, "parentSurname": $scope.parentSurname, "contactNumber": $scope.contactNumber, "email": $scope.email, "studentName": $scope.studentName, "studentSurname": $scope.studentSurname, "gradeRadio": $scope.gradeRadio});
                $http.post($scope.url, {"parental": $scope.parental, "contactNumber": $scope.contactNumber, "email": $scope.email, "student": $scope.student, "gradeRadio": $scope.gradeRadio}).
                    success(function(data, status) {
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = "Thank you for your interest, we have sent you an email as confirmation that your enquiry has been sent and will respond soon. Data sent:"+data; // Show result from server in our <pre></pre> element
                        });
                    $scope.regForm.$setPristine();
                    $scope.regForm.$valid = false;
                  $(".alert").removeClass("hidden");

            }else{
                  alert('Form is not valid');
            }
        }
    }]);

app.controller("contactParentsCtrl", ['$scope', '$http', function($scope, $http) {
        
         $scope.url = 'mail/parent-pos.php';
        
        $scope.clearForm = function(){
          $(".alert").addClass("hidden");
          $('#parentForm').find("input, textarea").val("");
          $('#submitParButton').show();
        };

        $scope.formsubmit = function(isValid) {
            if (isValid) {
              console.log($scope.parental);
              // console.log({"parentName": $scope.parentName, "parentSurname": $scope.parentSurname, "contactNumber": $scope.contactNumber, "email": $scope.email, "studentName": $scope.studentName, "studentSurname": $scope.studentSurname, "gradeRadio": $scope.gradeRadio});
                $http.post($scope.url, {"parental": $scope.parental, "contactNumber": $scope.contactNumber, "email": $scope.email, "gradeRadio": $scope.gradeRadio}).
                    success(function(data, status) {
                            $scope.status = status;
                            $scope.data = data;
                            console.log(data);
                            $scope.result = "Thank you for your interest, we have sent you an email as confirmation that your enquiry has been sent and will respond soon. Data sent:"+data; // Show result from server in our <pre></pre> element
                        });
                    $scope.parentForm.$setPristine();
                    $scope.parentForm.$valid = false;
                  $(".alert").removeClass("hidden");

            }else{
                  alert('Form is not valid');
            }
        }
    }]);

app.controller("contactFormCtrl", ['$scope', '$http', function($scope, $http) {
        
         $scope.url = 'mail/contact-pos.php';
        
        $scope.clearForm = function(){
          $(".alert").addClass("hidden");
          $('#contactForm').find("input, textarea").val("");
          $('#submitFormButton').show();
        };

        $scope.formsubmit = function(isValid) {
            if (isValid) {
              // console.log({"parentName": $scope.parentName, "parentSurname": $scope.parentSurname, "contactNumber": $scope.contactNumber, "email": $scope.email, "studentName": $scope.studentName, "studentSurname": $scope.studentSurname, "gradeRadio": $scope.gradeRadio});
                $http.post($scope.url, {"user": $scope.user, "contactNumber": $scope.contactNumber, "email": $scope.email, "message": $scope.message}).
                    success(function(data, status) {
                            $scope.status = status;
                            $scope.data = data;
                            console.log(data);
                            $scope.result = "Thank you for your interest, we have sent you an email as confirmation that your enquiry has been sent and will respond soon. Data sent:"+data; // Show result from server in our <pre></pre> element
                        });
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$valid = false;
                  $(".alert").removeClass("hidden");

            }else{
                  alert('Form is not valid');
            }
        }
    }]);

jQuery(document).bind('keyup', function(e) {

  if (e.keyCode==39) {
      angular.element('a.carousel-control.right').triggerHandler('click');
  }   

  else if(e.keyCode==37){
      angular.element('a.carousel-control.left').triggerHandler('click');
  }

});

$("#jukebox").bind("ended", function(){
           return;
});