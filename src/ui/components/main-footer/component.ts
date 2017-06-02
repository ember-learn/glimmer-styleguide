import Component from '@glimmer/component';

export default class MainFooter extends Component {
    get currentYear() {
        return new Date().getUTCFullYear();
    }
};
