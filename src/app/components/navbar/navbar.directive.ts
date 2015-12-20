/** @ngInject */
export function aetNav(): angular.IDirective {
  return {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    replace: true
  };
}
