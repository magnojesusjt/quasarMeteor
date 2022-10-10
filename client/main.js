
//quasar framework is based on vuejs
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

import AppLayout from '/imports/ui/AppLayout.vue';


import Quasar from 'quasar';




//App start
Meteor.startup(() => {
    createApp(AppLayout)

});

