const barrels: string[] = [
  'app',
  /** @cli-barrel */
];

function createPackageConfig(barrels: string[]): any {
  return barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels)),
  map:{
    'jquery': 'vendor/jquery/dist/jquery.js',
    'toastr': 'vendor/toastr/toastr.js'
  }
};