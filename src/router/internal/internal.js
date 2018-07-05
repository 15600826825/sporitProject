const coursecenter = resolve => { require( [ '@/components/internal/firstlevel/coursecenter/coursecenter.vue' ], resolve ) };
const mypath = resolve => { require( [ '@/components/internal/firstlevel/mypath/mypath.vue' ], resolve ) };
const secondlevel = resolve => { require( [ '@/components/internal/secondlevel/secondlevel.vue' ], resolve ) };
const setpage = resolve => { require( [ '@/components/internal/setpage/setpage.vue' ], resolve ) };

export default [
    {
      path: '/coursecenter',
      name: 'coursecenter',
      component: coursecenter
    },
    {
        path: '/mypath',
        name: 'mypath',
        component: mypath
    },
    {
        path: '/secondlevel',
        name: 'secondlevel',
        component: secondlevel
    },
    {
        path: '/setpage',
        name: 'setpage',
        component: setpage
    }
    
]