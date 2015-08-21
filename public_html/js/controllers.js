/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var testentry = 
        [   
            {position:'1',type:'text',width:'100%',height:'5%',bgcolor:'#222222',textcolor:'#ffffff',content:'Test text'},
            {position:'2',type:'empty',width:'30%',height:'30%',bgcolor:'#addadd',textcolor:'',content:''},
            {position:'3',type:'text',width:'25%',height:'25%',bgcolor:'#bbbbbb',textcolor:'',content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
        ];

cmsApp.controller('cmsMain', ['$scope', '$sce', 'blocks', function ($scope, $sce, blocks) {
        
    test = blocks.getHtml(testentry);
    //alert(test);
    $scope.content = $sce.trustAsHtml(test);
}]);
