export class AboutController {
  public loremIpsum: string;

  /* @ngInject */
  constructor ($http: angular.IHttpService) {
      let vm = this;
      $http.get('/api').then((response: any) => {
          vm.loremIpsum = response.data.api;
      });
  }

}
