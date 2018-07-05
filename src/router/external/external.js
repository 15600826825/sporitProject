const home = resolve => { require( [ '@/components/external/home/home.vue' ], resolve ) };
const login = resolve => { require( [ '@/components/external/entry/login/login.vue' ], resolve ) };
const register = resolve => { require( [ '@/components/external/entry/register/register.vue' ], resolve ) };
const evaluation = resolve => { require( [ '@/components/external/ability/evaluation/evaluation.vue' ], resolve ) };
const result = resolve => { require( [ '@/components/external/ability/result/result.vue' ], resolve ) };
const catalogue = resolve => { require( [ '@/components/external/course/catalogue/catalogue.vue' ], resolve ) };
const details = resolve => { require( [ '@/components/external/course/details/details.vue' ], resolve ) };
const problem = resolve => { require( [ '@/components/external/problem/problem.vue' ], resolve ) };
const career = resolve => { require( [ '@/components/external/order/career/career.vue' ], resolve ) };
const noservice = resolve => { require( [ '@/components/external/order/noservice/noservice.vue' ], resolve ) };
const service = resolve => { require( [ '@/components/external/order/service/service.vue' ], resolve ) };
const account = resolve => { require( [ '@/components/external/account/account.vue' ], resolve ) };
const detailspage = resolve => { require( [ '@/components/external/careerpath/detailspage/detailspage.vue' ], resolve ) };
const pathpage = resolve => { require( [ '@/components/external/careerpath/pathpage/pathpage.vue' ], resolve ) };
const about = resolve => { require( [ '@/components/external/about/about.vue' ], resolve ) };


export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/evaluation',
    name: 'evaluation',
    component: evaluation
  },
  {
    path: '/result',
    name: 'result',
    component: result
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: catalogue
  },
  {
    path: '/details',
    name: 'details',
    component: details
  },
  {
    path: '/problem',
    name: 'problem',
    component: problem
  },
  {
    path: '/career',
    name: 'career',
    component: career
  },
  {
    path: '/noservice',
    name: 'noservice',
    component: noservice
  },
  {
    path: '/service',
    name: 'service',
    component: service
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/detailspage',
    name: 'detailspage',
    component: detailspage
  },
  {
    path: '/pathpage',
    name: 'pathpage',
    component: pathpage
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/pathpage',
    name: 'pathpage',
    component: pathpage
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]