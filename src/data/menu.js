export default [
    {
        id: 1,
        title: '菜单1 ',
        children: [
            {
                id: 11,
                title: '菜单1-1'
            },
            {
                id: 12,
                title: "菜单1-2",
                children: [
                    {
                        id: 121,
                        title: '菜单1-2-1'
                    },
                    {
                        id: 122,
                        title: '菜单1-2-2',
                        children: [
                            {
                                id: 1221,
                                title: '菜单1-2-1-1',
                                children: [
                                    {
                                        id: 12211,
                                        title: '菜单1-2-1-1-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 13,
                title: "菜单1-3"
            }
        ]
    },
    {
        id: 2,
        title: '菜单2',
        children: [
            {
                id: 21,
                title: '菜单2-1'
            }
        ]
    },
    {
        id: 3,
        title: '菜单3',
        children: [
            {
                id: 31,
                title: '菜单3-1'
            },
            {
                id: 32,
                title: '菜单3-2'
            },
            {
                id: 33,
                title: '菜单3-3',
                children: [
                    {
                        id: 331,
                        title: '菜单3-3-1'
                    },
                    {
                        id: 332,
                        title: '菜单3-3-2'
                    },
                    {
                        id: 333,
                        title: '菜单3--3-3'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: '菜单4',
    }
]