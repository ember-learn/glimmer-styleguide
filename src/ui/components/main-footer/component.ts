import Component from '@glimmer/component';

export default class MainFooter extends Component {
    get currentYear() {
        return new Date().getUTCFullYear();
    }

    get assetPath() {
      // return '';
      return 'https://glimmer-styleguide.global.ssl.fastly.net/glimmer-styleguide/master';
    }
};
