/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

cmsApp.factory('blocks', ['blockToHtml', function(blockToHtml) {
    
    var blocks = {};
    
    function comparePos(a,b) {
        if (a.position < b.position)
            return -1;
        if (a.position > b.position)
            return 1;
        return 0;
    }
    
    blocks.getHtml = function(testentry) {
        
        var readyBlock = "";
        
        testentry.sort(comparePos);
        
        angular.forEach(testentry, function(value) {
            readyBlock = readyBlock + blockToHtml.buildBlock(value);
        });

        return readyBlock;
    };

    return blocks;
}]);

cmsApp.factory('blockToHtml', function() {
    
    var blockToHtml = {}; 
    
    
    blockToHtml.buildBlock = function(entry) {
    
        var leadConst = '<div class="block" style="width:'+entry.width+'; height:'+entry.height+'; background-color:'+entry.bgcolor+'; color:'+entry.textcolor+';">';
        var endConst = '</div>';
        var returnBlock = "";
        
        switch(entry.type) {
            case "text":
                returnBlock = leadConst + entry.content + endConst;
            break;
            
            case "empty":
                returnBlock = leadConst + endConst;
            break;
            
            case "menu":
                //
            break;
            
            default:
                //
        }
        return returnBlock;
    };
    return blockToHtml;
});

cmsApp.service('blockFileRead', function() {
    
    var blockFile = {};


    return blockFile;
});