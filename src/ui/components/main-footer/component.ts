import Component from '@glimmer/component';
// import ENV from '../../../../config/environment';

export default class MainFooter extends Component {
    get currentYear() {
        return new Date().getUTCFullYear();
    }

    get assetPath() {
        // return ENV.assetPath;
        return 'https://glimmer-styleguide.global.ssl.fastly.net/glimmer-styleguide/master';
    }
};
