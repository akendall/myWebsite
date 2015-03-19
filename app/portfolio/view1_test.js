'use strict';

describe('myApp.portfolio module', function() {

  beforeEach(module('myApp.portfolio'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var portfolioCtrl = $controller('PortfolioCtrl');
      expect(portfolioCtrl).toBeDefined();
    }));

  });
});
