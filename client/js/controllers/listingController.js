angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;
    $scope.display = {show:0};

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */

        var temp = $scope.addEntry;
        Listings.create(temp);

        if($scope.addEntry.code != 'test') {
            $scope.addEntry.successful = "Hooray! Successfully added " + $scope.addEntry.name;
        }

        Listings.getAll().then(function(response) {
            $scope.listings = response.data;
        }, function(error) {
            console.log('Unable to retrieve listings:', error);
        });

        $scope.listings.push(temp);
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
        if($scope.listings.indexOf(id) > 0)
        {
            alert("Deleting " + id.name);
            Listings.delete(id._id);
            $scope.listings.splice($scope.listings.indexOf(id),1);
        }
        Listings.getAll().then(function(response) {
            $scope.listings = response.data;
        }, function(error) {
            console.log('Unable to retrieve listings:', error);
        });
        $scope.display = {show:0};

    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);