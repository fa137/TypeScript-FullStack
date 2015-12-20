import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('skeleton'));

  beforeEach(inject(($controller: angular.IControllerService) => {
    mainController = $controller('MainController');
  }));

  it('should have a app name', () => {
    expect(mainController.app).toContain("Skeleton App");
  });
});
